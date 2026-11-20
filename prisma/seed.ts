// prisma/seed.ts
//
// Seed order: Images -> Users -> Quizzes (spread randomly across users)
//             -> Questions (random subset per quiz, matched by category + difficulty)
//
// Run with:  npx prisma db seed
// Safe to re-run: images/users/quizzes are upserted, a quiz's questions are replaced.

import "dotenv/config";
import bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";

// ── Adjust these paths if your folders are different ────────────────────────
import { Prisma, PrismaClient } from "../lib/db/generated/prisma/client";
import type {
  QuestionType,
  QuizDifficulty,
} from "../lib/db/generated/prisma/enums";
import { SEED_IMAGES } from "../lib/data/seed-images";
import { SEED_USERS } from "../lib/data/seed-users";
import { SEED_QUIZZES } from "../lib/data/seed-quizzes";
import { SEED_QUESIONS } from "../lib/data/seed-questions/question";
import { generateQuizMetrics } from "../lib/data/quiz-metrics";
import prisma from "@/lib/db/prisma";
// ────────────────────────────────────────────────────────────────────────────

const CONFIG = {
  // Same seed = same user/quiz/question picks on every run.
  randomSeed: 20260101,
  // Every user gets at least this many quizzes; the rest are distributed randomly.
  minQuizzesPerUser: 2,
  // Each quiz gets a random number of questions in this range (capped by what exists).
  questionsPerQuiz: { min: 5, max: 7 },
  // 1 = every question gets its category image, 0.5 = about half of them.
  questionImageChance: 1,
  bcryptRounds: 10,
};


// ── Seeded random helpers ───────────────────────────────────────────────────

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(CONFIG.randomSeed);
const randInt = (min: number, max: number) =>
  Math.floor(rand() * (max - min + 1)) + min;

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const toJson = (value: unknown) =>
  JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;

// ── Question pool ───────────────────────────────────────────────────────────

type SeedQuestion = {
  title: string;
  explanation?: string;
  difficulty?: string;
  points: number;
  timeLimitSeconds: number;
  content: unknown;
};

type PoolQuestion = SeedQuestion & {
  type: QuestionType;
  level: string;
};

/** All questions of every type that belong to a category. */
function questionsForCategory(category: string): PoolQuestion[] {
  const pool: PoolQuestion[] = [];

  for (const [type, byCategory] of Object.entries(SEED_QUESIONS)) {
    const list =
      (byCategory as unknown as Record<string, SeedQuestion[]>)[category] ?? [];

    for (const q of list) {
      pool.push({
        ...q,
        type: type as QuestionType,
        // SINGLE_SELECT has no difficulty field: 1 point = easy, 2 points = harder
        level: q.difficulty ?? (q.points > 1 ? "ADVANCED" : "BEGINNER"),
      });
    }
  }

  return pool;
}

// ── Editor state ────────────────────────────────────────────────────────────
// Quiz.editorState is a required Json column. Change this function to match
// whatever shape your quiz editor expects.

function buildEditorState(
  quiz: { title: string; description: string },
  questions: PoolQuestion[],
) {
  return {
    title: quiz.title,
    description: quiz.description,
    questions: questions.map((q, index) => ({
      order: index + 1,
      type: q.type,
      title: q.title,
      points: q.points,
      timeLimitSeconds: q.timeLimitSeconds,
      content: q.content,
    })),
  };
}

// ── Seed steps ──────────────────────────────────────────────────────────────

async function seedImages() {
  const imageIds = new Map<string, string>();

  for (const [key, img] of Object.entries(SEED_IMAGES)) {
    const data = {
      url: img.url,
      caption: img.caption,
      alt: img.alt,
      ratio: img.ratio,
    };

    const row = await prisma.image.upsert({
      where: { key },
      update: data,
      create: { key, ...data },
    });

    imageIds.set(key, row.id);
  }

  console.log(`Images:  ${imageIds.size}`);
  return imageIds;
}

async function seedUsers(imageIds: Map<string, string>) {
  const userIds: string[] = [];

  for (const u of SEED_USERS) {
    const imageId = imageIds.get(u.imageKey);
    if (!imageId) {
      throw new Error(`Image "${u.imageKey}" not found for user ${u.key}`);
    }

    // Only some seed users have a password in your data.
    const password =
      "password" in u ? await bcrypt.hash(u.password, CONFIG.bcryptRounds) : null;

    const data = {
      name: u.name,
      username: u.username,
      bio: u.bio,
      imageId,
      password,
      emailVerified: u.createdAt,
    };

    const row = await prisma.user.upsert({
      where: { email: u.email },
      update: data,
      create: { email: u.email, createdAt: u.createdAt, ...data },
    });

    userIds.push(row.id);
  }

  console.log(`Users:   ${userIds.length}`);
  return userIds;
}

async function seedQuizzesAndQuestions(
  userIds: string[],
  imageIds: Map<string, string>,
) {
  const allQuizzes = Object.entries(SEED_QUIZZES).flatMap(([category, list]) =>
    list.map((quiz) => ({ ...quiz, category })),
  );

  // Give each user a minimum number of quizzes, spread the rest randomly,
  // then shuffle so the owners are mixed across categories.
  const guaranteed = userIds.flatMap((id) =>
    Array<string>(CONFIG.minQuizzesPerUser).fill(id),
  );
  const extra = Array.from(
    { length: Math.max(0, allQuizzes.length - guaranteed.length) },
    () => userIds[randInt(0, userIds.length - 1)],
  );
  const owners = shuffle([...guaranteed, ...extra]);

  const quizzesPerUser = new Map<string, number>();
  let questionTotal = 0;

  for (const [index, quiz] of allQuizzes.entries()) {
    const ownerId = owners[index];
    const categoryImageId = imageIds.get(quiz.category);
    if (!categoryImageId) {
      throw new Error(`No image for category "${quiz.category}"`);
    }

    // Questions from the same category, matched to the quiz difficulty
    const categoryPool = questionsForCategory(quiz.category);
    const matching = categoryPool.filter((q) => q.level === quiz.difficulty);
    const pool = matching.length >= CONFIG.questionsPerQuiz.min
      ? matching
      : categoryPool;

    const count = Math.min(
      pool.length,
      randInt(CONFIG.questionsPerQuiz.min, CONFIG.questionsPerQuiz.max),
    );
    const chosen = shuffle(pool).slice(0, count);

    const metrics = generateQuizMetrics();

    const questionRows = chosen.map((q, i) => ({
      type: q.type,
      title: q.title,
      explanation: q.explanation ?? null,
      points: q.points,
      timeLimitSeconds: q.timeLimitSeconds,
      order: i + 1,
      imageId: rand() < CONFIG.questionImageChance ? categoryImageId : null,
      content: toJson(q.content),
      createdAt: metrics.publishedAt,
    }));

    const totalPoints = chosen.reduce((sum, q) => sum + q.points, 0);
    const durationSeconds = chosen.reduce((sum, q) => sum + q.timeLimitSeconds, 0);

    const quizData = {
      title: quiz.title,
      description: quiz.description,
      imageId: categoryImageId,
      language: "en",
      category: quiz.category,
      tags: quiz.tags,
      difficulty: quiz.difficulty as QuizDifficulty,
      estimatedDurationSeconds: durationSeconds,
      ownerId,
      visibility: "PUBLIC" as const,
      preferredVisibility: "PUBLIC" as const,
      editorState: toJson(buildEditorState(quiz, chosen)),
      questionCount: chosen.length,
      totalPoints,
      ...metrics,
      createdAt: metrics.publishedAt,
    };

    await prisma.$transaction(async (tx) => {
      const saved = await tx.quiz.upsert({
        where: { slug: quiz.slug },
        update: quizData,
        create: { slug: quiz.slug, ...quizData },
      });

      // Replace the questions so re-running never duplicates them
      await tx.question.deleteMany({ where: { quizId: saved.id } });
      await tx.question.createMany({
        data: questionRows.map((row) => ({ ...row, quizId: saved.id })),
      });
    });

    quizzesPerUser.set(ownerId, (quizzesPerUser.get(ownerId) ?? 0) + 1);
    questionTotal += chosen.length;
  }

  console.log(`Quizzes: ${allQuizzes.length}`);
  console.log(`Questions: ${questionTotal}`);
  console.log("Quizzes per user:");
  for (const [i, id] of userIds.entries()) {
    console.log(`  user-${i + 1}: ${quizzesPerUser.get(id) ?? 0}`);
  }
}

async function main() {
  const imageIds = await seedImages();
  const userIds = await seedUsers(imageIds);
  await seedQuizzesAndQuestions(userIds, imageIds);
  console.log("Seeding finished.");
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
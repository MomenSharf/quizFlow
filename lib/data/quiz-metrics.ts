import { random, randomDate } from "../utils/random";

type QuizMetrics = {
  playCount: number;
  viewCount: number;
  completionCount: number;
  likeCount: number;
  trendingScore: number;
  isFeatured: boolean;
  featuredAt: Date | null;
  lastPlayedAt: Date | null;
  publishedAt: Date;
};


export function generateQuizMetrics(): QuizMetrics {
  const now = new Date();

  const publishedAt = randomDate(
    new Date(now.getTime() - 365 * 86_400_000),
    now,
  );

  const ageInDays = Math.max(
    1,
    (now.getTime() - publishedAt.getTime()) / 86_400_000,
  );

  const popularity = Math.random();

  let dailyViews: number;

  if (popularity < 0.55) {
    dailyViews = random(1, 8);
  } else if (popularity < 0.85) {
    dailyViews = random(8, 30);
  } else if (popularity < 0.97) {
    dailyViews = random(30, 100);
  } else {
    dailyViews = random(100, 250);
  }

  const viewCount = Math.round(
    dailyViews * ageInDays * random(0.5, 1.5),
  );

  const playCount = Math.round(
    viewCount * random(0.08, 0.30),
  );

  const completionCount = Math.round(
    playCount * random(0.50, 0.85),
  );

  const likeCount = Math.round(
    playCount * random(0.03, 0.15),
  );

  const lastPlayedAt = randomDate(publishedAt, now);

  const isFeatured = Math.random() < 0.05;

  const featuredAt = isFeatured
    ? randomDate(publishedAt, now)
    : null;

  const engagement =
    playCount * 0.3 +
    completionCount * 0.5 +
    likeCount * 2;

  const freshness = Math.exp(
    -((now.getTime() - lastPlayedAt.getTime()) /
      86_400_000) / 14,
  );

  const trendingScore = Number(
    Math.min(
      100,
      Math.log1p(engagement) * 8 * (0.3 + freshness),
    ).toFixed(2),
  );

  return {
    playCount,
    viewCount,
    completionCount,
    likeCount,
    trendingScore,
    isFeatured,
    featuredAt,
    lastPlayedAt,
    publishedAt,
  };
}

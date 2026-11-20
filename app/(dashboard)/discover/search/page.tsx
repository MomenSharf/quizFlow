import { searchDiscoverQuizzes } from "@/features/discover/actions/get-search-quizzes";
import QuizSearchPage from "@/features/discover/components/search/quiz-search-page";
import { QuizDifficulty } from "@/lib/db/generated/prisma/enums";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    difficulty?: string;
    language?: string;
    tags?: string | string[];
    cursor?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  const result = await searchDiscoverQuizzes({
    search: params.q,
    category: params.category,
    difficulty: params.difficulty as QuizDifficulty | undefined,
    language: params.language,
    tags: params.tags
      ? Array.isArray(params.tags)
        ? params.tags
        : [params.tags]
      : undefined,
    cursor: params.cursor,
  });

  return <QuizSearchPage quizzes={result.error ? [] : result.data} />;
}
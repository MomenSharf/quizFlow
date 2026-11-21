import { IconBook2 } from "@tabler/icons-react";
import { notFound } from "next/navigation";

import { ProfileCard } from "@/components/profile/profile-card";
import { QuizSearchResults } from "@/features/discover/components/search/quiz-search-results";
import { getProfile } from "@/lib/actions/user";
import { QuizListCard } from "@/features/discover/components/quiz-list-card";

type PageProps = {
  params: Promise<{ username: string }>;
};

export default async function Page({ params }: PageProps) {
  const { username } = await params;

  if (!username) {
    notFound();
  }

  const result = await getProfile(username);

  if (result.error) {
    notFound();
  }

  const { quizzes, ...profile } = result.data;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 md:px-6 md:py-8">
      <ProfileCard profile={profile} quizzesCount={quizzes.length} />

      {quizzes && (
        <section className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">
                Created quizzes
              </h2>
              <p className="text-sm text-muted-foreground">
                Explore quizzes created by @{profile.username}.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
              <IconBook2 className="size-4" />
              <span>{quizzes.length}</span>
            </div>
          </div>

          <div className="space-y-3">
            {quizzes.map((quiz) => (
              <QuizListCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

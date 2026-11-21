import { auth } from "@/features/auth/lib/auth-options";
import { HomePage } from "@/components/marketing/home-page";
import { getDiscoverQuizzes } from "@/features/discover/actions/get-discover-quizzes";

export default async function Home() {
  const session = await auth();

  const result = await getDiscoverQuizzes([
    "POPULAR",
    "TRENDING",
    "FEATURED",
  ]);

  return <HomePage isAuthenticated={!!session?.user} sections={result.error ? [] : result.data} />;
}

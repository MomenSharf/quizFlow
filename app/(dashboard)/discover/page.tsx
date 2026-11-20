import { getDiscoverQuizzes } from "@/features/discover/actions/get-discover-quizzes";
import { CategorySlider } from "@/features/discover/components/category-slider";
import { DiscoverHero } from "@/features/discover/components/discover-hero";
import { DiscoverSections } from "@/features/discover/components/discover-sections";

export default async function DiscoverPage() {
  const result = await getDiscoverQuizzes([
    "POPULAR",
    "TRENDING",
    "MOST_COMPLETED",
    "FEATURED",
  ]);


  return (
    <main className="mx-auto w-full min-w-0 max-w-[1600px] space-y-8 overflow-x-hidden px-4 py-6 sm:px-6 lg:px-8">
      <DiscoverHero />

      <CategorySlider />

      <DiscoverSections sections={result.error ? [] : result.data} />
    </main>
  );
}
import { HeroSection } from "@/components/shared/hero-section";

export function DiscoverHero() {
  return (
    <HeroSection
      badge="Discover something new"
      title="Explore more."
      highlightedTitle="Learn something new."
      description="Discover interesting quizzes, explore new topics, and challenge yourself with something different every day."
      image={{
        src: "/assets/images/discovery-hero.png",
        alt: "Explore and discover new quizzes",
      }}
      search={{
        action: "/discover/search",
        name: "q",
        placeholder: "Search quizzes by title, topic, or subject...",
        buttonLabel: "Search",
      }}
    />
  );
}
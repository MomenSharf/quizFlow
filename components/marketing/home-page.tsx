import { Footer } from "@/components/layout/footer";
import { PaltformFeatures } from "./platforn-features";
import { PlatfromStats } from "./platforn-stats";
import { Reveal } from "./reveal";
import { HeroSection } from "../shared/hero-section";
import {
  DiscoverPageSectionData,
  DiscoverSections,
} from "@/features/discover/components/discover-sections";

type MarketingPageProps = {
  isAuthenticated: boolean;
  sections: DiscoverPageSectionData[];
};

export function HomePage({ isAuthenticated, sections }: MarketingPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      {isAuthenticated ? (
        <HeroSection
          badge="Welcome back!"
          title="Ready for your"
          highlightedTitle="next challenge?"
          description="Discover new quizzes, challenge yourself, and keep learning every day."
          image={{
            src: "/assets/images/quizora-hero.png",
            alt: "Quiz learning illustration",
          }}
          search={{
            action: "/discover",
            placeholder: "Search quizzes by title, topic, or subject...",
            buttonLabel: "Search",
          }}
        />
      ) : (
        <HeroSection
          badge="Learn · Play · Grow"
          title="Turn curiosity into a"
          highlightedTitle="challenge."
          description="Create interactive quizzes, challenge yourself, and make every question count. Learning has never been this fun."
          image={{
            src: "/assets/images/quizora-hero.png",
            alt: "Interactive quiz illustration",
          }}
          actions={[
            {
              label: "Get Started Free",
              href: "/signup",
              icon: true,
            },
            {
              label: "Discover Quizzes",
              href: "/discover",
              variant: "outline",
            },
          ]}
        />
      )}

      <Reveal>
        <PlatfromStats />
      </Reveal>

      <Reveal delay={0.1}>
        <PaltformFeatures />
      </Reveal>

      <DiscoverSections sections={sections} />

      <Reveal delay={0.1} y={12}>
        <Footer />
      </Reveal>
    </main>
  );
}

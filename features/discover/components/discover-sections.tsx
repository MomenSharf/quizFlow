import { Reveal } from "@/components/marketing/reveal";
import { DiscoverQuiz } from "../constants/discover.select";
import { DiscoverSort } from "../types/discover.types";
import { DISCOVER_SORT_SECTIONS } from "./constants/discover-sections";
import { DiscoverQuizSlider } from "./discover-quiz-slider";
export type DiscoverPageSectionData = {
  sort: DiscoverSort;
  quizzes: DiscoverQuiz[];
};
export function DiscoverSections({
  sections,
}: {
  sections: DiscoverPageSectionData[];
}) {
  return (
    <div className="space-y-8">
      {sections.map((section) => {
        const props = DISCOVER_SORT_SECTIONS.find(
          (e) => e.sort === section.sort,
        );
        if (!props) return null;
        return (
          <Reveal key={section.sort} delay={0.1} y={12}>
            <DiscoverQuizSlider {...props} quizzes={section.quizzes} />
          </Reveal>
        );
      })}
    </div>
  );
}

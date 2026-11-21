"use client";

import type { RuntimeQuestion } from "../../types/runtime-types";
import ChoiceContent from "./question-content/choice-content";
import FillBlankContent from "./question-content/fill-in-the-blanks";
import MatchContent from "./question-content/match-content";
import MultipleSelectContent from "./question-content/multiple-select";
import OrderingContent from "./question-content/ordering-content";
import SingleSelectContent from "./question-content/single-select";
import TrueFalseContent from "./question-content/true-false";
import TypeAnswerContent from "./question-content/type-answer";

export type QuestionContentRouterProps = {
  runtimeQuestion: RuntimeQuestion;
  isLocked: boolean;
  isSubmitted: boolean;
  isTimeout: boolean;
  shouldAnimateFeedback: boolean;
};

export default function QuestionContentRouter(
  props: QuestionContentRouterProps,
) {
  switch (props.runtimeQuestion.question.type) {
    case "SINGLE_SELECT":
    case "MULTIPLE_SELECT":
    case "TRUE_FALSE":
      return <ChoiceContent {...props} />;
    case "ORDERING":
      return <OrderingContent {...props} />;
    case "MATCH":
      return <MatchContent {...props} />
    case "TYPE_ANSWER":
      return <TypeAnswerContent {...props} />
    case "FILL_BLANK":
      return <FillBlankContent {...props} />
    case "FLASHCARD":
    case "RANGE":
    case "GUESS":
    case "TAP_FIND":


    default:
      return null;
  }
}

import { EvaluationResult } from "@/features/quiz-runtime/types/evaluation-types";
import { RuntimeQuestion } from "@/features/quiz-runtime/types/runtime-types";
import { matchesAcceptedAnswer } from "@/features/quiz-runtime/utils/type-answer";

export function evaluateQuestion(
  runtimeQuestion: RuntimeQuestion,
): EvaluationResult {
  const { question, answer } = runtimeQuestion;

  const maxPoints = question?.points ?? 0;

  let isCorrect: boolean | null = false;
  let outcome: EvaluationResult["outcome"] = "INCORRECT";
  let status: EvaluationResult["status"] = "EVALUATED";
  let feedback: string | null = null;
  let earnedPoints = 0;

  switch (question.type) {
    case "SINGLE_SELECT": {
      if (!answer || answer.type !== "SINGLE_SELECT") {
        outcome = "UNANSWERED";
        feedback = "No answer submitted.";
        break;
      }

      const correctOptionId = question.content.correctOptionId;

      isCorrect = answer.optionId === correctOptionId;

      earnedPoints = isCorrect ? maxPoints : 0;
      outcome = isCorrect ? "CORRECT" : "INCORRECT";
      feedback =
        runtimeQuestion.evaluation?.feedback ??
        (isCorrect
          ? "Excellent! You got the correct answer."
          : "Not quite! Keep practicing and try again.");

      break;
    }

    case "MULTIPLE_SELECT": {
      if (
        !answer ||
        answer.type !== "MULTIPLE_SELECT" ||
        answer.optionIds.length === 0
      ) {
        outcome = "UNANSWERED";
        feedback = "No answer submitted.";
        break;
      }

      const correctOptionIds = question.content.correctOptionIds;

      const correctIds = new Set(correctOptionIds);
      const selectedIds = new Set(answer.optionIds);

      const correctSelections = [...selectedIds].filter((id) =>
        correctIds.has(id),
      ).length;

      const incorrectSelections = [...selectedIds].filter(
        (id) => !correctIds.has(id),
      ).length;

      const score = Math.max(0, correctSelections - incorrectSelections);

      earnedPoints = Math.round((score / correctIds.size) * maxPoints);

      isCorrect =
        correctSelections === correctIds.size && incorrectSelections === 0;

      outcome = isCorrect
        ? "CORRECT"
        : earnedPoints > 0
          ? "PARTIALLY_CORRECT"
          : "INCORRECT";

      feedback =
        runtimeQuestion.evaluation?.feedback ??
        (isCorrect
          ? "Excellent! You selected all the correct answers."
          : earnedPoints > 0
            ? "Good effort! You got some of the answers correct."
            : "Not quite! Keep practicing and try again.");

      break;
    }

    case "TRUE_FALSE": {
      if (!answer || answer.type !== "TRUE_FALSE") {
        outcome = "UNANSWERED";
        feedback = "No answer submitted.";
        break;
      }

      isCorrect = answer.value === question.content.correctAnswer;

      earnedPoints = isCorrect ? maxPoints : 0;

      outcome = isCorrect ? "CORRECT" : "INCORRECT";

      feedback =
        runtimeQuestion.evaluation?.feedback ??
        (isCorrect
          ? "Correct! Well done."
          : "Not quite! Keep practicing and try again.");

      break;
    }

    case "ORDERING": {
      if (
        !answer ||
        answer.type !== "ORDERING" ||
        answer.orderedOptionIds.length === 0
      ) {
        outcome = "UNANSWERED";
        feedback = "No answer submitted.";
        break;
      }

      // options array order === correct order
      const correctOrder = question.content.options.map((option) => option.id);

      const correctPositions = correctOrder.filter(
        (id, index) => answer.orderedOptionIds[index] === id,
      ).length;

      isCorrect =
        answer.orderedOptionIds.length === correctOrder.length &&
        correctPositions === correctOrder.length;

      earnedPoints = Math.round(
        (correctPositions / correctOrder.length) * maxPoints,
      );

      outcome = isCorrect
        ? "CORRECT"
        : earnedPoints > 0
          ? "PARTIALLY_CORRECT"
          : "INCORRECT";

      feedback =
        runtimeQuestion.evaluation?.feedback ??
        (isCorrect
          ? "Excellent! You put everything in the right order."
          : earnedPoints > 0
            ? "Good effort! Some items are in the right place."
            : "Not quite! Keep practicing and try again.");

      break;
    }

    case "MATCH": {
      if (!answer || answer.type !== "MATCH" || answer.selections.length === 0) {
        outcome = "UNANSWERED";
        feedback = "No answer submitted.";
        break;
      }

      const pairs = question.content.pairs;

      // a pair is correct when its left item is matched to its own right item
      const correctCount = pairs.filter((pair) =>
        answer.selections.some(
          (m) => m.leftId === pair.id && m.rightId === pair.id,
        ),
      ).length;

      isCorrect = correctCount === pairs.length;

      earnedPoints = Math.round((correctCount / pairs.length) * maxPoints);

      outcome = isCorrect
        ? "CORRECT"
        : earnedPoints > 0
          ? "PARTIALLY_CORRECT"
          : "INCORRECT";

      feedback =
        runtimeQuestion.evaluation?.feedback ??
        (isCorrect
          ? "Excellent! You matched every pair correctly."
          : earnedPoints > 0
            ? "Good effort! Some of your pairs are correct."
            : "Not quite! Keep practicing and try again.");

      break;
    }

    case "TYPE_ANSWER": {
  if (
    !answer ||
    answer.type !== "TYPE_ANSWER" ||
    answer.value.trim().length === 0
  ) {
    outcome = "UNANSWERED";
    feedback = "No answer submitted.";
    break;
  }

  isCorrect = matchesAcceptedAnswer(answer.value, question.content.answers);

  earnedPoints = isCorrect ? maxPoints : 0;

  outcome = isCorrect ? "CORRECT" : "INCORRECT";

  feedback =
    runtimeQuestion.evaluation?.feedback ??
    (isCorrect
      ? "Correct! Well done."
      : "Not quite! Keep practicing and try again.");

  break;
}
case "FILL_BLANK": {
  const entries = answer?.type === "FILL_BLANK" ? answer.entries : null;
  const blanks = question.content.blanks;

  const values = new Map(
    (entries ?? []).map((e) => [e.blankId, e.value]),
  );

  if (blanks.every((b) => !(values.get(b.id) ?? "").trim())) {
    outcome = "UNANSWERED";
    feedback = "No answer submitted.";
    break;
  }

  const correctCount = blanks.filter((blank) =>
    matchesAcceptedAnswer(values.get(blank.id) ?? "", blank.answers),
  ).length;

  isCorrect = correctCount === blanks.length;

  earnedPoints = Math.round((correctCount / blanks.length) * maxPoints);

  outcome = isCorrect
    ? "CORRECT"
    : earnedPoints > 0
      ? "PARTIALLY_CORRECT"
      : "INCORRECT";

  feedback =
    runtimeQuestion.evaluation?.feedback ??
    (isCorrect
      ? "Excellent! You filled in every blank correctly."
      : earnedPoints > 0
        ? "Good effort! Some of your blanks are correct."
        : "Not quite! Keep practicing and try again.");

  break;
}

    default: {
      status = "NOT_GRADED";
      outcome = "NOT_APPLICABLE";
      isCorrect = null;
      feedback = "Evaluation is not available for this question type.";
      break;
    }
  }

  const evaluation: EvaluationResult = {
    isCorrect,
    earnedPoints,
    maxPoints,
    status,
    outcome,
    accuracy: maxPoints > 0 ? (earnedPoints / maxPoints) * 100 : null,
    feedback,
    explanation: question.explanation ?? null,
    explanationImage: question.explanationImage ?? null,
  };

  return evaluation;
}

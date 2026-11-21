// Shared by the TYPE_ANSWER component and evaluateQuestion so both agree on
// what counts as correct. Suggested location:
// features/quiz-runtime/utils/type-answer.ts

type AcceptedAnswerLike = {
  value: string;
  caseSensitive?: boolean;
};

export function normalizeTypedAnswer(value: string, caseSensitive = false) {
  const cleaned = value.normalize("NFC").trim().replace(/\s+/g, " ");
  return caseSensitive ? cleaned : cleaned.toLowerCase();
}

export function matchesAcceptedAnswer(
  input: string,
  accepted: AcceptedAnswerLike[],
) {
  if (!input.trim()) return false;

  return accepted.some(
    (a) =>
      normalizeTypedAnswer(input, a.caseSensitive) ===
      normalizeTypedAnswer(a.value, a.caseSensitive),
  );
}
"use client";

import { useRuntimeActions } from "@/features/quiz-runtime/store";
import { matchesAcceptedAnswer } from "@/features/quiz-runtime/utils/type-answer";
import { cn } from "@/lib/utils";
import { IconCheck, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { ClockAlert } from "lucide-react";
import { QuestionContentRouterProps } from "../question-content-router";

type BlankState = "idle" | "filled" | "correct" | "incorrect" | "timeout";

function InlineBlank({
  number,
  value,
  placeholder,
  state,
  disabled,
  shouldAnimateFeedback,
  onChange,
}: {
  number: number;
  value: string;
  placeholder: string;
  state: BlankState;
  disabled: boolean;
  shouldAnimateFeedback: boolean;
  onChange: (text: string) => void;
}) {
  const correct = state === "correct";
  const incorrect = state === "incorrect";
  const timedOut = state === "timeout";
  const filled = state === "filled";

  const width = Math.min(Math.max(value.length, placeholder.length, 5) + 1, 40);

  return (
    <motion.span
      initial={false}
      animate={{
        x: incorrect && shouldAnimateFeedback ? [0, -5, 5, -3, 3, 0] : 0,
      }}
      transition={{ x: { duration: 0.35, ease: "easeOut" } }}
      className={cn(
        "group relative mx-1 inline-flex max-w-full items-center gap-2 rounded-xl border px-2 py-1 align-middle",
        "transition-colors duration-200",
        "focus-within:ring-2 focus-within:ring-primary/40",

        correct && "border-emerald-500/70 bg-emerald-500/10",

        incorrect && "border-destructive/70 bg-destructive/5",

        timedOut && "border-amber-500/70 bg-amber-500/10",

        filled && "border-primary bg-primary/5 ring-1 ring-primary/20",

        state === "idle" &&
          "border-border bg-card hover:border-primary/40 hover:bg-muted/40",
      )}
    >
      <motion.span
        initial={false}
        animate={{
          scale:
            (correct || incorrect || timedOut) && shouldAnimateFeedback
              ? [1, 1.18, 1]
              : 1,
        }}
        transition={{ duration: 0.35 }}
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold transition-colors",

          correct && "bg-emerald-500 text-white",

          incorrect && "bg-destructive text-white",

          timedOut && "bg-amber-500 text-white",

          filled && "bg-primary text-primary-foreground",

          state === "idle" &&
            "bg-muted text-muted-foreground group-hover:bg-primary/10",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {correct ? (
            <motion.span
              key="correct"
              initial={shouldAnimateFeedback ? { scale: 0, rotate: -45 } : false}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
            >
              <IconCheck size={14} stroke={2.5} />
            </motion.span>
          ) : incorrect ? (
            <motion.span
              key="incorrect"
              initial={shouldAnimateFeedback ? { scale: 0, rotate: 45 } : false}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
            >
              <IconX size={14} stroke={2.5} />
            </motion.span>
          ) : timedOut ? (
            <motion.span
              key="timeout"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <ClockAlert size={14} />
            </motion.span>
          ) : (
            <motion.span key="number">{number}</motion.span>
          )}
        </AnimatePresence>
      </motion.span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        readOnly={disabled}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        aria-label={`Blank ${number}`}
        aria-invalid={incorrect || undefined}
        style={{ width: `${width}ch` }}
        className={cn(
          "min-w-0 max-w-full bg-transparent text-sm font-medium outline-none",
          "placeholder:font-normal placeholder:text-muted-foreground/70",
          "disabled:cursor-not-allowed",
        )}
      />
    </motion.span>
  );
}

export default function FillBlankContent({
  runtimeQuestion,
  isLocked,
  isSubmitted,
  isTimeout,
  shouldAnimateFeedback,
}: QuestionContentRouterProps) {
  const { question, answer } = runtimeQuestion;
  const { setAnswer } = useRuntimeActions();

  if (question.type !== "FILL_BLANK") return null;

  const entries = answer?.type === "FILL_BLANK" ? answer.entries : [];

  // blankId -> typed text (change `e.value` here if your entry field is named differently)
  const values = new Map(entries.map((e) => [e.blankId, e.value]));

  const { blocks, blanks } = question.content;

  const blankById = new Map(blanks.map((b) => [b.id, b]));

  // blank number = its position in the text, not its position in `blanks`
  const blankOrder = blocks
    .filter((b) => b.type === "BLANK")
    .map((b) => b.blankId);

  const handleChange = (blankId: string, text: string) => {
    if (isLocked) return;

    const exists = entries.some((e) => e.blankId === blankId);

    const next = exists
      ? entries.map((e) => (e.blankId === blankId ? { ...e, value: text } : e))
      : [...entries, { blankId, value: text }];

    setAnswer(runtimeQuestion.id, {
      type: "FILL_BLANK",
      entries: next,
    });
  };

  const results = new Map(
    blanks.map((blank) => [
      blank.id,
      matchesAcceptedAnswer(values.get(blank.id) ?? "", blank.answers),
    ]),
  );

  const missed = blankOrder
    .map((blankId, index) => ({
      blankId,
      number: index + 1,
      blank: blankById.get(blankId),
    }))
    .filter(({ blankId }) => !results.get(blankId));

  return (
    <div className="grid gap-3">
      <div className="rounded-xl border border-border bg-card p-4 text-base leading-[2.75rem] sm:leading-[3rem]">
        {blocks.map((block) => {
          if (block.type === "TEXT") {
            return (
              <span key={block.id} className="whitespace-pre-wrap">
                {block.text}
              </span>
            );
          }

          const blank = blankById.get(block.blankId);
          if (!blank) return null;

          const value = values.get(blank.id) ?? "";
          const isCorrectBlank = results.get(blank.id) === true;

          const state: BlankState = isSubmitted
            ? isCorrectBlank
              ? "correct"
              : isTimeout
                ? "timeout"
                : "incorrect"
            : value.trim().length > 0
              ? "filled"
              : "idle";

          return (
            <InlineBlank
              key={block.id}
              number={blankOrder.indexOf(blank.id) + 1}
              value={value}
              placeholder={blank.placeholder}
              state={state}
              disabled={isLocked}
              shouldAnimateFeedback={shouldAnimateFeedback}
              onChange={(text) => handleChange(blank.id, text)}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {isSubmitted && missed.length > 0 && (
          <motion.div
            initial={shouldAnimateFeedback ? { opacity: 0, y: -4 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid gap-2 text-xs"
          >
            {missed.map(({ blankId, number, blank }) => {
              if (!blank) return null;

              const shown = blank.answers.slice(0, 3);
              const hidden = blank.answers.length - shown.length;

              return (
                <div
                  key={blankId}
                  className="flex flex-wrap items-center gap-2"
                >
                  <span className="font-medium text-muted-foreground">
                    Blank {number}:
                  </span>

                  {shown.map((accepted, index) => (
                    <span
                      key={`${accepted.value}-${index}`}
                      className="rounded-lg border border-emerald-500/70 bg-emerald-500/10 px-2 py-1 font-medium"
                    >
                      {accepted.value}
                    </span>
                  ))}

                  {hidden > 0 && (
                    <span className="text-muted-foreground">
                      +{hidden} more
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
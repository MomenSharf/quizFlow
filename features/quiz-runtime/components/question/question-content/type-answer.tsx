"use client";

import { useRuntimeActions } from "@/features/quiz-runtime/store";
import { matchesAcceptedAnswer } from "@/features/quiz-runtime/utils/type-answer";
import { cn } from "@/lib/utils";
import { IconCheck, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ClockAlert } from "lucide-react";
import { QuestionContentRouterProps } from "../question-content-router";

const MAX_SHOWN_ANSWERS = 3;

export default function TypeAnswerContent({
  runtimeQuestion,
  isLocked,
  isSubmitted,
  isTimeout,
  shouldAnimateFeedback,
}: QuestionContentRouterProps) {
  const { question, answer } = runtimeQuestion;
  const { setAnswer } = useRuntimeActions();

  if (question.type !== "TYPE_ANSWER") return null;

  const value = answer?.type === "TYPE_ANSWER" ? answer.value : "";

  const { answers, placeholder } = question.content;

  const hasValue = value.trim().length > 0;

  const correct =
    isSubmitted && matchesAcceptedAnswer(value, answers);
  const incorrect = isSubmitted && !isTimeout && !correct;
  const timedOut = isSubmitted && isTimeout && !correct;

  const handleChange = (value: string) => {
    if (isLocked) return;

    setAnswer(runtimeQuestion.id, {
      type: "TYPE_ANSWER",
      value,
    });
  };

  const shownAnswers = answers.slice(0, MAX_SHOWN_ANSWERS);
  const hiddenCount = answers.length - shownAnswers.length;

  return (
    <div className="grid gap-2.5">
      <motion.div
        initial={false}
        animate={{
          x: incorrect && shouldAnimateFeedback ? [0, -5, 5, -3, 3, 0] : 0,
        }}
        transition={{ x: { duration: 0.35, ease: "easeOut" } }}
        className={cn(
          "group relative flex min-h-14 items-center gap-3 overflow-hidden rounded-xl border p-3",
          "transition-colors duration-200",
          "focus-within:ring-2 focus-within:ring-primary/40",

          correct && "border-emerald-500/70 bg-emerald-500/10",

          incorrect && "border-destructive/70 bg-destructive/5",

          timedOut && "border-amber-500/70 bg-amber-500/10",

          !isSubmitted &&
            hasValue &&
            "border-primary bg-primary/5 ring-1 ring-primary/20",

          !isSubmitted &&
            !hasValue &&
            "border-border bg-card hover:border-primary/40 hover:bg-muted/40",
        )}
      >
        <AnimatePresence>
          {correct && (
            <motion.div
              initial={
                shouldAnimateFeedback ? { scaleX: 0, opacity: 0 } : false
              }
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 w-full origin-left bg-emerald-500/[0.04]"
            />
          )}
        </AnimatePresence>

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
            "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold transition-colors",

            correct && "bg-emerald-500 text-white",

            incorrect && "bg-destructive text-white",

            timedOut && "bg-amber-500 text-white",

            !isSubmitted && hasValue && "bg-primary text-primary-foreground",

            !isSubmitted &&
              !hasValue &&
              "bg-muted text-muted-foreground group-hover:bg-primary/10",
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {correct ? (
              <motion.span
                key="correct"
                initial={
                  shouldAnimateFeedback ? { scale: 0, rotate: -45 } : false
                }
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
              >
                <IconCheck size={17} stroke={2.5} />
              </motion.span>
            ) : incorrect ? (
              <motion.span
                key="incorrect"
                initial={
                  shouldAnimateFeedback ? { scale: 0, rotate: 45 } : false
                }
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
              >
                <IconX size={17} stroke={2.5} />
              </motion.span>
            ) : (
              <motion.span key="letter">Aa</motion.span>
            )}
          </AnimatePresence>
        </motion.span>

        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          disabled={isLocked}
          readOnly={isLocked}
          placeholder={placeholder || "Type your answer"}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-invalid={incorrect || undefined}
          className={cn(
            "relative z-10 min-w-0 flex-1 bg-transparent text-sm font-medium leading-relaxed outline-none",
            "placeholder:font-normal placeholder:text-muted-foreground/70",
            "disabled:cursor-not-allowed",
          )}
        />

        <AnimatePresence>
          {correct && (
            <motion.span
              initial={
                shouldAnimateFeedback
                  ? { scale: 0, opacity: 0, rotate: -30 }
                  : false
              }
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="relative z-10"
            >
              <CheckCircle2 className="size-5 text-emerald-600" />
            </motion.span>
          )}

          {timedOut && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10"
            >
              <ClockAlert className="size-5 text-amber-600" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isSubmitted && !correct && (
          <motion.div
            initial={shouldAnimateFeedback ? { opacity: 0, y: -4 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2 text-xs"
          >
            <span className="font-medium text-muted-foreground">
              {answers.length > 1 ? "Accepted answers:" : "Correct answer:"}
            </span>

            {shownAnswers.map((accepted, index) => (
              <span
                key={`${accepted.value}-${index}`}
                className="rounded-lg border border-emerald-500/70 bg-emerald-500/10 px-2 py-1 font-medium"
              >
                {accepted.value}
              </span>
            ))}

            {hiddenCount > 0 && (
              <span className="text-muted-foreground">+{hiddenCount} more</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useRuntimeActions } from "@/features/quiz-runtime/store";
import { cn } from "@/lib/utils";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { IconCheck, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ClockAlert, GripVertical } from "lucide-react";
import { useEffect, useMemo } from "react";
import { QuestionContentRouterProps } from "../question-content-router";

/* ---------- deterministic shuffle (stable per runtime question) ---------- */

function hashSeed(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleIds(ids: string[], seed: string) {
  const rand = mulberry32(hashSeed(seed));
  const result = [...ids];

  for (let attempt = 0; attempt < 5; attempt++) {
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    // never start already solved
    if (result.some((id, i) => id !== ids[i])) break;
  }

  return result;
}

/* ---------- sortable row ---------- */

type ItemState = "idle" | "correct" | "incorrect" | "timeout";

function SortableItem({
  id,
  index,
  text,
  disabled,
  isSubmitted,
  state,
  correctPosition,
  shouldAnimateFeedback,
}: {
  id: string;
  index: number;
  text: string;
  disabled: boolean;
  isSubmitted: boolean;
  state: ItemState;
  correctPosition: number;
  shouldAnimateFeedback: boolean;
}) {
  const { ref, handleRef, isDragging } = useSortable({
    id,
    index,
    disabled,
  });

  const correct = state === "correct";
  const incorrect = state === "incorrect";
  const timedOut = state === "timeout";

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{
        scale: isDragging ? 1.02 : 1,
        x: incorrect && shouldAnimateFeedback ? [0, -5, 5, -3, 3, 0] : 0,
        opacity: isSubmitted && !correct && !incorrect && !timedOut ? 0.55 : 1,
      }}
      transition={{
        scale: { type: "spring", stiffness: 350, damping: 24 },
        x: { duration: 0.35, ease: "easeOut" },
        opacity: { duration: 0.3 },
      }}
      className={cn(
        "group relative flex min-h-14 items-center gap-3 overflow-hidden rounded-xl border p-3 text-left",
        "transition-colors duration-200",

        correct && "border-emerald-500/70 bg-emerald-500/10",
        incorrect && "border-destructive/70 bg-destructive/5",
        timedOut && "border-amber-500/70 bg-amber-500/10",

        !isSubmitted &&
          "border-border bg-card hover:border-primary/40 hover:bg-muted/40",

        isDragging && "z-20 border-primary bg-primary/5 shadow-lg",

        isSubmitted && !correct && !incorrect && !timedOut && "border-border bg-card",
      )}
    >
      <AnimatePresence>
        {correct && (
          <motion.div
            initial={shouldAnimateFeedback ? { scaleX: 0, opacity: 0 } : false}
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

          !isSubmitted &&
            (isDragging
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10"),

          isSubmitted &&
            !correct &&
            !incorrect &&
            !timedOut &&
            "bg-muted text-muted-foreground",
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
              <IconCheck size={17} stroke={2.5} />
            </motion.span>
          ) : incorrect ? (
            <motion.span
              key="incorrect"
              initial={shouldAnimateFeedback ? { scale: 0, rotate: 45 } : false}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
            >
              <IconX size={17} stroke={2.5} />
            </motion.span>
          ) : (
            <motion.span key="number">{index + 1}</motion.span>
          )}
        </AnimatePresence>
      </motion.span>

      <span className="relative z-10 flex-1 text-sm font-medium leading-relaxed">
        {text}
      </span>

      <AnimatePresence mode="wait" initial={false}>
        {correct ? (
          <motion.span
            key="correct"
            initial={
              shouldAnimateFeedback ? { scale: 0, opacity: 0, rotate: -30 } : false
            }
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 350 }}
            className="relative z-10"
          >
            <CheckCircle2 className="size-5 text-emerald-600" />
          </motion.span>
        ) : timedOut ? (
          <motion.span
            key="timeout"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 flex items-center gap-2"
          >
            <span className="text-xs font-medium text-amber-700">
              #{correctPosition}
            </span>
            <ClockAlert className="size-5 text-amber-600" />
          </motion.span>
        ) : incorrect ? (
          <motion.span
            key="incorrect-hint"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 text-xs font-medium text-destructive"
          >
            #{correctPosition}
          </motion.span>
        ) : !isSubmitted ? (
          <motion.span
            key="handle"
            ref={handleRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "relative z-10 flex size-8 shrink-0 touch-none items-center justify-center rounded-md text-muted-foreground",
              disabled
                ? "cursor-not-allowed"
                : "cursor-grab hover:bg-muted active:cursor-grabbing",
            )}
            aria-label="Drag to reorder"
          >
            <GripVertical className="size-4" />
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------- main component ---------- */

export default function OrderingContent({
  runtimeQuestion,
  isLocked,
  isSubmitted,
  isTimeout,
  shouldAnimateFeedback,
}: QuestionContentRouterProps) {
  const { question, answer } = runtimeQuestion;
  const { setAnswer } = useRuntimeActions();

  const isOrdering = question.type === "ORDERING";
  const options = isOrdering ? question.content.options : [];

  // options array order === the correct order
  const correctIds = useMemo(() => options.map((o) => o.id), [options]);

  const answeredIds = answer?.type === "ORDERING" ? answer.orderedOptionIds : null;

  const currentIds = useMemo(() => {
    if (answeredIds && answeredIds.length === correctIds.length) {
      return answeredIds;
    }
    return shuffleIds(correctIds, runtimeQuestion.id);
  }, [answeredIds, correctIds, runtimeQuestion.id]);

  // Persist the initial shuffled order so submitting without dragging
  // evaluates exactly what the user is looking at.
  useEffect(() => {
    if (!isOrdering || isLocked || answeredIds) return;

    setAnswer(runtimeQuestion.id, {
      type: "ORDERING",
      orderedOptionIds: currentIds,
    });
  }, [isOrdering, isLocked, answeredIds, currentIds, runtimeQuestion.id, setAnswer]);

  if (!isOrdering) return null;

  const optionsById = new Map(options.map((o) => [o.id, o]));

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (isLocked || event.canceled) return;

        const next = move(currentIds, event);
        if (next === currentIds) return;

        setAnswer(runtimeQuestion.id, {
          type: "ORDERING",
          orderedOptionIds: next,
        });
      }}
    >
      <div className="grid gap-2.5">
        {currentIds.map((id, index) => {
          const option = optionsById.get(id);
          if (!option) return null;

          const inPlace = correctIds[index] === id;

          const state: ItemState = !isSubmitted
            ? "idle"
            : inPlace
              ? "correct"
              : isTimeout
                ? "timeout"
                : "incorrect";

          return (
            <SortableItem
              key={id}
              id={id}
              index={index}
              text={option.text}
              disabled={isLocked}
              isSubmitted={isSubmitted}
              state={state}
              correctPosition={correctIds.indexOf(id) + 1}
              shouldAnimateFeedback={shouldAnimateFeedback}
            />
          );
        })}
      </div>
    </DragDropProvider>
  );
}

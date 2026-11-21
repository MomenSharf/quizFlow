"use client";

import { useRuntimeActions } from "@/features/quiz-runtime/store";
import { cn } from "@/lib/utils";
import { IconCheck, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ClockAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { QuestionContentRouterProps } from "../question-content-router";

// Swap for your real import if you prefer: MatchSelection from the match schema file.
type MatchSelection = { leftId: string; rightId: string };

type Side = "left" | "right";

type ItemState =
  | "idle"
  | "selected"
  | "matched"
  | "correct"
  | "incorrect"
  | "timeout";

/* ---------- deterministic shuffle (stable per runtime question) ----------
   Same helpers as in ordering-content.tsx. Worth moving to "@/lib/shuffle". */

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
    // never show the right column already aligned with the left one
    if (result.some((id, i) => id !== ids[i])) break;
  }

  return result;
}

/* ---------- single item ---------- */

function MatchItem({
  text,
  badge,
  state,
  disabled,
  isSubmitted,
  hint,
  shouldAnimateFeedback,
  onClick,
}: {
  text: string;
  badge: number | null;
  state: ItemState;
  disabled: boolean;
  isSubmitted: boolean;
  hint?: string | null;
  shouldAnimateFeedback: boolean;
  onClick: () => void;
}) {
  const selected = state === "selected";
  const matched = state === "matched";
  const correct = state === "correct";
  const incorrect = state === "incorrect";
  const timedOut = state === "timeout";

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected || matched}
      initial={false}
      animate={{
        scale: selected ? 1.015 : 1,
        x: incorrect && shouldAnimateFeedback ? [0, -5, 5, -3, 3, 0] : 0,
        opacity: isSubmitted && state === "idle" ? 0.55 : 1,
      }}
      transition={{
        scale: { type: "spring", stiffness: 350, damping: 24 },
        x: { duration: 0.35, ease: "easeOut" },
        opacity: { duration: 0.3 },
      }}
      whileTap={!disabled ? { scale: 0.985 } : undefined}
      className={cn(
        "group relative flex min-h-14 w-full items-center gap-3 overflow-hidden rounded-xl border p-3 text-left",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        "disabled:cursor-not-allowed",

        correct && "border-emerald-500/70 bg-emerald-500/10",

        incorrect && "border-destructive/70 bg-destructive/5",

        timedOut && "border-amber-500/70 bg-amber-500/10",

        selected && "border-primary bg-primary/5 ring-1 ring-primary/20",

        matched && "border-primary/50 bg-primary/5",

        state === "idle" &&
          !isSubmitted &&
          "border-border bg-card hover:border-primary/40 hover:bg-muted/40",

        state === "idle" && isSubmitted && "border-border bg-card",
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

          (selected || matched) && "bg-primary text-primary-foreground",

          state === "idle" &&
            !isSubmitted &&
            "bg-muted text-muted-foreground group-hover:bg-primary/10",

          state === "idle" && isSubmitted && "bg-muted text-muted-foreground",
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
            <motion.span key={`badge-${badge ?? "none"}`}>
              {badge ?? "•"}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>

      <span className="relative z-10 flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-sm font-medium leading-relaxed">{text}</span>

        {hint && (
          <span
            className={cn(
              "text-xs font-medium",
              timedOut ? "text-amber-700" : "text-destructive",
            )}
          >
            → {hint}
          </span>
        )}
      </span>

      <AnimatePresence>
        {correct && (
          <motion.span
            initial={
              shouldAnimateFeedback ? { scale: 0, opacity: 0, rotate: -30 } : false
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
    </motion.button>
  );
}

/* ---------- main component ---------- */

export default function MatchContent({
  runtimeQuestion,
  isLocked,
  isSubmitted,
  isTimeout,
  shouldAnimateFeedback,
}: QuestionContentRouterProps) {
  const { question, answer } = runtimeQuestion;
  const { setAnswer } = useRuntimeActions();

  const [pending, setPending] = useState<{ side: Side; id: string } | null>(
    null,
  );

  const isMatch = question.type === "MATCH";
  const pairs = isMatch ? question.content.pairs : [];

  const matches: MatchSelection[] =
    answer?.type === "MATCH" ? answer.selections : [];

  const rightOrder = useMemo(
    () =>
      shuffleIds(
        pairs.map((p) => p.id),
        runtimeQuestion.id,
      ),
    [pairs, runtimeQuestion.id],
  );

  if (!isMatch) return null;

  const pairById = new Map(pairs.map((p) => [p.id, p]));
  const leftNumber = new Map(pairs.map((p, i) => [p.id, i + 1]));
  const matchByLeft = new Map(matches.map((m) => [m.leftId, m.rightId]));
  const matchByRight = new Map(matches.map((m) => [m.rightId, m.leftId]));

  const commit = (next: MatchSelection[]) => {
    setAnswer(runtimeQuestion.id, {
      type: "MATCH",
      selections: next,
    });
  };

  const handleClick = (side: Side, id: string) => {
    if (isLocked) return;

    // second tap on the opposite side -> create the pair
    if (pending && pending.side !== side) {
      const leftId = side === "left" ? id : pending.id;
      const rightId = side === "right" ? id : pending.id;

      commit([
        ...matches.filter((m) => m.leftId !== leftId && m.rightId !== rightId),
        { leftId, rightId },
      ]);
      setPending(null);
      return;
    }

    // tap the pending item again -> deselect
    if (pending && pending.id === id) {
      setPending(null);
      return;
    }

    // tap a matched item with nothing pending -> unpair it
    const isMatched =
      side === "left" ? matchByLeft.has(id) : matchByRight.has(id);

    if (!pending && isMatched) {
      commit(
        matches.filter((m) =>
          side === "left" ? m.leftId !== id : m.rightId !== id,
        ),
      );
      return;
    }

    setPending({ side, id });
  };

  const resolveSubmittedState = (isCorrectPair: boolean): ItemState =>
    isCorrectPair ? "correct" : isTimeout ? "timeout" : "incorrect";

  return (
    <div className="grid gap-3">
      {!isSubmitted && (
        <p className="text-xs text-muted-foreground">
          Tap an item, then tap its match on the other side. Tap a matched item
          to unpair it.
        </p>
      )}

      <div className="grid grid-cols-2 gap-3">
        {/* left column */}
        <div className="grid content-start gap-2.5">
          {pairs.map((pair) => {
            const rightId = matchByLeft.get(pair.id);

            const state: ItemState = isSubmitted
              ? resolveSubmittedState(rightId === pair.id)
              : pending?.side === "left" && pending.id === pair.id
                ? "selected"
                : rightId
                  ? "matched"
                  : "idle";

            const showHint = state === "incorrect" || state === "timeout";

            return (
              <MatchItem
                key={pair.id}
                text={pair.left.text}
                badge={leftNumber.get(pair.id) ?? null}
                state={state}
                disabled={isLocked}
                isSubmitted={isSubmitted}
                hint={showHint ? pair.right.text : null}
                shouldAnimateFeedback={shouldAnimateFeedback}
                onClick={() => handleClick("left", pair.id)}
              />
            );
          })}
        </div>

        {/* right column (shuffled) */}
        <div className="grid content-start gap-2.5">
          {rightOrder.map((id) => {
            const pair = pairById.get(id);
            if (!pair) return null;

            const leftId = matchByRight.get(id);

            const state: ItemState = isSubmitted
              ? leftId === undefined
                ? "idle"
                : resolveSubmittedState(leftId === id)
              : pending?.side === "right" && pending.id === id
                ? "selected"
                : leftId
                  ? "matched"
                  : "idle";

            return (
              <MatchItem
                key={id}
                text={pair.right.text}
                badge={leftId ? (leftNumber.get(leftId) ?? null) : null}
                state={state}
                disabled={isLocked}
                isSubmitted={isSubmitted}
                shouldAnimateFeedback={shouldAnimateFeedback}
                onClick={() => handleClick("right", id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
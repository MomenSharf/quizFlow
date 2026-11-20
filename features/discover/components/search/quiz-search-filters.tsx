"use client";

import { IconArrowsSort, IconX } from "@tabler/icons-react";

import { useQuizSearchParams } from "../../hooks/use-quiz-search-params";
import type { QuizSearchFilters as Filters } from "../../hooks/use-quiz-search-params";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DiscoverSort } from "../../types/discover.types";
import { QuizDifficulty } from "@/lib/db/generated/prisma/enums";

const SORT_OPTIONS: { label: string; value: DiscoverSort }[] = [
  { label: "Popular", value: "POPULAR" },
  { label: "Trending", value: "TRENDING" },
  { label: "Most completed", value: "MOST_COMPLETED" },
  { label: "Most viewed", value: "MOST_VIEWED" },
  { label: "Most liked", value: "MOST_LIKED" },
  { label: "Featured", value: "FEATURED" },
];

const DIFFICULTY_OPTIONS = [
  { label: "Beginner", value: "BEGINNER" },
  { label: "Intermediate", value: "INTERMEDIATE" },
  { label: "Advanced", value: "ADVANCED" },
] satisfies { label: string; value: QuizDifficulty }[];

const LANGUAGE_OPTIONS = [
  { label: "English", value: "en" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Spanish", value: "es" },
];

const FILTER_LABELS: Record<keyof Filters, string> = {
  category: "Category",
  difficulty: "Difficulty",
  language: "Language",
};

function getOptionLabel(
  options: { label: string; value: string }[],
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function QuizSearchFilters() {
  const {
    sort,
    setSort,
    filters,
    setFilters,
    appliedFilters,
    activeFilterCount,
    clearAll,
    removeFilter,
  } = useQuizSearchParams();

  const activeChips = Object.entries(appliedFilters).filter(
    ([key, value]) => key !== "category" && Boolean(value),
  ) as [keyof Filters, string][];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="h-10 w-full rounded-xl border-border/70 bg-white shadow-sm transition-all hover:border-border hover:bg-muted/20 focus:ring-2 focus:ring-primary/10 sm:w-44 dark:bg-background">
            <IconArrowsSort className="size-4 text-muted-foreground" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            side="bottom"
            align="start"
            className="min-w-[180px] rounded-md"
          >
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.difficulty || "ALL"}
          onValueChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              difficulty: value === "ALL" ? "" : value,
            }))
          }
        >
          <SelectTrigger className="h-10 w-[calc(50%-4px)] rounded-xl border-border/70 bg-white shadow-sm transition-all hover:border-border hover:bg-muted/20 focus:ring-2 focus:ring-primary/10 sm:w-40 dark:bg-background">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            side="bottom"
            align="start"
            className="min-w-[170px] rounded-md"
          >
            <SelectItem value="ALL">Any difficulty</SelectItem>
            {DIFFICULTY_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.language || "ALL"}
          onValueChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              language: value === "ALL" ? "" : value,
            }))
          }
        >
          <SelectTrigger className="h-10 w-[calc(50%-4px)] rounded-xl border-border/70 bg-white shadow-sm transition-all hover:border-border hover:bg-muted/20 focus:ring-2 focus:ring-primary/10 sm:w-36 dark:bg-background">
            <SelectValue placeholder="Language" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            side="bottom"
            align="start"
            className="min-w-[150px] rounded-md"
          >
            <SelectItem value="ALL">Any language</SelectItem>
            {LANGUAGE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="h-10 rounded-xl px-3 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
          >
            <IconX className="size-3.5" />
            Clear filters
          </Button>
        )}
      </div>

      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {activeChips.map(([key, value]) => {
            const options =
              key === "difficulty"
                ? DIFFICULTY_OPTIONS
                : key === "language"
                  ? LANGUAGE_OPTIONS
                  : [];

            return (
              <Badge
                key={key}
                variant="secondary"
                className="h-7 gap-1.5 rounded-lg border border-border/60 bg-white px-2.5 font-normal text-foreground shadow-sm dark:bg-background"
              >
                <span className="text-muted-foreground">
                  {FILTER_LABELS[key]}:
                </span>

                <span className="font-medium">
                  {getOptionLabel(options, value)}
                </span>

                <button
                  type="button"
                  onClick={() => removeFilter(key)}
                  aria-label={`Remove ${FILTER_LABELS[key]} filter`}
                  className="ml-0.5 rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <IconX className="size-3" />
                </button>
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}
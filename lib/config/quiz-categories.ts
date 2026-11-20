
import {
  IconAtom,
  IconBallFootball,
  IconBook2,
  IconBrain,
  IconBriefcase,
  IconBuildingCastle,
  IconBulb,
  IconCategory,
  IconChartLine,
  IconCode,
  IconCpu,
  IconDeviceGamepad2,
  IconGlobe,
  IconHeartRateMonitor,
  IconLanguage,
  IconLeaf,
  IconMasksTheater,
  IconMath,
  IconMovie,
  IconMusic,
  IconNews,
  IconPalette,
  IconPlane,
  IconPray,
  IconSchool,
  IconToolsKitchen2,
  IconUsers,
} from "@tabler/icons-react";

export const QUIZ_CATEGORY_VALUES = [
  "general-knowledge",
  "science",
  "technology",
  "mathematics",
  "history",
  "geography",
  "language",
  "literature",
  "arts",
  "music",
  "movies-tv",
  "games",
  "sports",
  "business",
  "economics",
  "programming",
  "health",
  "food",
  "nature",
  "psychology",
  "philosophy",
  "religion",
  "travel",
  "culture",
  "education",
  "current-events",
  "other",
] as const;

export type QuizCategory = (typeof QUIZ_CATEGORY_VALUES)[number];

export const QUIZ_CATEGORY_IMAGES = {
  "general-knowledge": "photo-1456513080510-7bf3a84b82f8",
  science: "photo-1532094349884-543bc11b234d",
  technology: "photo-1518770660439-4636190af475",
  mathematics: "photo-1635070041078-e363dbe005cb",
  history: "photo-1461360228754-6e81c478b882",
  geography: "photo-1526778548025-fa2f459cd5c1",
  language: "photo-1455390582262-044cdead277a",
  literature: "photo-1516979187457-637abb4f9353",
  arts: "photo-1579783902614-a3fb3927b6a5",
  music: "photo-1511379938547-c1f69419868d",
  "movies-tv": "photo-1489599849927-2ee91cede3ba",
  games: "photo-1542751371-adc38448a05e",
  sports: "photo-1461896836934-ffe607ba8211",
  business: "photo-1497366754035-f200968a6e72",
  economics: "photo-1611974789855-9c2a0a7236a3",
  programming: "photo-1555066931-4365d14bab8c",
  health: "photo-1505751172876-fa1923c5c528",
  food: "photo-1490645935967-10de6ba17061",
  nature: "photo-1441974231531-c6227db76b6e",
  psychology: "photo-1506126613408-eca07ce68773",
  philosophy: "photo-1476275466078-4007374efbbe",
  religion: "photo-1519817650390-64a93db51149",
  travel: "photo-1500530855697-b586d89ba3ee",
  culture: "photo-1518998053901-5348d3961a04",
  education: "photo-1509062522246-3755977927d7",
  "current-events": "photo-1504711434969-e33886168e9c",
  other: "photo-1497366811353-6870744d04b2",
} satisfies Record<QuizCategory, string>;

export const getQuizCategoryImage = (value: string) => {
  const category = QUIZ_CATEGORY_VALUES.includes(value as QuizCategory)
    ? (value as QuizCategory)
    : "other";

  return `https://images.unsplash.com/${QUIZ_CATEGORY_IMAGES[category]}?auto=format&fit=crop&w=900&q=85`;
};

const colors = {
  violet: {
    background: "bg-violet-500/10",
    foreground: "text-violet-600 dark:text-violet-400",
    hover: "group-hover:bg-violet-500/15",
    border: "group-hover:border-violet-500/30",
    decoration: "bg-violet-500/5",
  },
  blue: {
    background: "bg-blue-500/10",
    foreground: "text-blue-600 dark:text-blue-400",
    hover: "group-hover:bg-blue-500/15",
    border: "group-hover:border-blue-500/30",
    decoration: "bg-blue-500/5",
  },
  cyan: {
    background: "bg-cyan-500/10",
    foreground: "text-cyan-600 dark:text-cyan-400",
    hover: "group-hover:bg-cyan-500/15",
    border: "group-hover:border-cyan-500/30",
    decoration: "bg-cyan-500/5",
  },
  amber: {
    background: "bg-amber-500/10",
    foreground: "text-amber-600 dark:text-amber-400",
    hover: "group-hover:bg-amber-500/15",
    border: "group-hover:border-amber-500/30",
    decoration: "bg-amber-500/5",
  },
  emerald: {
    background: "bg-emerald-500/10",
    foreground: "text-emerald-600 dark:text-emerald-400",
    hover: "group-hover:bg-emerald-500/15",
    border: "group-hover:border-emerald-500/30",
    decoration: "bg-emerald-500/5",
  },
  rose: {
    background: "bg-rose-500/10",
    foreground: "text-rose-600 dark:text-rose-400",
    hover: "group-hover:bg-rose-500/15",
    border: "group-hover:border-rose-500/30",
    decoration: "bg-rose-500/5",
  },
  orange: {
    background: "bg-orange-500/10",
    foreground: "text-orange-600 dark:text-orange-400",
    hover: "group-hover:bg-orange-500/15",
    border: "group-hover:border-orange-500/30",
    decoration: "bg-orange-500/5",
  },
  pink: {
    background: "bg-pink-500/10",
    foreground: "text-pink-600 dark:text-pink-400",
    hover: "group-hover:bg-pink-500/15",
    border: "group-hover:border-pink-500/30",
    decoration: "bg-pink-500/5",
  },
  indigo: {
    background: "bg-indigo-500/10",
    foreground: "text-indigo-600 dark:text-indigo-400",
    hover: "group-hover:bg-indigo-500/15",
    border: "group-hover:border-indigo-500/30",
    decoration: "bg-indigo-500/5",
  },
  teal: {
    background: "bg-teal-500/10",
    foreground: "text-teal-600 dark:text-teal-400",
    hover: "group-hover:bg-teal-500/15",
    border: "group-hover:border-teal-500/30",
    decoration: "bg-teal-500/5",
  },
  lime: {
    background: "bg-lime-500/10",
    foreground: "text-lime-700 dark:text-lime-400",
    hover: "group-hover:bg-lime-500/15",
    border: "group-hover:border-lime-500/30",
    decoration: "bg-lime-500/5",
  },
  sky: {
    background: "bg-sky-500/10",
    foreground: "text-sky-600 dark:text-sky-400",
    hover: "group-hover:bg-sky-500/15",
    border: "group-hover:border-sky-500/30",
    decoration: "bg-sky-500/5",
  },
} as const;

export const QUIZ_CATEGORIES = [
  {
    value: "general-knowledge",
    label: "General Knowledge",
    icon: IconBrain,
    color: colors.violet,
  },
  {
    value: "science",
    label: "Science",
    icon: IconAtom,
    color: colors.cyan,
  },
  {
    value: "technology",
    label: "Technology",
    icon: IconCpu,
    color: colors.blue,
  },
  {
    value: "mathematics",
    label: "Mathematics",
    icon: IconMath,
    color: colors.indigo,
  },
  {
    value: "history",
    label: "History",
    icon: IconBuildingCastle,
    color: colors.amber,
  },
  {
    value: "geography",
    label: "Geography",
    icon: IconGlobe,
    color: colors.sky,
  },
  {
    value: "language",
    label: "Language",
    icon: IconLanguage,
    color: colors.teal,
  },
  {
    value: "literature",
    label: "Literature",
    icon: IconBook2,
    color: colors.orange,
  },
  {
    value: "arts",
    label: "Arts",
    icon: IconPalette,
    color: colors.pink,
  },
  {
    value: "music",
    label: "Music",
    icon: IconMusic,
    color: colors.violet,
  },
  {
    value: "movies-tv",
    label: "Movies & TV",
    icon: IconMovie,
    color: colors.rose,
  },
  {
    value: "games",
    label: "Games",
    icon: IconDeviceGamepad2,
    color: colors.indigo,
  },
  {
    value: "sports",
    label: "Sports",
    icon: IconBallFootball,
    color: colors.emerald,
  },
  {
    value: "business",
    label: "Business",
    icon: IconBriefcase,
    color: colors.blue,
  },
  {
    value: "economics",
    label: "Economics",
    icon: IconChartLine,
    color: colors.teal,
  },
  {
    value: "programming",
    label: "Programming",
    icon: IconCode,
    color: colors.violet,
  },
  {
    value: "health",
    label: "Health & Wellness",
    icon: IconHeartRateMonitor,
    color: colors.rose,
  },
  {
    value: "food",
    label: "Food & Cooking",
    icon: IconToolsKitchen2,
    color: colors.orange,
  },
  {
    value: "nature",
    label: "Nature & Animals",
    icon: IconLeaf,
    color: colors.lime,
  },
  {
    value: "psychology",
    label: "Psychology",
    icon: IconUsers,
    color: colors.pink,
  },
  {
    value: "philosophy",
    label: "Philosophy",
    icon: IconBulb,
    color: colors.amber,
  },
  {
    value: "religion",
    label: "Religion & Spirituality",
    icon: IconPray,
    color: colors.indigo,
  },
  {
    value: "travel",
    label: "Travel",
    icon: IconPlane,
    color: colors.sky,
  },
  {
    value: "culture",
    label: "Culture",
    icon: IconMasksTheater,
    color: colors.pink,
  },
  {
    value: "education",
    label: "Education",
    icon: IconSchool,
    color: colors.blue,
  },
  {
    value: "current-events",
    label: "Current Events",
    icon: IconNews,
    color: colors.orange,
  },
  {
    value: "other",
    label: "Other",
    icon: IconCategory,
    color: colors.violet,
  },
] as const satisfies {
  value: QuizCategory;
  label: string;
  icon: typeof IconBrain;
  color: (typeof colors)[keyof typeof colors];
}[];

export type QuizCategoryConfig = (typeof QUIZ_CATEGORIES)[number];

export const QUIZ_CATEGORY_OPTIONS = QUIZ_CATEGORIES.map(
  ({ value, label }) => ({ value, label }),
);

export const QUIZ_CATEGORY_LABELS = Object.fromEntries(
  QUIZ_CATEGORIES.map(({ value, label }) => [value, label]),
) as Record<QuizCategory, string>;

export const getQuizCategory = (value: string) =>
  QUIZ_CATEGORIES.find((category) => category.value === value);

export const getQuizCategoryLabel = (value: string) =>
  getQuizCategory(value)?.label ?? "Other";


import { QuizCategory } from "@/lib/config/quiz-categories";
import { Prisma } from "@/lib/db/generated/prisma/client";

const CATEGORY_IMAGE_IDS = {
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

const categoryImages: Prisma.ImageCreateInput[] = Object.entries(
  CATEGORY_IMAGE_IDS,
).map(([category, photoId]) => ({
  id: `category-${category}`,
  key: category,
  alt: `${category.replaceAll("-", " ")} quiz category cover`,
  url: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`,
}));

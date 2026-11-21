import { DiscoverSort } from "../../types/discover.types";

export const DISCOVER_SORT_SECTIONS: {
  sort: DiscoverSort;
  title: string;
  description: string;
  href: string;
  color: string;
  bgColor: string;
}[] = [
  
  {
    sort: "POPULAR",
    title: "Popular",
    description: "Quizzes everyone is playing.",
    href: "/discover/search?sort=POPULAR",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    sort: "TRENDING",
    title: "Trending",
    description: "See what's gaining attention.",
    href: "/discover/search?sort=TRENDING",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    sort: "MOST_COMPLETED",
    title: "Most completed",
    description: "Quizzes learners finish the most.",
    href: "/discover/search?sort=MOST_COMPLETED",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    sort: "MOST_VIEWED",
    title: "Most viewed",
    description: "Discover the most explored quizzes.",
    href: "/discover/search?sort=MOST_VIEWED",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    sort: "MOST_LIKED",
    title: "Most liked",
    description: "Community favorites worth trying.",
    href: "/discover/search?sort=MOST_LIKED",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    sort: "FEATURED",
    title: "Featured",
    description: "Handpicked quizzes to explore.",
    href: "/discover/search?sort=FEATURED",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
];

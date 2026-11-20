
import { appConfig } from "@/lib/config/app";
import {
  PencilRuler,
  Gamepad2,
  ChartNoAxesCombined,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "../shared/section-heading";

const features = [
  {
    number: "01",
    label: "CREATE",
    title: "Bring your ideas to life.",
    description:
      "Create engaging quizzes with different question types, custom content, and an easy-to-use editor.",
    icon: PencilRuler,
    color: "text-violet-600 dark:text-violet-400",
    background: "bg-violet-500/10 dark:bg-violet-400/10",
    decoration: "bg-violet-500/10 dark:bg-violet-400/10",
    border: "group-hover:border-violet-500/30",
  },
  {
    number: "02",
    label: "PLAY",
    title: "Make learning an adventure.",
    description:
      "Enjoy interactive questions, test your knowledge, and make every quiz a fun experience.",
    icon: Gamepad2,
    color: "text-sky-600 dark:text-sky-400",
    background: "bg-sky-500/10 dark:bg-sky-400/10",
    decoration: "bg-sky-500/10 dark:bg-sky-400/10",
    border: "group-hover:border-sky-500/30",
  },
  {
    number: "03",
    label: "GROW",
    title: "See your progress unfold.",
    description:
      "Review your results, learn from your mistakes, and celebrate every step forward.",
    icon: ChartNoAxesCombined,
    color: "text-orange-600 dark:text-orange-400",
    background: "bg-orange-500/10 dark:bg-orange-400/10",
    decoration: "bg-orange-500/10 dark:bg-orange-400/10",
    border: "group-hover:border-orange-500/30",
  },
  {
    number: "04",
    label: "DISCOVER",
    title: "Find something new every day.",
    description:
      "Explore quizzes across different topics, discover new interests, and share your creations.",
    icon: Compass,
    color: "text-emerald-600 dark:text-emerald-400",
    background: "bg-emerald-500/10 dark:bg-emerald-400/10",
    decoration: "bg-emerald-500/10 dark:bg-emerald-400/10",
    border: "group-hover:border-emerald-500/30",
  },
];

export function PaltformFeatures() {
  return (
    <section className="w-full min-w-0 py-8 sm:py-10">
      <SectionHeading
        className="mb-8"
        eyebrow={`Discover ${appConfig.name}`}
        title="Everything you need to make learning fun."
        description="Create, play, and explore. Discover a better way to challenge yourself and learn something new every day."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.number}
              className={`group relative isolate flex min-h-52 flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.03] dark:hover:shadow-black/20 sm:p-6 ${feature.border}`}
            >
              {/* Decorative background */}
              <div
                className={`pointer-events-none absolute -right-12 -top-12 -z-10 size-40 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150 ${feature.decoration}`}
              />

              <div className="flex items-center justify-between">
                <div
                  className={`flex size-11 items-center justify-center rounded-xl ${feature.background} ${feature.color}`}
                >
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>

                <span className="text-xs font-semibold tabular-nums tracking-wider text-muted-foreground/60">
                  {feature.number}
                </span>
              </div>

              <div className="relative mt-8 max-w-md">
                <p
                  className={`mb-2 text-[11px] font-bold tracking-[0.16em] ${feature.color}`}
                >
                  {feature.label}
                </p>

                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              <ArrowUpRight
                className={`absolute bottom-6 right-6 size-4 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70 ${feature.color}`}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}

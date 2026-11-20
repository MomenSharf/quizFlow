import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchForm } from "./search-form";

type HeroAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  icon?: boolean;
};

type HeroSearch = {
  action?: string;
  name?: string;
  placeholder?: string;
  buttonLabel?: string;
};

type HeroSectionProps = {
  badge?: string;

  title: string;
  highlightedTitle?: string;
  highlightClassName?: string;

  description: string;

  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

  search?: HeroSearch;

  actions?: HeroAction[];

  className?: string;
};

export function HeroSection({
  badge,
  title,
  highlightedTitle,
  highlightClassName = "text-primary",
  description,
  image,
  search,
  actions = [],
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)}>
      <div className="grid items-center gap-8 py-10 sm:py-12 lg:min-h-97.5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
        {/* Content */}
        <div className="relative z-10 max-w-xl">
          {badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              {badge}
            </div>
          )}

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {title}{" "}
            {highlightedTitle && (
              <span className={highlightClassName}>{highlightedTitle}</span>
            )}
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>

          {search && <SearchForm />}

          {/* Actions */}
          {!search && actions.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {actions.map((action) => (
                <Button
                  key={action.href}
                  asChild
                  size="lg"
                  variant={action.variant ?? "default"}
                  className={cn(
                    "h-11 rounded-xl px-5 text-sm font-semibold",
                    "transition-all duration-200",
                    action.variant === "outline"
                      ? "border-border/80 bg-background hover:border-primary/40 hover:bg-accent"
                      : "shadow-sm hover:-translate-y-0.5 hover:shadow-md",
                  )}
                >
                  <Link href={action.href}>
                    <span>{action.label}</span>

                    {action.icon && (
                      <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Illustration */}
        <div className="relative mx-auto w-full max-w-100 lg:max-w-none">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 700}
            height={image.height ?? 580}
            priority
            className="relative z-10 mx-auto h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

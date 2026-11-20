
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchFormProps = {
  action?: string;
  name?: string;
  placeholder?: string;
  buttonLabel?: string;
  defaultValue?: string;
  className?: string;
  inputClassName?: string;
};

export function SearchForm({
  action = "/discover/search",
  name = "q",
  placeholder = "Search...",
  buttonLabel = "Search",
  defaultValue,
  className,
  inputClassName,
}: SearchFormProps) {
  return (
    <form
      action={action}
      method="GET"
      role="search"
      className={cn(
        "flex h-12 w-full max-w-xl items-center gap-3 rounded-xl border bg-background px-4 shadow-sm transition-colors",
        "focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10",
        className,
      )}
    >
      <Search className="size-4 shrink-0 text-muted-foreground" />

      <Input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-label={placeholder}
        className={cn(
          "h-full min-w-0 flex-1 border-0 bg-transparent px-0 text-sm shadow-none",
          "focus-visible:ring-0 dark:bg-transparent",
          inputClassName,
        )}
      />

      <Button
        type="submit"
        size="sm"
        className="h-8 shrink-0 rounded-lg px-4"
      >
        {buttonLabel}
      </Button>
    </form>
  );
}

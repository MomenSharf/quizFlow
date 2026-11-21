
import { IconBook2, IconCalendar } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfileCardProps = {
  profile: {
    image: {
      caption: string | null;
      key: string;
      id: string;
      url: string;
      alt: string;
      createdAt: Date;
      ratio: string;
    } | null;
    id: string;
    name: string | null;
    username: string;
    bio: string | null;
    createdAt: Date;
  };
  quizzesCount: number;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ProfileCard({ profile, quizzesCount }: ProfileCardProps) {
  const displayName = profile.name || profile.username;

  const joinedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(profile.createdAt));

  return (
    <section className="overflow-hidden rounded-xl border bg-card">
      {/* Cover */}
      <div className="relative h-28 overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">
        <div className="absolute -right-12 -top-32 size-64 rounded-full border border-white/10" />
        <div className="absolute -right-4 -top-24 size-48 rounded-full border border-white/10" />
        <div className="absolute -bottom-16 left-1/3 size-36 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="px-5 pb-5 sm:px-6">
        {/* Profile */}
        <div className="-mt-10 relative mb-4 w-fit">
          <Avatar className="size-20 border-[4px] border-card shadow-sm">
            <AvatarImage
              src={profile.image?.url ?? undefined}
              alt={profile.image?.alt || displayName}
            />
            <AvatarFallback className="text-xl font-semibold">
              {getInitials(displayName)}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Identity */}
        <div className="space-y-1">
          <h1 className="text-xl font-semibold tracking-tight">
            {displayName}
          </h1>

          <p className="text-sm text-muted-foreground">
            @{profile.username}
          </p>

          {profile.bio && (
            <p className="max-w-2xl pt-2 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap break-words">
              {profile.bio}
            </p>
          )}
        </div>

        {/* Metadata */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <IconCalendar className="size-3.5" />
            Joined {joinedDate}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <IconBook2 className="size-3.5" />
            {quizzesCount} {quizzesCount === 1 ? "quiz" : "quizzes"}
          </span>
        </div>
      </div>
    </section>
  );
}

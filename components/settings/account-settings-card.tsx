"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconUser, IconAt, IconMail } from "@tabler/icons-react";

import SettingsCard from "@/components/settings/settings-card";
import { Input } from "@/components/ui/input";
import { ProfileSettingsInput, profileSettingsSchema } from "@/lib/validation/settings.validation";



type AccountSettingsCardProps = {
  name: string;
  username: string;
  email: string;
};

export function AccountSettingsCard({
  name,
  username,
  email,
}: AccountSettingsCardProps) {
  const form = useForm<ProfileSettingsInput>({
    resolver: zodResolver(profileSettingsSchema),
    defaultValues: {
      name,
      username,
    },
  });

  const handleSave = async () => {
    const isValid = await form.trigger();

    if (!isValid) return;

  };

  return (
    <SettingsCard
      title="Account"
      description="Manage your personal information and account identity."
      onSave={handleSave}
      viewContent={
        <div className="grid gap-5 sm:grid-cols-2">
          <InfoItem icon={<IconUser />} label="Full name" value={name} />
          <InfoItem icon={<IconAt />} label="Username" value={`@${username}`} />
          <InfoItem
            icon={<IconMail />}
            label="Email address"
            value={email}
            className="sm:col-span-2"
          />
        </div>
      }
      editContent={
        <div className="space-y-4">
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <Field
                label="Full name"
                error={fieldState.error?.message}
              >
                <Input
                  {...field}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <Field
                label="Username"
                error={fieldState.error?.message}
              >
                <Input
                  {...field}
                  placeholder="username"
                  autoComplete="username"
                />
              </Field>
            )}
          />

          <Field label="Email address">
            <Input value={email} disabled className="bg-muted/50" />
            <p className="text-xs text-muted-foreground">
              Email address cannot be changed.
            </p>
          </Field>
        </div>
      }
    />
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`flex min-w-0 items-start gap-3 ${className ?? ""}`}>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/50 text-muted-foreground">
        {icon}
      </div>

      <div className="min-w-0 space-y-1">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium">{value || "—"}</p>
      </div>
    </div>
  );
}
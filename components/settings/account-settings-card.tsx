"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconUser,
  IconAt,
  IconMail,
  IconPencil,
  IconX,
  IconCheck,
} from "@tabler/icons-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ProfileSettingsInput,
  profileSettingsSchema,
} from "@/lib/validation/settings.validation";
import { updateMe } from "@/lib/actions/user";

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
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<ProfileSettingsInput>({
    resolver: zodResolver(profileSettingsSchema),
    defaultValues: {
      name,
      username,
    },
  });

  async function onSubmit(data: ProfileSettingsInput) {
    const res = await updateMe(data);

    if (res.error) {
      toast.error(res.error.message ?? "Something went wrong");
      return;
    }

    form.reset(data);
    setIsEditing(false);
    toast.success("Profile updated successfully");
  }

  function handleCancel() {
    form.reset();
    setIsEditing(false);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1.5">
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Manage your personal information and account identity.
          </CardDescription>
        </div>

        {!isEditing && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            <IconPencil className="size-4" />
            Edit
          </Button>
        )}
      </CardHeader>

      <CardContent>
        {isEditing ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
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
                <Input
                  value={email}
                  disabled
                  className="bg-muted/50"
                />
                <p className="text-xs text-muted-foreground">
                  Email address cannot be changed.
                </p>
              </Field>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={form.formState.isSubmitting}
              >
                <IconX className="size-4" />
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={
                  form.formState.isSubmitting ||
                  !form.formState.isDirty
                }
              >
                <IconCheck className="size-4" />
                {form.formState.isSubmitting ? "Saving..." : "Save changes"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            <InfoItem
              icon={<IconUser />}
              label="Full name"
              value={name}
            />

            <InfoItem
              icon={<IconAt />}
              label="Username"
              value={`@${username}`}
            />

            <InfoItem
              icon={<IconMail />}
              label="Email address"
              value={email}
              className="sm:col-span-2"
            />
          </div>
        )}
      </CardContent>
    </Card>
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
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
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
        <p className="text-xs font-medium text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm font-medium">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}
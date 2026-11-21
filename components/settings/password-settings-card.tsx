"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconEye,
  IconEyeOff,
  IconShieldCheck,
  IconPencil,
  IconX,
  IconCheck,
} from "@tabler/icons-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  PasswordSettingsInput,
  passwordSettingsSchema,
} from "@/lib/validation/settings.validation";
import { changePassword } from "@/lib/actions/user";

export function PasswordSettingsCard() {
  const [isEditing, setIsEditing] = useState(false);

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const form = useForm<PasswordSettingsInput>({
    resolver: zodResolver(passwordSettingsSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: PasswordSettingsInput) {
    const res = await changePassword(data);

    if (res.error) {
      toast.error(res.error.message ?? "Something went wrong");
      return;
    }

    form.reset();
    setIsEditing(false);
    setShowPasswords({
      current: false,
      new: false,
      confirm: false,
    });

    toast.success("Password updated successfully");
  }

  function handleCancel() {
    form.reset();
    setIsEditing(false);
    setShowPasswords({
      current: false,
      new: false,
      confirm: false,
    });
  }

  function toggleVisibility(field: keyof typeof showPasswords) {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1.5">
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Update your password to keep your account secure.
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
            <Controller
              control={form.control}
              name="currentPassword"
              render={({ field, fieldState }) => (
                <PasswordField
                  label="Current password"
                  placeholder="Enter current password"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                  visible={showPasswords.current}
                  onToggle={() => toggleVisibility("current")}
                  autoComplete="current-password"
                />
              )}
            />

            <div className="border-t pt-4">
              <div className="mb-4 space-y-1">
                <p className="text-sm font-medium">New password</p>
                <p className="text-xs text-muted-foreground">
                  Choose a strong password with at least 8 characters.
                </p>
              </div>

              <div className="space-y-4">
                <Controller
                  control={form.control}
                  name="newPassword"
                  render={({ field, fieldState }) => (
                    <PasswordField
                      label="New password"
                      placeholder="Enter new password"
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      visible={showPasswords.new}
                      onToggle={() => toggleVisibility("new")}
                      autoComplete="new-password"
                    />
                  )}
                />

                <Controller
                  control={form.control}
                  name="confirmPassword"
                  render={({ field, fieldState }) => (
                    <PasswordField
                      label="Confirm new password"
                      placeholder="Confirm new password"
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      visible={showPasswords.confirm}
                      onToggle={() => toggleVisibility("confirm")}
                      autoComplete="new-password"
                    />
                  )}
                />
              </div>
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
                disabled={form.formState.isSubmitting}
              >
                <IconCheck className="size-4" />
                {form.formState.isSubmitting
                  ? "Saving..."
                  : "Update password"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-muted/50 text-muted-foreground">
              <IconShieldCheck className="size-5" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium">Password protection</p>
              <p className="text-sm text-muted-foreground">
                Your account is protected with a password.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
  error,
  visible,
  onToggle,
  autoComplete,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  visible: boolean;
  onToggle: () => void;
  autoComplete: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <div className="relative">
        <Input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          className="pr-10"
        />

        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <IconEyeOff className="size-4" />
          ) : (
            <IconEye className="size-4" />
          )}
        </button>
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
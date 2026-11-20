"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconLock,
  IconEye,
  IconEyeOff,
  IconKey,
  IconShieldCheck,
} from "@tabler/icons-react";

import SettingsCard from "@/components/settings/settings-card";
import { Input } from "@/components/ui/input";
import {
  PasswordSettingsInput,
  passwordSettingsSchema,
} from "@/lib/validation/settings.validation";

export function PasswordSettingsCard({}) {
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

  const handleSave = async () => {
    const isValid = await form.trigger();

    if (!isValid) return;

    form.reset();
  };

  const toggleVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <SettingsCard
      title="Password"
      description="Update your password to keep your account secure."
      onSave={handleSave}
      viewContent={
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
      }
      editContent={
        <div className="space-y-4">
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
        </div>
      }
    />
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
          onChange={(e) => onChange(e.target.value)}
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

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

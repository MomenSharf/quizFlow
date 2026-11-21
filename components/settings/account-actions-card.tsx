"use client";

import { useState } from "react";
import {
  IconAlertTriangle,
  IconLogout,
  IconTrash,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { DeleteAccountDialog } from "./delete-account-dialog";
import { signOut } from "next-auth/react";


export function AccountActionsCard(

) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      signOut({ callbackUrl: "/login" })
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="flex items-start gap-3 border-b bg-muted/30 p-4 md:p-5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background text-muted-foreground">
            <IconAlertTriangle className="size-5" />
          </div>

          <div className="space-y-1">
            <h2 className="font-semibold tracking-tight">Account actions</h2>
            <p className="text-sm text-muted-foreground">
              Manage your session or permanently remove your account.
            </p>
          </div>
        </div>

        <div className="divide-y">
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <IconLogout className="size-4" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">Log out</p>
                <p className="text-sm text-muted-foreground">
                  Sign out of your account on this device.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="shrink-0"
            >
              <IconLogout className="size-4" />
              {isLoggingOut ? "Logging out..." : "Log out"}
            </Button>
          </div>

          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <IconTrash className="size-4" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">Delete account</p>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and associated data.
                </p>
              </div>
            </div>

            <Button
              variant="destructive"
              size="sm"
              className="shrink-0"
              onClick={() => setDeleteDialogOpen(true)}
            >
              <IconTrash className="size-4" />
              Delete account
            </Button>
          </div>
        </div>
      </section>

      <DeleteAccountDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
      />
    </>
  );
}
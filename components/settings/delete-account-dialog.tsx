"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconAlertTriangle, IconTrash } from "@tabler/icons-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { deleteMe } from "@/lib/actions/user";
import { signOut } from "next-auth/react";

type DeleteAccountDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DeleteAccountDialog({
  open,
  onOpenChange,
}: DeleteAccountDialogProps) {
  const router = useRouter();

  const [confirmation, setConfirmation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const canDelete = confirmation === "DELETE";

  function handleOpenChange(value: boolean) {
    if (isDeleting) return;

    if (!value) {
      setConfirmation("");
    }

    onOpenChange(value);
  }

  async function handleDelete() {
    if (!canDelete || isDeleting) return;

    setIsDeleting(true);

    const res = await deleteMe();

    if (res.error) {
      toast.error(res.error.message ?? "Something went wrong");
      setIsDeleting(false);
      return;
    }

    toast.success("Your account has been deleted");

    setConfirmation("");
    onOpenChange(false);
    signOut({ callbackUrl: "/login" });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="gap-0 p-0 sm:max-w-md">
        <DialogHeader className="space-y-3 border-b p-5">
          <div className="flex size-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
            <IconAlertTriangle className="size-5" />
          </div>

          <DialogTitle className="text-lg">
            Permanently delete your account?
          </DialogTitle>

          <DialogDescription className="text-sm leading-relaxed">
            This action is irreversible. Your account and associated data will
            be permanently removed. You will lose access to your account.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 p-5">
          <div className="rounded-lg border border-destructive/15 bg-destructive/[0.04] p-3">
            <p className="text-sm font-medium text-destructive">
              This action cannot be undone.
            </p>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="delete-account-confirmation"
              className="text-sm font-medium"
            >
              Type{" "}
              <span className="font-semibold text-destructive">DELETE</span> to
              confirm
            </label>

            <Input
              id="delete-account-confirmation"
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              placeholder="Type DELETE here"
              autoComplete="off"
              disabled={isDeleting}
            />
          </div>
        </div>

        <DialogFooter className="border-t bg-muted/20 p-4 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={!canDelete || isDeleting}
          >
            <IconTrash className="size-4" />
            {isDeleting ? "Deleting..." : "Delete account"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

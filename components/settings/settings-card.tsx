"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconPencil, IconX, IconCheck } from "@tabler/icons-react";

import { Button } from "../ui/button";

type SettingsCardProps = {
  title: string;
  description?: string;
  viewContent: React.ReactNode;
  editContent: React.ReactNode;
  onSave?: () => void;
  isSaving?: boolean;
};

export default function SettingsCard({
  title,
  description,
  viewContent,
  editContent,
  onSave,
  isSaving = false,
}: SettingsCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleCancel = () => setIsEditing(false);

  const handleSave = async () => {
    await onSave?.();
    setIsEditing(false);
  };

  return (
    <motion.section
      layout
      className="overflow-hidden rounded-2xl border bg-card shadow-sm"
      transition={{ layout: { duration: 0.25, ease: "easeInOut" } }}
    >
      <div className="flex items-start justify-between gap-4 border-b px-4 py-4 md:px-5">
        <div className="min-w-0 space-y-1">
          <h2 className="font-semibold tracking-tight">{title}</h2>

          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isEditing ? "editing" : "viewing"}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            {!isEditing ? (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(true)}
              >
                Edit
                <IconPencil className="size-4" />
              </Button>
            ) : (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCancel}
                disabled={isSaving}
              >
                Cancel
                <IconX className="size-4" />
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isEditing ? "edit-content" : "view-content"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="p-4 md:p-5"
        >
          {isEditing ? editContent : viewContent}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isEditing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex justify-end gap-2 border-t bg-muted/30 px-4 py-3 md:px-5">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
                disabled={isSaving}
              >
                Cancel
              </Button>

              <Button size="sm" onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save changes"}
                {!isSaving && <IconCheck className="size-4" />}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
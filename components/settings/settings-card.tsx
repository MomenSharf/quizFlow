import React from "react";
import { Button } from "../ui/button";
import { IconPencil } from "@tabler/icons-react";

export default function SettingsCard() {
  return (
    <div className="flex flex-col p-3 md:p-5 rounded-xl bg-card border">
      <div className="flex justify-between gap-3">
        <h2 className="font-bold text-xl">Account</h2>
        <Button size='sm'>
          Edit <IconPencil />
        </Button>
      </div>
    </div>
  );
}

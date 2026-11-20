import { AccountSettingsCard } from "@/components/settings/account-settings-card";
import { PasswordSettingsCard } from "@/components/settings/password-settings-card";

export default function Settings() {
  return (
    <div className="flex flex-col px-4 md:px-6 py-4 gap-3">
      <AccountSettingsCard
        name="John Doe"
        username="johndoe"
        email="john.doe@example.com"
      />
      <PasswordSettingsCard
 
/>
    </div>
  );
}

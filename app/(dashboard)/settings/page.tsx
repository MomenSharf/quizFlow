import { AccountActionsCard } from "@/components/settings/account-actions-card";
import { AccountSettingsCard } from "@/components/settings/account-settings-card";
import { PasswordSettingsCard } from "@/components/settings/password-settings-card";
import { getMe } from "@/lib/actions/user";

export default async function Settings() {
  const res = await getMe();

  if (res.error) {
   return 'error'
  }

  const user = res.data;

  if (!user) {
  return 'error'
  }

  return (
    <div className="flex flex-col gap-5 px-4 py-4 md:px-6">
      <AccountSettingsCard
        name={user.name ?? ""}
        username={user.username ?? ""}
        email={user.email}
      />

      <PasswordSettingsCard />

      <AccountActionsCard />
    </div>
  );
}
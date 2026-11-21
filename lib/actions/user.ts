"use server";

import { requireAuth } from "@/features/auth/lib/require-auth";
import { tryCatchAsync } from "@/lib/utils/try-catch";

import type {
  PasswordSettingsInput,
  ProfileSettingsInput,
} from "../validation/settings.validation";
import { userService } from "../services/user.service";
import { revalidatePath } from "next/cache";

export const getMe = async () =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

    return await userService.getMe(user.id);
  });

export const updateMe = async (input: ProfileSettingsInput) =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

    const res  = await userService.updateMe(user.id, input);

    revalidatePath('/settings')

    return res
  });

export const changePassword = async (input: PasswordSettingsInput) =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

    return await userService.changePassword(user.id, input);
  });

export const deleteMe = async () =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

    return await userService.deleteMe(user.id);
  });
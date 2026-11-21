import bcrypt from "bcrypt";
import { Prisma } from "../db/generated/prisma/client";
import prisma from "../db/prisma";

import { AppErrors } from "../errors/app-errors";
import {
  PasswordSettingsInput,
  passwordSettingsSchema,
  ProfileSettingsInput,
  profileSettingsSchema,
} from "../validation/settings.validation";
import { discoverQuizSelect } from "@/features/discover/constants/discover.select";

const userSettingsSelect = {
  id: true,
  name: true,
  username: true,
  email: true,
  image: true,
  createdAt: true,
} satisfies Prisma.UserSelect;

export type UserSettings = Prisma.UserGetPayload<{
  select: typeof userSettingsSelect;
}>;

export const userService = {
  async getMe(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: userSettingsSelect,
    });

    if (!user) {
      throw AppErrors.notFound("User not found");
    }

    return user;
  },

  async getProfile(username: string) {
    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        createdAt: true,
        bio: true,
        quizzes: {
          select: discoverQuizSelect,
        },
      },
    });

    if (!user) {
      throw AppErrors.notFound("User not found");
    }

    return user;
  },

  async updateMe(userId: string, input: ProfileSettingsInput) {
    const data = profileSettingsSchema.parse(input);

    return prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        username: data.username,
      },
      select: userSettingsSelect,
    });
  },

  async changePassword(userId: string, input: PasswordSettingsInput) {
    const data = passwordSettingsSchema.parse(input);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) {
      throw AppErrors.notFound("User not found");
    }

    if (!user.password) {
      throw AppErrors.badRequest("This account does not have a password set");
    }

    const isPasswordValid = await bcrypt.compare(
      data.currentPassword,
      user.password,
    );

    if (!isPasswordValid) {
      throw AppErrors.badRequest("Current password is incorrect");
    }

    const hashedPassword = await bcrypt.hash(data.newPassword, 12);

    return prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
  },

  async deleteMe(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    if (!user) {
      throw AppErrors.notFound("User not found");
    }

    return prisma.user.delete({
      where: { id: userId },
      select: {
        id: true,
      },
    });
  },
};

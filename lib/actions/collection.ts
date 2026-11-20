"use server";

import { requireAuth } from "@/features/auth/lib/require-auth";
import { tryCatchAsync } from "@/lib/utils/try-catch";
import { collectionService } from "../services/quiz-service";

export const getMyQuizzes = async () =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

    const quizzes = await collectionService.getMyQuizzes(user.id);

    return quizzes;
  });

export const getMyAttempts = async () =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

    const attempt = await collectionService.getMyAttempts(user.id);

    return attempt;
  });

export const getMyAttempt = async (attemptId: string) =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

    return await collectionService.getMyAttempt(user.id, attemptId);
  });

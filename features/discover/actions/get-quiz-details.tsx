"use server";

import { requireAuth } from "@/features/auth/lib/require-auth";
import { tryCatchAsync } from "@/lib/utils/try-catch";
import { quizDetailsService } from "../services/quiz-details.service";

export const getQuizDetails = async (quizId: string) =>
  tryCatchAsync(async () => {
    const { user } = await requireAuth();

     return await quizDetailsService.getQuizDetails(quizId, user.id);
  });
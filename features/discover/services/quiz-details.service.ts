import prisma from "@/lib/db/prisma";
import { AppErrors } from "@/lib/errors/app-errors";
import { discoverQuizDetailedSelect } from "../constants/discover.select";
export const quizDetailsService = {
  async getQuizDetails(quizId: string, userId?: string) {
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      select: discoverQuizDetailedSelect,
    });

if (!quiz) {
  throw AppErrors.notFound("Quiz not found");
}
    const isOwner = userId === quiz.owner.id;

     if (quiz.visibility !== "PUBLIC" && !isOwner) {
      throw AppErrors.forbidden("You don't have permission to access this quiz");
    }


    return {
      quiz,
      isOwner,
    };
  },
};

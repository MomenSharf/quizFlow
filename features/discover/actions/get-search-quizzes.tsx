"use server";

import { tryCatchAsync } from "@/lib/utils/try-catch";
import { discoverService } from "../services/discover.service";
import { discoverQuizSelect } from "../constants/discover.select";
import { QuizDifficulty } from "@/lib/db/generated/prisma/enums";

export const searchDiscoverQuizzes = async ({
  category,
  cursor,
  difficulty,
  language,
  search,
  tags,
  take = 10,
}: {
  category?: string;
  cursor?: string;
  difficulty?: QuizDifficulty;
  language?: string;
  search?: string;
  tags?: string[];
  take?: number;
}) =>
  tryCatchAsync(async () => {
    return await discoverService.getQuizzes({
      select: discoverQuizSelect,
      sort: "POPULAR",
      take,
      category,
      cursor,
      difficulty,
      language,
      search,
      tags,
    });
  });
"use server";

import { tryCatchAsync } from "@/lib/utils/try-catch";
import { discoverService } from "../services/discover.service";
import type { DiscoverSort } from "../types/discover.types";
import { DiscoverQuiz, discoverQuizSelect } from "../constants/discover.select";

export const getDiscoverQuizzes = async (sections: DiscoverSort[]) =>
  tryCatchAsync(async () => {
    return await Promise.all(
      sections.map(async (sort) => ({
        sort,
        quizzes: await discoverService.getQuizzes({
          select: discoverQuizSelect,
          sort,
          take: 10,
          // category,
          // cursor,
          // difficulty,
          // language,
          // search,
          // tags
        }),
      })),
    );
  });

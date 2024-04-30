import clientPromise from "@/app/lib/mongodb";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export interface Progress {
  ARKANOID: boolean[];
  RANDZU: boolean[];
  THIMBLERIG: boolean[];
  UI_TESTS_WEB: boolean[];
}

export const progressRouter = createTRPCRouter({
  getSolvedQuests: publicProcedure
    .input(z.object({ userAddress: z.string() }))
    .query(async ({ ctx, input }) => {
      return {
        quests: (
          await db.collection("statuses").findOne({
            address: input.userAddress,
          })
        )?.statuses as Progress | null,
      };
    }),
});

import clientPromise from "@/app/lib/mongodb";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export interface Progress {
  SOCIAL: Record<number, number>;
  LOTTERY: Record<number, number>;
  GIFT_CODES: Record<number, number>;
  FEEDBACK: Record<number, number>;
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
        )?.counter as Progress | null,
      };
    }),
});

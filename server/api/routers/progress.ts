import clientPromise from "@/app/lib/mongodb";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { PushOperator } from "mongodb";

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
        )?.counter as Record<string, Record<number, number>> | null,
      };
    }),
  setSolvedQuests: publicProcedure
    .input(
      z.object({
        userAddress: z.string(),
        section: z.string(),
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!db) return;

      await db.collection("statuses").updateOne(
        { address: input.userAddress },
        {
          $set: {
            [`statuses.${input.section}.${input.id}`]: true,
          },
          $inc: {
            [`counter.${input.section}.${input.id}`]: 1,
          },
        },
        {
          upsert: true,
        },
      );
      return {
        userAddress: input.userAddress,
        section: input.section,
        id: input.id,
      };
    }),
});

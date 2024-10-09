import clientPromise from "@/app/lib/mongodb";
import z from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { input } from "framer-motion/m";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export const leaderboardRouter = createTRPCRouter({
  getLeaderboard: publicProcedure.input(z.object({})).query(async () => {
    return {
      leaderboard: await db.collection("quest-leaderboard").find().toArray(),
    };
  }),
  getLeaderboardItem: publicProcedure
    .input(z.object({ userAddress: z.string() }))
    .query(
      async ({ input }) =>
        await db
          .collection("quest-leaderboard")
          .findOne({ userAddress: input.userAddress }),
    ),
  setLeaderboardItem: publicProcedure
    .input(
      z.object({
        userAddress: z.string(),
        score: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      await db
        .collection("quest-leaderboard")
        .updateOne(
          { userAddress: input.userAddress },
          { $set: { score: input.score } },
        );
    }),
});

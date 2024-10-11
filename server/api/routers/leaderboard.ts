import clientPromise from "@/app/lib/mongodb";
import z from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export const leaderboardRouter = createTRPCRouter({
  getLeaderboard: publicProcedure.input(z.object({})).query(async () => {
    return {
      leaderboard: await db.collection("quest-leaderboard").find({}).toArray(),
    };
  }),
  getLeaderboardItem: publicProcedure
    .input(z.object({ userAddress: z.string() }))
    .query(async ({ input }) => {
      return await db
        .collection("quest-leaderboard")
        .findOne({ userAddress: input.userAddress });
    }),
});

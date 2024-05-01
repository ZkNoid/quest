import clientPromise from "@/app/lib/mongodb";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

export const feedbackRouter = createTRPCRouter({
  sendFeedback: publicProcedure
    .input(z.object({ discord: z.string(), feedback: z.string(), address: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await db.collection("feedback").insertOne({
        address: input.address,
        discord: input.discord,
        feedback: input.feedback,
      });
    }),
});

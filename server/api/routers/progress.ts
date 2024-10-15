import clientPromise from "@/app/lib/mongodb";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { PushOperator } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

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

  checkDiscordSubscription: publicProcedure
    .input(
      z.object({
        userAddress: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!db) return;

      const section = "SOCIAL TASKS";
      const connectTaskId = 2;
      const joinTaskId = 3;

      const session: any = await getServerSession(authOptions);

      if (!session || !session.discord_access_token) return;

      if (
        !(await db.collection("statuses").findOne({
          [`statuses.${section}.${connectTaskId}`]: true,
          address: input.userAddress,
        }))
      ) {
        await db.collection("statuses").updateOne(
          { address: input.userAddress },
          {
            $set: {
              discordUser: session.user,
              [`statuses.${section}.${connectTaskId}`]: true,
            },
            $inc: {
              [`counter.${section}.${connectTaskId}`]: 1,
            },
          },
          {
            upsert: true,
          },
        );
      }
      if (
        !(await db.collection("statuses").findOne({
          [`statuses.${section}.${joinTaskId}`]: true,
          address: input.userAddress,
        }))
      ) {
        const userGuilds = (await fetch(
          `https://discord.com/api/users/@me/guilds`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session.discord_access_token}`,
            },
          },
        ).then((res) => res.json())) as any[];

        console.log("user guilds", userGuilds);

        const zkNoidServer = userGuilds.find(
          (x) => x.id == "1221774468242735134",
        );

        if (zkNoidServer) {
          console.log("ZkNoid server found");

          await db.collection("statuses").updateOne(
            { address: input.userAddress },
            {
              $set: {
                [`statuses.${section}.${joinTaskId}`]: true,
              },
              $inc: {
                [`counter.${section}.${joinTaskId}`]: 1,
              },
            },
            {
              upsert: true,
            },
          );
        }
      }
      return {
        userAddress: input.userAddress,
        section,
      };
    }),

  checkTwitterSubscription: publicProcedure
    .input(
      z.object({
        userAddress: z.string(),
        subscribeRequested: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!db) return;

      const section = "SOCIAL TASKS";
      const connectTaskId = 4;
      const joinTaskId = 5;

      const session: any = await getServerSession(authOptions);

      if (!session || !session.twitter_access_token) return;

      if (
        !(await db.collection("statuses").findOne({
          [`statuses.${section}.${connectTaskId}`]: true,
          address: input.userAddress,
        }))
      ) {
        await db.collection("statuses").updateOne(
          { address: input.userAddress },
          {
            $set: {
              twitterUser: session.user,
              [`statuses.${section}.${connectTaskId}`]: true,
            },
            $inc: {
              [`counter.${section}.${connectTaskId}`]: 1,
            },
          },
          {
            upsert: true,
          },
        );
      }
      if (
        !(await db.collection("statuses").findOne({
          [`statuses.${section}.${joinTaskId}`]: true,
          address: input.userAddress,
        }))
      ) {
        if (input.subscribeRequested) {
          await db.collection("statuses").updateOne(
            { address: input.userAddress },
            {
              $set: {
                [`statuses.${section}.${joinTaskId}`]: true,
              },
              $inc: {
                [`counter.${section}.${joinTaskId}`]: 1,
              },
            },
            {
              upsert: true,
            },
          );
        }
      }

      return {
        userAddress: input.userAddress,
        section,
      };
    }),
});

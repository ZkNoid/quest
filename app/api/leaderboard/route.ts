import clientPromise from "@/app/lib/mongodb";
import { questTasks } from "@/constants/quests";
import { NextRequest, NextResponse } from "next/server";

const client = await clientPromise;
const db = client.db(process.env.MONGODB_DB);

const handler = async (req: NextRequest) => {
  const statuses = await db.collection("statuses").find({}).toArray();
  const scores = await db.collection("quest-leaderboard").find({}).toArray();

  for (const status of statuses) {
    const solvedQuests = status.counter as Record<
      string,
      Record<number, number>
    > | null;

    let score = 0;
    let sectionId = 0;
    for (let prop in solvedQuests) {
      const questSectionName = solvedQuests[prop];
      let taskId = 0;
      for (let taskProp in questSectionName) {
        const taskScore = solvedQuests[prop][taskProp];
        score += taskScore > 0 ? questTasks[sectionId].tasks[taskId].points : 0;
        taskId++;
      }
      sectionId++;
    }

    if (
      scores.find((x) => x.userAddress == status.address)?.scores?.at(-1) !=
      score
    ) {
      await db.collection("quest-leaderboard").updateOne(
        {
          userAddress: status.address,
        },
        {
          // @ts-ignore
          $push: {
            scores: score,
            timestemps: Date.now(),
          },
        },
        {
          upsert: true,
        },
      );
    }
  }
  return NextResponse.json({ status: "ok" });
};

export { handler as GET, handler as POST };

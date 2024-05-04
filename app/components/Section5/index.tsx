"use client";

import { getQuestsArray } from "@/app/lib/utils";
import { useNetworkStore } from "@/lib/stores/network";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import Link from "next/link";

const TaskSection = ({
  id,
  name,
  tasks,
  statuses,
  last,
}: {
  id: number;
  name: string;
  tasks: string[];
  statuses: boolean[];
  last?: boolean;
}) => {
  return (
    <div>
      <div className="w-full grid grid-cols-[1fr_.25fr_1fr] items-start">
        <div className="w-full flex items-center text-[3.125vw] gap-[0.625vw]">
          <div className="bg-green w-[2.5vw] h-[2.5vw] rounded-[0.313vw] flex items-center justify-center text-dark">
            {id}
          </div>
          {name}
        </div>
        <div className="h-full flex justify-center">
          <div className="flex flex-col h-full items-center w-[1.875vw] relative">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[1.875vw] h-[1.875vw]"
            >
              <rect
                x="1"
                y="1.7627"
                width="28"
                height="28"
                rx="4"
                stroke={statuses.some((x) => x) ? "#D4FF33" : "#FFFCF5"}
                stroke-width="2"
                fill={statuses.every((x) => x) ? "#D4FF33" : "none"}
              />
            </svg>
            <div
              className={cn(
                "w-[1px] bg-green absolute top-[1.875vw]",
                statuses.some((x) => x) ? "bg-green" : "bg-white",
                last ? "h-[85%]" : "h-[calc(100%+2.5vw)]",
                statuses.some((x) => x) &&
                  !statuses.every((x) => x) &&
                  "bg-gradient-to-t from-white to-green"
              )}
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-roboto items-end">
          {tasks.map((x, i) => (
            <div
              className={cn(
                "w-[34.375vw] bg-green text-dark text-[1vw] px-[1.063vw] py-[0.938vw] rounded-[0.313vw] whitespace-pre-line relative",
                statuses[i] ? "bg-[rgb(140,160,62)] line-through" : "bg-green"
              )}
              key={i}
            >
              {x}
              {last && (
                <Link
                  href={"https://61s1tas45rv.typeform.com/to/WTz77lcM"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-[calc(4.125vw+0.375vw)] h-[calc(4.125vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group bottom-0 right-0 m-[0.625vw]"
                >
                  <div
                    className={cn(
                      "pl-[0.25vw] w-[4.125vw] h-[4.125vw] border-white rounded-[0.6vw] shadow-main border-[0.3125vw] flex items-center justify-center cursor-pointer",
                      "bg-green group-hover:shadow-none hover:font-black"
                    )}
                  >
                    <svg
                      className="w-[1.5vw]"
                      width="24"
                      height="39"
                      viewBox="0 0 24 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2L19.5 19.5L2 37"
                        stroke={"#141414"}
                        stroke-width="5"
                      />
                    </svg>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Section5 = () => {
  const network = useNetworkStore();

  const progressRouter = api.progress.getSolvedQuests.useQuery({
    userAddress: network.address ?? "None",
  });

  console.log('Arkanoid quests', Object.values(progressRouter.data?.quests?.ARKANOID || {}));
  return (
    <section
      className="w-full flex flex-col items-center pt-[10vw] text-[white] font-arame px-[6.4vw]"
      id="section5"
    >
      <div className="w-full text-[4.3vw] flex justify-between items-end pb-[2.5vw]">
        <div>
          <p className="leading-none">MAIN QUESTS</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[4.375vw]">
        <TaskSection
          id={1}
          name="ARKANOID"
          tasks={[
            "Take part in three different competitions of the Arkanoid game. In each, score at least 90000 points",
            "Create your own competition in the Arkanoid game with a budget of 30 MINA",
            `Create your own competition in the \
        Arkanoid game. Invite another participant of the testnet to register \
        and play there.`,
            `Participate in the competition, created by
        another person`,
            `Take part in the competition, created by another person and score at
        least 90000 point`,
          ]}
          statuses={getQuestsArray(progressRouter.data?.quests?.ARKANOID, 5)}
        />
        <TaskSection
          id={2}
          name="RANDZU"
          tasks={[
            "Play Randzu game three times with opponents",
            "Play Randzu game in two (or more) differents rooms with opponent",
            `Win in Randzu game at least once`,
          ]}
          statuses={getQuestsArray(progressRouter.data?.quests?.RANDZU, 3)}
        />
        <TaskSection
          id={3}
          name="THIMBLERIG"
          tasks={[
            "Play Thimblerig minimum three times",
            "Win in Thimblerig at least once",
            `Create you own lobby`,
            "Invite and play with another participants in your own lobby",
          ]}
          statuses={getQuestsArray(progressRouter.data?.quests?.THIMBLERIG, 4)}
        />
        <TaskSection
          id={4}
          name="UI TESTS WEB"
          tasks={[
            "Leave feedback and rate all the games from ZkNoid Game Store",
            "Choose one game from games list and add it to your favorite games by clicking on heart on game card on main page",
            `Bridge at least 50 MINA tests token`,
          ]}
          statuses={getQuestsArray(progressRouter.data?.quests?.UI_TESTS_WEB, 3)}
        />
        <TaskSection
          id={5}
          name="FILL THE FORM"
          tasks={[
            `Fill out the form

            At the end of your ZkNoid journey, we would like you to fill out a form to give our team your honest feedback on your game experience during the testnet. Let us know what you liked or didn't like about it. We would greatly appreciate it if you shared your thoughts and ideas with us.

            After filling out the form, all you need to do is wait for the 
            testnet airdrop to be completed after the official testnet has 
            finished.`,
          ]}
          last={true}
          statuses={[false]}
        />
      </div>
    </section>
  );
};

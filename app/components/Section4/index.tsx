"use client";

import { cn } from "@/lib/utils";
import Lightnings from "./assets/lightnings.svg";
import Vsign from "./assets/v-sign.svg";

import Image from "next/image";
import { ConnectWallet, WalletUpdater } from "../ConnectWallet";
import { useNetworkStore } from "@/lib/stores/network";
import { api } from "@/trpc/react";
import { getQuestsArray } from "@/app/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Progress = ({ step: stepRaw }: { step: number }) => {
  const step = Math.round((stepRaw / Number(process.env.QUESTS_NUM ?? 15)) * 8);

  const percents = [11, 22, 33, 44, 55, 66, 77, 88, 100];
  const percent = percents[step];

  const w = {
    11: "w-[11%]",
    22: "w-[22%]",
    33: "w-[33%]",
    44: "w-[44%]",
    55: "w-[55%]",
    66: "w-[66%]",
    77: "w-[77%]",
    88: "w-[88%]",
    100: "w-[100%]",
  }[percent];

  const to = {
    11: "to-[11%]",
    22: "to-[22%]",
    33: "to-[33%]",
    44: "from-[76%]",
    55: "from-[54%]",
    66: "from-[46%]",
    77: "from-[38%]",
    88: "from-[26%]",
    100: "from-[0%]",
  }[percent];

  return (
    <div className="h-[8.471vw] lg:!h-[2.25vw] w-full bg-gradient-to-r from-[#FF5B238F] to-[#D4FF338F] rounded-[1.176vw] lg:!rounded-[0.313vw] mt-[2.5vw] relative">
      <Image
        src={Vsign}
        alt="V-sign"
        className="absolute hidden lg:!block right-0 w-[13.188vw] bottom-0 cursor-pointer mr-[16.5vw]"
      />
      <div
        className={cn(
          "h-full rounded-[1.176vw] lg:!rounded-[0.313vw] w-[11%] text-opacity-0 lg:!text-opacity-100",
          "flex items-center justify-end pr-[0.625vw] text-dark text-[1.25vw]",
          percent <= 33 && "bg-red",
          percent > 33 && "bg-gradient-to-r from-[#FF5B23] to-[#D4FF33]",
          to,
          w,
        )}
      >
        {`${stepRaw} POINTS`}
      </div>
      <span
        className={"text-[4.706vw] lg:hidden font-arame text-red"}
      >{`${stepRaw} POINTS`}</span>
    </div>
  );
};

export const Section4 = () => {
  const network = useNetworkStore();
  const progressRouter = api.progress.getSolvedQuests.useQuery(
    {
      userAddress: network.address ?? "None",
    },
    {
      refetchInterval: 5000,
    },
  );
  const searchParams = useSearchParams();
  const page = searchParams?.get("page");

  const quests = [
    ...getQuestsArray(progressRouter.data?.quests?.SOCIAL ?? [], 5),
    ...getQuestsArray(progressRouter.data?.quests?.LOTTERY ?? [], 3, {
      0: 3,
      1: 2,
    }),
    ...getQuestsArray(progressRouter.data?.quests?.GIFT_CODES ?? [], 4, {
      0: 3,
    }),
    ...getQuestsArray(progressRouter.data?.quests?.FEEDBACK ?? [], 3),
  ];

  console.log("Quests", quests);

  const progress = Math.ceil(
    (8 * quests.filter(Boolean).length) / Number(process.env.QUESTS_NUM ?? 15),
  );

  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    let score = 0;
    for (let prop in progressRouter.data?.quests) {
      console.log("Processing prop", prop);
      const questSectionName = progressRouter.data?.quests[prop];
      for (let taskProp in questSectionName) {
        console.log("Processing task prop", taskProp);
        const taskScore = progressRouter.data?.quests[prop][taskProp];
        console.log("Got task score", taskScore);
        score += taskScore > 0 ? 1 : 0;
      }
    }
    setUserScore(score);
  }, [progressRouter.data]);

  return (
    <section
      className={cn(
        "w-full flex flex-col items-center lg:!pt-[10vw] text-[white] font-arame px-[6.4vw]",
        { "pt-[40vw]": page === "leaderboard" },
      )}
    >
      <WalletUpdater />
      <div className="w-full text-[9.412vw] lg:!text-[4.3vw] flex flex-col lg:!flex-row justify-between items-start lg:!items-end gap-[4.706vw] lg:!gap-0">
        <div>
          <p className="flex gap-[1.0625vw]">
            YOUR{" "}
            <Image
              src={Lightnings}
              alt="Lightnings"
              className="w-[14.588vw] lg:!w-[7.062vw]"
            ></Image>
          </p>
          <p className="leading-none">TASKS PROGRESS</p>
        </div>
        {!network.address ? (
          <div>
            <ConnectWallet dark={true} />
          </div>
        ) : (
          <Link
            className="hidden lg:!block w-[calc(47.059vw+1.882vw)] lg:!w-[calc(16vw+0.375vw)] h-[calc(11.765vw+1.882vw)] lg:!h-[calc(4.375vw+0.375vw)] hover:pt-[1.882vw] lg:hover:!pt-[0.375vw] hover:pl-[1.882vw] lg:hover:!pl-[0.375vw] group"
            href={"/?page=leaderboard"}
          >
            <div
              className={
                "w-[47.059vw] text-[3.765vw] lg:!text-[1.25vw] lg:!w-[16vw] h-[11.765vw] lg:!h-[4.375vw] rounded-[2.353vw] lg:!rounded-[0.6vw] flex items-center justify-between font-roboto cursor-pointer group-hover:shadow-none group-hover:font-black bg-green text-[black] shadow-mainWhite pl-[3.529vw] lg:!pl-[1vw] pr-[3.529vw] lg:!pr-[0.4vw]"
              }
            >
              <div>Show leaderboard</div>
              <div
                className={
                  "w-[9.412vw] lg:!w-[3.75vw] h-[9.412vw] lg:!h-[3.75vw] rounded-[2.353vw] lg:!rounded-[0.6vw] flex items-center justify-center pl-[0.25vw] bg-dark"
                }
              >
                <svg
                  width="24"
                  height="39"
                  viewBox="0 0 24 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:!w-[1.875vw] w-[6.118vw] lg:!h-[1.667vw] h-[5.176vw]"
                >
                  <path
                    d="M2 2L19.5 19.5L2 37"
                    stroke={"#fffcf5"}
                    stroke-width="5"
                    className={"group-hover:stroke-green"}
                  />
                </svg>
              </div>
            </div>
          </Link>
        )}
      </div>
      {network.address && (
        <>
          <Progress step={userScore} />
          <Link
            className="lg:!hidden w-full mt-[10vw] lg:!w-[calc(16vw+0.375vw)] h-[calc(11.765vw+1.882vw)] lg:!h-[calc(4.375vw+0.375vw)] hover:pt-[1.882vw] lg:hover:!pt-[0.375vw] hover:pl-[1.882vw] lg:hover:!pl-[0.375vw] group"
            scroll={false}
            href={"/?page=leaderboard"}
          >
            <div
              className={
                "w-full text-[3.765vw] lg:!text-[1.25vw] lg:!w-[16vw] h-[11.765vw] lg:!h-[4.375vw] rounded-[2.353vw] lg:!rounded-[0.6vw] flex items-center justify-between font-roboto font-medium cursor-pointer group-hover:shadow-none group-hover:font-black bg-[#141414] border border-white text-white shadow-mainWhite pl-[3.529vw] lg:!pl-[1vw] pr-[3.529vw] lg:!pr-[0.4vw]"
              }
            >
              <div>Show leaderboard</div>
              <div
                className={
                  "w-[9.412vw] lg:!w-[3.75vw] h-[9.412vw] lg:!h-[3.75vw] rounded-[2.353vw] lg:!rounded-[0.6vw] flex items-center justify-center pl-[0.25vw] bg-green"
                }
              >
                <svg
                  width="24"
                  height="39"
                  viewBox="0 0 24 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:!w-[1.875vw] w-[6.118vw] lg:!h-[1.667vw] h-[5.176vw]"
                >
                  <path
                    d="M2 2L19.5 19.5L2 37"
                    stroke={"#000"}
                    stroke-width="5"
                    className={"group-hover:stroke-green"}
                  />
                </svg>
              </div>
            </div>
          </Link>
        </>
      )}
    </section>
  );
};

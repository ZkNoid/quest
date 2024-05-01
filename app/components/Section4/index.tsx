"use client";

import { cn } from "@/lib/utils";
import Lightnings from "./assets/lightnings.svg";
import Vsign from "./assets/v-sign.svg";

import Image from "next/image";
import { ConnectWallet, WalletUpdater } from "../ConnectWallet";
import { useNetworkStore } from "@/lib/stores/network";
import { api } from "@/trpc/react";
import { getQuestsArray } from "@/app/lib/utils";

const Progress = ({ step: stepRaw }: { step: number }) => {
  const step = stepRaw % 9;

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

  const rank = [
    "BEGGINER",
    "YOUNG SNAKE",
    "ACTIVE SNAKE",
    "LUCKY SNAKE",
    "THE SNAKE SQUIRE",
    "THE KNIGHTED SNAKE",
    "STRONG WARRIOR SNAKE",
    "THE KING COBRA",
    "WISE SNAKE",
  ][step];

  return (
    <div className="h-[2.25vw] w-full bg-gradient-to-r from-[#FF5B238F] to-[#D4FF338F] rounded-[0.313vw] mt-[2.5vw] relative">
      <Image
        src={Vsign}
        alt="V-sign"
        className="absolute right-0 w-[13.188vw] bottom-0 cursor-pointer"
      />
      <div
        className={cn(
          "h-full rounded-[0.313vw] w-[11%]",
          "flex items-center justify-end pr-[0.625vw] text-dark text-[1.25vw]",
          percent <= 33 && "bg-red",
          percent > 33 && "bg-gradient-to-r from-[#FF5B23] to-[#D4FF33]",
          to,
          w
        )}
      >
        {`${rank} ${percent}%`}
      </div>
    </div>
  );
};


export const Section4 = () => {
  const network = useNetworkStore();
  const progressRouter = api.progress.getSolvedQuests.useQuery({
    userAddress: network.address ?? "",
  });

  const quests = [
    ...getQuestsArray(progressRouter.data?.quests?.ARKANOID ?? [], 5),
    ...getQuestsArray(progressRouter.data?.quests?.RANDZU ?? [], 3),
    ...getQuestsArray(progressRouter.data?.quests?.THIMBLERIG ?? [], 4),
    ...getQuestsArray(progressRouter.data?.quests?.UI_TESTS_WEB ?? [], 3),
  ];

  console.log("Quests", quests);

  const progress = Math.ceil(
    (8 * quests.filter(Boolean).length) / Number(process.env.QUESTS_NUM ?? 15)
  );

  console.log(progress);

  return (
    <section className="w-full flex flex-col items-center pt-[10vw] text-[white] font-arame px-[6.4vw]">
      <WalletUpdater />
      <div className="w-full text-[4.3vw] flex justify-between items-end">
        <div>
          <p className="flex gap-[1.0625vw]">
            YOUR{" "}
            <Image
              src={Lightnings}
              alt="Lightnings"
              className="w-[7.062vw]"
            ></Image>
          </p>
          <p className="leading-none">TASKS PROGRESS</p>
        </div>
        {!network.address && (
          <div>
            <ConnectWallet dark={true} />
          </div>
        )}
      </div>
      {network.address && <Progress step={progress} />}
    </section>
  );
};

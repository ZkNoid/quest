"use client";

import Medusa from "./assets/medusa-lottery.svg";
import MedusaLotteryMobile from "./assets/medusa-lottery-mobile.svg";
import Image from "next/image";
import { DateTime, DurationObjectUnits, Interval } from "luxon";
import { useEffect, useState } from "react";
import { ConnectWallet } from "../ConnectWallet";

const ClockBlock = ({ number, label }: { number: number; label: string }) => {
  return (
    <div className="w-[16.941vw] lg:!w-[15vw] h-[13.176vw] lg:!h-[11vw] bg-dark rounded-[10px] text-[white] font-arame text-[10.588vw] lg:!text-[8vw] text-center relative flex items-center justify-center">
      <div className="pb-2">{String(number).padStart(2, "0")}</div>
      <div className="absolute bottom-0.5 lg:!bottom-1 font-roboto text-[2.353vw] lg:!text-[1vw] ml-auto w-full font-normal">
        {label}
      </div>
    </div>
  );
};

const TimerLabel = () => {
  return (
    <div className="bg-dark w-[75.294vw] lg:w-[50vw] h-[7.059vw] lg:!h-[3.26vw] rounded-[0.6vw] text-green font-arame flex items-center justify-center text-[5.647vw] lg:!text-[3vw]">
      {/*TESTNET START AT 14TH OCTOBER*/}
      TESTNET START AT
    </div>
  );
};

export function Section1() {
  const getTimeLeft = () => {
    return Interval.fromDateTimes(
      DateTime.now(),
      DateTime.fromSQL("2024-10-14 00:00:00"),
    )
      .toDuration(["days", "hours", "minutes", "seconds"])
      .toObject();
  };
  const [eventEndsIn, setEventEndsIn] = useState<
    DurationObjectUnits | undefined
  >(undefined);
  useEffect(() => {
    setEventEndsIn(getTimeLeft());

    const interval = setInterval(() => {
      setEventEndsIn(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center" id="section1">
      <div className="w-[102vw] h-[124.706vw] lg:!h-[102vw] left-[-1vw] bg-green absolute top-[20vw] lg:!top-0 rounded-b-[50vw] rounded-t-none lg:!rounded-t-full lg:!rounded-b-full mt-[-50vw] z-[-100]" />
      <div className="flex flex-col relative">
        <Image
          src={Medusa}
          alt={"Medusa"}
          className="mt-[10vw] lg:!mt-[-5vw] z-[-100] w-[84.706vw] lg:!w-[66.8vw]"
        />
        <div className="flex justify-center absolute bottom-[-18vw] lg:!bottom-[-6vw] w-full flex-col items-center gap-[2.353vw] lg:!gap-[0.8vw]">
          <div className="flex gap-[2.353vw] lg:!gap-[1vw]">
            <ClockBlock number={eventEndsIn?.days ?? 0} label="Days" />
            <ClockBlock number={eventEndsIn?.hours ?? 0} label="Hours" />
            <ClockBlock number={eventEndsIn?.minutes ?? 0} label="Minutes" />
            <ClockBlock
              number={Math.trunc(eventEndsIn?.seconds ?? 0)}
              label="Seconds"
            />
          </div>
          <TimerLabel />
          <ConnectWallet />
        </div>
      </div>
    </section>
  );
}

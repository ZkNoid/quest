"use client";

import Medusa from "./assets/medusa.svg";
import Image from "next/image";
import { DateTime, DurationObjectUnits, Interval } from "luxon";
import { useEffect, useState } from "react";

const ClockBlock = ({ number, label }: { number: number; label: string }) => {
  return (
    <div className="w-[15vw] h-[11vw] bg-dark rounded-[10px] text-[white] font-arame text-[8vw] text-center relative flex items-center justify-center">
      <div className="pb-2">{String(number).padStart(2, "0")}</div>
      <div className="absolute bottom-1 font-roboto text-[1vw] ml-auto w-full font-normal">
        {label}
      </div>
    </div>
  );
};

const TimerLabel = () => {
  return (
    <div className="bg-dark w-[30vw] h-[3.26vw]  rounded-[0.6vw] text-green font-arame flex items-center justify-center text-[3vw]">
      TESTNET ENDS IN
    </div>
  );
};

const ConnectWalletButton = () => {
  return (
    <div className="bg-[white] w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-between shadow-main font-roboto text-[1.25vw] pl-[1vw] pr-[0.4vw] cursor-pointer">
      <div>Connect Wallet</div>
      <div className="w-[3.75vw] h-[3.75vw] rounded-[0.6vw] bg-green flex items-center justify-center pl-[0.25vw]">
        <svg
          className="w-[1.5vw]"
          width="24"
          height="39"
          viewBox="0 0 24 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2L19.5 19.5L2 37" stroke="#141414" stroke-width="5" />
        </svg>
      </div>
    </div>
  );
};

export function Section1() {
  const getTimeLeft = () => {
    return Interval.fromDateTimes(
      DateTime.now(),
      DateTime.fromMillis(new Date("2024-04-30").getTime())
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
    <section className="w-full flex flex-col items-center">
      <div className="w-[102vw] h-[102vw] left-[-1vw] bg-green absolute top-0 rounded-full mt-[-50vw] z-[-100]" />
      <div className="flex flex-col relative">
        <Image
          src={Medusa}
          alt={"Medusa"}
          className="mt-[-5vw] z-[-100] w-[66.8vw]"
        ></Image>
        <div className="flex justify-center absolute bottom-[-1.5vw] w-full flex-col items-center gap-[0.8vw]">
          <div className="flex gap-[1vw]">
            <ClockBlock number={eventEndsIn?.days ?? 0} label="Days" />
            <ClockBlock number={eventEndsIn?.hours ?? 0} label="Hours" />
            <ClockBlock number={eventEndsIn?.minutes ?? 0} label="Minutes" />
            <ClockBlock
              number={Math.trunc(eventEndsIn?.seconds ?? 0)}
              label="Seconds"
            />
          </div>
          <TimerLabel />
          <ConnectWalletButton />
        </div>
      </div>
    </section>
  );
}

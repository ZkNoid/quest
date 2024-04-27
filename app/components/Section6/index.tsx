"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";
import DecorationSVG from "./assets/decoration.svg";
import GoodJob from "./assets/good-job.svg";

const Card = ({
  bg,
  title,
  heading,
  items,
  isWhite,
  children,
}: {
  bg: string;
  title: string;
  heading: string;
  isWhite: boolean;
  items: string[];
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-[0.625vw] px-[0.938vw] py-[1.875vw] flex flex-col gap-[0.938vw]",
        isWhite ? "text-white" : "text-dark",
        bg
      )}
    >
      <p className="text-[3.125vw] leading-none">{title}</p>
      <div className="p-[0.313vw]">
        <p className="text-[2vw] font-roboto leading-none pb-[1.5vw]">
          {heading}
        </p>
        <div className="flex flex-col gap-[1.25vw]">
          {items.map((x, i) => (
            <div className="font-roboto text-[1vw] flex gap-[0.625vw]" key={i}>
              <div
                className={cn(
                  "min-w-[2.5vw] h-[2.5vw] rounded-[0.313vw] flex items-center justify-center font-arame text-[2.5vw]",
                  isWhite ? "bg-white text-dark" : "bg-dark text-white"
                )}
              >
                {i}
              </div>
              <div>{x}</div>
            </div>
          ))}
          {children}
        </div>
      </div>
    </div>
  );
};

export const Section6 = () => {
  return (
    <section className="w-full flex flex-col items-center pt-[10vw] text-[white] font-arame px-[6.4vw]">
      <div className="w-full text-[4.3vw] flex justify-between items-end pb-[2.5vw]">
        <div>
          <p className="leading-none">ADDITIONAL QUESTS</p>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full flex-col gap-[1.375vw] relative">
        <div className="w-full">
          <div className="font-roboto text-[1.25vw] pb-[1.5vw]">
            Additional tasks are not part of the list required to receive the
            general award, but if you wish to be eligible for a specific award,
            you could help the team by completing a few more tasks.
          </div>
          <Card
            bg="bg-violet"
            title="Ui Tests Mobile"
            heading="To complete this quest you need to download Auro wallet to your mobile device"
            items={[
              "Open our ZkApp in Aura Wallet App and test one or all games on mobile device",
              "Describe your experience about mobile gaming in ZkNoid Quest page",
              "Report about all bugs and Broken buttons and not working features",
              "Suggest what could be improved in user experience and user interface in ZkNoid Quest page",
            ]}
            isWhite={false}
          />
        </div>
        <div className="w-full flex flex-col gap-[1.25vw]">
          <Card
            bg="bg-green"
            title="Social"
            heading="Discord & Social Media activities"
            items={[
              "Share in any social media (twitter, telegram, reddit…) your victory or the game process. Don’t forgot to send in our discord channel proof (link or screenshoot of your post)",
              "Help another participants with their issues during testnet process. We appreciate when community help each other",
              "Invite your friend to take part in the testnet",
              "Report about all bugs you found during the testnet in special chat in Discord channel",
            ]}
            isWhite={false}
          />
          <Card
            bg="bg-red"
            title="Checkers game"
            heading="Play in new released game and send your feedback"
            items={[
              "Play in early-released checkers game more then one time and describe your experience in chat or in the form",
              "Win one time in checkers game",
            ]}
            isWhite={true}
          />
        </div>
        <div>
          <Card
            bg="bg-blue"
            title="Feedback form"
            heading="Write here about any of your successes in additional tasks"
            items={[]}
            isWhite={true}
          >
            <div className="w-full">
              <p className="text-[1vw] pb-[0.625vw]">Your Discord handle</p>
              <input
                className="w-full h-[3.5vw] bg-blue border rounded-[0.625vw] p-[0.625vw]"
                placeholder="Type here your discord nickname..."
              />
            </div>
            <div className="w-full">
              <p className="text-[1vw] pb-[0.625vw]">
                Describe your activity ;)
              </p>
              <textarea
                className="w-full bg-blue border rounded-[0.625vw] p-[0.625vw] h-[9vw]"
                placeholder="Type here your discord nickname..."
              />
            </div>
            <div className="bg-[white] w-[97%] h-[4.375vw] rounded-[0.6vw] flex items-center justify-center shadow-main gap-[1vw] font-roboto font-regular text-[1.25vw] cursor-pointer mr-[6.25vw] text-dark hover:shadow-none hover:border hover:font-black">
              Send my feedback
            </div>
          </Card>
        </div>
        <Image
          src={DecorationSVG}
          alt=""
          className="absolute bottom-0 w-[52.125vw] right-[-9.8vw] z-[-100]"
        />
        <Image
          src={GoodJob}
          alt=""
          className="absolute bottom-0 w-[12.688vw] right-[-2.8vw] z-[-100]"
        />
      </div>

      <div className="pt-[10vw] w-full flex justify-end text-[1.25vw] pb-[2.969vw] ">
        <div
          className="flex items-center text-green cursor-pointer gap-[0.625vw]"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
              /* you can also use 'auto' behaviour 
               in place of 'smooth' */
            });
          }}
        >
          BACK TO TOP{" "}
          <svg
            width="22"
            height="13"
            viewBox="0 0 22 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8975L11 1.89746L21 11.8975"
              stroke="#D4FF33"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

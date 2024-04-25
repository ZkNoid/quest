import Image from "next/image";
import DiscordSVG from "./assets/discord.svg";
import TelegramSVG from "./assets/telegram.svg";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Card = ({
  title,
  text,
  index,
  bg,
  textBg,
  children,
}: {
  title: string;
  text: string;
  index: number;
  bg: string;
  textBg: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        " rounded-[0.6vw] p-[0.9375vw] relative overflow-hidden",
        bg,
        index % 2 == 0 && "text-dark top-[4.3vw]"
      )}
    >
      <div
        className={cn(
          "absolute font-bold bottom-[-10vw] text-[17.5vw] flex left-[0.3vw]",
          textBg
        )}
      >
        {`O${index}`}
      </div>
      <p className="text-[3.125vw]">{title}</p>
      <p className="text-[2vw] font-roboto">{text}</p>
      {children ?? (
        <div
          className={cn(
            " pl-1 w-[4.125vw] h-[4.125vw] border-white absolute bottom-0 right-0 m-[0.625vw] rounded-[0.6vw] shadow-main border-[0.3125vw] flex items-center justify-center cursor-pointer",
            bg
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
              stroke={index % 2 == 1 ? "#FFFCF5" : "#141414"}
              stroke-width="5"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
export const Section2 = () => {
  return (
    <section className="w-full flex flex-col items-center pt-[10vw] text-[white] font-arame px-[6.4vw]">
      <div className="w-full text-[4.3vw]">
        <p>HOW</p>
        <p>TO TAKE A PART?</p>
        <div className="w-full grid grid-cols-4 h-[34vw] mb-[4.3vw] mt-[2vw]">
          <Card
            title="CONNECT"
            text="Join Discord and Telegram channel"
            index={1}
            bg="bg-blue"
            textBg="text-[rgb(13,13,255)]"
          >
            <div className="flex gap-[1.875vw] pt-[1vw]">
              <div className="w-[4.125vw] h-[4.125vw] bg-white rounded-[0.6vw] shadow-main flex items-center justify-center cursor-pointer">
                <Image
                  src={DiscordSVG}
                  alt="discord"
                  className="w-[2.8125vw]"
                ></Image>
              </div>
              <div className="w-[4.125vw] h-[4.125vw] bg-white rounded-[0.6vw] shadow-main flex items-center justify-center cursor-pointer">
                <Image
                  src={TelegramSVG}
                  alt="telegram"
                  className="w-[2.8125vw]"
                ></Image>
              </div>
            </div>
          </Card>
          <Card
            title="CREATE"
            text="Create Auro Wallet or use your own if you already have it"
            index={2}
            bg="bg-green"
            textBg="text-[rgb(188,253,80)]"
          />
          <Card
            title="GET TOKENS"
            text="During all testnet you can use test MINA token, they can be
            received in the official faucet in Berkley Chain"
            index={3}
            bg="bg-red"
            textBg="text-[rgb(234,62,38)]"
          />
          <Card
            title="CHALLENGE"
            text="Finish the tasks and Fill The Form"
            index={4}
            bg="bg-violet"
            textBg="text-[rgb(175,116,247)]"
          />
        </div>
      </div>
    </section>
  );
};

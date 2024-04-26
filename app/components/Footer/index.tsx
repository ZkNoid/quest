import LogoSVG from "./assets/logo.svg";
import Discord from "./assets/discord.svg";
import Telegram from "./assets/telegram.svg";
import Twitter from "./assets/twitter.svg";
import Medium from "./assets/medium.svg";
import Github from "./assets/github.svg";

import Image from "next/image";
export const Footer = () => {
  return (
    <div className="w-full h-[9.125vw] bg-green flex flex-row justify-between py-[2.06vw] items-center">
      <Image
        src={LogoSVG}
        alt="logo"
        className="w-[12.875vw] h-[2.56vw] ml-[3.1vw] mb-[1.25vw]"
      />
      <div className="flex gap-[2.25vw]">
        <div className="bg-[white] w-[4.125vw] h-[4.125vw] rounded-[0.6vw] flex items-center justify-center shadow-main cursor-pointer">
          <Image src={Discord} alt="Discord" className="w-[2.813vw]" />
        </div>
        <div className="bg-[white] w-[4.125vw] h-[4.125vw] rounded-[0.6vw] flex items-center justify-center shadow-main cursor-pointer">
          <Image src={Telegram} alt="Telegram" className="w-[2.813vw]" />
        </div>
        <div className="bg-[white] w-[4.125vw] h-[4.125vw] rounded-[0.6vw] flex items-center justify-center shadow-main cursor-pointer">
          <Image src={Twitter} alt="Twitter" className="w-[2.813vw]" />
        </div>
        <div className="bg-[white] w-[4.125vw] h-[4.125vw] rounded-[0.6vw] flex items-center justify-center shadow-main cursor-pointer">
          <Image src={Medium} alt="Medium" className="w-[2.813vw]" />
        </div>
        <div className="bg-[white] w-[4.125vw] h-[4.125vw] rounded-[0.6vw] flex items-center justify-center shadow-main cursor-pointer">
          <Image src={Github} alt="Github" className="w-[2.813vw]" />
        </div>
      </div>
      <div>
        <div className="bg-[white] w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-between shadow-main font-roboto text-[1.25vw] pl-[1vw] pr-[0.4vw] cursor-pointer mr-[3.1vw]">
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
      </div>
    </div>
  );
};

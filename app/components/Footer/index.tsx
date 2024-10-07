import LogoSVG from "./assets/logo.svg";
import Image from "next/image";
import { Socials } from "../Socials";
import { ConnectWallet } from "../ConnectWallet";

export const Footer = () => {
  return (
    <div className="w-full mt-[10vw] h-[54.118vw] lg:!h-[9.125vw] bg-green flex flex-row justify-between py-[2.06vw] items-center">
      <Image
        src={LogoSVG}
        alt="logo"
        className="w-[12.875vw] h-[2.56vw] ml-[3.1vw] mb-[1.25vw]"
      />
      <Socials showGithub={true} />
      <div className="mr-[3.1vw]">
        <ConnectWallet />
      </div>
    </div>
  );
};

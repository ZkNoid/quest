import LogoSVG from "./assets/logo.svg";
import Image from "next/image";
import { Socials } from "../Socials";
import { ConnectWallet } from "../ConnectWallet";

export const Footer = () => {
  return (
    <div className="w-full mt-[10vw] h-[54.118vw] lg:!h-[9.125vw] bg-green flex flex-col lg:!flex-row justify-between p-[4.706vw] lg:!px-0 lg:!py-[2.06vw] items-start lg:!items-center">
      <Image
        src={LogoSVG}
        alt="logo"
        className="w-[36.471vw] lg:!w-[12.875vw] h-[7.059vw] lg:!h-[2.56vw] lg:!ml-[3.1vw] lg:!mb-[1.25vw]"
      />
      <Socials showGithub={true} />
      <div className="mr-[3.1vw]">
        <ConnectWallet />
      </div>
    </div>
  );
};

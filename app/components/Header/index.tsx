import LogoSVG from "./assets/logo.svg";
import Discord from "./assets/discord.svg";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useNetworkStore, walletInstalled } from "@/lib/stores/network";
export default function Header() {
  const networkStore = useNetworkStore();

  useEffect(() => {
    if (!walletInstalled()) return;

    networkStore.connectWallet(true);
  }, []);

  return (
    <div className="w-full flex-row justify-between py-[2.06vw] hidden lg:!flex">
      <Image
        src={LogoSVG}
        alt="logo"
        className="w-[12.875vw] h-[2.56vw] ml-[3.1vw]"
      />
      <div className="w-[calc(16vw+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group mr-[6.25vw]">
        <Link
          href={"https://discord.gg/hndRCZwQnb"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[white] w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-center shadow-main group-hover:shadow-none group-hover:border group-hover:font-black gap-[1vw] font-roboto font-regular text-[1.25vw] cursor-pointer"
        >
          <Image src={Discord} alt="logo" className="w-[3.4vw] h-[2.56vw]" />
          Join our discord
        </Link>
      </div>
    </div>
  );
}

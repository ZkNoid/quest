import LogoSVG from "./assets/logo.svg";
import Discord from "./assets/discord.svg";

import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full flex flex-row justify-between py-[2.06vw]">
      <Image
        src={LogoSVG}
        alt="logo"
        className="w-[12.875vw] h-[2.56vw] ml-[3.1vw]"
      />
      <Link
        href={"https://discord.gg/hndRCZwQnb"}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[white] w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-center shadow-main hover:shadow-none hover:border hover:font-black gap-[1vw] font-roboto font-regular text-[1.25vw] cursor-pointer mr-[6.25vw]"
      >
        <Image src={Discord} alt="logo" className="w-[3.4vw] h-[2.56vw]" />
        Join our discord
      </Link>
    </div>
  );
}

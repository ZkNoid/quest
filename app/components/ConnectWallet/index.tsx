import { cn } from "@/lib/utils";
import Link from "next/link";

export const ConnectWallet = ({
  text,
  dark,
}: {
  text?: string;
  dark?: boolean;
}) => {
  return (
    <div className="w-[calc(16vw+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group">
      <div
        className={cn(
          "w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-between font-roboto text-[1.25vw] pl-[1vw] pr-[0.4vw] cursor-pointer group-hover:shadow-none group-hover:font-black",
          dark
            ? "bg-green text-[black] shadow-mainWhite"
            : "bg-[white] shadow-main group-hover:border"
        )}
      >
        <div>{text ?? "Connect Wallet"}</div>
        <div
          className={cn(
            "w-[3.75vw] h-[3.75vw] rounded-[0.6vw] flex items-center justify-center pl-[0.25vw]",
            dark ? "bg-dark" : "bg-green"
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
              stroke={dark ? "#fffcf5" : "#141414"}
              stroke-width="5"
              className={cn(dark && "group-hover:stroke-green")}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const LinkButton =
  ({ text, href, bg }: { text: string; href: string; bg: string; }) => {
    return (
      <Link href={href} className="w-[calc(16vw+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group">
        <div
          className={cn(
            "w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-between font-roboto text-[1.25vw] pl-[1vw] pr-[0.4vw] cursor-pointer group-hover:shadow-none group-hover:font-black",
            "bg-[white] shadow-main group-hover:border"
          )}
        >
          <div>{text ?? "Connect Wallet"}</div>
          <div
            className={cn(
              "w-[3.75vw] h-[3.75vw] rounded-[0.6vw] flex items-center justify-center pl-[0.25vw]",
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
                stroke={"#141414"}
                stroke-width="5"
              />
            </svg>
          </div>
        </div>
      </Link>
    );
  };

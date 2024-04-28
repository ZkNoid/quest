import { cn } from "@/lib/utils";

export const ConnectWallet = ({
  text,
  dark,
}: {
  text?: string;
  dark?: boolean;
}) => {
  return (
    <div className="w-[calc(16vw+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group mr-[3.1vw]">
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

<div className="w-[calc(16vw+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group">
  <div className="bg-green w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-between shadow-mainWhite font-roboto text-[1.25vw] pl-[1vw] pr-[0.4vw] cursor-pointer text-[black] group-hover:shadow-none group-hover:font-black group">
    <div>Connect Wallet</div>
    <div className="w-[3.75vw] h-[3.75vw] rounded-[0.6vw] bg-dark flex items-center justify-center pl-[0.25vw]">
      <svg
        className="w-[1.5vw]"
        width="24"
        height="39"
        viewBox="0 0 24 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2L19.5 19.5L2 37" stroke="#fffcf5" stroke-width="5" />
      </svg>
    </div>
  </div>
</div>;

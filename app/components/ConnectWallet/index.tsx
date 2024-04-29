"use client";
import { useNetworkStore } from "@/lib/stores/network";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

export const WalletUpdater = () => {
  const networkStore = useNetworkStore();

  useEffect(() => {
    if (!networkStore.walletInstalled()) return;

    (async () => {
      const listener = async (accounts: string[]) => {
        const [account] = accounts;
        networkStore.onWalletConnected(account);
      };

      (window.mina as any).on("accountsChanged", listener);

      // let [account] = await (window as any).mina.requestAccounts();

      // networkStore.onWalletConnected(account);

      return () => {
        (window.mina as any).removeListener(listener);
      };
    })();
  }, []);
  return <></>;
};

export const ConnectWallet = ({
  text,
  dark,
}: {
  text?: string;
  dark?: boolean;
}) => {
  const networkStore = useNetworkStore();

  const formatAddress = (address: string | undefined) =>
    address ? address.slice(0, 12) + "..." : "None";

  return (
    <div
      className="w-[calc(16vw+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group"
      onClick={() => {
        if (!networkStore.walletInstalled()) {
          window.open("https://www.aurowallet.com/", "_blank");
        } else {
          networkStore.connectWallet();
        }

      }}
    >
      <div
        className={cn(
          "w-[16vw] h-[4.375vw] rounded-[0.6vw] flex items-center justify-between font-roboto text-[1.25vw]  cursor-pointer group-hover:shadow-none group-hover:font-black",
          dark
            ? "bg-green text-[black] shadow-mainWhite"
            : "bg-[white] shadow-main group-hover:border",
          networkStore.walletConnected
            ? "flex-row-reverse pr-[1vw] pl-[0.4vw]"
            : "pl-[1vw] pr-[0.4vw]"
        )}
      >
        <div>
          {networkStore.address
            ? formatAddress(networkStore.address)
            : text ?? "Connect Wallet"}
        </div>
        <div
          className={cn(
            "w-[3.75vw] h-[3.75vw] rounded-[0.6vw] flex items-center justify-center pl-[0.25vw]",
            dark ? "bg-dark" : "bg-green"
          )}
        >
          {networkStore.address ? (
            <svg
              width="36"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6 7.11111H28.8V5.33333C28.8 3.91885 28.2311 2.56229 27.2184 1.5621C26.2057 0.561903 24.8322 0 23.4 0H5.4C3.96783 0 2.59432 0.561903 1.58162 1.5621C0.568927 2.56229 0 3.91885 0 5.33333V26.6667C0 28.0812 0.568927 29.4377 1.58162 30.4379C2.59432 31.4381 3.96783 32 5.4 32H30.6C32.0322 32 33.4057 31.4381 34.4184 30.4379C35.4311 29.4377 36 28.0812 36 26.6667V12.4444C36 11.03 35.4311 9.6734 34.4184 8.67321C33.4057 7.67301 32.0322 7.11111 30.6 7.11111ZM5.4 3.55556H23.4C23.8774 3.55556 24.3352 3.74286 24.6728 4.07625C25.0104 4.40965 25.2 4.86184 25.2 5.33333V7.11111H5.4C4.92261 7.11111 4.46477 6.92381 4.12721 6.59041C3.78964 6.25701 3.6 5.80483 3.6 5.33333C3.6 4.86184 3.78964 4.40965 4.12721 4.07625C4.46477 3.74286 4.92261 3.55556 5.4 3.55556ZM32.4 21.3333H30.6C30.1226 21.3333 29.6648 21.146 29.3272 20.8126C28.9896 20.4792 28.8 20.0271 28.8 19.5556C28.8 19.0841 28.9896 18.6319 29.3272 18.2985C29.6648 17.9651 30.1226 17.7778 30.6 17.7778H32.4V21.3333ZM32.4 14.2222H30.6C29.1678 14.2222 27.7943 14.7841 26.7816 15.7843C25.7689 16.7845 25.2 18.1411 25.2 19.5556C25.2 20.97 25.7689 22.3266 26.7816 23.3268C27.7943 24.327 29.1678 24.8889 30.6 24.8889H32.4V26.6667C32.4 27.1382 32.2104 27.5903 31.8728 27.9237C31.5352 28.2571 31.0774 28.4444 30.6 28.4444H5.4C4.92261 28.4444 4.46477 28.2571 4.12721 27.9237C3.78964 27.5903 3.6 27.1382 3.6 26.6667V10.3644C4.17828 10.5654 4.78698 10.6676 5.4 10.6667H30.6C31.0774 10.6667 31.5352 10.854 31.8728 11.1874C32.2104 11.5208 32.4 11.9729 32.4 12.4444V14.2222Z"
                fill={dark ? "#fffcf5" : "#141414"}
              />
            </svg>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export const LinkButton = ({
  text,
  href,
  bg,
}: {
  text: string;
  href: string;
  bg: string;
}) => {
  return (
    <Link
      href={href}
      className="w-[calc(16vw+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group"
    >
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
            <path d="M2 2L19.5 19.5L2 37" stroke={"#141414"} stroke-width="5" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

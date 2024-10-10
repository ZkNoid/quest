"use client";

import { useNetworkStore } from "@/lib/stores/network";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";

interface ILeaderboard {
  userAddress: string;
  score: number;
}

export default function Leaderboard() {
  const networkStore = useNetworkStore();
  const getLeaderboardQuery = api.leaderboard.getLeaderboard.useQuery(
    {},
    { refetchInterval: 5000 },
  );

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [leaderboard, setLeaderboard] = useState<ILeaderboard[]>([]);

  const formatAddress = (address: string | undefined, slices?: number) =>
    address
      ? address.slice(0, slices || 15) +
        "......" +
        address.slice(slices ? -slices : -15)
      : "None";

  useEffect(() => {
    const checkIsMobile = () => {
      window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (getLeaderboardQuery?.data?.leaderboard) {
      // @ts-ignore
      setLeaderboard(getLeaderboardQuery.data.leaderboard);
    }
  }, [getLeaderboardQuery.data]);

  const filteredLeaderboard = leaderboard
    .sort((a, b) => b.score - a.score)
    .slice(0, 11);

  return (
    <section className={"flex flex-col gap-[1vw] w-full px-[6.4vw] pt-[10vw]"}>
      <Link
        href={"/"}
        scroll={false}
        className={
          "w-fit group border border-white hover:border-green hover:bg-green py-[1.882vw] px-[3.765vw] lg:!p-[0.521vw] gap-[1.882vw] lg:!gap-[0.521vw] rounded-[0.26vw] hover:text-[black] text-white flex justify-center items-center"
        }
      >
        <svg
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"w-[1.647vw] lg:!w-[0.573vw]"}
        >
          <path
            d="M9.12915 1L1.87109 8.5L9.12915 16"
            stroke="#FFFCF5"
            stroke-width="2"
            stroke-linecap="round"
            className={"group-hover:stroke-dark"}
          />
        </svg>
        <span
          className={
            "text-[3.294vw] lg:!text-[0.833vw] font-roboto font-medium"
          }
        >
          Back
        </span>
      </Link>
      <div className={"flex flex-row justify-between items-center w-full"} id="leaderboard">
        <span
          className={"text-[9.412vw] lg:!text-[3.646vw] font-arame text-white"}
        >
          LEADERBOARD
        </span>
        {networkStore.address &&
          filteredLeaderboard.find(
            (item) => item.userAddress === networkStore.address,
          ) && (
            <button
              className={
                "hover:opacity-80 cursor-pointer bg-green hidden lg:!flex rounded-[0.26vw] px-[0.781vw] py-[0.417vw] flex-row justify-center items-center gap-[0.521vw]"
              }
              onClick={() => {
                window.scrollTo({
                  // @ts-ignore
                  top: document.getElementById("userScore").offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              <span
                className={
                  "text-[1.042vw] font-roboto font-semibold text-black"
                }
              >
                Show my rank
              </span>
              <svg
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"w-[1.25vw] h-[0.781vw]"}
              >
                <path d="M22 2L12 12L2 2" stroke="#141414" stroke-width="3" />
              </svg>
            </button>
          )}
      </div>
      <div className={"grid grid-cols-4 lg:!grid-cols-5 py-[0.521vw]"}>
        <span
          className={
            "text-[3.765vw] lg:!text-[1.25vw] font-roboto font-medium text-white"
          }
        >
          Rank
        </span>
        <span
          className={
            "col-span-2 text-[3.765vw] lg:!text-[1.25vw] font-roboto font-medium text-white"
          }
        >
          Wallet Address
        </span>
        <span
          className={
            "text-[3.765vw] lg:!text-[1.25vw] font-roboto font-medium text-white"
          }
        >
          Scores
        </span>
      </div>
      <div className={"flex flex-col"}>
        {filteredLeaderboard.map((item, index) => (
          <div
            id={
              networkStore.address && item.userAddress === networkStore.address
                ? "userScore"
                : undefined
            }
            key={index}
            className={
              "grid grid-cols-4 lg:!grid-cols-5 py-[1.563vw] border-t last:border-b border-white"
            }
          >
            <span
              className={cn(
                "text-[3.765vw] lg:!text-[1.25vw] font-roboto font-medium text-white",
                {
                  "text-green":
                    isMobile &&
                    networkStore.address &&
                    networkStore.address === item.userAddress,
                },
              )}
            >
              {index + 1}
            </span>
            <span
              className={cn(
                "col-span-2 text-[3.765vw] lg:!text-[1.25vw] font-roboto font-medium text-white",
                {
                  "text-green":
                    isMobile &&
                    networkStore.address &&
                    networkStore.address === item.userAddress,
                },
              )}
            >
              {formatAddress(item.userAddress, isMobile ? 6 : 15)}
            </span>
            <span
              className={cn(
                "text-[3.765vw] lg:!text-[1.25vw] font-roboto font-medium text-white",
                {
                  "text-green":
                    isMobile &&
                    networkStore.address &&
                    networkStore.address === item.userAddress,
                },
              )}
            >
              {item.score}
            </span>
            {!isMobile &&
              networkStore.address &&
              networkStore.address === item.userAddress && (
                <div
                  className={
                    "flex flex-row items-center justify-center gap-[0.781vw]"
                  }
                >
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 30 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"w-[1.563vw] h-[1.458vw]"}
                  >
                    <path
                      d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                      fill="#D4FF33"
                    />
                  </svg>
                  <span
                    className={
                      "text-[3.765vw] lg:!text-[1.25vw] font-roboto text-green"
                    }
                  >
                    Your place
                  </span>
                </div>
              )}
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Socials } from "../Socials";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const Topbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <motion.div
      className="fixed top-0 z-50 flex flex-col items-center"
      variants={{
        open: {
          y: 100,
        },
        closed: {
          y: 0,
        },
      }}
      animate={opened ? "open" : "closed"}
    >
      <div
        className={cn(
          "cursor-pointer w-[10.813vw] h-[2.5vw] flex items-center justify-center",
          opened && "bg-violet rounded-t-[0.625vw]",
          !opened &&
            "bg-dark border-green border-l border-b border-r rounded-b-[0.625vw]"
        )}
        onClick={() => setOpened(!opened)}
      >
        {!opened ? (
          <svg
            width="50"
            height="22"
            viewBox="0 0 50 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[3.125vw]"
          >
            <rect width="50" height="4" fill="#FFFCF5" />
            <rect y="9" width="50" height="4" fill="#FFFCF5" />
            <rect y="18" width="50" height="4" fill="#FFFCF5" />
          </svg>
        ) : (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1.563vw]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5405 12.4444L0 22.9347L1.84357 24.7695L12.3841 14.2792L23.1564 25.0001L25 23.1653L14.2277 12.4444L24.8882 1.83478L23.0446 0L12.3841 10.6097L1.95536 0.230617L0.111788 2.06539L10.5405 12.4444Z"
              fill="#141414"
            />
          </svg>
        )}
      </div>
      {opened && (
        <div className="w-[36.563vw] bg-violet text-dark rounded-[0.625vw] px-[0.938vw] py-[3.125vw] text-[2vw] font-arame font-thin flex flex-col divide-y">
          {[
            {
              name: "ZKNOID GAME APP",
              href: "https://app.zknoid.io/",
            },
            {
              name: "AURO WALLET",
              href: "https://www.aurowallet.com/",
            },
            {
              name: "HOW TO TAKE A PART?",
              href: "#section2",
            },
            {
              name: "REWARDS",
              href: "#section3",
            },
            {
              name: "QUESTS",
              href: "#section5",
            },
          ].map((x, i) => (
            <MotionLink
              key={i}
              href={x.href}
              target={!x.href.startsWith("#") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ fontSize: "2.5vw", color: "#3A39FF" }}
              initial={{ fontSize: "2vw", color: "#00000" }}
              onClick={() => {
                setOpened(false);
              }}
            >
              {x.name}
            </MotionLink>
          ))}
          <div className="pt-6">
            <Socials showGithub={false} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

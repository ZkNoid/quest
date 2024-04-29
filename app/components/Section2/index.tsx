"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { ConnectWallet, LinkButton } from "../ConnectWallet";
import Link from "next/link";
import { motion } from "framer-motion";

const Card = ({
  title,
  text,
  index,
  bg,
  textBg,
  children,
  singlePage,
}: {
  title: string;
  text: string;
  index: number;
  bg: string;
  textBg: string;
  children?: ReactNode;
  singlePage?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      className={cn(
        "rounded-[0.6vw] p-[0.9375vw] relative overflow-hidden",
        bg,
        index % 2 == 0 && "text-dark top-[4.3vw]"
      )}
      whileInView={{
        y: 0,
      }}
      initial={{ y: `${10 + index * 2}vw` }}
      transition={{ delay: 0, duration: 0.1 * index, ease: "easeIn" }}
    >
      <div
        className={cn(
          "absolute font-bold bottom-[-10vw] text-[17.5vw] flex left-[0.3vw]",
          textBg
        )}
      >
        {`O${index}`}
      </div>
      <p className="text-[3.125vw]">{title}</p>
      {!expanded && (
        <>
          <p className="text-[2vw] font-roboto">{text}</p>
        </>
      )}
      {/*  */}

      {!singlePage && (
        <div
          className="absolute w-[calc(4.125vw+0.375vw)] h-[calc(4.125vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group bottom-0 right-0 m-[0.625vw]"
          onClick={() => setExpanded(!expanded)}
        >
          <div
            className={cn(
              "pl-[0.25vw] w-[4.125vw] h-[4.125vw] border-white rounded-[0.6vw] shadow-main group-hover:shadow-none border-[0.3125vw] flex items-center justify-center cursor-pointer",
              bg
            )}
          >
            {!expanded ? (
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
                  stroke={index % 2 == 1 ? "#FFFCF5" : "#141414"}
                  stroke-width="5"
                />
              </svg>
            ) : (
              <svg
                className="w-[2.438vw]"
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L37 36"
                  stroke={index % 2 == 1 ? "#FFFCF5" : "#141414"}
                  stroke-width="5"
                />
                <path
                  d="M37 2L2 36"
                  stroke={index % 2 == 1 ? "#FFFCF5" : "#141414"}
                  stroke-width="5"
                />
              </svg>
            )}
          </div>
        </div>
      )}
      {(singlePage || expanded) && (
        <div className="text-[2vw] font-roboto z-50 relative leading-tight">
          {children}
        </div>
      )}
    </motion.div>
  );
};
export const Section2 = () => {
  return (
    <section
      className="w-full flex flex-col items-center pt-[10vw] text-[white] font-arame px-[6.4vw]"
      id="section2"
    >
      <div className="w-full text-[4.3vw]">
        <p>HOW</p>
        <p>TO TAKE A PART?</p>
        <div className="w-full grid grid-cols-4 h-[34vw] mb-[4.3vw] mt-[2vw]">
          <Card
            title="CONNECT"
            text="Join Discord and Telegram channel"
            index={1}
            bg="bg-blue"
            textBg="text-[rgb(13,13,255)]"
            singlePage={true}
          >
            <div className="flex gap-[1.875vw] pt-[1vw]">
              <div className="w-[calc(4.125vw+0.375vw)] h-[calc(4.125vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group">
                <div className="w-[4.125vw] h-[4.125vw] bg-white rounded-[0.6vw] shadow-main flex items-center justify-center cursor-pointer group-hover:shadow-none border-dark group-hover:border">
                  <svg
                    width="45"
                    height="33"
                    viewBox="0 0 45 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[2.8125vw]"
                  >
                    <path
                      d="M38.0757 2.7425C35.2256 1.46409 32.1398 0.536205 28.9254 9.48464e-05C28.8973 -0.000772421 28.8692 0.00431667 28.8433 0.0150044C28.8174 0.0256921 28.7942 0.0417189 28.7754 0.0619541C28.3897 0.742401 27.9397 1.62904 27.6397 2.30949C24.2303 1.81462 20.7631 1.81462 17.3537 2.30949C17.0537 1.60842 16.6037 0.742401 16.1965 0.0619541C16.1751 0.0207149 16.1108 9.48464e-05 16.0465 9.48464e-05C12.8321 0.536205 9.76776 1.46409 6.89626 2.7425C6.87483 2.7425 6.8534 2.76312 6.83197 2.78374C1.00324 11.1759 -0.603951 19.3413 0.188928 27.4242C0.188928 27.4654 0.210357 27.5066 0.253216 27.5273C4.11046 30.2491 7.81771 31.8986 11.4821 32.9915C11.5464 33.0121 11.6107 32.9915 11.6321 32.9502C12.4893 31.8161 13.2607 30.6202 13.925 29.3624C13.9679 29.2799 13.925 29.1975 13.8393 29.1768C12.6178 28.7232 11.4607 28.1871 10.3249 27.5685C10.2392 27.5273 10.2392 27.4035 10.3035 27.3417C10.5392 27.1767 10.7749 26.9912 11.0107 26.8262C11.0535 26.785 11.1178 26.785 11.1607 26.8056C18.5323 30.0429 26.4825 30.0429 33.7684 26.8056C33.8113 26.785 33.8756 26.785 33.9184 26.8262C34.1541 27.0118 34.3899 27.1767 34.6256 27.3623C34.7113 27.4242 34.7113 27.5479 34.6042 27.5891C33.4898 28.2283 32.3112 28.7438 31.0898 29.1975C31.0041 29.2181 30.9826 29.3212 31.0041 29.383C31.6898 30.6408 32.4612 31.8368 33.297 32.9708C33.3613 32.9915 33.4256 33.0121 33.4898 32.9915C37.1757 31.8986 40.8829 30.2491 44.7401 27.5273C44.783 27.5066 44.8044 27.4654 44.8044 27.4242C45.7473 18.0835 43.2401 9.97998 38.1614 2.78374C38.14 2.76312 38.1185 2.7425 38.0757 2.7425ZM15.0393 22.4961C12.8321 22.4961 10.9892 20.5372 10.9892 18.1247C10.9892 15.7122 12.7893 13.7534 15.0393 13.7534C17.3108 13.7534 19.1109 15.7329 19.0894 18.1247C19.0894 20.5372 17.2894 22.4961 15.0393 22.4961ZM29.9755 22.4961C27.7683 22.4961 25.9254 20.5372 25.9254 18.1247C25.9254 15.7122 27.7254 13.7534 29.9755 13.7534C32.247 13.7534 34.047 15.7329 34.0256 18.1247C34.0256 20.5372 32.247 22.4961 29.9755 22.4961Z"
                      fill="#3A39FF"
                      className="group-hover:fill-dark"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-[calc(4.125vw+0.375vw)] h-[calc(4.125vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group">
                <div className="w-[4.125vw] h-[4.125vw] bg-white rounded-[0.6vw] shadow-main flex items-center justify-center cursor-pointer group-hover:shadow-none border-dark group-hover:border group">
                  <svg
                    width="41"
                    height="35"
                    viewBox="0 0 41 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[2.8125vw]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36.7264 0.239446C37.2301 0.0274293 37.7815 -0.0456937 38.3231 0.0276867C38.8647 0.101067 39.3767 0.318269 39.8058 0.656685C40.235 0.9951 40.5656 1.44236 40.7633 1.95191C40.9609 2.46145 41.0184 3.01466 40.9297 3.55395L36.3065 31.5968C35.858 34.3018 32.89 35.8531 30.4093 34.5057C28.3341 33.3784 25.252 31.6416 22.4797 29.8295C21.0936 28.9224 16.8475 26.0176 17.3693 23.9506C17.8178 22.1833 24.9523 15.542 29.0292 11.5936C30.6294 10.0423 29.8996 9.14744 28.01 10.5743C23.3175 14.1172 15.7834 19.5048 13.2925 21.0214C11.095 22.3586 9.94941 22.5869 8.57957 22.3586C6.08044 21.9427 3.76274 21.2986 1.87106 20.5138C-0.685145 19.4538 -0.5608 15.9395 1.86902 14.9162L36.7264 0.239446Z"
                      fill="#3A39FF"
                      className="group-hover:fill-dark"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
          <Card
            title="CREATE"
            text="Create Auro Wallet or use your own if you already have it"
            index={2}
            bg="bg-green"
            textBg="text-[rgb(188,253,80)]"
          >
            <p>Connect Auro Wallet if installed</p>
            <ConnectWallet />
            <p className="pt-[1vw]">Or create new on the Auro Wallet Website</p>
            <ConnectWallet text="Create new wallet" />
          </Card>
          <Card
            title="GET TOKENS"
            text="During all testnet you can use test MINA token, they can be
            received in the official faucet in Berkley Chain"
            index={3}
            bg="bg-red"
            textBg="text-[rgb(234,62,38)]"
          >
            <p>
              1. Open Mina{" "}
              <Link
                href="https://berkeley.minaexplorer.com/faucet"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Berkeley
              </Link>{" "}
              faucet{" "}
            </p>
            <p>2. Request Mina Berkeley tokens</p>
            <p>
              3. Head to{" "}
              <Link
                href="https://app.zknoid.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ZkNoid
              </Link>{" "}
            </p>
            <p>4. Switch to berkeley network</p>
            <p>5. Click top-up button in the header and use bridge</p>
          </Card>
          <Card
            title="CHALLENGE"
            text="Finish the tasks and Fill The Form"
            index={4}
            bg="bg-violet"
            textBg="text-[rgb(175,116,247)]"
          >
            <p>Check and complete tasks</p>
            <LinkButton text="Show me tasks" href="#section5" bg="bg-violet" />
            <p className="pt-[2vw]">Fill the form after completed tasks</p>
            <LinkButton text="Fill the form" href="" bg="bg-violet" />
          </Card>
        </div>
      </div>
    </section>
  );
};

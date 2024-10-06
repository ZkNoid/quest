"use client";

import DecorationLeft from "./assets/decoration-left.svg";
import DecorationRight from "./assets/decoration-right.svg";
import FlyerMiddle from "./assets/flyer-middle.svg";

import Image from "next/image";
import { ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 10 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  // const { scrollY } = useScroll();
  // const scrollVelocity = useVelocity(scrollY);
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 50,
  //   stiffness: 400,
  // });
  // const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 5], {
  //   clamp: false,
  // });

  const velocityFactor = {
    get: () => 1,
  };

  const x = useTransform(baseX, (v) => `${wrap(-35.35, -2.4, v)}vw`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <motion.div className="scroller h-full" style={{ x }}>
      <span>{children} </span>
      <span>{children} </span>
      <span>{children} </span>
      <span>{children} </span>
      <span>{children} </span>
      <span>{children} </span>
      <span>{children} </span>
    </motion.div>
  );
}

const Dots = () => (
  <svg
    width="40"
    height="10"
    viewBox="0 0 40 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="m-[0.9375vw] w-[2.5vw]"
  >
    <path
      d="M10 2.83116L10 7.17346C10 8.73532 8.73071 10.0046 7.17116 10.0046L2.82884 10.0046C1.26929 10.0046 -3.81833e-07 8.73532 -3.13562e-07 7.17346L-1.23754e-07 2.83116C-5.5483e-08 1.2693 1.26929 -3.81632e-07 2.82884 -3.13461e-07L7.17116 -1.23652e-07C8.73071 -5.54823e-08 10 1.2693 10 2.83116ZM2.26214 7.17346C2.26214 7.48445 2.51555 7.74016 2.82653 7.74016L7.16886 7.74016C7.47985 7.74016 7.73324 7.48676 7.73324 7.17346L7.73324 2.83116C7.73324 2.52017 7.47985 2.26446 7.16886 2.26446L2.82653 2.26446C2.51555 2.26446 2.26214 2.51786 2.26214 2.83116L2.26214 7.17346Z"
      fill="black"
    />
    <path
      d="M25 2.83116L25 7.17346C25 8.73532 23.7307 10.0046 22.1712 10.0046L17.8288 10.0046C16.2693 10.0046 15 8.73532 15 7.17346L15 2.83116C15 1.2693 16.2693 -3.81632e-07 17.8288 -3.13461e-07L22.1712 -1.23652e-07C23.7307 -5.54823e-08 25 1.2693 25 2.83116ZM17.2621 7.17346C17.2621 7.48445 17.5155 7.74016 17.8265 7.74016L22.1689 7.74016C22.4798 7.74016 22.7332 7.48676 22.7332 7.17346L22.7332 2.83116C22.7332 2.52017 22.4798 2.26446 22.1689 2.26446L17.8265 2.26446C17.5155 2.26446 17.2621 2.51786 17.2621 2.83116L17.2621 7.17346Z"
      fill="black"
    />
    <path
      d="M40 2.83116L40 7.17346C40 8.73532 38.7307 10.0046 37.1712 10.0046L32.8288 10.0046C31.2693 10.0046 30 8.73532 30 7.17346L30 2.83116C30 1.2693 31.2693 -3.81632e-07 32.8288 -3.13461e-07L37.1712 -1.23652e-07C38.7307 -5.54823e-08 40 1.2693 40 2.83116ZM32.2621 7.17346C32.2621 7.48445 32.5155 7.74016 32.8265 7.74016L37.1689 7.74016C37.4798 7.74016 37.7332 7.48676 37.7332 7.17346L37.7332 2.83116C37.7332 2.52017 37.4798 2.26446 37.1689 2.26446L32.8265 2.26446C32.5155 2.26446 32.2621 2.51786 32.2621 2.83116L32.2621 7.17346Z"
      fill="black"
    />
  </svg>
);

const MotionImage = motion(Image);

export const Section3 = () => {
  return (
    <section
      className="w-full flex flex-col items-center pt-[23.529vw] lg:!pt-[10vw] text-[white] font-arame px-[6.4vw]"
      id="section3"
    >
      <div className="w-full text-[9.412vw] lg:!text-[4.3vw]">
        <p>GRAB</p>
        <p>REWARDS</p>
        <div className="w-full flex flex-col lg!:grid lg!:grid-cols-2 lg:!h-[14.9375vw] mb-[4.3vw] mt-[2vw] gap-[1.25vw] text-dark relative">
          <div className="absolute z-20 left-0 right-0 ml-auto lg:!mx-auto top-[-6.3vw] w-[12.659375vw] h-[12.659375vw]">
            <MotionImage
              src={FlyerMiddle}
              alt=""
              className="absolute w-[12.659375vw] h-[12.659375vw]"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: "360deg" }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            ></MotionImage>
            <div className="absolute text-white text-[2.786875vw] flex items-center justify-center w-[12.659375vw] h-[12.659375vw] text-center leading-none">
              1000 $MINA
            </div>
          </div>
          <div className="bg-green rounded-[0.6vw] flex flex-col justify-center items-center px-[1.0625vw] relative overflow-hidden">
            <Image
              src={DecorationLeft}
              alt=""
              className="absolute w-[39.415625vw] left-[-5.3125vw] top-[-1.5625vw] z-1 max-w-none"
            ></Image>
            <p className="text-[4.375vw] z-10">400 $MINA</p>
            <p className="text-[1.5vw] font-semibold font-roboto z-10 text-center">
              Will be divided between 3 people who will completed all tasks,
              report about bugs and actively participate in discord chat
            </p>
          </div>
          <div className="bg-violet rounded-[0.6vw] flex flex-col justify-center items-center px-[6.375vw] relative overflow-hidden">
            <Image
              src={DecorationRight}
              alt=""
              className="absolute w-[51.32875vw] left-[-4.0625vw] top-[-1.5625vw] z-1 max-w-none"
            ></Image>

            <p className="text-[4.375vw] z-10">600 $MINA</p>
            <p className="text-[1.5vw] font-semibold font-roboto z-10 text-center">
              Split among all testers who earn at least 2250 points during the
              quest period
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-[3.75vw] bg-green text-dark text-[2vw] relative">
        <ParallaxText baseVelocity={4}>
          <div className="w-[200vw] h-full flex items-center absolute pl-10">
            PLAY AND EARN WITH ZKNOID <Dots />
            PLAY AND EARN WITH ZKNOID <Dots />
            PLAY AND EARN WITH ZKNOID <Dots />
            PLAY AND EARN WITH ZKNOID <Dots />
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

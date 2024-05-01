"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import DecorationSVG from "./assets/decoration.svg";
import GoodJob from "./assets/good-job.svg";
import { motion, useInView } from "framer-motion";
import { api } from "@/trpc/react";

const MotionImage = motion(Image);

const Card = ({
  bg,
  title,
  heading,
  items,
  isWhite,
  children,
  startAnimation,
  index,
}: {
  bg: string;
  title: string;
  heading: string;
  isWhite: boolean;
  items: string[];
  children?: ReactNode;
  startAnimation: boolean;
  index: number;
}) => {
  return (
    <motion.div
      className={cn(
        "w-full rounded-[0.625vw] px-[0.938vw] py-[1.875vw] flex flex-col gap-[0.938vw]",
        isWhite ? "text-white" : "text-dark",
        bg
      )}
      initial={{ y: `${index * 10}vw` }}
      variants={{
        default: { y: `${index * 10}vw` },
        opened: { y: 0 },
      }}
      animate={startAnimation ? "opened" : "default"}
      transition={{
        delay: (0.8 * (index - 1)) / 4,
        duration: 0.5,
        type: "spring",
        ease: "linear",
        stiffness: 70,
      }}
    >
      <p className="text-[3.125vw] leading-none">{title}</p>
      <div className="p-[0.313vw]">
        <p className="text-[2vw] font-roboto leading-none pb-[1.5vw]">
          {heading}
        </p>
        <div className="flex flex-col gap-[1.25vw]">
          {items.map((x, i) => (
            <div className="font-roboto text-[1vw] flex gap-[0.625vw]" key={i}>
              <div
                className={cn(
                  "min-w-[2.5vw] h-[2.5vw] rounded-[0.313vw] flex items-center justify-center font-arame text-[2.5vw]",
                  isWhite ? "bg-white text-dark" : "bg-dark text-white"
                )}
              >
                {i}
              </div>
              <div>{x}</div>
            </div>
          ))}
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex items-center text-green cursor-pointer gap-[0.625vw] fixed bottom-[0.7vw] right-[1.125vw]",
        !visible && "hidden"
      )}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      BACK TO TOP{" "}
      <svg
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[1.375vw]"
      >
        <path
          d="M1 11.8975L11 1.89746L21 11.8975"
          stroke="#D4FF33"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export const Section6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [discord, setDiscord] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const feedbackRouter = api.feedback.sendFeedback.useMutation();
  const discordFormRef = useRef<HTMLInputElement>(null);
  const feedbackFormRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (feedbackSent) {
      setTimeout(function () {
        setFeedbackSent(false);
      }, 5000);
    }
  }, [feedbackSent]);

  return (
    <section className="w-full flex flex-col items-center pt-[10vw] text-[white] font-arame px-[6.4vw]">
      <div className="w-full text-[4.3vw] flex justify-between items-end pb-[2.5vw]">
        <div>
          <p className="leading-none">ADDITIONAL QUESTS</p>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full flex-col gap-[1.375vw] relative">
        <div className="w-full" ref={ref}>
          <div className="font-roboto text-[1.25vw] pb-[1.5vw]">
            Additional tasks are not part of the list required to receive the
            general award, but if you wish to be eligible for a specific award,
            you could help the team by completing a few more tasks.
          </div>
          <Card
            bg="bg-violet"
            title="Ui Tests Mobile"
            heading="To complete this quest you need to download Auro wallet to your mobile device"
            items={[
              "Open our ZkApp in Aura Wallet App and test one or all games on mobile device",
              "Describe your experience about mobile gaming in ZkNoid Quest page",
              "Report about all bugs and Broken buttons and not working features",
              "Suggest what could be improved in user experience and user interface in ZkNoid Quest page",
            ]}
            isWhite={false}
            index={1}
            startAnimation={isInView}
          />
        </div>
        <div className="w-full flex flex-col gap-[1.25vw]">
          <Card
            bg="bg-green"
            title="Social"
            heading="Discord & Social Media activities"
            items={[
              "Share in any social media (twitter, telegram, reddit…) your victory or the game process. Don’t forgot to send in our discord channel proof (link or screenshoot of your post)",
              "Help another participants with their issues during testnet process. We appreciate when community help each other",
              "Invite your friend to take part in the testnet",
              "Report about all bugs you found during the testnet in special chat in Discord channel",
            ]}
            isWhite={false}
            index={2}
            startAnimation={isInView}
          />
          <Card
            bg="bg-red"
            title="Checkers game"
            heading="Play in new released game and send your feedback"
            items={[
              "Play in early-released checkers game more then one time and describe your experience in chat or in the form",
              "Win one time in checkers game",
            ]}
            isWhite={true}
            index={3}
            startAnimation={isInView}
          />
        </div>
        <div>
          <Card
            bg="bg-blue"
            title="Feedback form"
            heading={
              feedbackSent
                ? "Your message was successfully delivered to the team"
                : "Write here about any of your successes in additional tasks"
            }
            items={[]}
            isWhite={true}
            index={4}
            startAnimation={isInView}
          >
            <div className="w-full">
              <p className="text-[1vw] pb-[0.625vw]">Your Discord handle</p>
              <input
                className="w-full h-[3.5vw] bg-blue border rounded-[0.625vw] p-[0.625vw] text-[1vw]"
                placeholder="Type here your discord nickname..."
                onChange={(e) => setDiscord(e.target.value)}
                ref={discordFormRef}
              />
            </div>
            <div className="w-full">
              <p className="text-[1vw] pb-[0.625vw]">
                Describe your activity ;)
              </p>
              <textarea
                className="w-full bg-blue border rounded-[0.625vw] p-[0.625vw] h-[9vw] text-[1vw]"
                placeholder="Type here your discord nickname..."
                onChange={(e) => setFeedback(e.target.value)}
                ref={feedbackFormRef}
              />
            </div>
            <div
              className="w-[calc(97%+0.375vw)] h-[calc(4.375vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group"
              onClick={() => {
                feedbackRouter.mutate({
                  discord,
                  feedback,
                });
                discordFormRef.current!.value = "";
                feedbackFormRef.current!.value = "";
                setFeedbackSent(true);
              }}
            >
              <div className="bg-[white] w-[97%] h-[4.375vw] rounded-[0.6vw] flex items-center justify-center shadow-main gap-[1vw] font-roboto font-regular text-[1.25vw] cursor-pointer mr-[6.25vw] text-dark group-hover:shadow-none group-hover:border group-hover:font-black">
                Send my feedback
              </div>
            </div>
          </Card>
        </div>
        <Image
          src={DecorationSVG}
          alt=""
          className="absolute bottom-0 w-[52.125vw] right-[-9.8vw] z-[-100]"
        />
        <div className="absolute bottom-0 w-[12.688vw] right-[-2.8vw] z-[-100] flex items-center justify-center">
          <MotionImage
            src={GoodJob}
            alt=""
            className="absolute w-[12.659375vw] h-[12.659375vw]"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: "360deg" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          />
          <div className="absolute text-white text-[2.786875vw] flex items-center justify-center text-center leading-none z-10">
            GOOD JOB!
          </div>
        </div>
      </div>

      <div className="pt-[10vw] w-full flex justify-end text-[1.25vw] pb-[2.969vw]">
        <BackToTopButton></BackToTopButton>
      </div>
    </section>
  );
};

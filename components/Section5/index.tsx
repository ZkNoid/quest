"use client";

import { getQuestsArray } from "@/app/lib/utils";
import { useNetworkStore } from "@/lib/stores/network";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import TasksWatcher from "../TasksWatcher";
import { SessionProvider } from "next-auth/react";
import { questTasks } from "@/constants/quests";
import { useClickedLinks } from "@/lib/stores/clickedLinks";

const ButtonContent = ({ text }: { text: string }) => {
  return (
    <div
      className={
        "py-[0.313vw] px-[0.521vw] gap-[0.521vw] flex flex-row items-center justify-center bg-[#000] rounded-[0.26vw]"
      }
    >
      <span
        className={
          "text-[1.042vw] font-roboto font-semibold text-white group-hover:text-green"
        }
      >
        {text}
      </span>
      <svg
        width="15"
        height="24"
        viewBox="0 0 15 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"w-[0.521vw] h-[1.042vw]"}
      >
        <path
          d="M2 2.0498L12 12.0498L2 22.0498"
          stroke="#FFFCF5"
          stroke-width="3"
          className={"group-hover:stroke-green"}
        />
      </svg>
    </div>
  );
};

const TaskSection = ({
  id,
  name,
  tasks,
  last,
}: {
  id: number;
  name: string;
  tasks: {
    text: string;
    time: string;
    points: number;
    description?: string;
    button?: { href?: string; text: string; logic?: () => void };
  }[];
  last?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const network = useNetworkStore();

  const progressRouter = api.progress.getSolvedQuests.useQuery(
    {
      userAddress: network.address ?? "None",
    },
    {
      refetchInterval: 5000,
    },
  );

  useEffect(() => {
    progressRouter.refetch();
  }, [network.address]);

  const statuses = Object.values(progressRouter.data?.quests?.[name] || {}).map(x => x > 0);

  // const setLeaderboardItemMutation =
  //   api.leaderboard.setLeaderboardItem.useMutation();

  // useEffect(() => {
  //   tasks.map((task, taskIndex) => {
  //     statuses[taskIndex] &&
  //       setLeaderboardItemMutation.mutate({
  //         userAddress: network.address || "NONE",
  //         score: {
  //           tasksSectionName: name,
  //           taskIndex: taskIndex,
  //           points: task.points,
  //         },
  //       });
  //   });
  // }, []);

  

  const clickedLinks = useClickedLinks();
  console.log('Statuses', statuses)
  const lastOpenedTask = statuses.lastIndexOf(true) + 2;
  
  return (
    <SessionProvider>
      <div>
        <TasksWatcher />
        <div className="hidden w-full lg:!flex flex-row items-start">
          <div className="w-full flex items-center text-[3.125vw] gap-[0.625vw]">
            <div className="bg-green w-[2.5vw] h-[2.5vw] rounded-[0.313vw] flex items-center justify-center text-dark">
              {id}
            </div>
            {name}
          </div>
          <div className="flex flex-col gap-2 font-roboto items-end w-full">
            {tasks.slice(0, lastOpenedTask).map(
              (x, i) =>
                (
                  <div
                    key={i}
                    className="w-full h-full flex flex-row justify-between items-center relative"
                  >
                    <div
                      className={cn(
                        "w-[1px] bg-green absolute left-[0.937vw]",
                        i != 0 ? "top-0" : "top-[3vw]",
                        i == tasks.length - 1
                          ? "h-1/2"
                          : "h-[calc(100%+2.5vw)]",
                        statuses[i] ? "bg-green" : "bg-white",
                        statuses[i - 1] &&
                          !statuses[i] &&
                          "bg-gradient-to-t from-white to-green",
                        (statuses[i - 1] || i == 0) &&
                          !statuses[i] &&
                          "bg-gradient-to-b from-green to-dark",
                        { "opacity-0": last },
                      )}
                    />
                    <div
                      className={cn("h-full flex justify-center", {
                        "opacity-0": last,
                      })}
                    >
                      <div className="flex flex-col h-full items-center w-[1.875vw] relative">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[1.875vw] h-[1.875vw]"
                        >
                          <rect
                            x="1"
                            y="1.0498"
                            width="28"
                            height="28"
                            rx="14"
                            fill={statuses[i] ? "#D4FF33" : "#141414"}
                            stroke={"#D4FF33"}
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "w-[34.375vw] bg-green text-dark flex flex-col gap-[0.521vw] text-[1vw] p-[0.521vw] rounded-[0.313vw] whitespace-pre-line relative",
                        statuses[i] ? "bg-[rgb(140,160,62)]" : "bg-green",
                      )}
                    >
                      <div className={"flex flex-row items-center w-full"}>
                        <div className={"flex flex-col gap-[0.521vw] w-full"}>
                          <span
                            className={"text-[1.042vw] font-roboto font-bold"}
                          >
                            {x.text}
                          </span>
                          <div
                            className={
                              "flex flex-row w-full justify-between items-center"
                            }
                          >
                            <div
                              className={
                                "flex flex-row items-center justify-center gap-[0.208vw]"
                              }
                            >
                              <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={"w-[1.042vw] h-[1.042vw]"}
                              >
                                <path
                                  d="M10 19.0498C14.9706 19.0498 19 15.0204 19 10.0498C19 5.07924 14.9706 1.0498 10 1.0498C5.02944 1.0498 1 5.07924 1 10.0498C1 15.0204 5.02944 19.0498 10 19.0498Z"
                                  stroke="#141414"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10 5.0498V8.8138C10 9.1853 10.1035 9.54945 10.2988 9.86543C10.4942 10.1814 10.7737 10.4367 11.106 10.6028L14 12.0498"
                                  stroke="#141414"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <span className={"text-[0.833vw] font-roboto"}>
                                Approximate time: {x.time}
                              </span>
                            </div>
                            <div
                              className={
                                "flex flex-row items-center justify-center gap-[0.208vw] mr-auto ml-[3vw]"
                              }
                            >
                              <svg
                                width="18"
                                height="19"
                                viewBox="0 0 18 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={"w-[1.042vw] h-[1.042vw]"}
                              >
                                <path
                                  d="M9 0.0498047L11.4308 6.61899L18 9.0498L11.4308 11.4806L9 18.0498L6.56918 11.4806L0 9.0498L6.56918 6.61899L9 0.0498047Z"
                                  fill="#141414"
                                />
                              </svg>
                              <span className={"text-[0.833vw] font-roboto"}>
                                Task worth: {x?.points} points
                              </span>
                            </div>
                          </div>
                        </div>
                        {statuses[i] && (
                          <svg
                            width="32"
                            height="22"
                            viewBox="0 0 32 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={"w-[1.563vw] h-[1.042vw] mx-[2vw]"}
                          >
                            <path
                              d="M2 8.18182L12.8889 19L30 2"
                              stroke="#141414"
                              stroke-width="5"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </div>

                      {x.description && (
                        <span className={"text-[0.833vw] font-roboto"}>
                          {x.description}
                        </span>
                      )}
                      {x.button &&
                        !statuses[i] &&
                        (x.button.logic ? (
                          <div
                            onClick={() => x.button?.logic?.()}
                            className={"w-fit group cursor-pointer"}
                          >
                            <ButtonContent text={x.button.text}></ButtonContent>
                          </div>
                        ) : (
                          <Link
                            href={x.button.href!}
                            onClick={() => {
                              clickedLinks.onClickedLink({
                                section: name,
                                id: i + 1,
                              });
                              x.button?.logic?.();
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"w-fit group"}
                          >
                            <ButtonContent text={x.button.text}></ButtonContent>
                          </Link>
                        ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className={"lg:!hidden"}
        >
          <div className="w-full mb-[4.706vw] flex items-center justify-between text-[5.647vw] lg:!text-[3.125vw] gap-[0.625vw]">
            <span>{name}</span>
            <motion.svg
              width="30"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"w-[7.059vw] h-[4.235vw]"}
              initial={false}
              animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            >
              <path
                d="M2 16L15.3714 2.62857L28 16"
                stroke="#FFFCF5"
                stroke-width="3"
              />
            </motion.svg>
          </div>
          {isOpen && (
            <div className="flex flex-col gap-2 font-roboto items-end w-full">
              {tasks.map(
                (x, i) =>
                  (statuses[i - 1] || i == 0) && (
                    <div
                      key={i}
                      className="w-full h-full flex flex-row justify-between items-center relative"
                    >
                      <div
                        className={cn(
                          "w-[1px] bg-green absolute left-[0.937vw]",
                          i != 0 ? "top-0" : "top-[9vw] lg:!top-[1.5vw]",
                          i == tasks.length - 1
                            ? "h-1/2"
                            : i == 0 && !statuses[i]
                              ? "h-[60%]"
                              : "h-[calc(100%+2.5vw)]",
                          statuses[i] ? "bg-green" : "bg-white",
                          statuses[i - 1] &&
                            !statuses[i] &&
                            "bg-gradient-to-t from-white to-green",
                          (statuses[i - 1] || i == 0) &&
                            !statuses[i] &&
                            "bg-gradient-to-b from-green to-dark",
                          { "hidden lg:!opacity-0": last },
                        )}
                      />
                      <div
                        className={cn("h-full flex justify-center", {
                          "hidden lg:!opacity-0": last,
                        })}
                      >
                        <div className="flex flex-col h-full items-center w-[1.875vw] relative">
                          <svg
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[4.706vw] h-[4.706vw] lg:!w-[1.875vw] lg:!h-[1.875vw]"
                          >
                            <rect
                              x="1"
                              y="1.0498"
                              width="28"
                              height="28"
                              rx="14"
                              fill={statuses[i] ? "#D4FF33" : "#141414"}
                              stroke={"#D4FF33"}
                              stroke-width="2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "bg-green text-dark flex flex-col gap-[0.521vw] p-[2.353vw] lg:!p-[0.521vw] rounded-[1.176vw] lg:!rounded-[0.313vw] whitespace-pre-line relative",
                          statuses[i] ? "bg-[rgb(140,160,62)]" : "bg-green",
                          last ? "w-full" : "w-[80%] lg:!w-[34.375vw]",
                        )}
                      >
                        <div className={"flex flex-row items-center w-full"}>
                          <div className={"flex flex-col gap-[0.521vw] w-full"}>
                            <span
                              className={
                                "text-[3.765vw] lg:!text-[1.042vw] font-roboto font-[900]"
                              }
                            >
                              {x.text}
                            </span>
                            <div
                              className={
                                "flex flex-col lg:!flex-row w-full justify-between items-start lg:!items-center"
                              }
                            >
                              <div
                                className={
                                  "flex flex-row items-center justify-center gap-[1.176vw] lg:!gap-[0.208vw]"
                                }
                              >
                                <svg
                                  width="20"
                                  height="21"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={
                                    "w-[3.765vw] lg:!w-[1.042vw] h-[3.765vw] lg:!h-[1.042vw]"
                                  }
                                >
                                  <path
                                    d="M10 19.0498C14.9706 19.0498 19 15.0204 19 10.0498C19 5.07924 14.9706 1.0498 10 1.0498C5.02944 1.0498 1 5.07924 1 10.0498C1 15.0204 5.02944 19.0498 10 19.0498Z"
                                    stroke="#141414"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M10 5.0498V8.8138C10 9.1853 10.1035 9.54945 10.2988 9.86543C10.4942 10.1814 10.7737 10.4367 11.106 10.6028L14 12.0498"
                                    stroke="#141414"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <span
                                  className={
                                    "text-[3.294vw] lg:!text-[0.833vw] font-roboto"
                                  }
                                >
                                  Approximate time: {x.time}
                                </span>
                              </div>
                              <div
                                className={
                                  "flex flex-row items-center justify-center gap-[1.176vw] lg:!gap-[0.208vw] mr-auto lg:!ml-[3vw]"
                                }
                              >
                                <svg
                                  width="18"
                                  height="19"
                                  viewBox="0 0 18 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={
                                    "w-[3.765vw] lg:!w-[1.042vw] h-[3.765vw] lg:!h-[1.042vw]"
                                  }
                                >
                                  <path
                                    d="M9 0.0498047L11.4308 6.61899L18 9.0498L11.4308 11.4806L9 18.0498L6.56918 11.4806L0 9.0498L6.56918 6.61899L9 0.0498047Z"
                                    fill="#141414"
                                  />
                                </svg>
                                <span
                                  className={
                                    "text-[3.294vw] lg:!text-[0.833vw] font-roboto"
                                  }
                                >
                                  Task worth: {x.points} points
                                </span>
                              </div>
                            </div>
                          </div>
                          {statuses[i] && (
                            <svg
                              width="32"
                              height="22"
                              viewBox="0 0 32 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={
                                "w-[4.941vw] lg:!w-[1.563vw] mb-auto mt-[1.176vw] h-[3.059vw] lg:!h-[1.042vw] mx-[2vw]"
                              }
                            >
                              <path
                                d="M2 8.18182L12.8889 19L30 2"
                                stroke="#141414"
                                stroke-width="5"
                                stroke-linejoin="round"
                              />
                            </svg>
                          )}
                        </div>

                        {x.description && (
                          <span
                            className={
                              "text-[3.765vw] lg:!text-[0.833vw] font-roboto"
                            }
                          >
                            {x.description}
                          </span>
                        )}
                        {x.button && !statuses[i] && (
                          <Link
                            href={x.button.href!}
                            className={
                              "w-full lg:!w-fit group mt-[5vw] lg:!mt-0"
                            }
                          >
                            <div
                              className={
                                "py-[0.313vw] px-[3.529vw] lg:!px-[0.521vw] gap-[0.521vw] flex flex-row items-center justify-between lg:!justify-center bg-[#000] rounded-[1.176vw] lg:!rounded-[0.26vw]"
                              }
                            >
                              <span
                                className={
                                  "text-[4.706vw] lg:!text-[1.042vw] font-roboto font-semibold text-white group-hover:text-green"
                                }
                              >
                                {x.button.text}
                              </span>
                              <svg
                                width="15"
                                height="24"
                                viewBox="0 0 15 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={
                                  "w-[2.353vw] lg:!w-[0.521vw] h-[4.706vw] lg:!h-[1.042vw]"
                                }
                              >
                                <path
                                  d="M2 2.0498L12 12.0498L2 22.0498"
                                  stroke="#FFFCF5"
                                  stroke-width="3"
                                  className={"group-hover:stroke-green"}
                                />
                              </svg>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  ),
              )}
            </div>
          )}
        </motion.div>
      </div>
    </SessionProvider>
  );
};

export const Section5 = () => {
  return (
    <section
      className="w-full flex flex-col items-center pt-[25vw] lg:!pt-[10vw] text-[white] font-arame px-[6.4vw]"
      id="section5"
    >
      <div className="w-full text-[9.412vw] lg:!text-[4.3vw] flex justify-between items-end pb-[2.5vw]">
        <div>
          <p className="leading-none">QUEST TASKS</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[10.588vw] lg:!gap-[4.375vw]">
        {questTasks.map((item, index) => (
          <TaskSection
            key={index}
            id={index + 1}
            name={item.name}
            tasks={item.tasks}
            last={item.last}
          />
        ))}
      </div>
    </section>
  );
};

"use client";

import Header from "@/components/Header";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";
import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";

export default function Home() {
  const event = {
    name: "Testnet",
    date: {
      start: new Date("2024-10-14T19:00:00.000+03:00"),
      end: new Date("2024-10-28T19:00:00.000+03:00"),
    },
  };
  const isQuestEnd = event.date.end.getTime() <= Date.now();
  return (
    <main className="flex min-h-screen flex-col items-center max-w-[100vw] overflow-clip">
      <Topbar />
      <Header />
      <Section1 />
      <Section2 />
      {!isQuestEnd && (
        <>
          <Section3 />
          <Section4 goToLeaderboardButton={true} />
          <Section5 />
        </>
      )}
      <Footer />
    </main>
  );
}

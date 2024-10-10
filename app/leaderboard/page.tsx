"use client";

import Header from "@/components/Header";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";
import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";

import Leaderboard from "@/components/Leaderboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-[100vw] overflow-clip">
      <Topbar />
      <Header />
      <Section1 />

      <Section4 goToLeaderboardButton={false} />
      <Leaderboard />

      <Footer />
    </main>
  );
}

"use client";

import Header from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";
import { Section5 } from "./components/Section5";
import { Footer } from "./components/Footer";
import { Topbar } from "./components/Topbar";
import { useSearchParams } from "next/navigation";
import Leaderboard from "@/app/components/Leaderboard";

export default function Home() {
  const searchParams = useSearchParams();
  const page = searchParams?.get("page");
  return (
    <main className="flex min-h-screen flex-col items-center max-w-[100vw] overflow-clip">
      <Topbar />
      <Header />
      <Section1 />

      {page === "leaderboard" ? (
        <>
          <Section4 />
          <Leaderboard />
        </>
      ) : (
        <>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </>
      )}
      {/*<Section6 />*/}
      <Footer />
    </main>
  );
}

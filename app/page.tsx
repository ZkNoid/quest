"use client";

import Header from "@/app/components/Header";
import { Section1 } from "@/app/components/Section1";
import { Section2 } from "@/app/components/Section2";
import { Section3 } from "@/app/components/Section3";
import { Section4 } from "@/app/components/Section4";
import { Section5 } from "@/app/components/Section5";
import { Footer } from "@/app/components/Footer";
import { Topbar } from "@/app/components/Topbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-[100vw] overflow-clip">
      <Topbar />
      <Header />
      <Section1 />

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      {/*<Section6 />*/}
      <Footer />
    </main>
  );
}

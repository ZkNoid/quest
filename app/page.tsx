import Image from "next/image";
import Header from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-[100vw] overflow-hidden">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

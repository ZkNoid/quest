import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#D4FF33",
      blue: "#3A39FF",
      red: "#FF5B23",
      violet: "#DCB8FF",
      dark: "#141414",
      white: "#FFFCF5"
    },
    extend: {
      boxShadow: {
        main: "0.375vw 0.375vw 0px 0px black",
        mainWhite: "0.375vw 0.375vw 0px 0px white",
      },
      fontFamily: {
        roboto: ['var(--roboto)'],
        arame: ['var(--arame)'],
      },
    },
  },
  plugins: [],
};
export default config;

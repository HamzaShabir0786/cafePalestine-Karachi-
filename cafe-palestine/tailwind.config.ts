import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F1E9D8",
        sandDeep: "#E7DBC1",
        ink: "#1C1A17",
        olive: "#3F5335",
        oliveDeep: "#28351F",
        palestine: "#9E1B1E",
        gold: "#C08A28",
      },
      fontFamily: {
        display: ["var(--font-reem)", "sans-serif"],
        body: ["var(--font-work)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

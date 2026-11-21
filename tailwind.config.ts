import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cobalt: { DEFAULT: "#0E3B43", deep: "#0A2A30", soft: "#E3F1EC" },
        ink: "#10181B",
        slate: "#55606A",
        line: "#DDE3E1",
        marker: "#F2B33D",
        mint: "#7FD8BE",
      },
      fontFamily: {
        sans: ["var(--font-text)", "system-ui", "sans-serif"],
        display: ["var(--font-text)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
};

export default config;

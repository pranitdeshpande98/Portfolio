import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cobalt: { DEFAULT: "#1E3BD6", deep: "#162CA8", soft: "#E8ECFF" },
        ink: "#0E1530",
        slate: "#5A6178",
        line: "#DCDFEA",
        marker: "#FFD84D",
      },
      fontFamily: {
        sans: ["var(--font-text)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-text)", "sans-serif"],
      },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
};

export default config;

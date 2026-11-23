import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0B1020",
        panel: { DEFAULT: "#121A2E", up: "#18223B" },
        line: "#26314F",
        snow: "#E9EDF7",
        mute: "#97A3BF",
        volt: { DEFAULT: "#8C7CFF", soft: "#221F4A", deep: "#6B5AF0" },
        data: "#3DD6F5",
        ok: "#3DDC97",
        warn: "#FFB547",
        bad: "#FF6B6B",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "80rem" },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F1F3F2",
        ink: "#15233A",
        graphite: "#4B5563",
        wire: "#A3ADB8",
        approved: "#0F7B5F",
        pending: "#C98A00",
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        cond: ["var(--font-plex-cond)", "var(--font-plex)", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;

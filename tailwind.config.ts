import type { Config } from "tailwindcss";

/* Cold-room palette: frost surfaces, steel ink, inspection-stamp violet as the one accent,
   and status colors used only for status. */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        frost: "#EEF3F6",
        ink: "#16212B",
        steel: "#566472",
        rule: "#CFD9E0",
        stamp: { DEFAULT: "#5B3FA6", soft: "#ECE7F7", deep: "#3F2A7A" },
        alarm: "#C2412A",
        go: "#2E7A57",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "78rem" },
    },
  },
  plugins: [],
};

export default config;

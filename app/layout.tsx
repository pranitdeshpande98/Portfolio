import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
});

const plexCond = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-cond",
});

export const metadata: Metadata = {
  title: "Pranit Deshpande | Forward Deployed Engineer",
  description:
    "Forward deployed and software engineer who puts LLM agents into production and connects them to enterprise systems: ERP, payroll, EDI and data pipelines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plex.variable} ${plexCond.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

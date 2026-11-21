import type { Metadata } from "next";
import { Hanken_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const text = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-text" });
const display = Syne({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Pranit Deshpande | Forward Deployed Engineer",
  description:
    "Forward deployed and software engineer who puts LLM agents into production and connects them to enterprise systems: ERP, payroll, EDI and data pipelines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${text.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

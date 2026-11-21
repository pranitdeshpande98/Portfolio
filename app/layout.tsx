import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const text = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-text", display: "swap" });

export const metadata: Metadata = {
  title: "Pranit Deshpande | Forward Deployed Engineer",
  description:
    "Forward deployed and software engineer who puts LLM agents into production and connects them to enterprise systems: ERP, payroll, EDI and data pipelines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${text.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

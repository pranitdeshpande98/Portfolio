import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });

export const metadata: Metadata = {
  title: "Pranit Deshpande | Software and data engineer",
  description:
    "I keep a food producer's systems running: EDI with 60 trading partners, payroll for 4,500 employees, a data warehouse, and an AI assistant every employee uses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

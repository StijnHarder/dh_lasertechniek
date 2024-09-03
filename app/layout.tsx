import type { Metadata } from "next";
import { Palanquin } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const palanquin = Palanquin({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D&H Lasertechniek",
  description: "Laserscherpe techniek op alle materialen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="bg-[#FBFBFC]">
      <body className={palanquin.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

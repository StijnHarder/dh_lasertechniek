import type { Metadata } from "next";
import { Palanquin } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const palanquin = Palanquin({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "D&H Lasertechniek",
  description: "Laserscherpe techniek op alle materialen",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="bg-background">
      <body className={palanquin.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

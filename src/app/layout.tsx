import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import "./globals.css";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fame by Sheeraz | #1 Fame & AI Strategist",
  description:
    "Sheeraz Hasan — #1 Fame & AI Strategist in the World. Over 25 years in the business of attention. Celebrity PR, media strategy, and amplification.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#01060D] text-[#EEEEEE] overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTAs />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MobileNav from "@/components/MobileNav";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAVVE — Wear Discipline | Premium Men's Fashion",
  description:
    "CAVVE is a modern luxury minimalist menswear brand built for ambitious men. Shop heavyweight essentials, relaxed trousers, structured overshirts and more.",
  keywords: [
    "CAVVE",
    "luxury menswear",
    "minimalist fashion",
    "men's fashion",
    "quiet luxury",
    "premium clothing",
  ],
  authors: [{ name: "CAVVE" }],
  openGraph: {
    title: "CAVVE — Wear Discipline",
    description:
      "Built for ambition. Designed for the modern man. Premium minimalist menswear.",
    type: "website",
    locale: "en_US",
    siteName: "CAVVE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} antialiased`}
    >
      <body className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <AnnouncementBar />
        <SmoothScroll>{children}</SmoothScroll>
        <MobileNav />
      </body>
    </html>
  );
}

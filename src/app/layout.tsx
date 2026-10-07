import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FestivalSplash from "@/components/FestivalSplash";
import MobileDonateButton from "@/components/MobileDonateButton";

export const metadata: Metadata = {
  title: {
    default: "ISKCON Austin | Hare Krishna Temple in Austin, TX",
    template: "%s | ISKCON Austin",
  },
  description:
    "ISKCON Austin is a Hare Krishna temple serving Central Texas with daily worship, the free Sunday Feast, festivals, and a new permanent temple under construction. All are welcome.",
  keywords: [
    "ISKCON Austin",
    "Hare Krishna temple Austin",
    "Sunday Feast Austin",
    "Krishna consciousness Austin",
    "Bhagavad-gita class Austin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <FestivalSplash />
        <div className="threshold-bar" aria-hidden />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileDonateButton />
      </body>
    </html>
  );
}

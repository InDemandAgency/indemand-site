import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InDemand Agency — We Don't Sell Leads. We Send Buyers.",
  description:
    "InDemand installs a complete qualified buyer machine for US plumbing companies. From the first ad to the signed contract — we build it, run it, and scale it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-sans antialiased bg-primary text-white`}
      >
        <ScrollAnimationInit />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

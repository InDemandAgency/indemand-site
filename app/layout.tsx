import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollAnimationInit from "@/components/ScrollAnimationInit";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
        <Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x1vs5ybw4z");
        `}</Script>
      </body>
    </html>
  );
}

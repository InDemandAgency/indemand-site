"use client";

import { useState } from "react";
import RevenueCalculator from "./RevenueCalculator";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-primary">
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse at center, #00D4FF 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-6 pb-2 sm:pt-12 sm:pb-20 md:pt-16 md:px-8">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-4 sm:mb-8"
          style={{
            background: "rgba(0,212,255,0.06)",
            borderColor: "rgba(0,212,255,0.25)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
            style={{ boxShadow: "0 0 8px rgba(0,212,255,0.8)" }}
          />
          <span className="text-sm font-semibold text-accent tracking-wide">
            Your strategy call is confirmed
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-xl mb-5 sm:mb-14">
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-2 sm:mb-3">
            While you wait — find out exactly{" "}
            <span className="text-accent">what you&apos;re leaving behind.</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg">
            Plug in your real numbers. This takes 30 seconds.
          </p>
        </div>

        {/* Mobile toggle — hidden on sm+ */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden w-full max-w-sm flex items-center justify-between px-4 py-3 rounded-xl border mb-4 transition-all duration-200 active:scale-[0.98]"
          style={{
            background: open ? "rgba(0,212,255,0.08)" : "rgba(0,212,255,0.04)",
            borderColor: open ? "rgba(0,212,255,0.35)" : "rgba(0,212,255,0.18)",
          }}
        >
          <span className="text-sm font-bold text-accent">
            Calculate your revenue gap
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00D4FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 flex-shrink-0"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Divider — desktop only */}
        <div
          className="hidden sm:block w-full max-w-2xl h-px mb-10"
          style={{
            background:
              "linear-gradient(to right, transparent, #1E2A42 30%, #1E2A42 70%, transparent)",
          }}
        />

        {/* Calculator — collapsible on mobile, always open on desktop */}
        <div
          className={`w-full sm:block overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"
          }`}
        >
          <RevenueCalculator />
        </div>
      </div>
    </section>
  );
}

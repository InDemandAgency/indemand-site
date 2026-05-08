"use client";

import dynamic from "next/dynamic";

const WistiaPlayer = dynamic(() => import("./WistiaPlayer"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary flex flex-col">
      {/* Subtle radial glow behind the headline */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #00D4FF 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-4 md:pt-24 md:px-12">
        {/* Main headline */}
        <h1 className="text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl" data-animate>
          We Don&apos;t Sell You Leads.{" "}
          <span className="text-accent">We Send Buyers.</span>
        </h1>

        {/* Subheadlines */}
        <p className="mt-5 text-lg text-text-muted max-w-xl md:text-xl" data-animate data-delay="100">
          And we only get paid when they sign.
        </p>
        <p className="mt-2 text-base text-text-muted max-w-2xl md:text-lg" data-animate data-delay="180">
          Your <span className="text-white font-black">qualified buyer machine.</span>{" "}
          <span className="font-black text-accent">Installed</span>,{" "}
          <span className="font-black text-accent">managed</span>, and{" "}
          <span className="font-black text-accent">scaled</span>{" "}
          <span className="text-white font-black">by us.</span>
        </p>

        {/* CTA — scrolls to video */}
        <button
          onClick={() => {
            document
              .getElementById("hero-vsl")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-primary text-base bg-accent transition-all duration-200 glow-cyan glow-cyan-hover hover:scale-[1.03] active:scale-[0.98]"
        >
          <span
            className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-primary"
            aria-hidden="true"
          />
          5 Minutes. See How It Works.
        </button>
      </div>

      {/* VSL embed */}
      <div
        id="hero-vsl"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-10 mb-12 md:px-8 md:mt-12 lg:px-0"
      >
        {/* Glow border wrapper */}
        <div
          className="relative rounded-xl overflow-hidden border border-border-subtle"
          style={{
            boxShadow:
              "0 0 0 1px rgba(0,212,255,0.12), 0 8px 40px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* 16:9 aspect ratio wrapper */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <WistiaPlayer mediaId="edbcpyqw7i" aspect={16 / 9} trackAs="vsl" />
          </div>
        </div>

      </div>
    </section>
  );
}

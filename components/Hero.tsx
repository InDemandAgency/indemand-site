import RevenueCalculator from "./RevenueCalculator";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-primary">
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at center, #00D4FF 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-5 pt-12 pb-20 md:pt-16 md:px-8">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/indemand-logo.png"
            alt="InDemand Agency"
            width={180}
            height={48}
            priority
          />
        </div>

        {/* Divider */}
        <div
          className="w-full max-w-2xl h-px mb-10"
          style={{
            background:
              "linear-gradient(to right, transparent, #1E2A42 30%, #1E2A42 70%, transparent)",
          }}
        />

        {/* Calculator */}
        <RevenueCalculator />
      </div>
    </section>
  );
}

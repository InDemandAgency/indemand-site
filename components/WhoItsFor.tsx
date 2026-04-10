import { X, Check, TrendingUp } from "lucide-react";

/* Flat-line plateau icon — rises then goes horizontal */
function PlateauIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <polyline
        points="2,18 7,10 13,7 20,7"
        stroke="#ef4444"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dashed flat extension showing stagnation */}
      <line
        x1="20"
        y1="7"
        x2="23"
        y2="7"
        stroke="#ef4444"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
    </svg>
  );
}

const plateauedBullets = [
  "You've been stuck at the same revenue for 1–2 years and can't break through to the next level",
  "You rely on referrals and word-of-mouth — no control over whether someone refers you, when the phone rings, or what next month's numbers look like",
  "You've tried agencies, lead gen companies, or running your own ads — and what you got wasn't even close to what you paid for",
  "You're anxious about when the next dry season will come and have no control over how it will affect you",
  "You know you need a real system but don't have time to figure it out yourself",
];

const scalingBullets = [
  "You're already doing $30K–$150K/month and want to scale to $300K–$500K+",
  "You have a team (or are building one) and need qualified jobs filling your pipeline every week without worrying about dry seasons",
  "You understand that marketing is an investment, not an expense",
  "You want someone accountable for building, running, and scaling your qualified buyer machine — not just \"delivering leads\"",
];

export default function WhoItsFor() {
  return (
    <section className="bg-bg-elevated py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Headline */}
        <h2 className="text-3xl font-black text-white text-center leading-tight mb-12 sm:text-4xl md:text-5xl" data-animate>
          This System Is For{" "}
          <span className="text-accent">2 Types</span>{" "}
          Of Plumbing Companies
        </h2>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 — Plateaued */}
          <div className="rounded-xl border border-border-subtle bg-primary p-6 md:p-8" data-animate data-delay="100">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-red-500/15 flex items-center justify-center">
                <PlateauIcon />
              </span>
              <h3 className="text-white font-bold text-lg">
                Type 1: You&apos;ve Plateaued
              </h3>
            </div>
            <ul className="space-y-4">
              {plateauedBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center">
                    <X size={12} color="#ef4444" strokeWidth={3} />
                  </span>
                  <span className="text-text-muted text-sm leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Scaling */}
          <div className="rounded-xl border border-border-subtle bg-primary p-6 md:p-8" data-animate data-delay="200">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                <TrendingUp size={18} color="#00D4FF" />
              </span>
              <h3 className="text-white font-bold text-lg">
                Type 2: You&apos;re Scaling Intentionally
              </h3>
            </div>
            <ul className="space-y-4">
              {scalingBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                    <Check size={12} color="#00D4FF" strokeWidth={3} />
                  </span>
                  <span className="text-text-muted text-sm leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing paragraph */}
        <div className="mt-12 text-center max-w-3xl mx-auto" data-animate data-delay="100">
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            In the span of 2 years, we&apos;ve helped plumbing companies generate{" "}
            <span className="text-white font-semibold underline decoration-accent underline-offset-4">
              $4.3 million in closed job revenue
            </span>{" "}
            — not by selling them leads, but by installing the complete system that delivers qualified customers ready to pay.
          </p>
          <p className="mt-4 text-white font-bold text-base md:text-lg">
            The question is: are you ready for that kind of growth?
          </p>
        </div>
      </div>
    </section>
  );
}

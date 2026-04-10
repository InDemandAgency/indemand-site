"use client";

/* ── Custom animated icons ─────────────────────────────────── */

function TargetingAnimated() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      {/* Outer pulse ring — expands and fades like a radar lock */}
      <circle cx="13" cy="13" r="11" stroke="#00D4FF" strokeWidth="1.5">
        <animate attributeName="r" values="9;13;9" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Main targeting circle */}
      <circle cx="13" cy="13" r="9" stroke="#00D4FF" strokeWidth="1.5" fill="#00D4FF10" />
      {/* Inner circle */}
      <circle cx="13" cy="13" r="4.5" stroke="#00D4FF" strokeWidth="1.5" fill="#00D4FF1A" />
      {/* Center dot — pulses */}
      <circle cx="13" cy="13" r="1.8" fill="#00D4FF">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
      {/* Crosshair lines — top, bottom, left, right */}
      <line x1="13" y1="2" x2="13" y2="7.5" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="18.5" x2="13" y2="24" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="13" x2="7.5" y2="13" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18.5" y1="13" x2="24" y2="13" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FunnelAnimated() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      {/* Funnel shape */}
      <path d="M2 4 L24 4 L15.5 14 L15.5 22 L10.5 22 L10.5 14 Z"
        fill="#00D4FF18" stroke="#00D4FF" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Dot 1 */}
      <circle cx="13" r="2.2" fill="#00D4FF">
        <animate attributeName="cy" values="1;23" dur="1.8s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="r" values="2.2;2;1.5;1;0.6" dur="1.8s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;1;0" dur="1.8s" begin="0s" repeatCount="indefinite" />
      </circle>
      {/* Dot 2 */}
      <circle cx="13" r="2.2" fill="#00D4FF">
        <animate attributeName="cy" values="1;23" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="2.2;2;1.5;1;0.6" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;1;0" dur="1.8s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function PhoneBookAnimated() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      {/* Calendar body */}
      <rect x="2" y="5" width="22" height="19" rx="2" fill="#00D4FF12" stroke="#00D4FF" strokeWidth="1.5" />
      {/* Header bar */}
      <line x1="2" y1="10" x2="24" y2="10" stroke="#00D4FF" strokeWidth="1.5" opacity="0.45" />
      {/* Corner pins */}
      <line x1="7.5" y1="2.5" x2="7.5" y2="7.5" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
      <line x1="18.5" y1="2.5" x2="18.5" y2="7.5" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
      {/* Checkmark draws on, holds, fades, repeats */}
      <path d="M7.5 16.5 L11.5 20.5 L18.5 13.5"
        stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        strokeDasharray="22" strokeDashoffset="22">
        <animate attributeName="stroke-dashoffset" values="22;0;0;22" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2.8s" repeatCount="indefinite" />
      </path>
      {/* Soft glow pulse when checkmark is visible */}
      <circle cx="13" cy="17" r="5" fill="#00D4FF" opacity="0">
        <animate attributeName="opacity" values="0;0.07;0" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
        <animate attributeName="r" values="4;9;4" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function TypingBubbleAnimated() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      {/* Bubble */}
      <path d="M2 5 Q2 3 4 3 L22 3 Q24 3 24 5 L24 16 Q24 18 22 18 L10 18 L6 22 L6 18 L4 18 Q2 18 2 16 Z"
        fill="#00D4FF12" stroke="#00D4FF" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Typing dot 1 */}
      <circle cx="8" cy="10.5" r="1.8" fill="#00D4FF">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.1s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="cy" values="10.5;9;10.5" dur="1.1s" begin="0s" repeatCount="indefinite" />
      </circle>
      {/* Typing dot 2 */}
      <circle cx="13" cy="10.5" r="1.8" fill="#00D4FF">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.1s" begin="0.28s" repeatCount="indefinite" />
        <animate attributeName="cy" values="10.5;9;10.5" dur="1.1s" begin="0.28s" repeatCount="indefinite" />
      </circle>
      {/* Typing dot 3 */}
      <circle cx="18" cy="10.5" r="1.8" fill="#00D4FF">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.1s" begin="0.56s" repeatCount="indefinite" />
        <animate attributeName="cy" values="10.5;9;10.5" dur="1.1s" begin="0.56s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function BarChartAnimated() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      {/* X axis */}
      <line x1="2" y1="23" x2="24" y2="23" stroke="#00D4FF" strokeWidth="1" opacity="0.35" />
      {/* Bar 1 — short, bounces up */}
      <rect x="3" y="15" width="5" height="8" rx="1" fill="#00D4FF" opacity="0.65">
        <animate attributeName="height" values="8;14;8" dur="2s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="y" values="15;9;15" dur="2s" begin="0s" repeatCount="indefinite" />
      </rect>
      {/* Bar 2 — medium */}
      <rect x="11" y="10" width="5" height="13" rx="1" fill="#00D4FF" opacity="0.8">
        <animate attributeName="height" values="13;8;13" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="y" values="10;15;10" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      {/* Bar 3 — tall, grows tallest */}
      <rect x="19" y="5" width="5" height="18" rx="1" fill="#00D4FF">
        <animate attributeName="height" values="18;22;18" dur="2s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="y" values="5;1;5" dur="2s" begin="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/* ── Steps data ────────────────────────────────────────────── */
type StepIcon = () => JSX.Element;

const steps: { icon: StepIcon; label: string; body: string }[] = [
  {
    icon: TargetingAnimated,
    label: "Ads Management",
    body: "We create and manage high-converting ad campaigns that attract qualified homeowners in your area.",
  },
  {
    icon: FunnelAnimated,
    label: "Profit Funnel",
    body: "Custom-built funnel that pre-qualifies and educates homeowners before they ever talk to you.",
  },
  {
    icon: PhoneBookAnimated,
    label: "Sales Team",
    body: "Our team follows up with every lead, books appointments, and handles objections — so you don't have to.",
  },
  {
    icon: TypingBubbleAnimated,
    label: "Backend Selling",
    body: 'Automated follow-up sequences that re-engage cold leads and turn "maybe later" into "let\'s do this."',
  },
  {
    icon: BarChartAnimated,
    label: "Track & Scale",
    body: "Real-time dashboards, every metric tracked down to the smallest detail, weekly reports, and strategy calls to continuously scale.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-elevated py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-black text-white leading-tight mb-4 sm:text-4xl md:text-5xl" data-animate>
          How It <span className="text-accent">Works</span>
        </h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-12">
          {/* Connector line + icon nodes */}
          <div className="relative mb-8">
            <div className="absolute top-6 left-[calc(10%-8px)] right-[calc(10%-8px)] h-0.5 bg-border-subtle" />
            <div className="flex justify-around">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 border-accent bg-primary"
                    style={{ boxShadow: "0 0 14px rgba(0,212,255,0.3)" }}
                  >
                    <step.icon />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-border-subtle bg-primary p-5 flex flex-col"
                data-animate
                data-delay={i * 80}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{step.label}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden mt-10 relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border-subtle" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5" data-animate data-delay={i * 80}>
                <div
                  className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full border-2 border-accent bg-primary flex items-center justify-center"
                  style={{ boxShadow: "0 0 12px rgba(0,212,255,0.25)" }}
                >
                  <step.icon />
                </div>
                <div className="rounded-xl border border-border-subtle bg-primary p-5 flex-1">
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">
                    Step {i + 1}
                  </p>
                  <h3 className="text-white font-bold text-sm mb-2">{step.label}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

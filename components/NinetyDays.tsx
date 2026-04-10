"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Parse "8–15" → { prefix:"", n1:8, n2:15, suffix:"" }
   Parse "$11K–$47K" → { prefix:"$", n1:11, n2:47, suffix:"K" }
────────────────────────────────────────────── */
function parseStat(value: string) {
  const m = value.match(/^(\$?)(\d+)(K?)[\u2013\-](\$?)(\d+)(K?)$/);
  if (!m) return null;
  return {
    prefix: m[1] || m[4],
    n1: parseInt(m[2]),
    n2: parseInt(m[5]),
    suffix: m[3] || m[6],
  };
}

/* ─────────────────────────────────────────────
   Count-up stat box
────────────────────────────────────────────── */
function CountUpStat({
  value,
  label,
  trigger,
}: {
  value: string;
  label: string;
  trigger: boolean;
}) {
  const parsed = parseStat(value);
  const [cur1, setCur1] = useState(0);
  const [cur2, setCur2] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || !parsed || hasRun.current) return;
    hasRun.current = true;

    const duration = 1500;
    const start = performance.now();

    function frame(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCur1(Math.round(eased * parsed!.n1));
      setCur2(Math.round(eased * parsed!.n2));
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }, [trigger, parsed]);

  const display = parsed
    ? `${parsed.prefix}${cur1}${parsed.suffix}–${parsed.prefix}${cur2}${parsed.suffix}`
    : value;

  return (
    <div className="rounded-lg border border-border-subtle bg-primary px-4 py-3 min-w-[120px]">
      <p className="text-accent font-black text-lg leading-none mb-1">{display}</p>
      <p className="text-text-muted text-xs">{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Phase data
────────────────────────────────────────────── */
const phases = [
  {
    tag: "Day 0–7",
    title: "System Installation",
    body: "We build your custom funnel, set up your ad campaigns, configure your CRM, and map out your 90-day strategy plan in flowcharts. Everything is tailored to your market, your services, and your goals.",
    stats: null,
  },
  {
    tag: "Week 2–4",
    title: "First Appointments Rolling In",
    body: "Campaigns go live. Homeowners in your area start responding. You start seeing real, qualified appointments.",
    stats: [
      { label: "Booked Appointments", value: "8–15" },
      { label: "Pipeline Value", value: "$11K–$47K" },
    ],
  },
  {
    tag: "Month 2",
    title: "Momentum Building",
    body: "With data from Month 1, we optimize targeting and messaging. Volume increases, close rate improves, and your pipeline fills up.",
    stats: [
      { label: "Booked Appointments", value: "15–25" },
      { label: "Pipeline Value", value: "$47K–$60K" },
    ],
  },
  {
    tag: "Month 3",
    title: "Scaling Machine",
    body: "System is fully optimized. Consistent flow of qualified buyers, backend nurture is converting past leads, and you're ready to scale further.",
    stats: [
      { label: "Booked Appointments", value: "20–35" },
      { label: "Pipeline Value", value: "$62K–$95K" },
    ],
  },
];

/* ─────────────────────────────────────────────
   Single animated phase row
────────────────────────────────────────────── */
function PhaseRow({
  phase,
  index,
}: {
  phase: (typeof phases)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [countUp, setCountUp] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            // Start count-up slightly after the card slides in
            setTimeout(() => setCountUp(true), 500);
          }, index * 180);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="flex gap-6 md:gap-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-40px)",
        transition: "opacity 0.6s ease, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div
          className="relative z-10 w-10 h-10 rounded-full border-2 border-accent bg-primary flex items-center justify-center text-accent font-black text-xs md:w-12 md:h-12"
          style={{
            boxShadow: visible
              ? "0 0 16px rgba(0,212,255,0.35)"
              : "none",
            transition: "box-shadow 0.8s ease",
          }}
        >
          {index + 1}
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 rounded-xl border border-border-subtle bg-bg-elevated p-6 mb-2">
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">
          {phase.tag}
        </p>
        <h3 className="text-white font-black text-xl mb-3">{phase.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">{phase.body}</p>

        {phase.stats && (
          <div className="flex flex-wrap gap-3">
            {phase.stats.map((stat) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                trigger={countUp}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section
────────────────────────────────────────────── */
export default function NinetyDays() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
          Timeline Expectations Of Delivery
        </p>
        <h2 className="text-3xl font-black text-white leading-tight mb-12 sm:text-4xl md:text-5xl" data-animate>
          Your First <span className="text-accent">90 Days</span> With InDemand
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border-subtle md:left-6" />
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <PhaseRow key={i} phase={phase} index={i} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-10 text-text-muted text-xs leading-relaxed border border-border-subtle rounded-lg px-5 py-4 bg-bg-elevated"
          data-animate
          data-delay="100"
        >
          <span className="text-white font-semibold">*</span> These results are based on data from 50+ plumbing company partners. Results vary based on market, service type, average job value, and your team&apos;s ability to close. Some of our partners have generated over $500K in pipeline revenue by month two. We&apos;ll give you an honest projection based on your specific situation during our strategy call.
        </p>
      </div>
    </section>
  );
}

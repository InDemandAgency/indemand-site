"use client";

import { useEffect, useRef } from "react";
import { X, Car, Clock, Scissors, Frown } from "lucide-react";

/* ── Bar chart data ── */
const withoutSystemData = [
  { month: "Jan", value: 56 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 67 },
  { month: "Apr", value: 12 },
  { month: "May", value: 42 },
  { month: "Jun", value: 22 },
];

const withInDemandData = [
  { month: "Jan", value: 8 },
  { month: "Feb", value: 11 },
  { month: "Mar", value: 14 },
  { month: "Apr", value: 18 },
  { month: "May", value: 22 },
  { month: "Jun", value: 27 },
];

function SvgBarChart({
  data,
  color,
  label,
  caption,
  yLabel,
  showDollar = false,
}: {
  data: { month: string; value: number }[];
  color: string;
  label: string;
  caption: string;
  yLabel: string;
  showDollar?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("chart-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const max = Math.max(...data.map((d) => d.value));
  const chartH = 120;
  const barW = 28;
  const gap = 12;
  const padLeft = 44; // space for Y-axis labels
  const padTop = 6;
  const padBottom = 22;
  const totalW = padLeft + data.length * (barW + gap) - gap + 8;
  const svgH = chartH + padTop + padBottom;

  // Y-axis grid lines at 25%, 50%, 75%, 100%
  const gridLines = [0.25, 0.5, 0.75, 1].map((frac) => ({
    y: padTop + chartH - frac * chartH,
    label: showDollar
      ? `$${Math.round(max * frac)}K`
      : `${Math.round(max * frac)}`,
  }));

  return (
    <div
      ref={containerRef}
      className="flex-1 rounded-xl border border-border-subtle bg-primary p-5"
      data-animate
      data-delay="200"
    >
      <p className="text-[11px] font-black uppercase tracking-widest mb-0.5" style={{ color }}>
        {label}
      </p>
      <p className="text-text-muted text-[10px] mb-2">{yLabel}</p>

      <svg
        viewBox={`0 0 ${totalW} ${svgH}`}
        width="100%"
        className="overflow-visible"
        aria-hidden="true"
      >
        {/* Grid lines */}
        {gridLines.map((gl, i) => (
          <g key={i}>
            <line
              x1={padLeft}
              y1={gl.y}
              x2={totalW - 4}
              y2={gl.y}
              stroke="#1E2A42"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={padLeft - 4}
              y={gl.y + 3.5}
              textAnchor="end"
              fontSize="8"
              fill="#8B9AAF"
            >
              {gl.label}
            </text>
          </g>
        ))}

        {/* Bars */}
        {data.map((d, i) => {
          const barH = Math.max((d.value / max) * chartH, 3);
          const x = padLeft + i * (barW + gap);
          const y = padTop + chartH - barH;
          // Stagger each bar's animation
          const transitionDelay = `${i * 80}ms`;

          return (
            <g key={d.month}>
              {/* Toned bar — uses CSS class for grow animation */}
              <rect
                x={x}
                y={y}
                width={barW}
                height={barH}
                rx={3}
                fill={color}
                opacity={0.6}
                className="bar-anim"
                style={{ transitionDelay }}
              />
              {/* Value label above bar */}
              <text
                x={x + barW / 2}
                y={y - 4}
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="600"
                fill={color}
                opacity={0.9}
              >
                {showDollar ? `$${d.value}K` : d.value}
              </text>
              {/* Month label below */}
              <text
                x={x + barW / 2}
                y={padTop + chartH + 15}
                textAnchor="middle"
                fontSize="8.5"
                fill="#8B9AAF"
              >
                {d.month}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="text-text-muted text-[10px] mt-1 italic">{caption}</p>
    </div>
  );
}

/* ── Bullet icons ── */
const priceShopperBullets = [
  { icon: Car,      text: "You drive 45 minutes and burn $40 in gas for an estimate that goes nowhere" },
  { icon: Clock,    text: "You spend an hour putting together a quote and never hear back" },
  { icon: Scissors, text: "You're forced to cut your margins just to win work" },
  { icon: Frown,    text: "The jobs you DO win are the low-budget, high-headache ones nobody else wanted" },
];

const bottleneckBullets = [
  "A customer texts back but you're on a job. By the time you respond three hours later, they already called someone else",
  "Leads come in but nobody follows up fast enough to convert them",
  "No system for staying in front of people who aren't ready today but will need you in 2 months",
  "You're working IN the business 12 hours a day with zero time to work ON it",
];

function ProblemHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6" data-animate>
      <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-black text-sm flex-shrink-0">
        {number}
      </span>
      <h3 className="text-white font-black text-xl md:text-2xl">{title}</h3>
    </div>
  );
}

export default function ThreeProblems() {
  return (
    <section className="bg-bg-elevated py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section headline */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-black text-white leading-tight mb-3 sm:text-4xl md:text-5xl" data-animate>
            3 Problems Keeping Good Businesses{" "}
            <span className="font-black text-red-500">Stuck</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg" data-animate data-delay="100">
            After working with dozens of businesses like yours, we know this pattern by heart.
          </p>
        </div>

        {/* Problem 1 */}
        <div className="mb-16 md:mb-20">
          <div className="w-12 h-0.5 bg-accent mb-4" />
          <ProblemHeader number="1" title="No Predictable Way to Get Qualified Customers" />
          <div className="space-y-4 text-text-muted text-base leading-relaxed mb-8 max-w-3xl">
            <p data-animate>
              Most owners rely on referrals, word-of-mouth, and repeat customers. And while those are great — they&apos;re{" "}
              <span className="text-red-500 font-bold">not predictable</span>.
            </p>
            <p data-animate data-delay="80">
              One month you&apos;re booked out 6 weeks. The next? Your crew is sitting around waiting for the phone to ring. You can&apos;t hire, you can&apos;t plan, and you definitely can&apos;t scale.
            </p>
            <p data-animate data-delay="160">
              The difference between a $500K business and a $2M business? A system that puts qualified jobs on your calendar every single week — not just when someone happens to mention your name.
            </p>
          </div>

          {/* Charts */}
          <div className="flex flex-col sm:flex-row gap-4">
            <SvgBarChart
              data={withoutSystemData}
              color="#ef4444"
              label="Without a System"
              yLabel="Inconsistent Revenue"
              caption="Feast-or-famine — can't plan, can't hire, can't breathe"
              showDollar
            />
            <SvgBarChart
              data={withInDemandData}
              color="#00D4FF"
              label="With InDemand"
              yLabel="Qualified Buyers by Month"
              caption="Consistent & predictable pipeline"
            />
          </div>
        </div>

        {/* Problem 2 */}
        <div className="mb-16 md:mb-20">
          <div className="w-12 h-0.5 bg-accent mb-4" />
          <ProblemHeader number="2" title='Price-Shoppers & "Just Give Me a Number" Customers' />
          <div className="space-y-4 text-text-muted text-base leading-relaxed mb-6 max-w-3xl">
            <p data-animate>
              If your leads are coming from generic ads or shared lead platforms,{" "}
              <span className="text-red-500 font-bold">you&apos;re competing on price</span>{" "}
              — not the quality of work you actually deliver. No business that does great work should be in that position.
            </p>
            <p data-animate data-delay="80">
              These customers are getting 3–5 quotes. They don&apos;t care about your craftsmanship, your reviews, or your warranty. They just want the lowest number.
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {priceShopperBullets.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-border-subtle bg-primary px-5 py-4"
                data-animate
                data-delay={i * 80}
              >
                <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <item.icon size={15} color="#ef4444" />
                </span>
                <span className="text-text-muted text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Analogy callout */}
          <div className="rounded-xl border border-accent/20 bg-accent/5 px-6 py-5" data-animate>
            <p className="text-text-muted text-sm leading-relaxed">
              <span className="text-accent font-semibold">Most lead gen companies and so-called &ldquo;marketers&rdquo;</span> sell you the wheels and call it a truck. No engine, no seats, no steering — just wheels. Then you wonder why you&apos;re not moving.{" "}
              <span className="text-white font-semibold">We build the whole truck.</span>
            </p>
          </div>

          <p className="mt-6 text-text-muted text-base leading-relaxed max-w-3xl" data-animate>
            The customers on your calendar were qualified by our team, responded because they have a real need, and are booked to talk to you. Not you and four other companies. We don&apos;t put you in the competition — we put you above it.
          </p>
        </div>

        {/* Problem 3 */}
        <div>
          <div className="w-12 h-0.5 bg-accent mb-4" />
          <ProblemHeader number="3" title="You're Running the Business AND Trying to Grow It" />
          <div className="space-y-4 text-text-muted text-base leading-relaxed mb-6 max-w-3xl">
            <p data-animate>
              You&apos;re the one dispatching, managing the crew, handling callbacks, doing estimates, dealing with suppliers — and somewhere in between all of that, you&apos;re supposed to be the marketing department too?
            </p>
            <p data-animate data-delay="80">
              There aren&apos;t enough hours in the day. And the things that would actually grow your business — responding fast, booking appointments, staying top of mind — are the first to slip when you&apos;re out on a job at 2pm.
            </p>
          </div>

          <ul className="space-y-3">
            {bottleneckBullets.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border-subtle bg-primary px-5 py-4"
                data-animate
                data-delay={i * 80}
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center">
                  <X size={12} color="#ef4444" strokeWidth={3} />
                </span>
                <span className="text-text-muted text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

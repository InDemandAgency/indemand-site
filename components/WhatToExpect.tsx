import { Calendar, DollarSign, TrendingUp, Users, Clock, Lock } from "lucide-react";

const goals = [
  {
    icon: Calendar,
    headline: "Fill your calendar, fast",
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.2)",
  },
  {
    icon: DollarSign,
    headline: "Cash in on the easy money hiding in your market right now",
    color: "#4ADE80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
  },
  {
    icon: TrendingUp,
    headline: "Land bigger jobs — no price wars, no tire-kickers",
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.2)",
  },
];

export default function WhatToExpect() {
  return (
    <section id="what-to-expect" className="bg-primary py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5 md:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="w-2 h-2 rounded-full bg-accent flex-shrink-0 animate-pulse"
            style={{ boxShadow: "0 0 8px rgba(0,212,255,0.9)" }}
          />
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            What to Expect on the Call
          </p>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-10">
          Here&apos;s What Happens{" "}
          <span className="text-accent">On Your Call</span>
        </h2>

        {/* Live indicator */}
        <div
          className="flex items-start gap-4 rounded-xl p-5 mb-6 border"
          style={{
            background: "rgba(0,212,255,0.04)",
            borderColor: "rgba(0,212,255,0.15)",
          }}
        >
          <div className="flex-shrink-0 mt-1 relative">
            <span className="block w-3 h-3 rounded-full bg-accent animate-pulse"
              style={{ boxShadow: "0 0 10px rgba(0,212,255,0.8)" }} />
          </div>
          <p className="text-text-muted text-base leading-relaxed">
            <span className="text-white font-bold">Right now</span>, our team is digging into your whole business — your site, your reviews, how you land jobs — and building your{" "}
            <span className="text-accent font-bold">custom 35-day game plan.</span>{" "}
            Step by step, it shows you how to:
          </p>
        </div>

        {/* Goal cards */}
        <div className="space-y-3 mb-8">
          {goals.map(({ icon: Icon, headline, color, bg, border }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-300"
              style={{ background: bg, borderColor: border }}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: `${bg}`, border: `1px solid ${border}` }}
              >
                <Icon size={18} color={color} strokeWidth={2.5} />
              </span>
              <span className="text-white font-bold text-base">{headline}</span>
            </div>
          ))}
        </div>

        {/* Free badge */}
        <div className="flex justify-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00D4FF",
              boxShadow: "0 0 20px rgba(0,212,255,0.15)",
            }}
          >
            The complete formula to make more and work less — Built for you. Free.
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-10" style={{ background: "linear-gradient(to right, transparent, #1E2A42, transparent)" }} />

        {/* Research stat block */}
        <div
          className="rounded-xl border p-6 mb-6"
          style={{
            background: "linear-gradient(135deg, #0B1628 0%, #0F1729 100%)",
            borderColor: "rgba(0,212,255,0.15)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Users size={20} color="#00D4FF" />
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Built on real data
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span
              className="text-5xl font-black"
              style={{
                color: "#00D4FF",
                textShadow: "0 0 30px rgba(0,212,255,0.4)",
              }}
            >
              1,700+
            </span>
            <span className="text-text-muted font-semibold text-base">contractors surveyed across the US</span>
          </div>
          <p className="text-text-muted text-base leading-relaxed">
            We mapped the moves that{" "}
            <span className="text-white font-semibold">quietly sink a contracting business</span>, and the laws every market leader runs on. Your plan is built off those exact laws, aimed straight at your situation.{" "}
            <span className="text-white font-semibold">Whatever&apos;s holding you back, we&apos;ve seen it a hundred times and we know the way out.</span>
          </p>
        </div>

        {/* The Deal */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-5">
            <Clock size={16} color="#8B9AAF" />
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
              The Deal
            </p>
          </div>

          {/* Worst case card — 1 minute */}
          <div
            className="rounded-xl border p-6 mb-3"
            style={{
              background: "linear-gradient(135deg, #0B1628 0%, #0F1729 100%)",
              borderColor: "rgba(0,212,255,0.25)",
              boxShadow: "0 0 0 1px rgba(0,212,255,0.08), 0 8px 32px rgba(0,0,0,0.35)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
              Worst case scenario
            </p>
            <div className="flex items-baseline gap-3 mb-3">
              <span
                className="text-5xl font-black"
                style={{ color: "#00D4FF", textShadow: "0 0 24px rgba(0,212,255,0.4)" }}
              >
                1 min
              </span>
              <span className="text-text-muted font-semibold">on the call</span>
            </div>
            <p className="text-white font-bold text-base mb-2">
              You show up, grab your custom 35-day plan, and leave.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              A plan built specifically for your business, your market, your numbers —{" "}
              <span className="text-accent font-semibold">yours to keep, free, forever.</span>{" "}
              Whether we ever work together or not.
            </p>
          </div>

          {/* Best case card — 20 minutes */}
          <div
            className="rounded-xl border border-border-subtle p-5 mb-5"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
              Best case scenario
            </p>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-4xl font-black text-white">20 min</span>
              <span className="text-text-muted font-semibold">on the call</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              We walk through the whole plan together. If you want us to build and run it for you, we&apos;ll show you exactly how.{" "}
              <span className="text-white font-semibold">No pressure. No chasing.</span>{" "}
              You decide.
            </p>
          </div>

          <p
            className="text-center text-sm font-bold"
            style={{ color: "#00D4FF" }}
          >
            You literally cannot leave empty-handed.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{ background: "linear-gradient(to right, transparent, #1E2A42, transparent)" }} />

        {/* Final Note — urgency */}
        <div
          id="final-note"
          className="rounded-xl p-6"
          style={{
            background: "linear-gradient(135deg, #2D0A0A 0%, #1A0606 50%, #1F0C0C 100%)",
            border: "1px solid rgba(220, 38, 38, 0.3)",
            boxShadow: "0 0 0 1px rgba(220,38,38,0.1), 0 8px 32px rgba(180,20,20,0.2)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Lock size={14} color="#F87171" />
            <p className="text-xs font-bold uppercase tracking-widest text-red-400">
              Final Note
            </p>
            <span
              className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0"
              style={{ boxShadow: "0 0 8px rgba(239,68,68,0.8)" }}
            />
          </div>

          <p className="text-text-muted text-base leading-relaxed mb-3">
            The second you booked, we{" "}
            <span className="text-white font-bold">locked your area</span>{" "}
            and stopped taking calls from anyone else inside it.
          </p>
          <p className="text-text-muted text-base leading-relaxed mb-5">
            Miss your call and the plan we built for you is{" "}
            <span className="text-red-400 font-bold">gone</span>. Your area opens back up, and we can&apos;t promise it&apos;ll still be free when you come back — we only run{" "}
            <span className="text-white font-bold">one contractor per region</span>, so our clients never end up competing with each other.
          </p>
          <p
            className="text-lg font-black"
            style={{
              color: "#FFFFFF",
              textShadow: "0 0 20px rgba(239,68,68,0.4)",
            }}
          >
            Show up. Keep your spot.
          </p>
        </div>

      </div>
    </section>
  );
}

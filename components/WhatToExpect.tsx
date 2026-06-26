export default function WhatToExpect() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5 md:px-8">

        {/* Section label */}
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
          What to Expect on the Call
        </p>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-8">
          Here&apos;s What Happens On Your Call
        </h2>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{
            background:
              "linear-gradient(to right, #1E2A42, transparent)",
          }}
        />

        {/* Game plan block */}
        <div
          className="rounded-xl border border-border-subtle bg-bg-elevated p-6 mb-6"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
        >
          <p className="text-text-muted text-base leading-relaxed mb-6">
            Right now, our team is digging into your whole business — your site, your reviews, how you land jobs — and building your{" "}
            <span className="text-white font-semibold">custom 35-day game plan.</span>{" "}
            Step by step, it shows you how to:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Fill your calendar, fast",
              "Cash in on the easy money hiding in your market right now",
              "Land bigger jobs — no price wars, no tire-kickers",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent font-bold text-base mt-0.5 flex-shrink-0">→</span>
                <span className="text-white font-semibold text-base">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-text-muted text-base leading-relaxed">
            The complete formula to make more and work less.{" "}
            <span className="text-white font-semibold">Built for you. Free.</span>
          </p>
        </div>

        {/* Research credibility */}
        <div
          className="rounded-xl border p-6 mb-6"
          style={{
            background: "rgba(0,212,255,0.04)",
            borderColor: "rgba(0,212,255,0.15)",
          }}
        >
          <p className="text-text-muted text-base leading-relaxed">
            And it&apos;s not guesswork. We surveyed{" "}
            <span className="text-accent font-bold">1,700+ contractors</span>{" "}
            across the US — mapped the moves that quietly sink a contracting business, and the laws every market leader runs on. Your plan is built off those exact laws, aimed straight at your situation. Whatever&apos;s holding you back, we&apos;ve seen it a hundred times and we know the way out.
          </p>
        </div>

        {/* The Deal */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
            The Deal
          </p>
          <p className="text-text-muted text-base leading-relaxed mb-3">
            Twenty minutes for the full walkthrough. Or one minute, grab your plan and implement it yourself. Either way it&apos;s yours to keep, free, whether we work together or not.
          </p>
          <p className="text-text-muted text-base leading-relaxed">
            Want us to build and run it for you? We&apos;ll show you how. If not, you keep the plan and we shake hands.{" "}
            <span className="text-white font-semibold">No pressure. No chasing.</span>
          </p>
        </div>

        {/* Final Note — urgency */}
        <div
          className="rounded-xl p-6"
          style={{
            background: "linear-gradient(135deg, #2D0A0A 0%, #1A0606 50%, #1F0C0C 100%)",
            border: "1px solid rgba(220, 38, 38, 0.3)",
            boxShadow: "0 0 0 1px rgba(220,38,38,0.1), 0 8px 32px rgba(180,20,20,0.2)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
            Final Note
          </p>
          <p className="text-text-muted text-base leading-relaxed mb-3">
            The second you booked, we locked your area and stopped taking calls from anyone else inside it.
          </p>
          <p className="text-text-muted text-base leading-relaxed mb-4">
            Miss your call and the plan we built for you is gone. Your area opens back up, and we can&apos;t promise it&apos;ll still be free when you come back — we only run one contractor per region, so our clients never end up competing with each other.
          </p>
          <p className="text-white font-bold text-base">
            Show up. Keep your spot.
          </p>
        </div>

      </div>
    </section>
  );
}

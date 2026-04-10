"use client";

export default function FinalCTA() {
  return (
    <section className="bg-bg-elevated py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Glow orb */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #00D4FF 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
            Ready To Grow?
          </p>

          <h2 className="text-3xl font-black text-white leading-tight mb-4 sm:text-4xl md:text-5xl">
            Ready To Install Your{" "}
            <span className="text-accent">Qualified Buyer Machine?</span>
          </h2>

          <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Book a 30-minute strategy call. We&apos;ll show you exactly what your first 90 days would look like.
          </p>

          <button
            onClick={() => {
              /* Link to booking page — swap in Calendly/TidyCal URL */
              window.open("https://calendly.com", "_blank");
            }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-black text-primary text-lg bg-accent transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              boxShadow:
                "0 0 24px rgba(0,212,255,0.4), 0 0 48px rgba(0,212,255,0.15)",
            }}
          >
            <span
              className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-primary"
              aria-hidden="true"
            />
            Book My Strategy Call
          </button>

          <p className="text-text-muted text-sm mt-5">
            No obligation. No pitch. Just an honest look at what&apos;s possible for your business.
          </p>
        </div>
      </div>
    </section>
  );
}

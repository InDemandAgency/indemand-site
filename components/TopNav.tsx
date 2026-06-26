"use client";

export default function TopNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes proofPulse {
          0%, 100% { box-shadow: 0 0 16px rgba(250,204,21,0.6), 0 0 32px rgba(250,204,21,0.3), 0 0 48px rgba(250,204,21,0.15); }
          50%       { box-shadow: 0 0 24px rgba(250,204,21,0.9), 0 0 48px rgba(250,204,21,0.5), 0 0 72px rgba(250,204,21,0.25); }
        }
        .proof-btn { animation: proofPulse 2s ease-in-out infinite; }
        .proof-btn:hover { animation: none; transform: scale(1.05); box-shadow: 0 0 32px rgba(250,204,21,1), 0 0 64px rgba(250,204,21,0.6) !important; }
      `}</style>
      <header
        className="sticky top-0 z-50 w-full flex justify-center px-4 py-3"
        style={{
          background: "rgba(10,15,30,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(30,42,66,0.8)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        <nav className="flex items-center gap-3">
          {/* Priority button — pulsing gold */}
          <button
            onClick={() => scrollTo("proof")}
            className="proof-btn px-5 py-2.5 rounded-lg text-sm font-black text-gray-900 transition-transform duration-200 active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #FDE047 0%, #FACC15 50%, #F59E0B 100%)",
            }}
          >
            ✦ Proof It Works
          </button>

          {/* Secondary button */}
          <button
            onClick={() => scrollTo("what-to-expect")}
            className="px-4 py-2 rounded-lg text-sm font-bold text-white border border-border-subtle transition-all duration-200 hover:border-accent hover:text-accent active:scale-[0.97]"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            What to Expect on the Call
          </button>
        </nav>
      </header>
    </>
  );
}

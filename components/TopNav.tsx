"use client";

export default function TopNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes proofPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(250,204,21,0.45), 0 0 24px rgba(250,204,21,0.2); }
          50%       { box-shadow: 0 0 20px rgba(250,204,21,0.7), 0 0 36px rgba(250,204,21,0.35); }
        }
        .proof-btn { animation: proofPulse 2.5s ease-in-out infinite; }
        .proof-btn:hover { animation: none; transform: scale(1.04); box-shadow: 0 0 24px rgba(250,204,21,0.8), 0 0 48px rgba(250,204,21,0.4) !important; }
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
          {/* 8/10 — gold gradient, gentle pulse */}
          <button
            onClick={() => scrollTo("proof")}
            className="proof-btn px-5 py-2.5 rounded-lg text-sm font-black text-gray-900 transition-transform duration-200 active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #FDE047 0%, #FACC15 50%, #F59E0B 100%)",
            }}
          >
            ✦ Proof It Works
          </button>

          {/* 6/10 — cyan-to-purple gradient, static glow */}
          <button
            onClick={() => scrollTo("what-to-expect")}
            className="px-4 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #00D4FF 0%, #A855F7 100%)",
              boxShadow: "0 0 12px rgba(0,212,255,0.3), 0 0 24px rgba(168,85,247,0.15)",
            }}
          >
            What to Expect on the Call
          </button>
        </nav>
      </header>
    </>
  );
}

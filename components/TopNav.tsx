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
        @keyframes redPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(239,68,68,0.45), 0 0 20px rgba(239,68,68,0.2); }
          50%       { box-shadow: 0 0 18px rgba(239,68,68,0.7), 0 0 32px rgba(239,68,68,0.35); }
        }
        .proof-btn { animation: proofPulse 2.5s ease-in-out infinite; }
        .proof-btn:hover { animation: none; transform: scale(1.04); box-shadow: 0 0 24px rgba(250,204,21,0.8), 0 0 48px rgba(250,204,21,0.4) !important; }
        .important-btn { animation: redPulse 2.5s ease-in-out infinite; }
        .important-btn:hover { animation: none; transform: scale(1.04); box-shadow: 0 0 24px rgba(239,68,68,0.8), 0 0 48px rgba(239,68,68,0.4) !important; }
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

          {/* Important — red pulsing */}
          <button
            onClick={() => scrollTo("final-note")}
            className="important-btn px-4 py-2.5 rounded-lg text-sm font-black text-white transition-transform duration-200 active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
            }}
          >
            ⚠ Important
          </button>

          {/* 6/10 — indigo-to-purple gradient, white text readable */}
          <button
            onClick={() => scrollTo("what-to-expect")}
            className="px-4 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
              boxShadow: "0 0 12px rgba(79,70,229,0.4), 0 0 24px rgba(124,58,237,0.2)",
            }}
          >
            What to Expect on the Call
          </button>
        </nav>
      </header>
    </>
  );
}

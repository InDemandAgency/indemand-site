"use client";

export default function TopNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
        <button
          onClick={() => scrollTo("proof")}
          className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          style={{
            background: "linear-gradient(135deg, #4ADE80 0%, #00D4FF 100%)",
            boxShadow: "0 0 18px rgba(74,222,128,0.4), 0 0 32px rgba(0,212,255,0.2)",
          }}
        >
          Proof It Works
        </button>
        <button
          onClick={() => scrollTo("what-to-expect")}
          className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          style={{
            background: "linear-gradient(135deg, #00D4FF 0%, #A855F7 100%)",
            boxShadow: "0 0 18px rgba(0,212,255,0.4), 0 0 32px rgba(168,85,247,0.2)",
          }}
        >
          What to Expect on the Call
        </button>
      </nav>
    </header>
  );
}

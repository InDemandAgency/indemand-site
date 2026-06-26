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
          className="px-4 py-2 rounded-lg text-sm font-bold text-white border border-border-subtle transition-all duration-200 hover:border-accent hover:text-accent"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          Proof It Works
        </button>
        <button
          onClick={() => scrollTo("what-to-expect")}
          className="px-4 py-2 rounded-lg text-sm font-bold text-primary transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          style={{
            background: "#00D4FF",
            boxShadow: "0 0 16px rgba(0,212,255,0.35)",
          }}
        >
          What to Expect on the Call
        </button>
      </nav>
    </header>
  );
}

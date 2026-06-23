"use client";

import { useState, useCallback } from "react";

const WEEKS_PER_MONTH = 4.33;

function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

type Field = "avgRevenue" | "currentJobs" | "profitPct" | "desiredJobs";

interface Inputs {
  avgRevenue: string;
  currentJobs: string;
  profitPct: string;
  desiredJobs: string;
}

export default function RevenueCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    avgRevenue: "",
    currentJobs: "",
    profitPct: "",
    desiredJobs: "",
  });

  const set = useCallback((field: Field, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }, []);

  const avg = parseFloat(inputs.avgRevenue);
  const cur = parseFloat(inputs.currentJobs);
  const pct = parseFloat(inputs.profitPct);
  const des = parseFloat(inputs.desiredJobs);

  const hasAvg = inputs.avgRevenue !== "" && !isNaN(avg) && avg > 0;
  const hasCur = inputs.currentJobs !== "" && !isNaN(cur);
  const hasPct = inputs.profitPct !== "" && !isNaN(pct) && pct >= 0 && pct <= 100;
  const hasDes = inputs.desiredJobs !== "" && !isNaN(des) && des > 0;

  const revenueWithID = hasAvg && hasDes ? des * avg * WEEKS_PER_MONTH : null;
  const profitWithID = revenueWithID !== null && hasPct ? revenueWithID * (pct / 100) : null;
  const leftMonthly =
    hasAvg && hasCur && hasPct && hasDes
      ? Math.max(des - cur, 0) * avg * WEEKS_PER_MONTH * (pct / 100)
      : null;
  const leftYearly = leftMonthly !== null ? leftMonthly * 12 : null;

  const allFilled = hasAvg && hasCur && hasPct && hasDes;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
          What&apos;s your business actually worth at full capacity?
        </h2>
        <p className="mt-2 text-text-muted text-base">
          Enter your numbers. We&apos;ll show you the gap.
        </p>
      </div>

      {/* Input grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Average job revenue */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
            Average job revenue
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-semibold select-none">
              $
            </span>
            <input
              type="number"
              min="0"
              step="100"
              value={inputs.avgRevenue}
              onChange={(e) => set("avgRevenue", e.target.value)}
              placeholder=""
              className="w-full bg-bg-elevated border border-border-subtle rounded-lg pl-8 pr-4 py-3.5 text-white text-base font-semibold placeholder-transparent focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>

        {/* Current jobs per week */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
            Current jobs per week
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={inputs.currentJobs}
            onChange={(e) => set("currentJobs", e.target.value)}
            placeholder=""
            className="w-full bg-bg-elevated border border-border-subtle rounded-lg px-4 py-3.5 text-white text-base font-semibold placeholder-transparent focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
          />
        </div>

        {/* Average profit per job */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
            Average profit per job (%)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={inputs.profitPct}
              onChange={(e) => set("profitPct", e.target.value)}
              placeholder=""
              className="w-full bg-bg-elevated border border-border-subtle rounded-lg pl-4 pr-10 py-3.5 text-white text-base font-semibold placeholder-transparent focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted font-semibold select-none">
              %
            </span>
          </div>
        </div>

        {/* Desired jobs per week */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
            Desired jobs per week
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={inputs.desiredJobs}
            onChange={(e) => set("desiredJobs", e.target.value)}
            placeholder=""
            className="w-full bg-bg-elevated border border-border-subtle rounded-lg px-4 py-3.5 text-white text-base font-semibold placeholder-transparent focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
          />
        </div>
      </div>

      {/* Secondary metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Revenue with InDemand */}
        <div
          className="rounded-xl border border-border-subtle bg-bg-elevated p-5 transition-all duration-300"
          style={{
            boxShadow: revenueWithID !== null
              ? "0 0 0 1px rgba(0,212,255,0.1), 0 4px 20px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Revenue with InDemand{" "}
            <span className="text-text-muted font-normal normal-case tracking-normal">/mo</span>
          </p>
          <p
            className="text-3xl font-black transition-all duration-300"
            style={{ color: revenueWithID !== null ? "#00D4FF" : "#1E2A42" }}
          >
            {revenueWithID !== null ? fmt(revenueWithID) : "—"}
          </p>
        </div>

        {/* Profit with InDemand */}
        <div
          className="rounded-xl border border-border-subtle bg-bg-elevated p-5 transition-all duration-300"
          style={{
            boxShadow: profitWithID !== null
              ? "0 0 0 1px rgba(0,212,255,0.1), 0 4px 20px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Profit with InDemand{" "}
            <span className="text-text-muted font-normal normal-case tracking-normal">/mo</span>
          </p>
          <p
            className="text-3xl font-black transition-all duration-300"
            style={{ color: profitWithID !== null ? "#00D4FF" : "#1E2A42" }}
          >
            {profitWithID !== null ? fmt(profitWithID) : "—"}
          </p>
        </div>
      </div>

      {/* Hero output — Money Left on the Table */}
      <div
        className="rounded-xl p-6 transition-all duration-500"
        style={{
          background: allFilled
            ? "linear-gradient(135deg, #2D0A0A 0%, #1A0606 50%, #1F0C0C 100%)"
            : "#0F1729",
          border: allFilled
            ? "1px solid rgba(220, 38, 38, 0.35)"
            : "1px solid #1E2A42",
          boxShadow: allFilled
            ? "0 0 0 1px rgba(220,38,38,0.15), 0 8px 40px rgba(180,20,20,0.25), 0 20px 60px rgba(0,0,0,0.5)"
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300"
          style={{ color: allFilled ? "#F87171" : "#1E2A42" }}
        >
          Money left on the table — every month you wait
        </p>

        <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
          {/* Monthly — smaller */}
          <div>
            <p
              className="text-2xl sm:text-3xl font-black transition-all duration-300"
              style={{ color: leftMonthly !== null && leftMonthly > 0 ? "#FCA5A5" : "#1E2A42" }}
            >
              {leftMonthly !== null ? fmt(leftMonthly) : "—"}
            </p>
            <p
              className="text-xs font-semibold mt-1 transition-colors duration-300"
              style={{ color: allFilled ? "#F87171" : "#1E2A42" }}
            >
              per month
            </p>
          </div>

          {/* Yearly — largest number on page */}
          <div>
            <p
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-none transition-all duration-300"
              style={{ color: leftYearly !== null && leftYearly > 0 ? "#FFFFFF" : "#1E2A42" }}
            >
              {leftYearly !== null ? fmt(leftYearly) : "—"}
            </p>
            <p
              className="text-xs font-semibold mt-1 transition-colors duration-300"
              style={{ color: allFilled ? "#F87171" : "#1E2A42" }}
            >
              per year
            </p>
          </div>
        </div>
      </div>

      {/* Closing line */}
      <p className="mt-8 text-center text-text-muted text-sm sm:text-base">
        That&apos;s exactly what your strategy call is for.
      </p>
    </div>
  );
}

"use client";

import { useState, useCallback } from "react";

const WEEKS_PER_MONTH = 4.33;
const WORKING_DAYS_PER_MONTH = 5 * WEEKS_PER_MONTH; // 21.65

function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

type Field = "avgRevenue" | "currentJobs" | "desiredJobs" | "hoursPerDay";

interface Inputs {
  avgRevenue: string;
  currentJobs: string;
  desiredJobs: string;
  hoursPerDay: string;
}

export default function RevenueCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    avgRevenue: "",
    currentJobs: "",
    desiredJobs: "",
    hoursPerDay: "",
  });

  const set = useCallback((field: Field, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }, []);

  const avg = parseFloat(inputs.avgRevenue);
  const cur = parseFloat(inputs.currentJobs);
  const des = parseFloat(inputs.desiredJobs);
  const hrs = parseFloat(inputs.hoursPerDay);

  const hasAvg = inputs.avgRevenue !== "" && !isNaN(avg) && avg > 0;
  const hasCur = inputs.currentJobs !== "" && !isNaN(cur) && cur >= 0;
  const hasDes = inputs.desiredJobs !== "" && !isNaN(des) && des > 0;
  const hasHrs = inputs.hoursPerDay !== "" && !isNaN(hrs) && hrs > 0;

  const revenueWithID = hasAvg && hasDes ? des * avg * WEEKS_PER_MONTH : null;
  const leftMonthly =
    hasAvg && hasCur && hasDes
      ? Math.max(des - cur, 0) * avg * WEEKS_PER_MONTH
      : null;
  const leftYearly = leftMonthly !== null ? leftMonthly * 12 : null;

  const monthlyHours = hasHrs ? hrs * WORKING_DAYS_PER_MONTH : null;
  const rphCurrent =
    hasAvg && hasCur && monthlyHours !== null
      ? (cur * avg * WEEKS_PER_MONTH) / monthlyHours
      : null;
  const rphWithID =
    revenueWithID !== null && monthlyHours !== null
      ? revenueWithID / monthlyHours
      : null;

  const allFilled = hasAvg && hasCur && hasDes;
  const hourlyReady = rphCurrent !== null && rphWithID !== null;

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

      {/* Input grid — 2×2 */}
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
              className="w-full bg-bg-elevated border border-border-subtle rounded-lg pl-8 pr-4 py-3.5 text-white text-base font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>

        {/* Hours on job sites per day */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
            Hours on job sites per day
          </label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="24"
              step="0.5"
              value={inputs.hoursPerDay}
              onChange={(e) => set("hoursPerDay", e.target.value)}
              className="w-full bg-bg-elevated border border-border-subtle rounded-lg pl-4 pr-16 py-3.5 text-white text-base font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted font-semibold text-sm select-none">
              hrs
            </span>
          </div>
        </div>

        {/* Current jobs per week */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
            Current jobs / week
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={inputs.currentJobs}
            onChange={(e) => set("currentJobs", e.target.value)}
            className="w-full bg-bg-elevated border border-border-subtle rounded-lg px-4 py-3.5 text-white text-base font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
          />
        </div>

        {/* Desired jobs per week */}
        <div>
          <label className="block text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
            Desired jobs / week
          </label>
          <input
            type="number"
            min="0"
            step="1"
            value={inputs.desiredJobs}
            onChange={(e) => set("desiredJobs", e.target.value)}
            className="w-full bg-bg-elevated border border-border-subtle rounded-lg px-4 py-3.5 text-white text-base font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)" }}
          />
        </div>
      </div>

      {/* Revenue with InDemand card */}
      <div
        className="rounded-xl border border-border-subtle bg-bg-elevated p-5 mb-4 transition-all duration-300"
        style={{
          boxShadow:
            revenueWithID !== null
              ? "0 0 0 1px rgba(0,212,255,0.1), 0 4px 20px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
          Revenue with InDemand{" "}
          <span className="font-normal normal-case tracking-normal">/mo</span>
        </p>
        <p
          className="text-3xl font-black transition-all duration-300"
          style={{ color: revenueWithID !== null ? "#00D4FF" : "#1E2A42" }}
        >
          {revenueWithID !== null ? fmt(revenueWithID) : "—"}
        </p>
      </div>

      {/* Hero output — Money Left on the Table */}
      <div
        className="rounded-xl p-6 mb-4 transition-all duration-500"
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
          {/* Monthly */}
          <div>
            <p
              className="text-2xl sm:text-3xl font-black transition-all duration-300"
              style={{
                color:
                  leftMonthly !== null && leftMonthly > 0
                    ? "#FCA5A5"
                    : "#1E2A42",
              }}
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
              style={{
                color:
                  leftYearly !== null && leftYearly > 0 ? "#FFFFFF" : "#1E2A42",
              }}
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

      {/* Hourly comparison card */}
      <div
        className="rounded-xl border p-6 mb-4 transition-all duration-500"
        style={{
          background: hourlyReady ? "#0B1628" : "#0F1729",
          borderColor: hourlyReady
            ? "rgba(0,212,255,0.18)"
            : "#1E2A42",
          boxShadow: hourlyReady
            ? "0 0 0 1px rgba(0,212,255,0.08), 0 8px 40px rgba(0,0,0,0.4)"
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-5">
          What every hour on a job site actually earns you
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* Without InDemand */}
          <div
            className="rounded-lg p-4 border border-border-subtle"
            style={{ background: "rgba(0,0,0,0.25)" }}
          >
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              Without InDemand
            </p>
            <p
              className="text-2xl sm:text-3xl font-black transition-all duration-300"
              style={{ color: rphCurrent !== null ? "#8B9AAF" : "#1E2A42" }}
            >
              {rphCurrent !== null ? fmt(rphCurrent) : "—"}
            </p>
            <p className="text-xs text-text-muted mt-1">per hour</p>
          </div>

          {/* With InDemand */}
          <div
            className="rounded-lg p-4 border transition-all duration-300"
            style={{
              background: rphWithID !== null
                ? "rgba(0,212,255,0.06)"
                : "rgba(0,0,0,0.25)",
              borderColor: rphWithID !== null
                ? "rgba(0,212,255,0.25)"
                : "#1E2A42",
              boxShadow: rphWithID !== null
                ? "0 0 16px rgba(0,212,255,0.1)"
                : "none",
            }}
          >
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              With InDemand
            </p>
            <p
              className="text-2xl sm:text-3xl font-black transition-all duration-300"
              style={{ color: rphWithID !== null ? "#00D4FF" : "#1E2A42" }}
            >
              {rphWithID !== null ? fmt(rphWithID) : "—"}
            </p>
            <p className="text-xs text-text-muted mt-1">per hour</p>
          </div>
        </div>

        {/* Multiplier callout */}
        {hourlyReady && rphCurrent! > 0 && (
          <p className="mt-4 text-sm text-text-muted text-center">
            Same hours. Same sweat.{" "}
            <span className="text-white font-bold">
              {(rphWithID! / rphCurrent!).toFixed(1)}× more revenue per hour.
            </span>
          </p>
        )}
      </div>

      {/* Closing line */}
      <p className="mt-6 text-center text-text-muted text-sm sm:text-base">
        That&apos;s exactly what your strategy call is for.
      </p>
    </div>
  );
}

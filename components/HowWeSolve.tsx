"use client";

import React, { useEffect, useState } from "react";
import {
  Target, UserCheck, CalendarCheck, FileCheck,
  Megaphone, UserX, PhoneOff, XCircle, Trash2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────────────────────────
   Sequential loop hook
   Returns the current "step" index.
   Items = [node0, arrow0, node1, arrow1, …, nodeN]
   Total = nodeCount * 2 - 1
────────────────────────────────────────────── */
function useSequenceLoop(nodeCount: number, stepMs = 650, pauseMs = 2200) {
  const totalSteps = nodeCount * 2 - 1;
  const [step, setStep] = useState(-1);

  useEffect(() => {
    let current = -1;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      current += 1;
      setStep(current);

      if (current < totalSteps - 1) {
        timer = setTimeout(tick, stepMs);
      } else {
        // hold at end, then restart
        timer = setTimeout(() => {
          current = -1;
          setStep(-1);
          timer = setTimeout(tick, 350);
        }, pauseMs);
      }
    }

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [totalSteps, stepMs, pauseMs]);

  return step;
}

/* ─────────────────────────────────────────────
   Single animated node circle
────────────────────────────────────────────── */
function FlowNode({
  icon: Icon,
  label,
  color,
  glowColor,
  active,
  stepIndex,
}: {
  icon: LucideIcon;
  label: string;
  color: string;
  glowColor: string;
  active: boolean;
  stepIndex: number;
}) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0" style={{ width: 96 }}>
      {/* Explicit px dimensions prevent flex from squishing the circle */}
      <div
        className="flex items-center justify-center border-2 transition-all duration-500"
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          flexShrink: 0,
          borderColor: active ? color : `${color}33`,
          background: active ? `${color}18` : `${color}08`,
          boxShadow: active
            ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}55, inset 0 0 14px ${glowColor}22`
            : "none",
          transform: active ? "scale(1.08)" : "scale(0.88)",
          opacity: active ? 1 : 0.3,
        }}
      >
        <Icon
          size={36}
          color={active ? color : `${color}88`}
          style={{
            filter: active ? `drop-shadow(0 0 6px ${color})` : "none",
            transition: "filter 0.4s ease",
            flexShrink: 0,
          }}
        />
      </div>
      <p
        className="text-center text-[11px] font-semibold leading-tight transition-all duration-400"
        style={{
          color: active ? "#ffffff" : "#8B9AAF",
          opacity: active ? 1 : 0.5,
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Animated dashed arrow between nodes
────────────────────────────────────────────── */
function FlowArrow({ color, active }: { color: string; active: boolean }) {
  return (
    <div
      className="flex items-center flex-shrink-0 pb-8 transition-all duration-400"
      style={{ opacity: active ? 1 : 0, transform: active ? "scaleX(1)" : "scaleX(0.2)", transformOrigin: "left center" }}
    >
      <svg width="40" height="18" viewBox="0 0 40 18" fill="none">
        <line
          x1="2"
          y1="9"
          x2="28"
          y2="9"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.8"
        />
        <polyline
          points="26,4 34,9 26,14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Complete animated flow diagram
────────────────────────────────────────────── */
interface FlowStep { icon: LucideIcon; label: string }

function AnimatedFlow({
  steps,
  color,
  glowColor,
  statusLabel,
  cardStyle,
  accentBarColor,
}: {
  steps: FlowStep[];
  color: string;
  glowColor: string;
  statusLabel: string;
  cardStyle: React.CSSProperties;
  accentBarColor: string;
}) {
  const seqStep = useSequenceLoop(steps.length, 680, 2400);
  // node i: seqStep >= i*2  |  arrow i: seqStep >= i*2+1

  return (
    <div className="rounded-xl overflow-hidden border" style={cardStyle}>
      <div className="flex">
        {/* left accent bar */}
        <div className="w-1 flex-shrink-0" style={{ background: accentBarColor }} />
        <div className="flex-1 px-5 pb-5 pt-2 md:px-7 md:pb-7 md:pt-3">
          {/* Node row — scrollable on mobile */}
          <div className="flex items-center flex-wrap gap-x-0 gap-y-6 py-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <FlowNode
                  icon={s.icon}
                  label={s.label}
                  color={color}
                  glowColor={glowColor}
                  active={seqStep >= i * 2}
                  stepIndex={i}
                />
                {i < steps.length - 1 && (
                  <FlowArrow color={color} active={seqStep >= i * 2 + 1} />
                )}
              </div>
            ))}
          </div>

          {/* Status badge */}
          <div className="mt-4 flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: color,
                boxShadow: `0 0 6px ${glowColor}`,
                animation: "pulse 1.8s ease-in-out infinite",
              }}
            />
            <p
              className="text-xs font-black uppercase tracking-widest"
              style={{ color, textShadow: `0 0 8px ${glowColor}88` }}
            >
              Status · {statusLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Step definitions
────────────────────────────────────────────── */
const genericSteps: FlowStep[] = [
  { icon: Megaphone,  label: "Generic Ad" },
  { icon: UserX,      label: "Unqualified Stranger" },
  { icon: PhoneOff,   label: "No Follow-Up" },
  { icon: XCircle,    label: "No Close" },
  { icon: Trash2,     label: "Wasted Ad Spend" },
];

const indemandSteps: FlowStep[] = [
  { icon: Target,         label: "Targeted Ad" },
  { icon: UserCheck,      label: "Qualified Customer" },
  { icon: CalendarCheck,  label: "Pre-Sold Appointment" },
  { icon: FileCheck,      label: "Signed Job" },
];

/* ─────────────────────────────────────────────
   Main section
────────────────────────────────────────────── */
export default function HowWeSolve() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Headline */}
        <h2 className="text-3xl font-black text-white leading-tight mb-4 sm:text-4xl md:text-5xl" data-animate>
          How <span className="text-accent">InDemand</span> Solves This
        </h2>

        <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed max-w-3xl mb-10">
          <p data-animate data-delay="100">
            Most marketing companies run ads, send you &ldquo;leads,&rdquo; and disappear. They get paid whether you close or not. That model is broken.
          </p>
          <p data-animate data-delay="180">
            InDemand is different. We don&apos;t generate leads — we install a complete qualified buyer engine around your business. From the first touch to the signed contract, we build it, run it, scale it, and optimize it. Your only job is showing up and closing.
          </p>
        </div>

        {/* ── Generic Method ── */}
        <div className="mb-8" data-animate data-delay="100">
          <h3 className="text-white font-bold text-lg mb-3">The Generic Method:</h3>
          <AnimatedFlow
            steps={genericSteps}
            color="#ef4444"
            glowColor="rgba(239,68,68,0.6)"
            statusLabel="LOW INTENT"
            accentBarColor="linear-gradient(to bottom, #ef4444, rgba(239,68,68,0.2))"
            cardStyle={{
              borderColor: "rgba(239,68,68,0.2)",
              background: "linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(10,15,30,0.95) 60%)",
            }}
          />
        </div>

        {/* ── InDemand Method ── */}
        <div className="mb-16" data-animate data-delay="150">
          <h3 className="text-white font-bold text-lg mb-3">The InDemand Method:</h3>
          <AnimatedFlow
            steps={indemandSteps}
            color="#00D4FF"
            glowColor="rgba(0,212,255,0.6)"
            statusLabel="HIGH INTENT"
            accentBarColor="linear-gradient(to bottom, #00D4FF, rgba(0,212,255,0.2))"
            cardStyle={{
              borderColor: "rgba(0,212,255,0.2)",
              background: "linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(10,15,30,0.95) 60%)",
            }}
          />
        </div>

        {/* ── Value vs Price ── */}
        <div className="mb-6">
          <h3 className="text-white font-black text-2xl md:text-3xl mb-8" data-animate>
            Compete on <span className="text-accent">VALUE</span> — Not{" "}
            <span className="text-red-500">PRICE</span>
          </h3>

          <div className="rounded-xl border border-border-subtle bg-bg-elevated overflow-hidden" data-animate data-delay="100">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">
              {/* Everyone Else */}
              <div className="p-8 flex flex-col items-center text-center border-b sm:border-b-0 sm:border-r border-border-subtle">
                <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">Everyone Else</p>
                {/* $$$$ → $$$ → $$ → $ descending line, bouncing arrow */}
                <svg width="80" height="88" viewBox="0 0 80 88" fill="none" className="mb-4">
                  {/* Descending line through all 4 points */}
                  <line x1="14" y1="16" x2="63" y2="58" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round" opacity="0.45" />

                  {/* P1 — $$$$ */}
                  <circle cx="14" cy="16" r="3.5" fill="#ef4444" opacity="0.95" />
                  <text x="14" y="10" textAnchor="middle" fill="#ef4444" fontSize="13" fontWeight="800" fontFamily="sans-serif" opacity="1">$$$$</text>

                  {/* P2 — $$$ */}
                  <circle cx="30" cy="30" r="3.5" fill="#ef4444" opacity="0.75" />
                  <text x="30" y="24" textAnchor="middle" fill="#ef4444" fontSize="13" fontWeight="800" fontFamily="sans-serif" opacity="0.8">$$$</text>

                  {/* P3 — $$ */}
                  <circle cx="47" cy="44" r="3.5" fill="#ef4444" opacity="0.55" />
                  <text x="47" y="38" textAnchor="middle" fill="#ef4444" fontSize="13" fontWeight="800" fontFamily="sans-serif" opacity="0.6">$$</text>

                  {/* P4 — $ */}
                  <circle cx="63" cy="58" r="3.5" fill="#ef4444" opacity="0.35" />
                  <text x="63" y="52" textAnchor="middle" fill="#ef4444" fontSize="13" fontWeight="800" fontFamily="sans-serif" opacity="0.45">$</text>

                  {/* Bouncing down arrow — continuing the descent */}
                  <g style={{ animation: "bounceDown 1.1s ease-in-out infinite", transformBox: "fill-box" as React.CSSProperties["transformBox"], transformOrigin: "center" }}>
                    <line x1="63" y1="65" x2="63" y2="73" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                    <polyline points="57,69 63,76 69,69" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>
                </svg>
                <p className="text-text-muted text-sm leading-relaxed">Competing on price in a race to the bottom</p>
              </div>

              {/* VS */}
              <div className="flex items-center justify-center p-4">
                <div className="w-10 h-10 rounded-full border-2 border-border-subtle bg-primary flex items-center justify-center">
                  <span className="text-text-muted text-xs font-bold">VS</span>
                </div>
              </div>

              {/* You */}
              <div className="p-8 flex flex-col items-center text-center">
                <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">You</p>
                {/* Premium crown + floating up arrow */}
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mb-4">
                  {/* Pulsing glow behind crown */}
                  <circle cx="40" cy="36" r="24" fill="#00D4FF08">
                    <animate attributeName="r" values="20;26;20" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  {/* Crown body — 3-point king's crown */}
                  <path
                    d="M18 52 L18 34 L28 44 L40 20 L52 44 L62 34 L62 52 Z"
                    fill="#00D4FF14" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                  >
                    <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* Crown base */}
                  <rect x="18" y="52" width="44" height="5" rx="2.5" fill="#00D4FF" opacity="0.75" />
                  {/* Center jewel — top of crown */}
                  <circle cx="40" cy="20" r="3.5" fill="#00D4FF">
                    <animate attributeName="r" values="3;4.2;3" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.75;1;0.75" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  {/* Side jewels */}
                  <circle cx="28" cy="44" r="2.5" fill="#00D4FF" opacity="0.55" />
                  <circle cx="52" cy="44" r="2.5" fill="#00D4FF" opacity="0.55" />
                  {/* Floating up arrow — top-right */}
                  <g style={{ animation: "floatUp 1.3s ease-in-out infinite", transformBox: "fill-box" as React.CSSProperties["transformBox"], transformOrigin: "center" }}>
                    <line x1="68" y1="30" x2="68" y2="18" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" />
                    <polyline points="62,24 68,16 74,24" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>
                  {/* Sparkles */}
                  <circle cx="12" cy="22" r="2" fill="#00D4FF">
                    <animate attributeName="opacity" values="0;0.8;0" dur="2.2s" begin="0s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="70" cy="50" r="1.5" fill="#00D4FF">
                    <animate attributeName="opacity" values="0;0.8;0" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="14" cy="55" r="1.5" fill="#00D4FF">
                    <animate attributeName="opacity" values="0;0.6;0" dur="2.5s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <p className="text-text-muted text-sm leading-relaxed">Positioned as the premium, no-brainer choice customers want to hire</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl" data-animate>
          When customers come to you through InDemand, they&apos;ve been educated on your value, already seen your work, read your reviews, and understand why you&apos;re worth more. You don&apos;t have to compete on price —{" "}
          <span className="text-accent font-semibold">because we&apos;ve already sold them on your value before they ever call you.</span>
        </p>
      </div>
    </section>
  );
}

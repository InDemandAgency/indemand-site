"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const SCROLL_MILESTONES = [25, 50, 75, 90, 100] as const;

export default function AnalyticsTracker() {
  useEffect(() => {
    (window as any).__session = {
      startTime: Date.now(),
      scrollHit25: false,
      scrollHit50: false,
      scrollHit75: false,
      scrollHit90: false,
      scrollHit100: false,
      vslPlayed: false,
      vslHit25: false,
      vslHit50: false,
      vslHit75: false,
      vslHit90: false,
      vslCompleted: false,
      sp1Played: false,
      sp1Hit50: false,
      sp2Played: false,
      sp2Hit50: false,
    };

    const session = (window as any).__session;
    let lastScrollTime = 0;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < 200) return;
      lastScrollTime = now;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = (scrollTop / docHeight) * 100;

      SCROLL_MILESTONES.forEach((m) => {
        const key = `scrollHit${m}`;
        if (pct >= m && !session[key]) {
          session[key] = true;
          track("scroll_depth", { percent: m });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let sent = false;
    const sendSession = () => {
      if (sent) return;
      sent = true;

      const s = (window as any).__session;
      if (!s) return;

      const payload = {
        timeOnPageSec: Math.round((Date.now() - s.startTime) / 1000),
        scrollHit25: s.scrollHit25,
        scrollHit50: s.scrollHit50,
        scrollHit75: s.scrollHit75,
        scrollHit90: s.scrollHit90,
        scrollHit100: s.scrollHit100,
        vslPlayed: s.vslPlayed,
        vslHit25: s.vslHit25,
        vslHit50: s.vslHit50,
        vslHit75: s.vslHit75,
        vslHit90: s.vslHit90,
        vslCompleted: s.vslCompleted,
        sp1Played: s.sp1Played,
        sp1Hit50: s.sp1Hit50,
        sp2Played: s.sp2Played,
        sp2Hit50: s.sp2Hit50,
      };

      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/track-session", blob);
      } else {
        fetch("/api/track-session", { method: "POST", body: blob, keepalive: true });
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") sendSession();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", sendSession);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", sendSession);
    };
  }, []);

  return null;
}

"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

interface WistiaPlayerProps {
  mediaId: string;
  aspect: number;
  trackAs?: "vsl" | "sp1" | "sp2";
}

export default function WistiaPlayer({ mediaId, aspect, trackAs }: WistiaPlayerProps) {
  useEffect(() => {
    if (!trackAs) return;

    const milestonesFired = new Set<number>();
    let bound = false;

    const bindEvents = (video: any) => {
      video.bind("play", () => {
        const s = (window as any).__session;
        track("video_play", { type: trackAs });
        if (!s) return;
        if (trackAs === "vsl") s.vslPlayed = true;
        if (trackAs === "sp1") s.sp1Played = true;
        if (trackAs === "sp2") s.sp2Played = true;
      });

      video.bind("percentwatchedchanged", (pct: number) => {
        const p = Math.floor(pct * 100);
        const s = (window as any).__session;
        if (!s) return;

        if (trackAs === "vsl") {
          [25, 50, 75, 90].forEach((m) => {
            if (p >= m && !milestonesFired.has(m)) {
              milestonesFired.add(m);
              if (m === 25) s.vslHit25 = true;
              if (m === 50) s.vslHit50 = true;
              if (m === 75) s.vslHit75 = true;
              if (m === 90) s.vslHit90 = true;
              track("vsl_progress", { percent: m });
            }
          });
        }

        if (trackAs === "sp1" && p >= 50 && !s.sp1Hit50) {
          s.sp1Hit50 = true;
          track("sp1_progress", { percent: 50 });
        }

        if (trackAs === "sp2" && p >= 50 && !s.sp2Hit50) {
          s.sp2Hit50 = true;
          track("sp2_progress", { percent: 50 });
        }
      });

      video.bind("end", () => {
        const s = (window as any).__session;
        track("video_completed", { type: trackAs });
        if (s && trackAs === "vsl") s.vslCompleted = true;
      });
    };

    // Poll for Wistia.api(mediaId) — more reliable than _wq with the new web component
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (attempts > 60 || bound) { clearInterval(interval); return; }

      const W = (window as any).Wistia;
      if (!W) return;

      const video = W.api(mediaId);
      if (!video) return;

      bound = true;
      clearInterval(interval);
      bindEvents(video);
    }, 500);

    return () => clearInterval(interval);
  }, [mediaId, trackAs]);

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="afterInteractive"
        type="module"
      />
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: ${(1 / aspect) * 100}%;
        }
      `}</style>
      {/* @ts-expect-error custom element */}
      <wistia-player
        media-id={mediaId}
        aspect={String(aspect)}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </>
  );
}

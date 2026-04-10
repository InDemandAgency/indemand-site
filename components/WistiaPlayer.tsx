"use client";

import Script from "next/script";

interface WistiaPlayerProps {
  mediaId: string;
  aspect: number;
}

export default function WistiaPlayer({ mediaId, aspect }: WistiaPlayerProps) {
  return (
    <>
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="afterInteractive"
      />
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
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
}

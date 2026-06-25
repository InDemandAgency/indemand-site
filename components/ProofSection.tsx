"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const WistiaPlayer = dynamic(() => import("./WistiaPlayer"), { ssr: false });

const testimonialImages = [
  "/testimonials/IMG_6388.PNG",
  "/testimonials/IMG_6389.JPG",
  "/testimonials/IMG_6390.JPG",
  "/testimonials/IMG_6391.JPG",
  "/testimonials/IMG_6392.JPG",
];

export default function ProofSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Video testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-2xl mx-auto" data-animate data-delay="100">
          {[
            { id: "m34seci0bu", trackAs: "sp1" as const },
            { id: "lizxmjdusj", trackAs: "sp2" as const },
          ].map(({ id: mediaId, trackAs }) => (
            <div
              key={mediaId}
              className="relative rounded-xl overflow-hidden border border-border-subtle"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,212,255,0.10), 0 8px 40px rgba(0,212,255,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                <WistiaPlayer mediaId={mediaId} aspect={9 / 16} trackAs={trackAs} />
              </div>
            </div>
          ))}
        </div>

        {/* Image testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonialImages.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-border-subtle"
            >
              <Image
                src={src}
                alt={`Client testimonial ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

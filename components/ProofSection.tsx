"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { FileText, CreditCard, Megaphone, UserX, PhoneOff } from "lucide-react";

const WistiaPlayer = dynamic(() => import("./WistiaPlayer"), { ssr: false });

const agencyFailures = [
  {
    icon: FileText,
    text: 'They send you "leads" that are just form fills — no real intent, no qualification, no commitment',
  },
  {
    icon: CreditCard,
    text: "They charge you monthly regardless of results, and when results don't come they keep selling you the dream long enough to collect the next retainer",
  },
  {
    icon: Megaphone,
    text: "They run generic ads that attract price-shoppers who compare 5 quotes and pick the cheapest",
  },
  {
    icon: UserX,
    text: "They spend more time marketing themselves than they do marketing your business",
  },
  {
    icon: PhoneOff,
    text: 'They come in hot with big promises and fast replies until your first payment hits — then the calls stop, the updates vanish, and you\'re chasing your own "marketing team" for answers',
  },
];

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
        {/* Section label */}
        <div className="mb-3">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Proof This Works (If You Qualify)
          </span>
        </div>

        {/* Elephant in the room */}
        <h2 className="text-3xl font-black text-white leading-tight mb-6 sm:text-4xl" data-animate>
          First, Let&apos;s Address the Elephant in the Room.
        </h2>

        <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed max-w-3xl mb-8" data-animate data-delay="100">
          <p>
            We know what you&apos;re probably thinking.{" "}
            <span className="text-white font-semibold italic">&ldquo;I&apos;ve heard this before.&rdquo;</span>
          </p>
          <p>
            Some marketing company promised you leads or &ldquo;let us run your ads.&rdquo; Maybe they even called them &ldquo;exclusive.&rdquo; And what did you actually get?{" "}
            {/* Glowing red emphasis */}
            <span
              className="font-black text-red-500"
              style={{
                textShadow:
                  "0 0 12px rgba(239,68,68,0.7), 0 0 24px rgba(239,68,68,0.4)",
              }}
            >
              Tire-kickers. No-shows. Ghosted after the estimate.
            </span>
          </p>
          <p>
            <span className="text-white font-bold">We get it.</span> The home services marketing space is full of companies that take your money, lock you into a retainer, and when the results don&apos;t come they tell you that you&apos;re &ldquo;not the right fit.&rdquo;
          </p>
        </div>

        <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
          Here&apos;s what most of them do:
        </p>

        {/* Failure bullets — contextual icons */}
        <ul className="space-y-3 mb-14">
          {agencyFailures.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-lg border border-border-subtle bg-bg-elevated px-5 py-4"
              data-animate
              data-delay={i * 80}
            >
              <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <item.icon size={15} color="#ef4444" />
              </span>
              <span className="text-text-muted text-sm leading-relaxed">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Transition */}
        <div className="border-l-4 border-accent pl-5 mb-14" data-animate data-delay="100">
          <p className="text-accent font-bold text-xl md:text-2xl mb-1">
            So what makes us different?
          </p>
          <p className="text-text-muted text-base">
            Talk is cheap. We&apos;ll let the results speak for themselves.
          </p>
        </div>

        {/* Video testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-2xl mx-auto" data-animate data-delay="100">
          {["m34seci0bu", "lizxmjdusj"].map((mediaId) => (
            <div
              key={mediaId}
              className="relative rounded-xl overflow-hidden border border-border-subtle"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,212,255,0.10), 0 8px 40px rgba(0,212,255,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                <WistiaPlayer mediaId={mediaId} aspect={9 / 16} />
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

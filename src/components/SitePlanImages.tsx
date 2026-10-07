"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CornerFrame } from "@/components/ornaments";

type SiteImage = {
  key: string;
  src: string;
  alt: string;
  caption: string;
  fit: "contain" | "cover";
  frameTone: "gold" | "white";
};

const images: SiteImage[] = [
  {
    key: "site-plan",
    src: "/new-temple/site-plan.jpg",
    alt: "Approved civil site plan for the new ISKCON Austin temple property",
    caption:
      "The city-approved overall site plan, prepared by Civilitude Engineers & Planners — showing the temple building, parking, and site circulation.",
    fit: "contain",
    frameTone: "gold",
  },
  {
    key: "site-landmark",
    src: "/new-temple/site-landmark-aerial.jpg",
    alt: "Aerial landmark view of the new temple property and surrounding Austin neighborhood",
    caption:
      "An aerial view of the vacant lot and its surrounding neighborhood, on the corner of Collinwood West Drive and the main road — easy to find and easy to reach.",
    fit: "cover",
    frameTone: "white",
  },
];

export default function SitePlanImages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        {images.map((img, index) => (
          <div key={img.key}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger image: ${img.alt}`}
              className={`group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream-deep shadow-sm text-left ${
                img.fit === "contain" ? "bg-white" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`transition-transform duration-500 group-hover:scale-105 ${
                  img.fit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
              <CornerFrame tone={img.frameTone} size={18} inset={10} />
            </button>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {img.caption}
            </p>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white text-xl hover:bg-white/20 transition-colors"
          >
            ×
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="hidden sm:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white text-xl hover:bg-white/20 transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="hidden sm:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white text-xl hover:bg-white/20 transition-colors"
          >
            ›
          </button>

          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-white">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="90vw"
                className={active.fit === "contain" ? "object-contain" : "object-cover"}
                priority
              />
              <CornerFrame tone="white" size={24} inset={12} />
            </div>
            <p className="mt-4 text-center text-sm text-white/70 max-w-2xl mx-auto">
              {active.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

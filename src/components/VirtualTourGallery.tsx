"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CornerFrame } from "@/components/ornaments";
import { virtualTourImages } from "@/lib/data";

type Group = "Exterior" | "Interior";
type TourImage = (typeof virtualTourImages)[number];

const SET_LABELS: Record<string, string> = {
  "temple-front": "Temple Front",
};

const isPlaceholder = (img: TourImage) =>
  Boolean((img as { placeholder?: boolean }).placeholder);

export default function VirtualTourGallery() {
  const [filter, setFilter] = useState<Group | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible =
    filter === "All"
      ? virtualTourImages
      : virtualTourImages.filter((img) => img.group === filter);

  // Group any images sharing a `set` key into a single gallery tile that
  // cycles through its photos, while ungrouped images stay as-is. The
  // lightbox still walks the flat `visible` array, so indexes line up.
  type Tile =
    | { type: "single"; img: TourImage; index: number }
    | { type: "set"; setKey: string; images: { img: TourImage; index: number }[] };

  const tiles: Tile[] = [];
  const seenSets = new Set<string>();
  visible.forEach((img, index) => {
    const setKey = "set" in img ? (img as { set?: string }).set : undefined;
    if (setKey) {
      if (seenSets.has(setKey)) return;
      seenSets.add(setKey);
      const images = visible
        .map((im, i) => ({ img: im, index: i }))
        .filter(({ img: im }) => ("set" in im ? (im as { set?: string }).set : undefined) === setKey);
      tiles.push({ type: "set", setKey, images });
    } else {
      tiles.push({ type: "single", img, index });
    }
  });

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % visible.length));
  }, [visible.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + visible.length) % visible.length
    );
  }, [visible.length]);

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

  const groups: (Group | "All")[] = ["All", "Exterior", "Interior"];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => {
              setFilter(g);
              setOpenIndex(null);
            }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              filter === g
                ? "bg-gold text-white shadow-sm"
                : "bg-white text-navy border border-cream-deep hover:bg-cream"
            }`}
          >
            {g === "All" ? "All Views" : g}
          </button>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile) =>
          tile.type === "single" ? (
            <button
              key={tile.img.key}
              onClick={() => setOpenIndex(tile.index)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream-deep bg-cream text-left shadow-sm"
            >
              {isPlaceholder(tile.img) ? (
                <ComingSoonPlaceholder />
              ) : (
                <Image
                  src={tile.img.src}
                  alt={tile.img.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/0 to-transparent" />
              <CornerFrame tone="white" size={16} inset={8} />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-light backdrop-blur-sm">
                  {tile.img.group}
                </span>
                <p className="mt-1.5 font-display text-lg font-semibold text-white">
                  {tile.img.title}
                </p>
              </div>
            </button>
          ) : (
            <SetTile
              key={tile.setKey}
              label={SET_LABELS[tile.setKey] ?? tile.setKey}
              images={tile.images}
              onOpen={setOpenIndex}
            />
          )
        )}
      </div>

      {openIndex !== null && visible[openIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={visible[openIndex].title}
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

          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              {isPlaceholder(visible[openIndex]) ? (
                <ComingSoonPlaceholder />
              ) : (
                <Image
                  src={visible[openIndex].src}
                  alt={visible[openIndex].title}
                  fill
                  sizes="90vw"
                  className="object-cover"
                  priority
                />
              )}
              <CornerFrame tone="white" size={24} inset={12} />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
                {visible[openIndex].group} · {openIndex + 1} of {visible.length}
              </p>
              <p className="mt-1 font-display text-xl font-semibold">
                {visible[openIndex].title}
              </p>
              <p className="mt-1 text-sm text-white/70 max-w-xl mx-auto">
                {visible[openIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Stands in for a rendering that hasn't been supplied yet. Shows a neutral
 * placeholder with a "coming soon" message instead of a broken/missing image.
 */
function ComingSoonPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy to-navy-dark text-center px-6">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-9 h-9 text-white/40"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L4 19" />
      </svg>
      <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
        Image Coming Soon
      </p>
    </div>
  );
}

/**
 * A single gallery tile that cycles through several related photos (e.g.
 * "Temple Front" combines the entrance courtyard, facade, and reflecting
 * pool views into one card). Clicking the photo opens the full lightbox at
 * whichever sub-image is currently showing.
 */
function SetTile({
  label,
  images,
  onOpen,
}: {
  label: string;
  images: { img: TourImage; index: number }[];
  onOpen: (index: number) => void;
}) {
  const [sub, setSub] = useState(0);
  const current = images[sub];

  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream-deep bg-cream shadow-sm">
      <button
        onClick={() => onOpen(current.index)}
        className="absolute inset-0 text-left"
        aria-label={`${label}: ${current.img.title}`}
      >
        <Image
          src={current.img.src}
          alt={current.img.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/0 to-transparent" />
      </button>
      <CornerFrame tone="white" size={16} inset={8} />

      {images.length > 1 && (
        <>
          <button
            aria-label="Previous photo in this set"
            onClick={(e) => {
              e.stopPropagation();
              setSub((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/25 text-white text-sm hover:bg-white/25 transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next photo in this set"
            onClick={(e) => {
              e.stopPropagation();
              setSub((i) => (i + 1) % images.length);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/25 text-white text-sm hover:bg-white/25 transition-colors"
          >
            ›
          </button>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 pointer-events-none">
        <span className="inline-block rounded-full bg-gold/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {label}
        </span>
        <p className="mt-1.5 font-display text-lg font-semibold text-white">
          {current.img.title}
        </p>
        {images.length > 1 && (
          <div className="mt-1.5 flex gap-1.5">
            {images.map((im, i) => (
              <span
                key={im.img.key}
                className={`h-1.5 rounded-full transition-all ${
                  i === sub ? "w-5 bg-gold-light" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

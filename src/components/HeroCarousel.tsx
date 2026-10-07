"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { campaignPercent, heroSlides } from "@/lib/data";
import { OrnamentDivider } from "@/components/ornaments";
import {
  DiyaIcon,
  KirtanIcon,
  TempleSilhouetteIcon,
} from "@/components/devotional-art";

// Order matches heroSlides: Sunday, Daily (weekly), New Temple.
const ICONS = [KirtanIcon, DiyaIcon, TempleSilhouetteIcon];
const FALLBACK_GRADIENTS = [
  "from-maroon via-navy-dark to-navy",
  "from-peacock via-navy-dark to-navy",
  "from-navy via-navy-dark to-[#0c1a26]",
];

const AUTOPLAY_MS = 3000;
// Minimum horizontal distance (px) a touch must travel to count as a swipe
// rather than a tap/hold.
const SWIPE_THRESHOLD = 40;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = heroSlides.length;

  // Touch tracking for swipe-to-navigate / hold-to-pause on mobile.
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const start = useCallback(() => {
    stop();
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
  }, [count, stop]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  const goTo = (i: number) => {
    setActive(((i % count) + count) % count);
    start();
  };

  // Touch handlers: holding a finger down pauses autoplay on the current
  // slide (so it can be read); a horizontal swipe past the threshold moves
  // to the next/previous slide; a plain tap/hold-and-release with little
  // movement just resumes the 3s autoplay from where it is.
  const handleTouchStart = (e: React.TouchEvent) => {
    stop();
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const startX = touchStartX.current;
    const currentX = touchCurrentX.current;
    touchStartX.current = null;
    touchStartY.current = null;
    touchCurrentX.current = null;

    if (startX === null || currentX === null) {
      start();
      return;
    }

    const deltaX = currentX - startX;
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      // Swiped left -> next slide; swiped right -> previous slide.
      goTo(deltaX < 0 ? active + 1 : active - 1);
    } else {
      // Tap or hold with no meaningful movement — just resume autoplay.
      start();
    }
  };

  return (
    <section
      className="relative w-full min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] overflow-hidden bg-navy touch-pan-y"
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {heroSlides.map((slide, i) => {
        const Icon = ICONS[i % ICONS.length];
        const isActive = i === active;
        return (
          <div
            key={slide.key}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={!isActive}
          >
            {/* Devotional fallback background — visible until a real photo
                is dropped in at the path named in `image` below. */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length]}`}
            />
            <Icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none h-auto text-white/[0.06]" />

            {/* Real photo layer — swap in /public/hero/*.jpg and this
                paints over the fallback automatically. */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Legibility scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/55 to-navy-dark/40" />
            <div className="absolute inset-0 pattern-dots text-white/[0.04]" />

            <div className="relative h-full flex items-center">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center text-white">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
                  {slide.eyebrow}
                </p>
                <OrnamentDivider center tone="white" className="mt-3" />
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
                  {slide.title}
                </h1>
                <p className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                  {slide.body}
                </p>

                {"stat" in slide && slide.stat && (
                  <div className="mt-7 max-w-sm mx-auto">
                    <div className="flex items-center justify-between text-sm font-semibold mb-2">
                      <span>{slide.stat}</span>
                      <span>{campaignPercent()}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/15 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                        style={{ width: `${campaignPercent()}%` }}
                      />
                    </div>
                  </div>
                )}

                {"schedule" in slide && slide.schedule && (
                  <div className="mt-7 grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
                    {slide.schedule.map((s) => (
                      <div
                        key={s.title}
                        className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur-sm"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-light">
                          {s.time}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          {s.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-light transition-colors shadow-sm"
                  >
                    {slide.primaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo(active - 1)}
        className="hidden sm:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-colors"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={() => goTo(active + 1)}
        className="hidden sm:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.key}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-8 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

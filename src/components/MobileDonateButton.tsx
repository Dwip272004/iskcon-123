"use client";

import Link from "next/link";
import { KalashFinial } from "@/components/ornaments";

/**
 * Floating "Donate" action button — mobile only. Fixed to the bottom-right
 * corner on every page, styled with a temple kalash/finial motif so it reads
 * as part of the site rather than a generic app FAB.
 */
export default function MobileDonateButton() {
  return (
    <Link
      href="/donate"
      aria-label="Donate to ISKCON Austin"
      className="sm:hidden fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold pl-3 pr-4 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-dark/30 border border-gold-light/60 active:scale-95 transition-transform"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
        <KalashFinial className="w-4 h-4" color="white" />
      </span>
      Donate
    </Link>
  );
}

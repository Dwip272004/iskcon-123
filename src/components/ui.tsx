import Link from "next/link";
import { ComponentType, ReactNode } from "react";
import { MandalaIcon } from "@/components/devotional-art";
import { CornerFrame, OrnamentDivider } from "@/components/ornaments";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">
      {children}
    </p>
  );
}

/**
 * Standard navy interior-page banner with a subtle rangoli-dot texture and
 * a kalash finial ornament — used at the top of every page except Home
 * (which has its own richer hero).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /**
   * Optional path to a photo under /public (e.g. "/page-heroes/visit.jpg").
   * Until that file exists, the hero falls back to the plain navy gradient
   * automatically — a missing/404 image is simply transparent.
   */
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,134,11,0.2),transparent_55%)]" aria-hidden />
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/75 to-navy-dark/55"
            aria-hidden
          />
        </>
      )}
      <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
          {eyebrow}
        </p>
        <OrnamentDivider tone="white" className="mt-3" />
        <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-2xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
  descriptionSize = "base",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  // "sm" is for a short, one-line description rendered smaller than the
  // default — use it when the copy is a brief aside rather than a lede.
  descriptionSize?: "sm" | "base";
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <OrnamentDivider center={center} tone={light ? "white" : "gold"} className="mt-3" />
      <h2
        className={`font-display text-3xl sm:text-4xl font-semibold text-balance ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 leading-relaxed ${
            descriptionSize === "sm" ? "text-sm" : "text-base sm:text-lg"
          } ${light ? "text-white/75" : "text-ink-soft"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap";
  const styles = {
    primary: "bg-gold text-white hover:bg-gold-light shadow-sm",
    secondary: "bg-navy text-white hover:bg-navy-dark shadow-sm",
    ghost: "bg-white/10 text-white border border-white/40 hover:bg-white/20",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-cream-deep bg-white shadow-sm before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-marigold before:via-gold before:to-peacock ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
      {children}
    </span>
  );
}

export function PlaceholderImage({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} w-full rounded-2xl bg-gradient-to-br from-cream to-cream-deep border border-cream-deep flex items-center justify-center text-center p-4 ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
        {label}
        <br />
        <span className="font-normal normal-case">[ photo placeholder ]</span>
      </span>
    </div>
  );
}

/**
 * A devotional-motif art panel used in place of a real photograph until
 * temple photography is available. Renders one of the icons from
 * devotional-art.tsx over a warm, brand-colored gradient, with a small
 * caption naming what real photo should eventually go here.
 */
export function ArtPanel({
  icon: Icon,
  caption,
  tone = "cream",
  ratio = "aspect-[4/3]",
  className = "",
  iconClassName = "w-24 h-24",
  photo,
}: {
  icon: ComponentType<{ className?: string }>;
  caption: string;
  tone?: "cream" | "navy" | "maroon";
  ratio?: string;
  className?: string;
  iconClassName?: string;
  /**
   * Optional path to a real photo under /public (e.g. "/prabhupada.jpg").
   * Painted over the icon/gradient fallback below it, so a missing file
   * just leaves the icon panel showing — never a broken-image icon.
   */
  photo?: string;
}) {
  const tones = {
    cream: {
      bg: "bg-gradient-to-br from-cream to-cream-deep border border-cream-deep",
      icon: "text-gold",
      pattern: "text-navy/5",
      caption: "text-ink-soft/70",
    },
    navy: {
      bg: "bg-gradient-to-br from-navy to-navy-dark border border-white/10",
      icon: "text-gold-light",
      pattern: "text-white/10",
      caption: "text-white/50",
    },
    maroon: {
      bg: "bg-gradient-to-br from-maroon to-navy-dark border border-white/10",
      icon: "text-gold-light",
      pattern: "text-white/10",
      caption: "text-white/50",
    },
  } as const;
  const t = tones[tone];

  return (
    <div
      className={`relative overflow-hidden ${ratio} w-full rounded-2xl ${t.bg} flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
    >
      <MandalaIcon className={`absolute -right-8 -bottom-8 w-40 h-40 ${t.pattern}`} />
      <MandalaIcon className={`absolute -left-10 -top-10 w-32 h-32 ${t.pattern}`} />
      <Icon className={`${iconClassName} ${t.icon} relative`} />
      {photo && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photo})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />
        </>
      )}
      <span
        className={
          photo
            ? "absolute top-3 left-3 z-10 rounded-full bg-navy/80 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm"
            : `relative text-[11px] font-semibold uppercase tracking-wide ${t.caption}`
        }
      >
        {caption}
      </span>
      <CornerFrame tone={tone === "cream" ? "gold" : "white"} size={18} inset={12} />
    </div>
  );
}

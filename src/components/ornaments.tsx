// Reusable decorative flourishes that give the site a temple/devotional
// character: ornamental section dividers, corner frame brackets (like a
// temple doorway frame), and a small kalash/finial mark used above key
// panels. All inline SVG — no external assets.

export function OrnamentDivider({
  center = false,
  tone = "gold",
  className = "",
}: {
  center?: boolean;
  tone?: "gold" | "white";
  className?: string;
}) {
  const color = tone === "white" ? "#f4e4b8" : "var(--color-gold)";
  return (
    <svg
      viewBox="0 0 160 20"
      width="160"
      height="20"
      className={`${center ? "mx-auto" : ""} mb-5 ${className}`}
      fill="none"
    >
      <path d="M0 10 H62" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <path d="M98 10 H160" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <path
        d="M80 4 C74 4 70 8 70 10 C70 12 74 16 80 16 C86 16 90 12 90 10 C90 8 86 4 80 4Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle cx="80" cy="10" r="2.4" fill={color} />
      <circle cx="66" cy="10" r="1.6" fill={color} />
      <circle cx="94" cy="10" r="1.6" fill={color} />
    </svg>
  );
}

export function KalashFinial({
  className = "",
  color = "var(--color-gold)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <g stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M30 4 L30 12" />
        <path d="M22 12 L38 12" />
        <path d="M24 12 C18 20 18 30 24 36 C20 40 20 46 26 50 C22 52 22 56 26 58 L34 58 C38 56 38 52 34 50 C40 46 40 40 36 36 C42 30 42 20 36 12 Z" />
      </g>
      <circle cx="30" cy="8" r="1.8" fill={color} />
    </svg>
  );
}

/**
 * Wrap any panel with slim temple-frame corner brackets (like a doorway
 * frame). Parent must have position: relative (ArtPanel already does).
 */
export function CornerFrame({
  tone = "gold",
  size = 22,
  inset = 10,
}: {
  tone?: "gold" | "white";
  size?: number;
  inset?: number;
}) {
  const border = tone === "white" ? "border-white/50" : "border-gold/60";
  const base = `absolute pointer-events-none border-2 ${border}`;
  const px = (n: number) => `${n}px`;
  return (
    <>
      <span
        className={`${base} border-r-0 border-b-0`}
        style={{ top: px(inset), left: px(inset), width: px(size), height: px(size) }}
      />
      <span
        className={`${base} border-l-0 border-b-0`}
        style={{ top: px(inset), right: px(inset), width: px(size), height: px(size) }}
      />
      <span
        className={`${base} border-r-0 border-t-0`}
        style={{ bottom: px(inset), left: px(inset), width: px(size), height: px(size) }}
      />
      <span
        className={`${base} border-l-0 border-t-0`}
        style={{ bottom: px(inset), right: px(inset), width: px(size), height: px(size) }}
      />
    </>
  );
}

export function GarlandRow({ className = "" }: { className?: string }) {
  const flowers = Array.from({ length: 14 });
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {flowers.map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="14" height="14" fill="none">
          <g stroke="currentColor" strokeWidth="1.4">
            <circle cx="10" cy="4" r="2.6" />
            <circle cx="10" cy="16" r="2.6" />
            <circle cx="4" cy="10" r="2.6" />
            <circle cx="16" cy="10" r="2.6" />
          </g>
          <circle cx="10" cy="10" r="2.2" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

// A small hand-drawn icon system used to give placeholder image panels a
// devotional, temple-appropriate character (lotus, diya, kirtan, tulsi,
// peacock feather, temple silhouette, japa mala, prasadam) instead of flat
// gray boxes — all inline SVG, no external assets, fully theme-colored.
// Swap any of these panels for real photography as it becomes available.

type IconProps = { className?: string };

export function LotusBloomIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M50 62 C38 62 28 50 28 34 C40 38 47 46 50 58 C53 46 60 38 72 34 C72 50 62 62 50 62Z" />
        <path d="M50 62 C40 66 26 62 18 50 C31 48 41 52 48 60" />
        <path d="M50 62 C60 66 74 62 82 50 C69 48 59 52 52 60" />
        <path d="M50 62 C45 70 33 74 20 70 C29 62 39 60 47 62" />
        <path d="M50 62 C55 70 67 74 80 70 C71 62 61 60 53 62" />
      </g>
      <circle cx="50" cy="62" r="4.5" fill="currentColor" />
    </svg>
  );
}

export function DiyaIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M50 40 C53 30 47 24 50 14 C53 24 58 28 55 38 C60 34 62 26 58 20 C68 28 66 40 58 44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 56 C20 50 30 46 50 46 C70 46 80 50 80 56 C80 68 66 76 50 76 C34 76 20 68 20 56Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx="50" cy="56" rx="30" ry="7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function KirtanIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        {/* mridanga drum */}
        <path d="M22 42 C22 36 32 32 44 32 C56 32 66 36 66 42 L62 66 C62 72 54 76 44 76 C34 76 26 72 26 66 Z" />
        <ellipse cx="44" cy="32" rx="22" ry="7" />
        <path d="M30 40 L58 40 M28 50 L60 50 M28 60 L58 60" opacity="0.6" />
        {/* karatalas */}
        <circle cx="78" cy="60" r="9" />
        <circle cx="86" cy="72" r="9" />
      </g>
    </svg>
  );
}

export function ScriptureIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M50 30 C42 24 26 22 18 26 L18 70 C26 66 42 68 50 74 C58 68 74 66 82 70 L82 26 C74 22 58 24 50 30 Z" />
        <path d="M50 30 L50 74" />
        <path d="M26 36 L40 36 M26 44 L42 44 M26 52 L40 52" opacity="0.6" />
        <path d="M60 36 L74 36 M58 44 L74 44 M60 52 L74 52" opacity="0.6" />
      </g>
      <g stroke="currentColor" strokeWidth="1.4" opacity="0.5">
        <path d="M50 16 L50 24 M42 18 L46 25 M58 18 L54 25" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function JapaMalaIcon({ className = "" }: IconProps) {
  const beads = Array.from({ length: 18 }, (_, i) => {
    const angle = (i / 18) * Math.PI * 2 - Math.PI / 2;
    const r = 32;
    return { x: 50 + r * Math.cos(angle), y: 50 + r * Math.sin(angle) };
  });
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.4" opacity="0.4" strokeDasharray="1 7" />
      {beads.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={i % 3 === 0 ? 4.2 : 3.2} fill="currentColor" opacity={i % 3 === 0 ? 1 : 0.75} />
      ))}
      <path d="M50 18 L50 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TulsiIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 82 L50 40" />
        <path d="M50 40 C50 24 40 16 28 12 C30 26 38 36 50 40Z" />
        <path d="M50 40 C50 24 60 16 72 12 C70 26 62 36 50 40Z" />
        <path d="M50 56 C50 44 43 38 34 35 C36 46 42 53 50 56Z" />
        <path d="M50 56 C50 44 57 38 66 35 C64 46 58 53 50 56Z" />
      </g>
      <path d="M34 82 Q50 74 66 82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PeacockFeatherIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M50 86 C50 60 44 40 34 18 C56 26 66 46 62 66 C60 76 55 82 50 86Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="34" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="46" cy="34" r="4" fill="currentColor" />
      <path d="M50 86 L50 40" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
    </svg>
  );
}

export function TempleSilhouetteIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 140 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M70 8 C76 18 78 26 76 34 L64 34 C62 26 64 18 70 8Z" />
        <circle cx="70" cy="12" r="2.4" fill="currentColor" stroke="none" />
        <path d="M56 34 L84 34 L84 46 L56 46 Z" />
        <path d="M50 46 L90 46 L96 62 L44 62 Z" />
        <path d="M30 90 L30 62 L110 62 L110 90 Z" />
        <path d="M40 90 L40 70 L48 70 L48 90 M62 90 L62 70 L70 70 L70 90 M92 90 L92 70 L100 70 L100 90" />
      </g>
      <path d="M14 90 L126 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PrasadamIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M14 54 C14 54 30 66 50 66 C70 66 86 54 86 54 C82 44 68 40 50 40 C32 40 18 44 14 54Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="42" cy="52" r="4.5" fill="currentColor" />
      <circle cx="56" cy="50" r="3.5" fill="currentColor" />
      <circle cx="50" cy="58" r="3" fill="currentColor" />
      <path d="M50 40 C50 30 44 26 50 18 C56 26 50 30 50 40Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function NamasteIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 20 C44 34 40 46 50 78 C60 46 56 34 50 20Z" />
        <path d="M50 30 C46 40 44 50 50 68" opacity="0.5" />
        <path d="M50 30 C54 40 56 50 50 68" opacity="0.5" />
      </g>
      <path d="M30 84 Q50 76 70 84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MandalaIcon({ className = "" }: IconProps) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.4" opacity="0.3" strokeDasharray="1 6" />
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="24"
          rx="4"
          ry="10"
          stroke="currentColor"
          strokeWidth="1.6"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function MapPinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M50 14 C34 14 22 26 22 42 C22 62 50 88 50 88 C50 88 78 62 78 42 C78 26 66 14 50 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="42" r="11" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="42" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function CameraIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M20 38 C20 34 23 31 27 31 H35 L40 22 H60 L65 31 H73 C77 31 80 34 80 38 V70 C80 74 77 77 73 77 H27 C23 77 20 74 20 70 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="55" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="55" r="5" fill="currentColor" />
      <circle cx="69" cy="41" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function YouthIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="34" cy="30" r="10" />
        <path d="M16 66 C16 52 24 46 34 46 C44 46 52 52 52 66" />
        <circle cx="68" cy="26" r="8" />
        <path d="M52 62 C52 50 59 45 68 45 C77 45 84 50 84 62" />
      </g>
      <path d="M18 84 Q50 74 82 84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

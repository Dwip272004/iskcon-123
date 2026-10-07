import type { Metadata } from "next";
import Image from "next/image";
import { Button, SectionHeading } from "@/components/ui";
import { CornerFrame } from "@/components/ornaments";

export const metadata: Metadata = {
  title: "New Temple",
  description:
    "ISKCON's New Temple in Austin, Texas — a beautiful spiritual oasis that will enlighten your heart. See renderings, the address, and how to support the campaign.",
};

const renderings = [
  { src: "/temple-renderings/exterior-04-front-entrance-pool.jpg", caption: "Front Entrance & Reflecting Pool" },
  { src: "/temple-renderings/exterior-01-entrance-courtyard.jpg", caption: "Entrance Courtyard" },
  { src: "/temple-renderings/exterior-02-facade.jpg", caption: "Facade" },
  { src: "/temple-renderings/exterior-03-covered-porch.jpg", caption: "Covered Porch" },
  { src: "/temple-renderings/exterior-05-corner-view.jpg", caption: "Corner View" },
  { src: "/temple-renderings/interior-01-altar-hall.jpg", caption: "Shrine Alcove" },
  { src: "/temple-renderings/interior-02-great-hall.jpg", caption: "Great Hall" },
  { src: "/temple-renderings/interior-03-shrine-alcove.jpg", caption: "Altar Hall" },
];

export default function NewTempleLocationPage() {
  return (
    <div>
      {/* Hero — exact copy provided by the founder */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/temple-renderings/exterior-04-front-entrance-pool.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/75 to-navy-dark/55" aria-hidden />
        <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 relative text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
            A Gift for Generations
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance max-w-3xl mx-auto">
            ISKCON&rsquo;s New Temple in Austin, Texas
          </h1>
          <p className="mt-5 text-white/85 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            A beautiful spiritual oasis that will enlighten your heart
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/donate" variant="primary">
              Support the Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* The property — real aerial photo of the site */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="The Land"
          title="The Property"
          description="An aerial view of the site at 1311 Collinwood W Dr — the future home of ISKCON Austin's permanent temple."
        />
        <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cream-deep shadow-sm">
          <Image
            src="/new-temple/property-aerial.jpg"
            alt="Aerial view of the new temple property in Austin, Texas"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <CornerFrame tone="gold" size={20} inset={10} />
        </div>
      </section>

      {/* Renderings */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="See It for Yourself"
            title="Architectural Renderings"
            description="A preview of the new temple, currently under development."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {renderings.map((r) => (
              <div
                key={r.src}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-cream-deep bg-white shadow-sm"
              >
                <Image
                  src={r.src}
                  alt={r.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {r.caption}
                </span>
                <CornerFrame tone="white" size={14} inset={7} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

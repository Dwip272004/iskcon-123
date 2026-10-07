import type { Metadata } from "next";
import { PageHero, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { MapPinIcon } from "@/components/devotional-art";
import { OrnamentDivider } from "@/components/ornaments";
import VirtualTourGallery from "@/components/VirtualTourGallery";
import SitePlanImages from "@/components/SitePlanImages";
import { campaignPercent, constructionUpdates, givingFunds, locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Virtual Tour — The New Temple",
  description:
    "Take a virtual tour of ISKCON Austin's new temple through architectural renderings of the exterior grounds and interior worship halls.",
};

const location = locations.find((l) => l.key === "newTemple")!;
const campaign = givingFunds.find((f) => f.key === "capital")!;

export default function VirtualTourPage() {
  return (
    <div>
      <PageHero
        eyebrow="A Gift for Generations"
        title="Virtual Tour of the New Temple"
        description="Step inside the architectural vision for ISKCON Austin's permanent home — from the entrance courtyard to the grand altar hall."
        image="/temple-renderings/exterior-02-facade.jpg"
      />

      {/* Location details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Find Us" title="Site Address" />
            <div className="mt-6 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold border border-cream-deep">
                <MapPinIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-semibold text-navy">{location.address}</p>
                <p className="text-sm text-ink-soft mt-1">{location.description}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-light transition-colors shadow-sm"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="New Temple Campaign" title="A Home Built to Last Generations" />
            <p className="mt-4 text-ink-soft leading-relaxed">{campaign.description}</p>
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm font-semibold text-navy mb-2">
                <span>{campaign.stat}</span>
                <span>{campaignPercent()}%</span>
              </div>
              <div className="h-3 rounded-full bg-cream overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                  style={{ width: `${campaignPercent()}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction progress & temple features */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Where Things Stand"
            title="Construction Progress"
            description={`${constructionUpdates.templeName} — the latest on where the project stands, and what to expect once ground is broken.`}
          />
          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-navy">Construction Updates</h3>
            <p className="mt-1 text-xs text-ink-soft">Hover a step for details.</p>

            <div className="mt-8">
              <div className="relative grid grid-cols-5 items-start gap-1 sm:gap-4">
                {/* Connector track */}
                <div
                  className="absolute top-3 sm:top-4 h-0.5 bg-cream-deep"
                  style={{
                    left: `${100 / (constructionUpdates.milestones.length * 2)}%`,
                    right: `${100 / (constructionUpdates.milestones.length * 2)}%`,
                  }}
                  aria-hidden
                />
                {/* Connector progress (gold, up through the completed steps) */}
                <div
                  className="absolute top-3 sm:top-4 h-0.5 bg-gold transition-all"
                  style={{
                    left: `${100 / (constructionUpdates.milestones.length * 2)}%`,
                    width: `${
                      (Math.max(constructionUpdates.milestones.filter((m) => m.done).length - 1, 0) /
                        (constructionUpdates.milestones.length - 1)) *
                      (100 - 100 / constructionUpdates.milestones.length)
                    }%`,
                  }}
                  aria-hidden
                />

                {constructionUpdates.milestones.map((m, i) => (
                  <div
                    key={m.title}
                    className="group relative z-10 flex flex-col items-center px-0.5 text-center"
                  >
                    <span
                      className={`flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full text-[10px] sm:text-xs font-bold ring-4 ring-cream ${
                        m.done
                          ? "bg-gold text-white"
                          : "bg-white text-gold border-2 border-gold/50"
                      }`}
                    >
                      {m.done ? "✓" : i + 1}
                    </span>
                    <p className="mt-2 sm:mt-3 text-[9px] sm:text-xs font-semibold text-navy leading-snug">
                      {m.title}
                    </p>

                    {/* Detail — hidden until this node is hovered */}
                    <div
                      className="pointer-events-none absolute top-full left-1/2 mt-2 sm:mt-3 w-36 max-w-[70vw] sm:w-52 sm:max-w-none -translate-x-1/2 translate-y-1 rounded-xl bg-navy px-3 py-2.5 sm:px-4 sm:py-3 text-left text-[10px] sm:text-xs opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 z-20"
                    >
                      {m.detail && (
                        <p className="text-white/85 leading-relaxed">{m.detail}</p>
                      )}
                      <p
                        className={`mt-1.5 text-[10px] font-semibold uppercase tracking-wide ${
                          m.done ? "text-gold-light" : "text-white/60"
                        }`}
                      >
                        {m.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-sm text-ink-soft leading-relaxed rounded-xl bg-white border border-cream-deep px-4 py-3 max-w-xl">
              Estimated time needed to construct once building begins:{" "}
              <span className="font-semibold text-navy">{constructionUpdates.constructionDuration}</span>.
            </p>

            <h3 className="mt-14 font-display text-lg font-semibold text-navy">Temple Features</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
              {constructionUpdates.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                  <span className="text-gold font-bold">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Renderings"
          title="Explore the Design"
          description="These architectural renderings show the temple as designed — the final building may evolve slightly as construction progresses. Use the filters to browse by exterior or interior views, and click any image for a closer look."
          center
        />
        <div className="mt-12">
          <VirtualTourGallery />
        </div>
      </section>

      {/* Site plan & landmark — approved civil plan and where the property
          sits within the surrounding neighborhood. */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="The Site"
            title="Site Plan & Landmark"
            description="The approved civil site plan for the property, and an aerial view showing exactly where the new temple will sit within the surrounding neighborhood."
          />
          <SitePlanImages />
        </div>
      </section>

      {/* Campaign callout */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <Eyebrow>New Temple Campaign</Eyebrow>
          <OrnamentDivider center tone="white" className="mt-3" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-balance">
            Help Bring This Vision to Life
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            {givingFunds[0].description}
          </p>
          <div className="mt-6 max-w-sm mx-auto">
            <div className="flex items-center justify-between text-sm font-semibold mb-2">
              <span>{givingFunds[0].stat}</span>
              <span>{campaignPercent()}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                style={{ width: `${campaignPercent()}%` }}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/donate" variant="primary">
              Donate to the New Temple
            </Button>
            <Button href="/about" variant="ghost">
              Read the Full Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

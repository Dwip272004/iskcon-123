import type { Metadata } from "next";
import Link from "next/link";
import { ArtPanel, Card, PageHero, SectionHeading } from "@/components/ui";
import { MapPinIcon, NamasteIcon } from "@/components/devotional-art";
import { faqs, locations, site, weeklySchedule } from "@/lib/data";
import GalleryLink from "@/components/GalleryLink";
import JoinCourseBanner from "@/components/JoinCourseBanner";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Plan your visit to ISKCON Austin: what to expect, directions and parking, the weekly schedule, and answers to common first-time visitor questions.",
};

export default function VisitPage() {
  return (
    <div>
      <PageHero
        eyebrow="New Here?"
        title="Plan Your Visit"
        description="Everyone is welcome at ISKCON Austin — no invitation, dress code, or prior knowledge needed. Here's everything to know before you come."
        image="/visit/banner.jpg"
      />

      {/* What to expect */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading eyebrow="What to Expect" title="Your First Visit" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            Arrive any time during the Sunday program — most guests come
            around 11:00 AM for kirtan (congregational chanting), stay for a
            short class on the Bhagavad-gita, and finish with a free
            vegetarian feast. You're welcome to just observe, or join in.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-ink-soft">
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Shoes are removed before entering the temple room — a shelf is
              provided near the entrance.
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Seating is on the floor, though cushions and chairs are
              available for anyone who needs them.
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Modest, comfortable clothing is welcome — traditional dress is
              common but never required.
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">•</span>
              Greeters are on hand to answer questions and help you feel at
              home.
            </li>
          </ul>
          <p className="mt-6 text-sm text-ink-soft leading-relaxed">
            Can't make it in person yet? You can start practicing today —
            see our guide to{" "}
            <Link href="/kc-at-home" className="font-semibold text-gold hover:text-gold-light underline underline-offset-2">
              Krishna Consciousness at Home
            </Link>
            .
          </p>
        </div>
        <ArtPanel
          icon={NamasteIcon}
          caption="Devotees Greeting Visitors"
          tone="cream"
          photo="/temple-renderings/exterior-01-entrance-courtyard.jpg"
        />
      </section>

      {/* Full weekly schedule */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading eyebrow="Weekly Rhythm" title="Sunday Schedule" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySchedule
              .filter((item) => item.day === "Sunday")
              .map((item) => (
              <Card key={item.title + item.time} className="p-6">
                <span className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                  {item.day}
                </span>
                <p className="mt-3 text-xs font-semibold text-gold">
                  {item.time}
                </p>
                <h3 className="font-display text-lg font-semibold text-navy mt-1">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-cream-deep shadow-sm">
            <iframe
              src={site.map.embedUrl}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Google Map — ISKCON Austin temple programs location"
            />
          </div>
        </div>
      </section>

      {/* Directions & parking — every address in one place */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Getting Here"
            title="Directions & Parking"
            description="Two locations — tap a card for schedule and directions."
            descriptionSize="sm"
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {locations.map((l) => (
              <Card key={l.key} className="p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gold border border-cream-deep">
                  <MapPinIcon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy mt-4">
                  {l.label}
                </h3>
                <p className="mt-2 text-sm font-medium text-navy">{l.address}</p>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {l.description}
                </p>
                <a
                  href={l.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-light"
                >
                  Get Directions →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 relative">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            center
            light
          />
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl bg-white/5 border border-white/10 p-5 open:bg-white/10"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-white">
                  {f.q}
                  <span className="text-gold-light group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16">
        <GalleryLink />
      </div>

      <JoinCourseBanner />
    </div>
  );
}

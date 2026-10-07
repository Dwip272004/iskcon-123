import type { Metadata } from "next";
import { ArtPanel, Button, Card, PageHero, SectionHeading } from "@/components/ui";
import { OrnamentDivider } from "@/components/ornaments";
import {
  KirtanIcon,
  PrasadamIcon,
  ScriptureIcon,
  YouthIcon,
} from "@/components/devotional-art";
import EventsList from "@/components/EventsList";
import { getInvolvedOptions, ongoingPrograms } from "@/lib/data";
import GalleryLink from "@/components/GalleryLink";
import JoinCourseBanner from "@/components/JoinCourseBanner";

const PROGRAM_ICONS = [ScriptureIcon, KirtanIcon, PrasadamIcon];

export const metadata: Metadata = {
  title: "Get Involved & Events",
  description:
    "Volunteer at ISKCON Austin and see what's happening: Sunday Feast seva, book distribution, festivals, classes, and community events.",
};

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHero
        eyebrow="Serve & Celebrate With Us"
        title="Get Involved & Events"
        description="Devotional service (seva) is at the heart of temple life — and there's always a festival, class, or celebration on the calendar to join."
        image="/temple-renderings/interior-02-great-hall.jpg"
      />

      {/* Volunteer opportunities */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Ways to Serve"
          title="Volunteer Opportunities"
          description="Reach out and we'll help match you to the right team — no experience necessary for most roles."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getInvolvedOptions.map((o) => (
            <Card key={o.title} className="p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                {o.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {o.description}
              </p>
            </Card>
          ))}
        </div>
        <Button href="/contact" variant="secondary" className="mt-10">
          Sign Up to Volunteer
        </Button>
      </section>

      {/* Youth & families */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Youth & Families"
              title="Raising the Next Generation"
            />
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our youth programs offer kirtan, drama, and educational
              activities so children grow up with a joyful connection to
              Krishna consciousness.
            </p>
          </div>
          <ArtPanel
            icon={YouthIcon}
            caption="Youth Program"
            tone="cream"
            photo="/visit/banner.jpg"
          />
        </div>
      </section>

      {/* Ongoing outreach programs */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Every Week"
          title="Ongoing Outreach Programs"
          description="Beyond our calendar of festivals, these programs run continuously throughout the year."
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {ongoingPrograms.map((p, i) => {
            const Icon = PROGRAM_ICONS[i % PROGRAM_ICONS.length];
            return (
              <Card key={p.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold border border-cream-deep">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy mt-4">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {p.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Events calendar */}
      <section id="events" className="bg-cream scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Mark Your Calendar"
            title="Festivals & Events"
            description="Filter by category to find festivals, classes, and community events."
          />
          <div className="mt-8">
            <EventsList />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
          <OrnamentDivider center className="mx-auto" />
          <h2 className="font-display text-3xl font-semibold text-navy">
            Hosting or Planning Around a Festival?
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">
            Contact us for group visits, prasadam sponsorship, or to get
            involved in organizing an upcoming celebration.
          </p>
          <Button href="/contact" variant="secondary" className="mt-6">
            Contact the Temple
          </Button>
        </div>
      </section>

      <div className="pb-16">
        <GalleryLink />
      </div>

      <JoinCourseBanner />
    </div>
  );
}

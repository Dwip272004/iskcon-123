import type { Metadata } from "next";
import { Button, Card, PageHero, SectionHeading } from "@/components/ui";
import { OrnamentDivider } from "@/components/ornaments";
import { KirtanIcon, PrasadamIcon, ScriptureIcon } from "@/components/devotional-art";
import EventsList from "@/components/EventsList";
import { ongoingPrograms } from "@/lib/data";

const PROGRAM_ICONS = [ScriptureIcon, KirtanIcon, PrasadamIcon];

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "Festivals, Ekadasi fasting days, classes, and community events at ISKCON Austin — filter by category and never miss a celebration.",
};

export default function EventsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Mark Your Calendar"
        title="Festivals & Events"
        description="From grand festivals to weekly classes and Ekadasi fasting days — here's what's happening at ISKCON Austin."
        image="/page-heroes/events.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Filter by Category"
          title="Upcoming at ISKCON Austin"
        />
        <div className="mt-8">
          <EventsList />
        </div>
      </section>

      {/* Ongoing outreach programs */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
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
    </div>
  );
}

import type { Metadata } from "next";
import { ArtPanel, Button, Card, PageHero, SectionHeading, Eyebrow } from "@/components/ui";
import { OrnamentDivider } from "@/components/ornaments";
import {
  DiyaIcon,
  JapaMalaIcon,
  LotusBloomIcon,
  NamasteIcon,
  PrasadamIcon,
  ScriptureIcon,
  TulsiIcon,
} from "@/components/devotional-art";
import { kcAtHome, site } from "@/lib/data";
import GalleryLink from "@/components/GalleryLink";

const PRACTICE_ICONS = [
  JapaMalaIcon,
  DiyaIcon,
  PrasadamIcon,
  ScriptureIcon,
  LotusBloomIcon,
  NamasteIcon,
];

export const metadata: Metadata = {
  title: "Krishna Consciousness at Home",
  description:
    "A practical guide to practicing Krishna consciousness at home: chanting the holy names, setting up a home altar, honoring prasadam, and daily devotional life.",
};

export default function KCAtHomePage() {
  return (
    <div>
      <PageHero
        eyebrow="Practice Anywhere"
        title="Krishna Consciousness at Home"
        description="You don't need to live at the temple to live a devotional life. With a little determination, any home can become a place of worship."
        image="/temple-renderings/interior-03-shrine-alcove.jpg"
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        <OrnamentDivider center className="mx-auto" />
        <p className="text-ink-soft leading-relaxed text-lg">
          Krishna consciousness is a practical activity, guided by scripture
          and a spiritual master, with a single goal: reconnecting with
          Krishna. It doesn't require special circumstances — only a
          determined heart. The practices below are simple to start and
          deepen with time, wherever you live.
        </p>
      </section>

      {/* Chanting */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
          <div className="relative">
            <Eyebrow>The Heart of the Practice</Eyebrow>
            <OrnamentDivider center tone="white" className="mt-3" />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Chanting the Holy Names
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
              &ldquo;I can be known only by devotional service.&rdquo; Chanting
              the Hare Krishna maha-mantra — alone as japa, or together as
              kirtan — is the simplest and most direct practice of Krishna
              consciousness.
            </p>
            <div className="mt-8 mx-auto max-w-sm rounded-2xl bg-white/10 border border-white/15 px-6 py-8 backdrop-blur-sm">
              {kcAtHome.mantra.map((line) => (
                <p key={line} className="font-display text-lg sm:text-xl font-semibold text-gold-light">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
              Chant on a strand of 108 japa beads, aiming for at least 16
              rounds a day. Early morning, before the day's distractions
              begin, is considered the best time — but any sincere effort
              counts.
            </p>
          </div>
        </div>
      </section>

      {/* Altar */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading
            eyebrow="Create a Sacred Space"
            title="Setting Up Your Home Altar"
            description="A small, well-kept altar turns any room into a place of worship."
          />
          <ul className="mt-6 space-y-3 text-sm text-ink-soft">
            {kcAtHome.altarItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-soft leading-relaxed">
            Arrange pictures in a gentle triangle, with Sri Sri Radha-Krishna
            slightly elevated and centered. Clean the altar daily, keep water
            and incense fresh, and remove wilted flowers promptly — small,
            consistent care matters more than anything elaborate.
          </p>
        </div>
        <ArtPanel
          icon={TulsiIcon}
          caption="A Simple Home Altar"
          tone="cream"
          photo="/temple-renderings/interior-03-shrine-alcove.jpg"
        />
      </section>

      {/* Prasadam */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Spiritualized Food"
            title="Prasadam: Eating With Devotion"
            description="Food prepared with love and offered to Krishna becomes prasadam — mercy you can taste."
            center
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Offerable Foods
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {kcAtHome.offerableFoods.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-gold font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Not Offered
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {kcAtHome.nonOfferableFoods.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-maroon font-bold">✕</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <p className="mt-8 text-sm text-ink-soft leading-relaxed max-w-2xl mx-auto text-center">
            Cook with a clean kitchen and dedicated dinnerware, without
            tasting the food before it's offered. After offering, wait a few
            minutes before serving — the food is now prasadam, to be honored
            and shared.
          </p>
        </div>
      </section>

      {/* Regulative principles */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="A Foundation for Clear Consciousness"
          title="The Four Regulative Principles"
          description="Simple boundaries that protect a peaceful, devotional state of mind."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kcAtHome.regulativePrinciples.map((p) => (
            <Card key={p.title} className="p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {p.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Daily practices */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Bringing It Together"
            title="Daily Devotional Life"
            description="Six simple habits that turn any home into a place of practice."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kcAtHome.dailyPractices.map((p, i) => {
              const Icon = PRACTICE_ICONS[i % PRACTICE_ICONS.length];
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

      {/* Closing / resources */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <OrnamentDivider center tone="white" className="mx-auto" />
          <p className="font-display text-xl sm:text-2xl font-semibold leading-relaxed text-balance">
            &ldquo;There is no loss or diminution in this endeavor, and even a
            little advancement on this path protects one from the most
            fearful type of danger.&rdquo;
          </p>
          <p className="mt-3 text-sm text-white/60">Bhagavad-gita 2.40</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/visit" variant="primary">
              Visit the Temple
            </Button>
            <Button href="/contact" variant="ghost">
              Ask a Question
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Have questions about starting a home practice? Reach out to{" "}
            {site.contactPeople.map((p, i) => (
              <span key={p.name}>
                <a href={`tel:${p.phone}`} className="font-semibold text-gold-light hover:underline">
                  {p.name}
                </a>
                {i < site.contactPeople.length - 1 ? " or " : ""}
              </span>
            ))}
            — or find books and altar supplies at{" "}
            <span className="font-semibold">store.krishna.com</span>.
          </p>
        </div>
      </section>

      <div className="py-16">
        <GalleryLink />
      </div>
    </div>
  );
}

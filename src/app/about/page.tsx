import type { Metadata } from "next";
import { ArtPanel, Button, Card, PageHero, SectionHeading } from "@/components/ui";
import {
  JapaMalaIcon,
  MandalaIcon,
  PeacockFeatherIcon,
  ScriptureIcon,
  TempleSilhouetteIcon,
} from "@/components/devotional-art";
import { coreBeliefs, iskconPhilosophy, iskconStats } from "@/lib/data";
import GalleryLink from "@/components/GalleryLink";

const BELIEF_ICONS = [PeacockFeatherIcon, ScriptureIcon, JapaMalaIcon, MandalaIcon];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ISKCON Austin's history, core beliefs, founder Srila Prabhupada, the global Krishna consciousness movement, and our new temple project in Central Texas.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            About ISKCON Austin
            <span className="block mt-1 text-5xl sm:text-6xl text-gold-light">
              Krishna Consciousness
            </span>
          </>
        }
        description="Part of a global tradition of bhakti-yoga, rooted in Austin since our community's earliest devotees gathered to chant, study, and share prasadam."
        image="/temple-renderings/exterior-01-entrance-courtyard.jpg"
      />

      {/* History & philosophy — carried over from the original
          iskconaustin.com About page as closely as possible. */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading eyebrow="Where We Come From" title="ISKCON Philosophy" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            {iskconPhilosophy.intro}
          </p>
          {iskconPhilosophy.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-ink-soft leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <ArtPanel
          icon={TempleSilhouetteIcon}
          caption="Krishna, the Supreme"
          tone="cream"
          ratio="aspect-[3/4]"
          photo="/deities/krishna-supreme.jpg"
        />
      </section>

      {/* What we believe */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Transcendental Truths"
            description="A few core teachings at the heart of Krishna consciousness."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreBeliefs.map((b, i) => {
              const Icon = BELIEF_ICONS[i % BELIEF_ICONS.length];
              return (
                <Card key={b.title} className="p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold border border-cream-deep">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy mt-4">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {b.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder-Acharya */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <ArtPanel
          icon={ScriptureIcon}
          caption="Founder-Ācārya Śrīla Prabhupāda"
          tone="cream"
          ratio="aspect-[3/4]"
          photo="/people/srila-prabhupada.jpg"
        />
        <div>
          <SectionHeading eyebrow="Our Founder-Acharya" title="Srila Prabhupada" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            His Divine Grace A.C. Bhaktivedanta Swami Prabhupada (1896–1977)
            is widely regarded as the world's foremost teacher of bhakti-yoga
            to the Western world. Born Abhay Charan De in Calcutta, a meeting
            with the spiritual leader Srila Bhaktisiddhanta Sarasvati set the
            course of his life — he was asked to bring the teachings of
            Krishna to the English-speaking world, a request he wouldn't
            fulfill until the age of seventy.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            In 1965 he boarded a cargo ship bound for New York with just
            seven dollars and a crate of translated scriptures. After
            surviving two heart attacks at sea, he arrived in Brooklyn and
            began teaching the Bhagavad-gita from a Bowery loft and leading
            kirtan in Tompkins Square Park. In July 1966, he founded the
            International Society for Krishna Consciousness.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Over the next eleven years he circled the globe fourteen times,
            establishing temples, rural communities, and educational
            institutions on six continents, and authored more than seventy
            books — including Bhagavad-gita As It Is, still the standard
            translation used in ISKCON temples today. He passed away in
            Vrindavana, India, in 1977, leaving behind a movement that
            continues to grow worldwide.
          </p>
        </div>
      </section>

      {/* ISKCON around the world */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 pattern-dots text-white/[0.05]" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 relative">
          <SectionHeading
            eyebrow="A Global Movement"
            title="ISKCON Around the World"
            description="ISKCON Austin is one local community within a movement spanning the globe."
            center
            light
          />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {iskconStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-4 py-8">
                <p className="font-display text-3xl sm:text-4xl font-bold text-gold-light">
                  {s.stat}
                </p>
                <p className="mt-2 text-sm text-white/75">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60 max-w-2xl mx-auto text-center leading-relaxed">
            ISKCON's spiritual headquarters is in Mayapur, West Bengal,
            India — birthplace of Sri Chaitanya Mahaprabhu. Around the
            world, ISKCON temples share common practices: chanting the Hare
            Krishna maha-mantra, a vegetarian diet of food offered to
            Krishna, and the free distribution of prasadam through programs
            like Food for Life.
          </p>
        </div>
      </section>

      {/* New temple project */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading eyebrow="Looking Ahead" title="The New Temple Project" />
          <p className="mt-4 text-ink-soft leading-relaxed">
            ISKCON Austin is building a permanent home: a 300-person worship
            hall, devotee residences, and gardens designed to serve our
            growing community for generations. Construction is anticipated
            to begin within the next 12 months, with a public opening
            planned soon after.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/donate" variant="secondary">
              Support the Campaign
            </Button>
            <Button href="/virtual-tour" variant="ghost" className="!text-navy !border-navy/30 !bg-transparent hover:!bg-navy/5">
              Take the Virtual Tour
            </Button>
          </div>
        </div>
        <ArtPanel
          icon={TempleSilhouetteIcon}
          caption="New Temple — Architectural Rendering"
          tone="cream"
          photo="/temple-renderings/exterior-05-corner-view.jpg"
        />
      </section>

      <div className="pb-16">
        <GalleryLink />
      </div>
    </div>
  );
}

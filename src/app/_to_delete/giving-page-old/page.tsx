import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/ui";
import { OrnamentDivider } from "@/components/ornaments";
import GivingForm from "@/components/GivingForm";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Support ISKCON Austin's new temple capital campaign or everyday temple operations with a one-time or monthly gift. Tax-deductible, secure giving.",
};

const trust = [
  {
    title: "501(c)(3) Nonprofit",
    body: "ISKCON Austin is a registered nonprofit religious organization. All donations are tax-deductible to the extent allowed by law. TODO: confirm EIN.",
  },
  {
    title: "Secure & Transparent",
    body: "Gifts are processed through an encrypted, PCI-compliant payment provider. You'll receive an emailed receipt for your records.",
  },
  {
    title: "Every Gift Matters",
    body: "From $21 offerings to major capital gifts, every contribution directly supports temple worship, the Sunday Feast, and our new home.",
  },
];

export default function GivingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Support the Temple"
        title="Give"
        description="Whether you're supporting our new temple or everyday worship and seva, your gift keeps Krishna consciousness alive in Austin."
        image="/page-heroes/giving.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <SectionHeading
            eyebrow="Choose Your Gift"
            title="Make a Donation"
            description="Select a fund, choose one-time or monthly giving, and pick an amount — or enter your own."
          />
          <div className="mt-10 space-y-6">
            {trust.map((t) => (
              <div key={t.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold font-bold">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-navy text-sm">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <GivingForm />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
          <OrnamentDivider center className="mx-auto" />
          <h2 className="font-display text-3xl font-semibold text-navy">
            Other Ways to Give
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto leading-relaxed">
            Interested in planned giving, stock donations, or sponsoring a
            festival or a Sunday Feast? Contact the temple office and we'll
            be glad to help. TODO: add specific instructions and contact for
            each option.
          </p>
        </div>
      </section>
    </div>
  );
}

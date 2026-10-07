import type { Metadata } from "next";
import { Card, PageHero, SectionHeading } from "@/components/ui";
import GivingForm from "@/components/GivingForm";
import { donationContact, donationMethods, donorRecognitionTiers } from "@/lib/data";
import GalleryLink from "@/components/GalleryLink";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support ISKCON Austin's new temple capital campaign or everyday temple operations with a one-time or monthly gift. Tax-deductible, secure giving.",
};

const trust = [
  {
    title: "501(c)(3) Nonprofit",
    body: "We are a registered 501(c)(3) nonprofit organization, and all donations are fully tax-deductible for US donors.",
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

export default function DonatePage() {
  return (
    <div>
      <PageHero
        eyebrow="Support the Temple"
        title="Donate"
        description="Whether you're supporting our new temple or everyday worship and seva, your gift keeps Krishna consciousness alive in Austin."
        image="/donate/banner.jpg"
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

      {/* Other ways to give */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading
            center
            eyebrow="More Options"
            title="Other Ways to Give"
            description="Prefer not to use the form above? Every gift reaches the temple the same way, however you choose to send it."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {donationMethods.map((m) => (
              <Card key={m.key} className="p-6">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {m.description}
                </p>
                {"detail" in m && m.detail && (
                  <p className="mt-2 text-sm font-medium text-navy leading-relaxed">
                    {m.detail}
                  </p>
                )}
              </Card>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            Questions about giving?{" "}
            <a
              href={`mailto:${donationContact.email}`}
              className="font-semibold text-gold hover:text-gold-light"
            >
              {donationContact.name}
            </a>{" "}
            —{" "}
            <a
              href={`tel:${donationContact.phone}`}
              className="font-semibold text-gold hover:text-gold-light"
            >
              {donationContact.phone}
            </a>
          </p>
        </div>
      </section>

      {/* Donor recognition */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          center
          eyebrow="With Gratitude"
          title="Donor Recognition"
          description="Major one-time gifts are met with a small token of the temple's gratitude."
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {donorRecognitionTiers.map((t) => (
            <Card key={t.title} className="p-6 text-center">
              <p className="font-display text-2xl font-bold text-gold">
                {t.amount}
              </p>
              <h3 className="font-display text-lg font-semibold text-navy mt-2">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {t.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <div className="pb-16">
        <GalleryLink />
      </div>
    </div>
  );
}

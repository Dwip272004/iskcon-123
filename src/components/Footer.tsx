import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-dark text-white">
      <div className="absolute inset-0 pattern-dots text-white/[0.04]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.png"
              alt="ISKCON Austin logo"
              width={40}
              height={34}
              className="h-9 w-auto"
            />
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            {site.tagline}. All are welcome — every day, every background.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              ["Facebook", site.socials.facebook],
              ["Instagram", site.socials.instagram],
              ["YouTube", site.socials.youtube],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold hover:bg-gold hover:text-navy-dark transition-colors"
                aria-label={label}
              >
                {label[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/kc-at-home" className="hover:text-white">
                Krishna Consciousness at Home
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
            Visit Us
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80 leading-relaxed">
            <li>{site.address}</li>
            <li>{site.hours}</li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {site.contactPeople.map((p) => (
              <li key={p.name}>
                <a href={`tel:${p.phone}`} className="hover:text-white">
                  {p.name}: {p.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-light">
            New Temple Project
          </p>
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            We're building a permanent home for Krishna consciousness in
            Austin. Every gift brings us closer.
          </p>
          <Link
            href="/donate"
            className="mt-4 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-dark hover:bg-gold-light transition-colors"
          >
            Support the Campaign
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
          <p>A registered 501(c)(3) nonprofit. Gifts are tax-deductible.</p>
        </div>
      </div>
    </footer>
  );
}

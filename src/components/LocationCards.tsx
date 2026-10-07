"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPinIcon } from "@/components/devotional-art";
import { locations, weeklySchedule } from "@/lib/data";

type Location = (typeof locations)[number];

// Map each location to the schedule entries that belong to it.
function scheduleFor(key: Location["key"]) {
  if (key === "sunday") {
    return weeklySchedule.filter((s) => s.day === "Sunday");
  }
  return [];
}

export default function LocationCards() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {locations.map((l) => {
        const isOpen = openKey === l.key;
        const schedule = scheduleFor(l.key);
        return (
          <div
            key={l.key}
            className="rounded-2xl border border-cream-deep bg-white shadow-sm p-6 flex flex-col"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-gold border border-cream-deep">
              <MapPinIcon className="w-5 h-5" />
            </span>
            <h3 className="font-display text-lg font-semibold text-navy mt-4">
              {l.label}
            </h3>
            <p className="mt-2 text-sm font-medium text-navy">{l.address}</p>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
              {l.description}
            </p>

            <button
              onClick={() => setOpenKey(isOpen ? null : l.key)}
              aria-expanded={isOpen}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light w-fit"
            >
              {isOpen ? "Hide Details" : "Get Details"}
              <span className={`transition-transform ${isOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>

            {isOpen && (
              <div className="mt-4 pt-4 border-t border-cream-deep space-y-4">
                {schedule.length > 0 ? (
                  <div className="space-y-2.5">
                    {schedule.map((s) => (
                      <div key={s.title + s.time} className="text-sm">
                        <span className="font-semibold text-gold">{s.time}</span>{" "}
                        <span className="text-ink-soft">— {s.title}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-ink-soft leading-relaxed">
                    This is the site of ISKCON Austin's future permanent home —
                    currently under construction. No regular programs are held
                    here yet.
                  </p>
                )}

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={l.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-white hover:bg-gold-light transition-colors"
                  >
                    Get Directions →
                  </a>
                  {l.key === "newTemple" ? (
                    <Link
                      href="/virtual-tour"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-navy-dark transition-colors"
                    >
                      Take the Virtual Tour
                    </Link>
                  ) : (
                    <Link
                      href="/visit"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-navy-dark transition-colors"
                    >
                      Plan Your Visit
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

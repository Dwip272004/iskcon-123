"use client";

import { useState } from "react";
import Image from "next/image";
import { donationTiers, givingFunds } from "@/lib/data";

const DONATION_CHECKOUT_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-build-the-iskcon-temple-in-austin";

const qrOptions = {
  zelle: {
    label: "Zelle",
    image: "/donate/zelle-qr.jpg",
    instructions: "Open your banking app, scan this code with Zelle, and send your gift directly — no fees, no account needed.",
  },
  paypal: {
    label: "PayPal",
    image: "/donate/paypal-qr.jpg",
    instructions: "Open the PayPal app, scan this code, and send your gift securely through PayPal.",
  },
} as const;

export default function GivingForm() {
  const [fund, setFund] = useState<string>(givingFunds[0].key);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(donationTiers[2].amount);
  const [custom, setCustom] = useState<string>("");
  const [qrOpen, setQrOpen] = useState(false);
  const [qrMethod, setQrMethod] = useState<keyof typeof qrOptions>("zelle");

  const selected = custom ? Number(custom) || 0 : amount;
  const activeQr = qrOptions[qrMethod];

  const openQr = (method: keyof typeof qrOptions) => {
    setQrMethod(method);
    setQrOpen(true);
  };

  return (
    <div className="rounded-3xl bg-white border border-cream-deep shadow-md p-6 sm:p-8">
      {/* Fund selector */}
      <p className="text-xs font-semibold uppercase tracking-wide text-navy mb-3">
        I want to support
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {givingFunds.map((f) => (
          <button
            key={f.key}
            onClick={() => setFund(f.key)}
            className={`text-left rounded-xl border p-4 transition-colors ${
              fund === f.key
                ? "border-gold bg-cream"
                : "border-cream-deep hover:border-gold/50"
            }`}
          >
            <p className="font-semibold text-navy text-sm">{f.title}</p>
            <p className="mt-1 text-xs text-ink-soft leading-relaxed">
              {f.description}
            </p>
          </button>
        ))}
      </div>

      {/* Frequency toggle */}
      <p className="text-xs font-semibold uppercase tracking-wide text-navy mt-8 mb-3">
        Frequency
      </p>
      <div className="inline-flex rounded-full bg-cream p-1">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              frequency === f
                ? "bg-navy text-white"
                : "text-navy hover:bg-cream-deep"
            }`}
          >
            {f === "once" ? "Give Once" : "Give Monthly"}
          </button>
        ))}
      </div>

      {/* Amount selector */}
      <p className="text-xs font-semibold uppercase tracking-wide text-navy mt-8 mb-3">
        Amount
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {donationTiers.map((t) => (
          <button
            key={t.amount}
            onClick={() => {
              setAmount(t.amount);
              setCustom("");
            }}
            className={`rounded-xl border p-4 text-center transition-colors ${
              amount === t.amount && !custom
                ? "border-gold bg-cream"
                : "border-cream-deep hover:border-gold/50"
            }`}
          >
            <p className="font-display text-2xl font-bold text-navy">
              ${t.amount}
            </p>
            <p className="mt-1 text-[11px] text-ink-soft leading-snug">
              {t.label}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-3">
        <label className="text-xs text-ink-soft">
          Or enter a custom amount:
        </label>
        <div className="mt-1.5 flex items-center rounded-xl border border-cream-deep px-4 py-3 focus-within:border-gold">
          <span className="text-ink-soft mr-2">$</span>
          <input
            type="number"
            min={1}
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* Summary + CTA */}
      <div className="mt-8 rounded-xl bg-navy text-white p-5 flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs text-white/70">You're giving</p>
          <p className="font-display text-2xl font-bold">
            ${selected || 0}{" "}
            <span className="text-sm font-sans font-normal text-white/70">
              {frequency === "monthly" ? "/ month" : "one-time"}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => openQr("zelle")}
            className="rounded-full bg-white/10 border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            Pay through Zelle
          </button>
          <button
            type="button"
            onClick={() => openQr("paypal")}
            className="rounded-full bg-white/10 border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            Pay through PayPal
          </button>
          <a
            href={DONATION_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-light transition-colors"
          >
            Continue to Secure Checkout →
          </a>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-ink-soft/70">
        <span className="flex items-center gap-1.5">🔒 Secure payment processing</span>
        <span className="flex items-center gap-1.5">🧾 Tax-deductible receipt emailed instantly</span>
        <span className="flex items-center gap-1.5">✔ 501(c)(3) nonprofit</span>
      </div>

      {/* QR Code payment modal */}
      {qrOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/70 backdrop-blur-sm p-4"
          onClick={() => setQrOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-white p-6 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setQrOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-cream text-navy hover:bg-cream-deep transition-colors"
            >
              ×
            </button>

            <p className="text-xs font-semibold uppercase tracking-wide text-navy mb-3 pr-8">
              Scan to Pay via {activeQr.label}
            </p>

            <div className="inline-flex rounded-full bg-cream p-1">
              {(Object.keys(qrOptions) as (keyof typeof qrOptions)[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setQrMethod(key)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    qrMethod === key
                      ? "bg-navy text-white"
                      : "text-navy hover:bg-cream-deep"
                  }`}
                >
                  Pay via {qrOptions[key].label}
                </button>
              ))}
            </div>

            <div className="mt-5 relative aspect-square w-full overflow-hidden rounded-2xl border border-cream-deep bg-white">
              <Image
                src={activeQr.image}
                alt={`QR code to donate via ${activeQr.label}`}
                fill
                sizes="(min-width: 640px) 384px, 90vw"
                className="object-contain p-2"
              />
            </div>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed text-center">
              {activeQr.instructions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Simcol Petroleum",
  description:
    "Export-focused refined products for structured commercial discussions: Jet A-1 and AGO (WAF spec GO).",
};

const products = [
  {
    name: "Jet A-1",
    subtitle: "Aviation Turbine Fuel",
    category: "Aviation",
    bullets: [
      "Export-focused engagement under refinery-aligned process discipline",
      "Subject to KYB/KYC completeness and counterparty readiness verification",
      "Delivery basis: FOB / CIF (transaction-dependent)",
      "Scheduling and loadability subject to seller/refinery process alignment",
    ],
    note:
      "Final specifications, loading terms, and scheduling are confirmed only after documentation review and process eligibility alignment with the seller/refinery.",
  },
  {
    name: "AGO (WAF spec GO)",
    subtitle: "Automotive Gas Oil – West Africa Specification",
    category: "Diesel",
    bullets: [
      "Gas oil aligned to West African specification standards",
      "Export-focused engagement under refinery-aligned process discipline",
      "Subject to KYB/KYC completeness and counterparty readiness verification",
      "Delivery basis: FOB / CIF (transaction-dependent)",
    ],
    note:
      "Availability and transaction requirements vary by seller/refinery alignment and buyer readiness. Commercial progression follows documentation-first gating.",
  },
];

const minimumInputs = [
  "Product name (Jet A-1 or AGO/WAF spec GO)",
  "Quantity and preferred lifting structure (spot / term, if applicable)",
  "Delivery basis (FOB/CIF) and destination/discharge terms",
  "Target loading window (dates)",
  "Buyer corporate details (KYB) and authorized signatory confirmation (KYC)",
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
            Simcol Petroleum Nigeria Limited
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            Products
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300 lg:text-lg">
            Simcol supports structured, refinery-aligned engagement for export-focused refined
            product transactions. The products below are presented for preliminary commercial
            discussions, subject to documentation completeness and counterparty readiness.
          </p>

          {/* Institutional discipline note */}
          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
            <p className="text-sm leading-relaxed text-neutral-300">
              This page intentionally excludes pricing and commercial terms. Where eligible to
              proceed, commercial progression follows seller/refinery process discipline and is
              typically contingent on documentation review and (where applicable) financial
              instrument readiness.
            </p>
          </div>
        </header>

        {/* Products Grid */}
        <section className="grid gap-6 md:grid-cols-2" aria-label="Available products">
          {products.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-7 transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
            >
              {/* Product Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
                    <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-300">
                      {p.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-400">{p.subtitle}</p>
                </div>

                <span
                  className="shrink-0 rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1.5 text-xs font-medium text-neutral-300"
                  aria-label="Export-focused product"
                >
                  Export
                </span>
              </div>

              {/* Product Details */}
              <ul className="mt-6 space-y-2.5 text-sm text-neutral-300" role="list">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="flex-1">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Product Note */}
              <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950/80 p-4">
                <p className="text-xs leading-relaxed text-neutral-400">{p.note}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Request Path + Inputs */}
        <section
          className="mt-12 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/40 to-neutral-900/20 p-8"
          aria-labelledby="request-heading"
        >
          <h3 id="request-heading" className="text-base font-semibold text-neutral-100">
            How to Request a Product Discussion
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
            Provide the minimum commercial inputs below to begin eligibility review. A KYB/KYC
            documentation pack and authorized signatory confirmation are typically required to
            proceed. Where required by the seller/refinery, financial instruments may include PB /
            deposit / LC / SBLC; such requirements remain the buyer’s responsibility as a condition
            precedent to commercial progression.
          </p>

          {/* Minimum Inputs */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
              <h4 className="text-sm font-medium text-neutral-100">Minimum Buyer Inputs</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                {minimumInputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
              <h4 className="text-sm font-medium text-neutral-100">Process Discipline</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                <li>Documentation-first readiness gate</li>
                <li>Seller/refinery eligibility alignment prior to commercial progression</li>
                <li>FOB/CIF basis confirmed per transaction pathway</li>
                <li>Scheduling and loadability subject to seller/refinery process</li>
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/transaction-framework"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-950 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:border-neutral-600 hover:bg-neutral-900"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Transaction Framework
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-white hover:border-neutral-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Submit Buyer Request
            </Link>

            {/* Optional: documentation shortcut */}
            <Link
              href="/documentation"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/40 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-900/60 hover:border-neutral-700"
            >
              Documentation Requirements →
            </Link>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <footer className="mt-12 rounded-xl border border-neutral-900 bg-neutral-950/50 p-5">
          <p className="text-xs leading-relaxed text-neutral-500">
            <strong className="font-medium text-neutral-400">Disclaimer:</strong> This page is
            informational only and does not constitute an offer, allocation commitment, or binding
            agreement. Availability, specifications, delivery basis (FOB/CIF), scheduling, and any
            seller/refinery prerequisites (including, where applicable, PB/deposit/prepayment or
            other financial instruments) are subject to seller/refinery process requirements and
            counterparty readiness verification.
          </p>
        </footer>
      </div>
    </main>
  );
}

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
    subtitle: "Aviation Turbine Fuel (export-focused discussions)",
    bullets: [
      "Product type: Jet fuel for aviation/commercial use",
      "Engagement basis: export-focused commercial discussions only",
      "Process: subject to counterparty documentation + readiness checks",
      "Delivery basis: FOB / CIF (as applicable to transaction)",
    ],
    note:
      "Final specifications, loading terms, and scheduling are confirmed during refinery/seller process alignment.",
  },
  {
    name: "AGO (WAF spec GO)",
    subtitle: "Automotive Gas Oil / West Africa spec Gas Oil",
    bullets: [
      "Product type: Gas oil aligned to WAF spec",
      "Engagement basis: export-focused commercial discussions only",
      "Process: subject to counterparty documentation + readiness checks",
      "Delivery basis: FOB / CIF (as applicable to transaction)",
    ],
    note:
      "Availability and exact transaction requirements vary by seller/refinery and buyer readiness.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Simcol Petroleum Nigeria Limited
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Products</h1>
          <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">
            Simcol supports structured, refinery-aligned engagement for export-focused refined
            product transactions. The products below are available for preliminary commercial
            discussions, subject to documentation completeness and counterparty readiness.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{p.name}</h2>
                  <p className="mt-1 text-sm text-neutral-400">{p.subtitle}</p>
                </div>
                <span className="rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1 text-xs text-neutral-300">
                  Export-focused
                </span>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-xs text-neutral-400">{p.note}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
          <h3 className="text-sm font-medium">How to request a product discussion</h3>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Provide the minimum commercial inputs to begin: product, quantity, delivery basis
            (FOB/CIF), loading window, and destination/discharge terms. A KYB/KYC pack and authorized
            signatory confirmation are typically required to proceed.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/transaction-framework"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-900"
            >
              View Transaction Framework
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white"
            >
              Submit Buyer Request
            </Link>
          </div>
        </section>

        <footer className="mt-10 text-xs text-neutral-500">
          This page is informational only and does not constitute an offer, allocation commitment,
          or binding agreement. Final terms are subject to seller/refinery process requirements and
          counterparty readiness.
        </footer>
      </div>
    </main>
  );
}

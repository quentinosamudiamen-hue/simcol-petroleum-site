import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | Simcol Petroleum",
  description:
    "Buyer submission requirements, readiness items, and process notes for export-focused refined product transactions.",
};

const checklist = [
  {
    title: "Corporate / KYB",
    items: [
      "Company profile (brief corporate overview)",
      "Certificate of Incorporation / Trade License",
      "Memorandum & Articles (or equivalent constitutional docs)",
      "Shareholder structure (beneficial ownership disclosure where applicable)",
      "Board resolution / authorization for the transaction (where applicable)",
      "Registered address + operating address",
      "Website (if available) and corporate email domain",
    ],
  },
  {
    title: "KYC / Signatory",
    items: [
      "Authorized signatory passport copy",
      "Proof of address (utility bill / bank statement)",
      "Signatory authority confirmation (letter / mandate confirmation)",
      "Contact details for transaction lead + compliance contact",
    ],
  },
  {
    title: "Commercial Request Inputs",
    items: [
      "Product: Jet A-1 or AGO (WAF spec GO)",
      "Quantity (and lifting program if multiple cargoes)",
      "Delivery basis: FOB / CIF (as applicable)",
      "Loading window (preferred dates)",
      "Destination / discharge port and country",
      "End-buyer / end-user details (if applicable)",
    ],
  },
  {
    title: "Banking & Instrument Readiness",
    items: [
      "Bank name + issuing branch (and relationship confirmation if requested)",
      "Buyer confirms ability to issue required financial instruments when applicable",
      "Instruments may include: PB (performance bond) / LC / SBLC (subject to seller/refinery process)",
      "Buyer confirms timeline to issue instruments once commercial terms are agreed",
    ],
  },
];

const processNotes = [
  {
    title: "Export-focused mandate",
    body:
      "Simcol supports export-focused refined product transactions and maintains a structured, documentation-first engagement process aligned to refinery and institutional trading standards.",
  },
  {
    title: "Readiness gates",
    body:
      "Commercial discussions typically proceed only when the counterparty’s documentation pack and basic banking readiness are confirmed. This reduces delays and aligns with refinery/seller process discipline.",
  },
  {
    title: "Financial instruments (where applicable)",
    body:
      "Refinery/seller requirements may include a performance bond (PB) prepayment/deposit or other financial instruments prior to issuance of commercial terms or formal documents. Requirements vary by transaction, product, and counterparty profile.",
  },
  {
    title: "No offer / no allocation commitment",
    body:
      "All materials and discussions are for preliminary process alignment and execution planning only and do not constitute an offer, allocation commitment, or binding agreement.",
  },
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Simcol Petroleum Nigeria Limited
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Documentation
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300">
            Buyer submission requirements and process notes for export-focused
            refined product transactions. This page is designed to streamline
            readiness and align counterparties to refinery-level execution
            discipline.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 text-xs text-neutral-300">
              KYB / KYC readiness
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 text-xs text-neutral-300">
              Export-only mandate
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 text-xs text-neutral-300">
              Refinery-aligned process
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 text-xs text-neutral-300">
              PB / LC / SBLC (where applicable)
            </span>
          </div>
        </header>

        <section className="grid gap-4">
          {checklist.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-medium">{block.title}</h2>
                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                  Required
                </span>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
          <h2 className="text-base font-medium">Process Notes</h2>

          <div className="mt-4 grid gap-4">
            {processNotes.map((n) => (
              <div
                key={n.title}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-5"
              >
                <h3 className="text-sm font-medium text-neutral-100">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
          <div>
            <h3 className="text-sm font-medium">Ready to submit?</h3>
            <p className="mt-1 text-sm text-neutral-300">
              If your documentation and basic commercial inputs are prepared,
              proceed to the Dubai execution desk submission page.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/transaction-framework"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
            >
              Review Framework
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-white"
            >
              Proceed to Contact
            </Link>
          </div>
        </div>

        <footer className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
          <h3 className="text-sm font-medium">Important Notes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>
              This documentation guidance is for preliminary discussions and
              process alignment only and does not constitute an offer.
            </li>
            <li>
              Requirements may vary by refinery/seller, jurisdiction, product,
              and counterparty profile.
            </li>
            <li>
              Simcol operates as a physical trading counterparty supporting
              structured, export-focused execution discipline.
            </li>
          </ul>
        </footer>
      </div>
    </main>
  );
}

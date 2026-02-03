import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transaction Framework | Simcol Petroleum",
  description:
    "Buyer engagement and execution flow for export-focused refined product transactions.",
};

const steps = [
  {
    title: "Step 1 — Buyer Onboarding",
    body:
      "Initial buyer introduction + corporate profile exchange. Buyer confirms mandate, end-user (if applicable), and target lift requirements.",
  },
  {
    title: "Step 2 — KYC / KYB Documentation",
    body:
      "Buyer submits KYC/KYB pack and confirms signatory authority. Documentation reviewed for compliance alignment.",
  },
  {
    title: "Step 3 — Commercial Request Submission",
    body:
      "Buyer submits product request (Jet A-1 or AGO/WAF spec GO), quantity, delivery basis (FOB/CIF), loading window, and destination.",
  },
  {
    title: "Step 4 — Refinery Engagement",
    body:
      "Simcol engages refinery counterparty for allocation confirmation and required process steps (including performance bond / deposit requirements where applicable).",
  },
  {
    title: "Step 5 — Indicative Terms / Process Alignment",
    body:
      "If eligible to proceed, indicative commercial structure and process checkpoints are confirmed (documentation completeness, financial instrument pathway, timeline).",
  },
  {
    title: "Step 6 — Financial Instrument Readiness",
    body:
      "Buyer confirms banking readiness and required financial instruments (e.g., PB / LC / SBLC where applicable) aligned to seller/refinery process.",
  },
  {
    title: "Step 7 — Contracting (SPA)",
    body:
      "Parties proceed to Sale & Purchase Agreement (SPA) issuance/review. Execution timeline and obligations are confirmed in writing.",
  },
  {
    title: "Step 8 — Shipping & Logistics",
    body:
      "Vessel nomination (if applicable), inspection protocol, shipping schedule, and discharge planning coordinated subject to transaction basis (FOB/CIF).",
  },
  {
    title: "Step 9 — Loading, Documentation & Handover",
    body:
      "Loading and documentation handover completed per SPA terms. Post-loading document package shared for banking and cargo release processes.",
  },
];

export default function TransactionFrameworkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Simcol Petroleum Nigeria Limited
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Transaction Framework
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300">
            A structured, refinery-aligned engagement and execution flow for
            export-focused refined product transactions.
          </p>
        </header>

        <section className="grid gap-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-medium">{step.title}</h2>
                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {step.body}
              </p>
            </div>
          ))}
        </section>

        <footer className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
          <h3 className="text-sm font-medium">Important Notes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>
              This framework is provided for informational and execution planning
              purposes only and does not constitute an offer.
            </li>
            <li>
              Specific transaction steps may vary depending on refinery/seller
              requirements, jurisdiction, and counterparty readiness.
            </li>
            <li>
              Simcol operates as a physical trading counterparty supporting
              refinery-level engagement and export-focused execution discipline.
            </li>
          </ul>
        </footer>

        {/* CTA (must stay INSIDE the main container) */}
        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-medium">Ready to submit a buyer request?</h3>
            <p className="mt-1 text-sm text-neutral-300">
              Proceed to the Dubai execution desk checklist and contact details.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
          >
            Proceed to Buyer Submission → Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

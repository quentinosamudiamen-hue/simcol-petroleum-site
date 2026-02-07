import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* METADATA                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Transaction Framework | Simcol Petroleum",
  description:
    "Refinery-aligned buyer engagement and execution flow for export-focused refined product transactions via Simcol Petroleum Nigeria Limited (Dubai Execution Desk).",
  alternates: { canonical: "/transaction-framework" },
  openGraph: {
    title: "Transaction Framework | Simcol Petroleum",
    description:
      "Refinery-aligned buyer engagement and execution flow for export-focused refined product transactions.",
    url: "/transaction-framework",
    type: "website",
    siteName: "Simcol Petroleum",
  },
};

/* ------------------------------------------------------------------ */
/* DATA                                                               */
/* ------------------------------------------------------------------ */

const buyerInputs = [
  {
    title: "Corporate & Authority",
    items: [
      "Legal company name, registration details, and operating address",
      "Authorized signatory details + proof of authority",
      "Beneficial ownership / directors (as required for KYB)",
    ],
  },
  {
    title: "Commercial Request",
    items: [
      "Product: Jet A-1 or AGO (WAF spec GO)",
      "Quantity + preferred lifting structure (spot / term, if applicable)",
      "Delivery basis: FOB or CIF + destination / discharge location",
      "Loading window / timing requirements",
    ],
  },
  {
    title: "Compliance & Counterparty",
    items: [
      "End-buyer details (if applicable) + mandate confirmation",
      "Sanctions/compliance alignment (jurisdiction + screening readiness)",
      "Trade references (optional but helpful for first transaction)",
    ],
  },
  {
    title: "Financial Readiness",
    items: [
      "Banking pathway confirmation: LC / SBLC / PB (as required)",
      "Proof of funds / bank comfort where applicable",
      "Acknowledgement: any required PB/deposit is buyer responsibility",
    ],
  },
] as const;

const steps = [
  {
    title: "Step 1 — Buyer Onboarding",
    body:
      "Initial buyer introduction and corporate profile exchange. Buyer confirms mandate, end-user (if applicable), and target lifting requirements.",
  },
  {
    title: "Step 2 — KYC / KYB Documentation",
    body:
      "Buyer submits KYB/KYC pack and confirms signatory authority. Documentation is reviewed for compliance alignment prior to commercial progression.",
  },
  {
    title: "Step 3 — Commercial Request Submission",
    body:
      "Buyer submits a formal product request (Jet A-1 or AGO/WAF spec GO), quantity, delivery basis (FOB/CIF), loading window, and destination/discharge details.",
  },
  {
    title: "Step 4 — Refinery Engagement",
    body:
      "Simcol engages the refinery/seller counterparty to confirm process eligibility, allocation pathway (where applicable), and required preconditions. Buyer acknowledges that any required performance bond/prepayment/deposit is a condition precedent and remains the buyer’s responsibility.",
  },
  {
    title: "Step 5 — Indicative Process Alignment",
    body:
      "If eligible to proceed, parties align on process checkpoints: documentation completeness, compliance readiness, financial instrument pathway, and indicative timeline. (Commercial terms are not discussed until prerequisites are satisfied, where required by the seller/refinery.)",
  },
  {
    title: "Step 6 — Financial Instrument Readiness",
    body:
      "Buyer confirms banking readiness and prepares required instruments (e.g., PB / LC / SBLC where applicable) in alignment with seller/refinery requirements and transaction basis (FOB/CIF).",
  },
  {
    title: "Step 7 — Contracting (SPA)",
    body:
      "Parties proceed to SPA issuance and review. Execution timeline, obligations, and documentary requirements are confirmed in writing in accordance with seller/refinery process.",
  },
  {
    title: "Step 8 — Shipping & Logistics",
    body:
      "Vessel nomination (if applicable), inspection protocol, shipping schedule, and discharge planning are coordinated subject to transaction basis (FOB/CIF) and SPA terms.",
  },
  {
    title: "Step 9 — Loading, Documentation & Handover",
    body:
      "Loading and documentation handover are completed per SPA. Post-loading document package is shared for banking processing and cargo release workflows.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function TransactionFrameworkPage() {
  return (
    <main className="relative z-10 bg-transparent max-w-4xl mx-auto px-6 py-16 space-y-14">
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

          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
            <p className="text-sm text-neutral-300">
              This framework is intended to mirror institutional refinery and
              banking discipline. Progression is conditional on documentation,
              compliance alignment, and (where required) financial instrument
              readiness.
            </p>
          </div>
        </header>

        {/* Required Buyer Inputs */}
        <section className="mb-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-base font-medium">Required Buyer Inputs</h2>
              <p className="mt-1 text-sm text-neutral-300">
                Submit the information below to accelerate eligibility review
                and reduce execution friction.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {buyerInputs.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
              >
                <h3 className="text-sm font-medium">{block.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* Patch: add a quiet “why it matters” note for institutional tone */}
                <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                  Purpose: reduce compliance friction and enable faster refinery/seller
                  eligibility confirmation.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
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

        {/* Notes */}
        <footer className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
          <h3 className="text-sm font-medium">Important Notes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
            <li>
              This document is issued for preliminary commercial discussions and
              execution planning only and does not constitute an offer, an
              allocation commitment, or a binding agreement.
            </li>
            <li>
              Transaction progression may be contingent on seller/refinery
              prerequisites (including, where applicable, a performance bond,
              deposit, or prepayment) prior to discussion of commercial terms or
              issuance of any seller documents.
            </li>
            <li>
              Specific steps may vary based on refinery/seller requirements,
              jurisdiction, and counterparty readiness.
            </li>
            <li>
              Simcol operates as a physical trading counterparty supporting
              refinery-level engagement and export-focused execution discipline.
            </li>
          </ul>
        </footer>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-medium">
              Ready to submit a buyer request?
            </h3>
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
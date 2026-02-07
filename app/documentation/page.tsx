import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* METADATA                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Documentation | Simcol Petroleum",
  description:
    "Buyer submission requirements, readiness items, and process notes for export-focused refined product transactions via Simcol Petroleum Nigeria Limited (Dubai Execution Desk).",
  alternates: { canonical: "/documentation" },
  openGraph: {
    title: "Documentation | Simcol Petroleum",
    description:
      "Buyer submission requirements, readiness items, and process notes for export-focused refined product transactions.",
    url: "/documentation",
    type: "website",
    siteName: "Simcol Petroleum",
  },
};

/* ------------------------------------------------------------------ */
/* DATA                                                               */
/* ------------------------------------------------------------------ */

const checklist = [
  {
    title: "Corporate / KYB",
    items: [
      "Company profile (brief corporate overview)",
      "Certificate of Incorporation / Trade License",
      "Memorandum & Articles (or equivalent constitutional documents)",
      "Shareholder structure (beneficial ownership disclosure where applicable)",
      "Board resolution / authorization for the transaction (where applicable)",
      "Registered address + operating address",
      "Website (if available) and corporate email domain",
      "Sanctions / compliance confirmation (jurisdiction alignment; screening readiness)",
    ],
  },
  {
    title: "KYC / Signatory",
    items: [
      "Authorized signatory passport copy",
      "Proof of address (utility bill / bank statement)",
      "Signatory authority confirmation (letter / mandate confirmation)",
      "Primary transaction and compliance contact details",
    ],
  },
  {
    title: "Commercial Request Inputs",
    items: [
      "Product: Jet A-1 or AGO (WAF spec GO)",
      "Quantity (and lifting program if multiple cargoes)",
      "Delivery basis: FOB / CIF (as applicable)",
      "Target loading window (preferred dates)",
      "Destination / discharge port and country",
      "End-buyer / end-user details (if applicable)",
    ],
  },
  {
    title: "Banking & Instrument Readiness",
    items: [
      "Issuing bank name + branch (relationship confirmation if requested)",
      "Confirmation of bank support for LC / SBLC issuance (if required)",
      "Instruments may include: PB (performance bond) / deposit / LC / SBLC (subject to seller/refinery process)",
      "Buyer confirms timeline to issue instrument once commercial terms are agreed",
      "Company letterhead confirmation of instrument readiness (where applicable)",
    ],
  },
] as const;

const processNotes = [
  {
    title: "Export-Focused Mandate",
    body:
      "Simcol supports export-focused refined product transactions and maintains a structured, documentation-first engagement process aligned to refinery and institutional trading standards.",
  },
  {
    title: "Readiness Gates",
    body:
      "Commercial discussions typically proceed only once the counterparty’s documentation pack and baseline banking readiness are confirmed. This reduces execution delays and aligns with refinery/seller process discipline.",
  },
  {
    title: "Secure Handling",
    body:
      "Sensitive documents are submitted only after desk approval via a secure, time-limited submission pathway. Do not upload confidential materials via public forms or third-party links unless instructed by the desk.",
  },
  {
    title: "Process Variability",
    body:
      "Specific requirements may vary by refinery, jurisdiction, delivery basis, and transaction size. Final steps are confirmed during refinery engagement and SPA alignment.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Simcol Petroleum Nigeria Limited
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Buyer Documentation &amp; Readiness
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300">
            The following outlines the standard documentation, commercial inputs, and
            readiness items required to support export-focused refined product transactions.
          </p>

          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-5">
            <p className="text-xs leading-relaxed text-neutral-400">
              Note: This checklist is for readiness planning and process alignment only. Requirements
              may be adjusted by the seller/refinery and the applicable transaction structure.
            </p>
          </div>
        </header>

        {/* Checklist */}
        <section className="grid gap-6">
          {checklist.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <h2 className="text-base font-medium">{section.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Process Notes */}
        <section className="mt-12 grid gap-4">
          {processNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6"
            >
              <h3 className="text-sm font-medium">{note.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{note.body}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-medium">Ready to submit a buyer request?</h3>
            <p className="mt-1 text-sm text-neutral-300">
              Review the transaction framework or contact the Dubai execution desk.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/transaction-framework"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
            >
              View Framework
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white"
            >
              Contact Execution Desk
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
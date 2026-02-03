"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const products = [
  { value: "Jet A-1", label: "Jet A-1" },
  { value: "AGO (WAF spec GO)", label: "AGO (WAF spec GO)" },
];

const bases = [
  { value: "FOB", label: "FOB" },
  { value: "CIF", label: "CIF" },
];

const whatHappensNext = [
  {
    title: "1) Request access",
    body:
      "Submit a short, non-sensitive intake request (company + commercial inputs). No documents are uploaded at this stage.",
  },
  {
    title: "2) Desk review",
    body:
      "Simcol reviews your request for readiness and alignment to seller/refinery process requirements.",
  },
  {
    title: "3) Secure link issued",
    body:
      "If approved, Simcol sends a one-time secure upload link (single-use, time-limited) for KYB/KYC and commercial documents.",
  },
];

const readinessNotes = [
  "No public uploads on the website.",
  "Sensitive documents are requested only after desk approval.",
  "Secure upload link will be time-limited and single-use.",
  "Requirements may include PB / LC / SBLC where applicable (subject to seller/refinery process).",
];

function safe(v: string) {
  return (v ?? "").trim();
}

export default function ContactClient() {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(products[0].value);
  const [quantity, setQuantity] = useState("");
  const [basis, setBasis] = useState(bases[0].value);
  const [loadingWindow, setLoadingWindow] = useState("");
  const [destination, setDestination] = useState("");
  const [notes, setNotes] = useState("");

  const emailSubject = useMemo(() => {
    const p = safe(product) || "[Product]";
    const q = safe(quantity) || "[Quantity]";
    const b = safe(basis) || "[FOB/CIF]";
    const d = safe(destination) || "[Destination]";
    return `Simcol — Request Secure Submission Access — ${p} — ${q} — ${b} — ${d}`;
  }, [product, quantity, basis, destination]);

  const emailBody = useMemo(() => {
    return [
      "Dear Simcol Execution Desk,",
      "",
      "We are requesting secure submission access for an export-focused refined product transaction.",
      "",
      "Buyer / Company:",
      `- Company: ${safe(company) || "[Company name]"}`,
      `- Contact person: ${safe(contactName) || "[Name]"}`,
      `- Email: ${safe(email) || "[Corporate email]"}`,
      "",
      "Commercial inputs (preliminary):",
      `- Product: ${safe(product) || "[Jet A-1 / AGO (WAF spec GO)]"}`,
      `- Quantity: ${safe(quantity) || "[__]"}`,
      `- Delivery basis: ${safe(basis) || "[FOB/CIF]"}`,
      `- Loading window: ${safe(loadingWindow) || "[__]"}`,
      `- Destination / discharge: ${safe(destination) || "[__]"}`,
      "",
      "Notes (optional):",
      safe(notes) || "[__]",
      "",
      "We understand that sensitive documents are submitted only after desk approval via a one-time secure upload link.",
      "",
      "Sincerely,",
      safe(contactName) || "[Full name]",
      "[Title]",
      safe(company) || "[Company]",
      "[Phone / WhatsApp]",
      safe(email) || "[Email]",
    ].join("\n");
  }, [
    company,
    contactName,
    email,
    product,
    quantity,
    basis,
    loadingWindow,
    destination,
    notes,
  ]);

  const mailtoHref = useMemo(() => {
    // TODO: Replace with your ops inbox
    const to = encodeURIComponent("[insert-business-email]");
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(emailBody);
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [emailSubject, emailBody]);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Simcol Petroleum Nigeria Limited
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Request Secure Submission Access
          </h1>
          <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">
            Simcol operates as a physical trading counterparty supporting structured, refinery-aligned
            engagement for export-focused refined product transactions. To protect sensitive information,
            document submission is enabled only after desk review and approval.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              Manual approval first
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              One-time secure upload link
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              Export-only mandate
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              Dubai execution desk
            </span>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {whatHappensNext.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <h2 className="text-sm font-medium">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{s.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-base font-medium">Digital Intake Request</h2>
              <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                No uploads here
              </span>
            </div>

            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              Provide the minimum inputs below. If approved, the desk will issue a one-time secure
              upload link for KYB/KYC and commercial documents.
            </p>

            <div className="mt-5 grid gap-4">
              <div className="grid gap-2">
                <label className="text-xs text-neutral-400">Company name</label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g., ABC Trading FZ-LLC"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                />
              </div>

              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-xs text-neutral-400">Contact person</label>
                  <input
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Full name"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs text-neutral-400">Corporate email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                  />
                </div>
              </div>

              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-xs text-neutral-400">Product</label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                  >
                    {products.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <label className="text-xs text-neutral-400">Delivery basis</label>
                  <select
                    value={basis}
                    onChange={(e) => setBasis(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                  >
                    {bases.map((b) => (
                      <option key={b.value} value={b.value}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-xs text-neutral-400">Indicative quantity</label>
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g., 20,000 MT"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs text-neutral-400">Loading window</label>
                  <input
                    value={loadingWindow}
                    onChange={(e) => setLoadingWindow(e.target.value)}
                    placeholder="e.g., March 10–20, 2026"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-xs text-neutral-400">Destination / discharge</label>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Port + country"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs text-neutral-400">Notes (optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional context (end-user, preferred incoterms, urgency, etc.)"
                  rows={4}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                />
              </div>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-neutral-800 bg-neutral-900/25 p-4">
                <div>
                  <h3 className="text-sm font-medium">Submit request</h3>
                  <p className="mt-1 text-xs text-neutral-400">
                    Generates a structured email request. Desk will respond with next steps.
                  </p>
                </div>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white"
                >
                  Generate Email Request →
                </a>
              </div>

              <div className="text-xs text-neutral-500">
                Replace the inbox placeholder with your ops inbox:
                <span className="text-neutral-300"> [insert-business-email]</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h2 className="text-base font-medium">Security & Handling</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Simcol does not accept sensitive document uploads via public forms. After desk approval,
              a secure, one-time upload link is issued to the verified email address provided.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
              {readinessNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <h3 className="text-sm font-medium">Need to review process?</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Review the framework and documentation pages before requesting access.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/transaction-framework"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-900"
                >
                  Transaction Framework
                </Link>
                <Link
                  href="/documentation"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-900"
                >
                  Documentation
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-900"
                >
                  Products
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
              <h3 className="text-sm font-medium">Desk note</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Requests are reviewed for completeness and alignment. If approved, the secure upload link
                is issued with instructions on exactly what to submit (KYB/KYC + commercial docs).
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-xs text-neutral-500">
          This page is provided for preliminary engagement and process alignment only and does not constitute
          an offer, allocation commitment, or binding agreement.
        </footer>
      </div>
    </main>
  );
}

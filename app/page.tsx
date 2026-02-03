import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simcol Petroleum | Dubai Execution Desk",
  description:
    "Simcol Petroleum Nigeria Limited — export-focused refined products: Jet A-1 and AGO (WAF spec GO). Dubai-based commercial & execution desk.",
};

const cards = [
  {
    title: "Transaction Framework",
    desc: "Refinery-aligned buyer engagement and execution flow for export transactions.",
    href: "/transaction-framework",
    cta: "View framework",
  },
  {
    title: "Products",
    desc: "Export-focused refined products available for structured commercial discussions.",
    href: "/products",
    cta: "View products",
  },
  {
    title: "Documentation",
    desc: "Buyer submission requirements, process notes, and transaction readiness items.",
    href: "/documentation",
    cta: "View documentation",
  },
  {
    title: "Contact",
    desc: "Submit a buyer request to the Dubai execution desk with required details.",
    href: "/contact",
    cta: "Proceed to contact",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Simcol Petroleum Nigeria Limited
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Dubai Execution Desk for Export-Focused Refined Products
          </h1>

          <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">
            Simcol operates as a physical trading counterparty supporting structured,
            refinery-aligned engagement for export transactions. Our commercial process is
            designed to match institutional standards for documentation, readiness, and
            execution discipline.
          </p>

          {/* KEY TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              Export-only mandate
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              Jet A-1
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              AGO (WAF spec GO)
            </span>
            <span className="rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              Dubai commercial & execution desk
            </span>
          </div>

          {/* PRIMARY CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/transaction-framework"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white"
            >
              Start with Transaction Framework
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
            >
              Submit Buyer Request
            </Link>
          </div>
        </header>

        {/* GRID */}
        <section className="grid gap-4 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <h2 className="text-base font-medium">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {c.desc}
              </p>

              <div className="mt-5">
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 hover:bg-neutral-900"
                >
                  {c.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* READINESS BLOCK */}
        <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
          <h3 className="text-sm font-medium">Buyer Readiness (what to prepare)</h3>

          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-400">
                Submission checklist
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                <li>Company profile + KYB/KYC pack</li>
                <li>Authorized signatory confirmation</li>
                <li>Product + quantity + loading window</li>
                <li>Delivery basis (FOB/CIF) + destination</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-400">
                Important process note
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Certain sellers/refineries may require a performance bond/deposit or other
                financial instruments prior to issuing commercial terms or documentation.
                Requirements vary by transaction and counterparty readiness.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <footer className="mt-10 text-xs text-neutral-500">
          This website content is provided for preliminary commercial discussions and execution
          planning only and does not constitute an offer, allocation commitment, or binding agreement.
        </footer>
      </div>
    </main>
  );
}

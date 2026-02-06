import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simcol Petroleum | Dubai Execution Desk",
  description:
    "Simcol Petroleum Nigeria Limited — export-focused refined products: Jet A-1 and AGO (WAF spec GO). Dubai-based commercial & execution desk.",
};

/* ------------------------------------------------------------------ */
/* CONFIGURATION                                                      */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Transaction Framework", href: "/transaction-framework" },
  { label: "Products", href: "/products" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact", href: "/contact" },
] as const;

const FEATURE_CARDS = [
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
] as const;

const BADGES = [
  "Export-only mandate",
  "Jet A-1",
  "AGO (WAF spec GO)",
  "Dubai commercial & execution desk",
] as const;

const TRUST_ITEMS = [
  {
    label: "Commercial posture",
    value: "Physical trading counterparty (not broker / not facilitator)",
  },
  {
    label: "Process alignment",
    value: "Refinery-style documentation and readiness discipline",
  },
  {
    label: "Execution desk",
    value: "Dubai-based commercial coordination for export transactions",
  },
] as const;

const KPIS = [
  {
    label: "Process",
    value: "Refinery-aligned",
    note: "Buyer onboarding → KYB/KYC → request → engagement → execution",
  },
  {
    label: "Products",
    value: "Jet A-1 • AGO",
    note: "Export-focused refined products (WAF spec GO)",
  },
  {
    label: "Desk",
    value: "Dubai",
    note: "Commercial coordination and execution discipline",
  },
] as const;

const SUBMISSION_CHECKLIST = [
  "Company profile + KYB/KYC pack (as applicable)",
  "Authorized signatory confirmation",
  "Product, quantity, and loading window",
  "Delivery basis (FOB/CIF) + destination",
  "Buyer role clarity (mandate / end-user, where applicable)",
] as const;

const FOOTER_SCOPE_ITEMS = [
  "Export-only refined products",
  "Structured buyer submissions",
  "Refinery-aligned transaction discipline",
] as const;

/* ------------------------------------------------------------------ */
/* SHARED STYLES                                                      */
/* ------------------------------------------------------------------ */

const buttonStyles = {
  primary:
    "inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white transition-colors",
  secondary:
    "inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-900 transition-colors",
  tertiary:
    "inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-900 transition-colors",
} as const;

/* ------------------------------------------------------------------ */
/* COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-800/70 bg-neutral-950/50 px-3 py-1 text-xs text-neutral-200">
      {children}
    </span>
  );
}

function SmallKpi({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-4">
      <p className="text-xs uppercase tracking-wide text-neutral-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100">
        {value}
      </p>
      <p className="mt-1 text-sm text-neutral-300">{note}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Arrow() {
  return (
    <span aria-hidden className="text-neutral-400">
      →
    </span>
  );
}

function QuickStartSidebar() {
  return (
    <div className="w-full md:w-[360px]">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
          Quick start
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          If you are buyer-ready, proceed to contact and submit a structured request.
        </p>

        <nav className="mt-4 space-y-2">
          <Link
            href="/contact"
            className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm hover:bg-neutral-900 transition-colors"
          >
            <span>Submit Buyer Request</span>
            <Arrow />
          </Link>

          <Link
            href="/transaction-framework"
            className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-sm hover:bg-neutral-900 transition-colors"
          >
            <span>Review Framework</span>
            <Arrow />
          </Link>

          <Link
            href="/documentation"
            className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-sm hover:bg-neutral-900 transition-colors"
          >
            <span>Documentation Checklist</span>
            <Arrow />
          </Link>
        </nav>

        <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
          <p className="text-xs uppercase tracking-wide text-neutral-400">Note</p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
            Certain sellers/refineries may require a performance bond/deposit or other
            financial instruments prior to issuing commercial terms or documentation.
            Requirements vary by transaction.
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/60">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.10),rgba(0,0,0,0))]"
        aria-hidden
      />
      <div className="relative p-8 md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Export-focused refined products • Structured commercial execution
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Institutional Execution Desk for Export Transactions
            </h1>

            <p className="mt-5 text-base leading-relaxed text-neutral-300/90 md:text-lg">
              Simcol operates as a physical trading counterparty supporting structured,
              refinery-aligned engagement for export transactions. Our commercial process
              is designed to match institutional expectations for documentation, readiness,
              and execution discipline.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/transaction-framework" className={buttonStyles.primary}>
                Start with Transaction Framework
              </Link>

              <Link href="/products" className={buttonStyles.secondary}>
                View Products
              </Link>

              <Link href="/documentation" className={buttonStyles.tertiary}>
                Buyer Documentation
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-8 grid gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4 md:grid-cols-3">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-wide text-neutral-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-neutral-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <QuickStartSidebar />
        </div>

        {/* KPI row */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {KPIS.map((k) => (
            <SmallKpi key={k.label} label={k.label} value={k.value} note={k.note} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="mt-10">
      <SectionHeader
        eyebrow="Overview"
        title="A structured execution flow, built for institutional review"
        description="Each section is written for clarity and readiness: what buyers submit, what is reviewed, and how export transactions are progressed in a disciplined manner."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {FEATURE_CARDS.map((card) => (
          <div
            key={card.title}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 hover:bg-neutral-950/60 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {card.desc}
                </p>
              </div>
              <div
                className="h-10 w-10 rounded-xl border border-neutral-800 bg-neutral-950/60"
                aria-hidden
              />
            </div>

            <div className="mt-5">
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 hover:bg-neutral-900 transition-colors"
              >
                {card.cta} <Arrow />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BuyerReadinessSection() {
  return (
    <section className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Buyer readiness"
          title="What to prepare before requesting commercial terms"
          description="A clean submission accelerates internal review and helps align expectations across buyer readiness, documentation, and transaction sequencing."
        />

        <Link href="/contact" className={buttonStyles.primary}>
          Submit Buyer Request
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs uppercase tracking-wide text-neutral-400">
            Submission checklist
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
            {SUBMISSION_CHECKLIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-xs uppercase tracking-wide text-neutral-400">
            Process note
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-300">
            Commercial terms and documentation are typically progressed once counterparties
            confirm readiness and submission completeness. Certain sellers/refineries may
            require a performance bond/deposit or other financial instruments prior to
            issuing commercial terms or documentation.
          </p>

          <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-400">
              Recommended next step
            </p>
            <p className="mt-2 text-sm text-neutral-200">
              Review the framework first, then submit a structured request via Contact.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/transaction-framework"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm hover:bg-neutral-900 transition-colors"
              >
                Framework <Arrow />
              </Link>
              <Link
                href="/documentation"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm hover:bg-neutral-900 transition-colors"
              >
                Documentation <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 pb-12">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Notice
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              This website content is provided for preliminary commercial discussions and
              execution planning only and does not constitute an offer, allocation commitment,
              or binding agreement.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Scope
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              {FOOTER_SCOPE_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <nav>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Navigation
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-neutral-300 hover:text-neutral-100 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-neutral-800 pt-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Simcol Petroleum Nigeria Limited — Dubai Execution Desk</p>
          <p>For counterparties: submit a structured request via Contact.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <main className="min-h-screen text-neutral-100">
      <HeroSection />
      <FeatureGrid />
      <BuyerReadinessSection />
      <Footer />
    </main>
  );
}
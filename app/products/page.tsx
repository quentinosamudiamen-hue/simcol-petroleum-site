import Link from "next/link";

export const metadata = {
  title: "Products | Simcol Petroleum Nigeria Limited",
  description:
    "Jet A-1 and AGO export supply parameters: indicative specifications, lifting sizes, delivery basis, and execution process.",
};

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-black/35 p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">
        {label}
      </div>
      <div className="text-sm font-semibold text-white/90">{value}</div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  bullets,
  ctaHref,
  ctaText,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaHref: string;
  ctaText: string;
}) {
  return (
    <div className="rounded-2xl border border-emerald-400/15 bg-black/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
        Product
      </div>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      <p className="mt-2 text-sm text-white/70">{subtitle}</p>

      <ul className="mt-5 space-y-3 text-sm text-white/80">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 text-emerald-400">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-2 text-sm font-extrabold text-black hover:opacity-90 transition"
        >
          {ctaText}
        </Link>
        <Link
          href="/transaction-framework"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-sm font-bold text-white/90 hover:bg-black/40 transition"
        >
          View Transaction Framework
        </Link>
      </div>

      <p className="mt-5 text-xs text-white/55">
        Note: Specifications and availability are confirmed after buyer readiness
        screening and formal request submission.
      </p>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-6 py-14 space-y-10">
      {/* Header */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-black/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300/90">
          Export Supply Parameters
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Refined Products (Export-Only)
        </h1>
        <p className="max-w-3xl text-sm md:text-base text-white/70 leading-relaxed">
          We engage institutional counterparties for refinery-aligned exports.
          Below are the commercial parameters buyers need to evaluate fit before
          initiating the request and documentation process.
        </p>
      </section>

      {/* Quick spec blocks */}
      <section className="grid gap-4 md:grid-cols-4">
        <SpecRow label="Transaction Basis" value="Principal-to-Principal" />
        <SpecRow label="Engagement Type" value="Institutional / Verified Buyers" />
        <SpecRow label="Execution" value="Dubai Execution Desk" />
        <SpecRow label="Request Intake" value="Private Link / Direct" />
      </section>

      {/* Products */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Jet A-1 (Aviation Turbine Fuel)"
          subtitle="Export supply with refinery-aligned documentation and disciplined execution."
          bullets={[
            "Delivery basis: FOB export corridors (confirmed during execution)",
            "Lifting size: institutional cargo programs (min volume confirmed per request)",
            "Specs: typical Jet A-1 export grade (final CoQ governs)",
            "Documentation: SPA, CoQ/CoO, SGS/inspection as applicable",
          ]}
          ctaHref="/buyer-product-request"
          ctaText="Submit Jet A-1 Request"
        />

        <Card
          title="AGO (Gas Oil) — WAF Specification"
          subtitle="AGO supply aligned with West African market requirements and trade finance compliance."
          bullets={[
            "Delivery basis: FOB export corridors (confirmed during execution)",
            "Lifting size: institutional cargo programs (min volume confirmed per request)",
            "Specs: WAF spec GO (final CoQ governs)",
            "Documentation: SPA, CoQ/CoO, SGS/inspection as applicable",
          ]}
          ctaHref="/buyer-product-request"
          ctaText="Submit AGO Request"
        />
      </section>

      {/* What buyers must provide */}
      <section className="rounded-2xl border border-white/10 bg-black/35 p-6 md:p-8">
        <h3 className="text-lg font-extrabold text-white">
          What a buyer must provide (to confirm parameters)
        </h3>
        <p className="mt-2 text-sm text-white/70 max-w-3xl">
          We confirm availability, lifting size, and execution pathway after the
          counterparty submits a structured request and demonstrates readiness.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/30 p-5">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
              Minimum inputs
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                Product, volume, and delivery window
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                Destination / discharge range (region/country)
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                Corporate identity + signatory authority
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                Indicative trade finance pathway (if applicable)
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 p-5">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
              Outcome
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                Confirmed lifting size + scheduling logic
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                Execution checklist + document pack alignment
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                Clear next step: intake form → validation → execution desk
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/buyer-product-request"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-extrabold text-black hover:opacity-90 transition"
          >
            Open Buyer Request Form
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-5 py-2.5 text-sm font-bold text-white/90 hover:bg-black/40 transition"
          >
            Contact Execution Desk
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="text-xs text-white/55 leading-relaxed">
        This products page is informational and supports preliminary commercial
        discussions only. It does not constitute an offer, allocation commitment,
        or binding agreement. Final terms are governed by executed transaction
        documentation.
      </section>
    </main>
  );
}
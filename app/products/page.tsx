import Link from "next/link";

export const metadata = {
  title: "Jet A-1 Aviation Fuel & AGO Export Nigeria | Simcol Petroleum",
  description:
    "Export-grade Jet A-1 aviation fuel (ASTM D1655 / DEF STAN 91-091) and AGO Gas Oil (EN 590 / WAF Spec, 50ppm sulphur) from Nigeria. Institutional buyers only. Dubai execution desk. Refinery-aligned sourcing.",
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
  description,
  bullets,
  ctaHref,
  ctaText,
  specHref,
  specText,
}: {
  title: string;
  subtitle: string;
  description?: string;
  bullets: string[];
  ctaHref: string;
  ctaText: string;
  specHref?: string;
  specText?: string;
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

      {description && (
        <p className="mt-3 text-sm text-white/75 leading-relaxed">{description}</p>
      )}

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

        {specHref ? (
          <a
            href={specHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200 hover:bg-emerald-400/15 transition"
          >
            {specText ?? "Download Specifications (PDF)"}
          </a>
        ) : null}

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
          Jet A-1 Aviation Fuel &amp; AGO Gas Oil — Nigeria Export
        </h1>
        <p className="max-w-3xl text-sm md:text-base text-white/70 leading-relaxed">
          Simcol Petroleum Nigeria Limited exports two refined petroleum products
          sourced from Nigerian refineries: Jet A-1 aviation turbine fuel and AGO
          (Automotive Gas Oil) to West African specification. Both products are
          available exclusively to institutional buyers through our Dubai execution
          desk, on a principal-to-principal basis with full refinery-aligned
          documentation.
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
          description="Jet A-1 is an export-grade aviation kerosene meeting ASTM D1655 and DEF STAN 91-091 international specifications. Sourced from Nigerian refinery output, our Jet A-1 supply is intended for airline operators, aviation fueling companies, into-plane suppliers, and government aviation procurement entities across West Africa, Europe, the Middle East, and Asia."
          bullets={[
            "Delivery basis: FOB export corridors (confirmed during execution)",
            "Lifting size: institutional cargo programs (min volume confirmed per request)",
            "Specs: ASTM D1655 / DEF STAN 91-091 export grade (final CoQ governs)",
            "Documentation: SPA, CoQ/CoO, SGS/inspection as applicable",
          ]}
          ctaHref="/buyer-product-request"
          ctaText="Submit Jet A-1 Request"
          specHref="/specs/simcol-jet-a1-sample-coq.pdf"
          specText="Download Sample CoQ (Jet A-1)"
        />

        <Card
          title="AGO (Gas Oil) — WAF Specification"
          subtitle="AGO supply aligned with West African market requirements and trade finance compliance."
          description="AGO (Automotive Gas Oil) is exported to West African Specification (WAF Spec) and EN 590 standard, with a maximum sulphur content of 50ppm (Low Sulphur Gas Oil / LSGO). Available for institutional buyers including energy distributors, trading houses, and government procurement entities requiring bulk refined diesel for West African and international markets."
          bullets={[
            "Delivery basis: FOB export corridors (confirmed during execution)",
            "Lifting size: institutional cargo programs (min volume confirmed per request)",
            "Specs: EN 590 / WAF Spec GO, max 50ppm sulphur (final CoQ governs)",
            "Documentation: SPA, CoQ/CoO, SGS/inspection as applicable",
          ]}
          ctaHref="/buyer-product-request"
          ctaText="Submit AGO Request"
          specHref="/specs/simcol-lsgo-sample.pdf"
          specText="Download AGO Export Specifications (LSGO 50ppm)"
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

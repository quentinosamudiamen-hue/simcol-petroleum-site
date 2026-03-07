import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Nigerian Petroleum Export Works | Simcol Petroleum Guide",
  description:
    "A practical guide to how refined petroleum export from Nigeria works: licensing, refinery sourcing, documentation, trade finance, and institutional buyer engagement via Dubai execution desk.",
  alternates: { canonical: "https://www.simcolgroup.com/guide" },
  openGraph: {
    title: "How Nigerian Petroleum Export Works | Simcol Petroleum Guide",
    description:
      "Practical guide to Nigerian refined petroleum export: NMDPRA licensing, Dangote Refinery sourcing, Jet A-1 and AGO documentation, and institutional buyer engagement.",
    url: "https://www.simcolgroup.com/guide",
    type: "website",
    siteName: "Simcol Petroleum",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">{title}</h2>
      <div className="text-sm md:text-base text-white/75 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function GuidePage() {
  return (
    <main className="relative z-10 mx-auto max-w-4xl px-6 py-14 space-y-12">
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-black/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300/90">
          Institutional Buyer Resource
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          How Nigerian Petroleum Export Works
        </h1>
        <p className="max-w-3xl text-sm md:text-base text-white/70 leading-relaxed">
          This guide explains the structure, documentation, and engagement process for
          institutional buyers sourcing Jet A-1 aviation fuel and AGO (Automotive Gas Oil)
          from Nigeria through a licensed export operator. It is intended for procurement
          teams, trading desks, and aviation supply managers evaluating Nigerian supply.
        </p>
      </section>
      <Section title="1. Nigeria as a Refined Petroleum Export Origin">
        <p>
          Nigeria is Africa&apos;s largest oil producer and home to the Dangote Refinery — the
          world&apos;s largest single-train refinery — with a nameplate capacity of 650,000
          barrels per day. This infrastructure positions Nigeria as a credible origin for
          export-grade refined petroleum products including Jet A-1 aviation turbine fuel
          and AGO (Automotive Gas Oil / diesel) to international specification.
        </p>
        <p>
          Historically, Nigeria exported crude and imported refined products. The commissioning
          of the Dangote Refinery marks a structural shift: Nigeria is now a refined product
          export origin for West Africa, Europe, and international markets. Institutional
          buyers with West African supply requirements now have a viable in-region source
          for compliant, specification-grade product.
        </p>
      </Section>
      <Section title="2. Regulatory Framework: NMDPRA Licensing">
        <p>
          All petroleum export operations in Nigeria are governed by the Nigerian Midstream
          and Downstream Petroleum Regulatory Authority (NMDPRA). Export operators must hold
          valid NMDPRA licenses covering trading, export, and handling of refined petroleum
          products. Without this licensing, no compliant export transaction can be executed.
        </p>
        <p>
          Simcol Petroleum Nigeria Limited (RC 1969739) operates under NMDPRA licensing as
          an export-only refined petroleum operator. Our mandate is exclusively export —
          we do not distribute domestically within Nigeria. This focus ensures all operational
          infrastructure, documentation processes, and counterparty relationships are
          calibrated for international export execution.
        </p>
      </Section>
      <Section title="3. Product Specifications: Jet A-1 and AGO">
        <p>
          <strong className="text-white">Jet A-1 Aviation Turbine Fuel</strong> is supplied
          to ASTM D1655 and DEF STAN 91-091 international specifications. These are the
          primary global standards for aviation kerosene used by commercial airlines,
          charter operators, military aviation, and into-plane fueling companies. A
          Certificate of Quality (CoQ) from an independent inspection body (SGS or
          equivalent) accompanies each cargo.
        </p>
        <p>
          <strong className="text-white">AGO (Automotive Gas Oil)</strong> is supplied to
          EN 590 and West African Specification (WAF Spec), with a maximum sulphur content
          of 50ppm — classified as Low Sulphur Gas Oil (LSGO). This specification is
          compliant with West African import requirements and meets the sulphur thresholds
          increasingly enforced across Sub-Saharan African markets. Final specification
          is governed by the Certificate of Quality issued at loading.
        </p>
      </Section>
      <Section title="4. The Role of the Dubai Execution Desk">
        <p>
          Simcol Petroleum operates a Dubai-based execution desk that manages all
          international buyer engagement, documentation coordination, and transaction
          execution. Dubai serves as a global petroleum trading hub with established
          infrastructure for trade finance, inspection coordination, and institutional
          counterparty engagement across Asia, Europe, the Middle East, and Africa.
        </p>
        <p>
          All buyer communications, SPA negotiations, documentation review, and execution
          coordination are handled through the Dubai desk. Nigerian operations handle
          NMDPRA compliance, refinery counterparty relationships, product sourcing, and
          loading coordination. This dual-jurisdiction structure is intentional: it aligns
          international trade finance norms with Nigerian regulatory requirements.
        </p>
      </Section>
      <Section title="5. Transaction Documentation">
        <p>
          A compliant Nigerian petroleum export transaction involves the following core documents:
        </p>
        <ul className="space-y-2 mt-2">
          {[
            "Sales and Purchase Agreement (SPA) — principal-to-principal, governing product, price, delivery, and inspection terms",
            "Certificate of Quality (CoQ) — issued by independent inspector (SGS or equivalent) at load port",
            "Certificate of Origin (CoO) — confirming Nigerian origin for customs and regulatory compliance",
            "Bill of Lading (B/L) — issued by vessel operator upon loading",
            "Commercial Invoice and Packing List — for customs clearance at discharge port",
            "NMDPRA Export Permit — confirming regulatory authorization for the specific cargo",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-sm text-white/75">
              <span className="mt-1 text-emerald-400 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Trade finance instruments (Letters of Credit, Documentary Collections) are
          accommodated within the SPA framework. Buyers requiring LC-based payment
          structures should indicate this during the initial engagement phase.
        </p>
      </Section>
      <Section title="6. Buyer Engagement Process">
        <p>
          Simcol operates a structured buyer engagement process. We do not respond to
          open solicitations, broker chains, or unverified intermediary approaches.
          Institutional buyers — airlines, aviation fueling companies, energy trading
          houses, government procurement entities, and downstream distributors — engage
          directly through our buyer request intake process.
        </p>
        <p>
          The engagement sequence is: buyer request submission to readiness verification
          to execution desk review to SPA issuance to execution. Buyers are expected to
          provide product, volume, delivery window, destination, corporate identity, and
          indicative trade finance pathway at the point of initial engagement.
        </p>
      </Section>
      <section className="rounded-2xl border border-emerald-400/15 bg-black/40 p-6 md:p-8 space-y-4">
        <h3 className="text-lg font-extrabold text-white">Ready to engage?</h3>
        <p className="text-sm text-white/70 max-w-2xl">
          If you represent an institutional buyer with a verified requirement for Jet A-1
          or AGO from Nigeria, submit a structured request through our buyer intake form.
          Our Dubai execution desk will review and respond.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/buyer-product-request"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-extrabold text-black hover:opacity-90 transition"
          >
            Submit Buyer Request
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-5 py-2.5 text-sm font-bold text-white/90 hover:bg-black/40 transition"
          >
            View Products
          </Link>
          <Link
            href="/transaction-framework"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-5 py-2.5 text-sm font-bold text-white/90 hover:bg-black/40 transition"
          >
            Transaction Framework
          </Link>
        </div>
      </section>
      <section className="text-xs text-white/55 leading-relaxed">
        This guide is provided for informational purposes to support preliminary commercial
        discussions. It does not constitute an offer, allocation commitment, or binding
        agreement. All transactions are governed by executed documentation.
      </section>
    </main>
  );
}

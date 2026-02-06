import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Simcol Petroleum",
  description:
    "Simcol Petroleum Nigeria Limited is a physical petroleum trading and export company with refinery-aligned execution, focused on refined product exports from Nigeria to international markets.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-14">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          About Simcol Petroleum
        </h1>
        <p className="text-lg text-muted-foreground">
          A refinery-aligned physical trading and export platform for refined
          petroleum products.
        </p>
      </header>

      {/* Company Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Company Overview</h2>
        <p>
          Simcol Petroleum Nigeria Limited, registered in 2022, is the Nigerian
          entity within the Simcol Petroleum family of companies, building on
          over 18 years of petroleum industry experience originating with Simcol
          Petroleum Limited Company (U.S., est. 2007). The Company operates as a
          physical exporter of refined petroleum products, with commercial
          activities structured to align with international refinery, banking,
          and compliance standards, supporting export transactions to qualified
          counterparties in global markets.
        </p>
        <p>
          Simcol operates with a clear institutional mandate: to engage directly
          at the refinery and allocation level, execute disciplined export
          transactions, and maintain a transparent, compliant operating
          framework throughout the transaction lifecycle.
        </p>
      </section>

      {/* Role & Mandate */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Role & Mandate</h2>
        <p>
          Simcol Petroleum acts exclusively as a physical trader and exporter.
          The Company does not operate as a broker, intermediary, or marketing
          facilitator.
        </p>
        <p>
          All transactions are conducted on a principal-to-principal basis with
          qualified buyers, in accordance with refinery procedures and
          established international trade practices.
        </p>
      </section>

      {/* Products & Export Scope */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Products & Export Scope</h2>
        <p>
          Simcol's current export focus is limited to refined petroleum products
          originating from Nigeria and allocated for international markets.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>AGO (WAF specification Gas Oil)</li>
          <li>Jet A-1 Aviation Turbine Fuel</li>
        </ul>
        <p>
          Product availability, specifications, and lifting schedules are
          subject to refinery confirmation and allocation procedures.
        </p>
      </section>

      {/* Execution & Refinery Alignment */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">
          Execution Discipline & Refinery Alignment
        </h2>
        <p>
          Simcol has successfully completed counterparty onboarding with
          established refinery operators, following comprehensive compliance
          reviews and documentation audits. This strategic positioning provides
          the operational foundation for large-scale structured petroleum supply
          and export activities.
        </p>
        <p>
          Simcol's execution model mirrors refinery discipline. Buyer engagement,
          documentation review, commercial alignment, and post-allocation
          execution are conducted in a structured sequence designed to reduce
          execution risk and ensure procedural clarity.
        </p>
        <p>
          Commercial discussions are initiated only after buyer readiness is
          established, including corporate due diligence and confirmation of
          transactional capacity.
        </p>
      </section>

      {/* Counterparty Profile - NEW SECTION */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Counterparty Profile</h2>
        <p>
          Simcol engages with financially qualified buyers and trading entities,
          including:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Licensed petroleum importers and distributors</li>
          <li>Aviation fuel resellers and bunker suppliers</li>
          <li>Trading houses with established West African supply chains</li>
          <li>
            End-users with demonstrated import licenses and banking facilities
          </li>
        </ul>
        <p>
          All counterparties must satisfy corporate due diligence and demonstrate
          transactional readiness prior to commercial engagement.
        </p>
      </section>

      {/* Regulatory & Banking Infrastructure - NEW SECTION */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Regulatory & Banking Infrastructure</h2>
        <p>
          Simcol Petroleum Nigeria Limited is officially licensed by the Nigerian
          Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) as a
          Wholesale Petroleum Liquid Supply Operator under the provisions of the
          Petroleum Industry Act (PIA). This regulatory authorization confirms
          the Company's integration into Nigeria's modernized energy framework
          and adherence to the highest standards of transparency and corporate
          governance.
        </p>
        <p>
          The Company maintains established banking facilities with Tier-1
          financial institutions, supporting documentary credit instruments,
          international payment processing, and trade finance requirements in
          accordance with global banking standards.
        </p>
      </section>

      {/* Commercial & Execution Desk - ENHANCED */}
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Commercial & Execution Desk</h2>
        <p>
          Simcol operates a dual-jurisdiction execution model:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Nigeria:</strong> Refinery coordination, product allocation,
            export documentation
          </li>
          <li>
            <strong>Dubai:</strong> International buyer engagement, commercial
            structuring, counterparty coordination
          </li>
        </ul>
        <p>
          This structure enables both compliance with Nigerian export regulations
          and alignment with international banking, shipping, and trade finance
          norms.
        </p>
      </section>

      {/* Compliance Framework - REVISED TONE */}
      <section className="space-y-4 border-t pt-8">
        <h2 className="text-xl font-medium">Compliance Framework</h2>
        <p>
          Simcol Petroleum operates in accordance with Nigerian export
          regulations, international petroleum trading standards, and applicable
          AML/KYC requirements.
        </p>
        <p className="text-sm text-muted-foreground">
          All commercial information is provided for preliminary discussion
          purposes and does not constitute a firm offer or allocation commitment.
          Transactions are executed subject to refinery procedures, contractual
          agreement, and regulatory compliance.
        </p>
      </section>
    </main>
  );
}
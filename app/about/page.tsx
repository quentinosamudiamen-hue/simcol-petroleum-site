import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About SIMCOL Petroleum Nigeria | Export-Only Refined Products",
  description:
    "SIMCOL Petroleum Nigeria Limited is a refinery-aligned physical trading and export company focused exclusively on refined petroleum exports to international markets, executed via a Dubai execution desk.",
  alternates: {
    canonical: "https://www.simcolgroup.com/about",
  },
  openGraph: {
    title: "About SIMCOL Petroleum Nigeria | Export-Only Refined Products",
    description:
      "Refinery-aligned, export-only refined products platform with Dubai execution desk. Jet A-1 and AGO (WAF specification) for institutional buyers.",
    url: "https://www.simcolgroup.com/about",
    siteName: "Simcol Petroleum",
    type: "website",
  },
};

const bullets = [
  {
    title: "Nigeria",
    points: [
      "NMDPRA licensing and regulatory compliance",
      "Refinery counterparty relationships",
      "Product sourcing and loading coordination",
    ],
  },
  {
    title: "Dubai, United Arab Emirates",
    points: [
      "Primary execution desk",
      "Transaction coordination and documentation",
      "International buyer engagement",
      "Trade settlement operations",
    ],
  },
  {
    title: "United States",
    points: [
      "Original company establishment (2007)",
      "Legacy domestic fuel distribution operations",
      "Market intelligence and buyer relationships",
    ],
  },
];

const why = [
  {
    title: "Direct Refinery Access",
    desc: "Established counterparty relationships provide reliable product sourcing for international delivery.",
  },
  {
    title: "Dubai Execution Capability",
    desc: "Professional transaction coordination from a global financial hub with international banking infrastructure.",
  },
  {
    title: "Regulatory Compliance",
    desc: "NMDPRA licensing supports compliant operations under Nigerian petroleum regulatory requirements.",
  },
  {
    title: "Export Market Focus",
    desc: "Specialized infrastructure designed exclusively for cross-border refined product movements.",
  },
  {
    title: "Institutional Standards",
    desc: "Professional documentation, transparent processes, and execution discipline across transactions.",
  },
];

const timeline = [
  {
    year: "2007",
    text: "Original SIMCOL Petroleum Limited Company founded in Atlanta, Georgia for US domestic fuel distribution.",
  },
  {
    year: "2010–2021",
    text: "Expanded petroleum market expertise and international trading relationships.",
  },
  {
    year: "2022",
    text: "SIMCOL Petroleum Nigeria Limited established with NMDPRA licensing for refined product export operations.",
  },
  {
    year: "Present",
    text: "Operating as an institutional-grade export platform aligned with refinery execution, Dubai coordination, and international buyer engagement.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Page-local background (matches your site style) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(46,204,113,0.14), rgba(0,0,0,0) 55%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 space-y-16">
        {/* Hero */}
        <header className="space-y-4">
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">
            SIMCOL PETROLEUM NIGERIA LIMITED
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            About Simcol Petroleum
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-3xl">
            A refinery-aligned physical trading and export company focused exclusively on refined
            petroleum exports to international markets.
          </p>
        </header>

        {/* Company Overview */}
        <section className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Company Overview</h2>
              <p className="text-white/70 leading-relaxed">
                SIMCOL Petroleum Nigeria Limited is a licensed petroleum trading and export company
                specializing in physical refined product movements from Nigerian refineries to
                international buyers. Operating from our Dubai execution desk, we facilitate
                institutional-grade transactions in Jet A-1 aviation fuel and automotive gas oil
                (AGO) for export-only delivery.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-white">Operational Infrastructure</h3>
              <p className="text-white/70 leading-relaxed">
                Licensed by Nigeria&apos;s NMDPRA (Nigerian Midstream and Downstream Petroleum
                Regulatory Authority), SIMCOL maintains direct refinery counterparty relationships
                that enable reliable product access for international delivery. Our Dubai-based
                execution team coordinates transaction logistics, documentation, and settlement
                processes in accordance with international petroleum trading standards.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-white">Market Position</h3>
              <p className="text-white/70 leading-relaxed">
                The Nigeria export platform was established in 2022 to serve institutional refined
                product export buyers who require transparent execution, regulatory compliance, and
                refinery-aligned sourcing. We operate exclusively in the export market, with no
                involvement in domestic Nigerian petroleum distribution.
              </p>
            </div>
          </div>

          {/* Right callout */}
          <aside className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-4">
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">Scope</p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>• Export-only refined petroleum products</li>
              <li>• Institutional buyer engagement</li>
              <li>• Refinery-aligned transaction discipline</li>
            </ul>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs tracking-[0.22em] uppercase text-white/60">Notice</p>
              <p className="text-sm text-white/70 leading-relaxed mt-2">
                This website content is provided for preliminary commercial discussions and
                execution planning only and does not constitute an offer, allocation commitment, or
                binding agreement.
              </p>
            </div>
          </aside>
        </section>

        {/* Geographic Presence */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Geographic Presence</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {bullets.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-base font-semibold text-white">{b.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {b.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Business Model & Scope */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Business Model &amp; Scope</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Export-Only Focus</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                SIMCOL operates exclusively in refined petroleum exports. We do not participate in
                domestic Nigerian fuel distribution, retail operations, or crude oil trading. Our
                infrastructure is designed for cross-border refined product movements to
                international institutional buyers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Product Specialization</h3>
              <ul className="text-sm text-white/70 space-y-2">
                <li>
                  • <span className="text-white/85 font-medium">Jet A-1 Aviation Fuel</span>: Export-grade
                  kerosene meeting international aviation specifications
                </li>
                <li>
                  • <span className="text-white/85 font-medium">Automotive Gas Oil (AGO)</span>: West African
                  specification diesel for international markets
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3 md:col-span-2">
              <h3 className="text-base font-semibold text-white">Institutional Buyer Engagement</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Our transaction framework is designed for institutional buyers requiring transparent
                refinery-aligned sourcing, professional documentation and settlement processes,
                regulatory compliance across jurisdictions, and reliable product access through
                established refinery relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Transaction Discipline */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Transaction Discipline</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Refinery-Aligned Execution</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                SIMCOL maintains direct counterparty relationships with Nigerian refineries, enabling
                consistent product access for export delivery. We emphasize transparency in sourcing
                while maintaining appropriate commercial discretion around specific refinery
                partnerships.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Documentation Standards</h3>
              <ul className="text-sm text-white/70 space-y-2">
                <li>• Firm Commercial Offers (FCO)</li>
                <li>• Performance bond instructions</li>
                <li>• Product specification certificates</li>
                <li>• Export documentation and compliance records</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Regulatory Compliance</h3>
              <ul className="text-sm text-white/70 space-y-2">
                <li>• NMDPRA licensing for petroleum trading and export</li>
                <li>• International trade compliance frameworks</li>
                <li>• Export documentation and customs clearance protocols</li>
                <li>• AML and KYC procedures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why SIMCOL */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Why SIMCOL</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {why.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Heritage */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Company Heritage</h2>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {timeline.map((t) => (
                <div key={t.year} className="space-y-1">
                  <p className="text-sm font-semibold text-white">{t.year}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Philosophy */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Operational Philosophy</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Transparency</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Clear communication on specifications, transaction structure, and execution steps
                while maintaining appropriate commercial discretion.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Reliability</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Consistent execution via established refinery relationships and disciplined
                documentation and logistics coordination.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Compliance</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Strict adherence to regulatory requirements across operating jurisdictions and trade
                finance expectations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-3">
              <h3 className="text-base font-semibold text-white">Professionalism</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Institutional-grade documentation, settlement processes, and buyer engagement
                protocols.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-2">
              <h2 className="text-xl font-semibold text-white">Contact &amp; Engagement</h2>
              <p className="text-sm text-white/70 leading-relaxed">
                For institutional buyer inquiries, please contact the Dubai execution desk.
              </p>
            </div>

            <div className="space-y-2 text-sm text-white/75">
              <p>
                <span className="text-white/60">Email:</span> commercial@simcolgroup.com
              </p>
              <p>
                <span className="text-white/60">Phone:</span> +971 50 466 8906
              </p>
              <p>
                <span className="text-white/60">Location:</span> Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
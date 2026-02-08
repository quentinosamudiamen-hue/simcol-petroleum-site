import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About SIMCOL Petroleum Nigeria | NMDPRA Licensed Export Trader",
  description:
    "SIMCOL Petroleum Nigeria Limited is an NMDPRA-licensed physical petroleum export trader. Dubai execution desk. Refinery-aligned Jet A-1 and AGO (WAF specification) exports for institutional buyers.",
  alternates: {
    canonical: "https://www.simcolgroup.com/about",
  },
  openGraph: {
    title: "About SIMCOL Petroleum Nigeria | NMDPRA Licensed Export Trader",
    description:
      "NMDPRA-licensed, export-only physical petroleum trader. Refinery-aligned execution for Jet A-1 and AGO (WAF specification) via Dubai execution desk.",
    url: "https://www.simcolgroup.com/about",
    siteName: "Simcol Petroleum",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simcol Petroleum — Dubai Execution Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SIMCOL Petroleum Nigeria | NMDPRA Licensed Export Trader",
    description:
      "NMDPRA-licensed, export-only petroleum trading. Jet A-1 and AGO (WAF specification). Dubai execution desk.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-28 pb-20">
      <Suspense fallback={null}>
        <PageHeader
          title="About Simcol Petroleum"
          description="A refinery-aligned physical trading and export company focused exclusively on refined petroleum exports to international markets."
        />
      </Suspense>

      <section className="space-y-12">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Company Overview
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/70">
            Simcol Petroleum Nigeria Limited is the Nigerian operating entity within
            the Simcol Petroleum group. The business is structured as a physical
            exporter of refined petroleum products, aligned with international
            refinery, banking, and compliance standards.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Role &amp; Mandate
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/70">
            Simcol Petroleum operates strictly as a principal. The company does not
            act as a broker, intermediary, or marketing agent. All transactions are
            executed on a principal-to-principal basis with qualified counterparties.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Products &amp; Export Scope
          </h2>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-white/70">
            <li>• AGO (WAF specification Gas Oil)</li>
            <li>• Jet A-1 Aviation Turbine Fuel</li>
          </ul>

          <p className="mt-4 max-w-3xl text-xs md:text-sm leading-relaxed text-white/50">
            Product availability, specifications, and lifting schedules are subject
            to refinery confirmation and allocation procedures.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Regulatory Standing
          </h2>

          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/70">
            SIMCOL Petroleum Nigeria Limited is an NMDPRA-licensed Wholesale Petroleum
            Liquid Supply Operator authorized to conduct petroleum product export
            operations under Nigerian regulatory oversight.
          </p>

          <ul className="mt-4 space-y-2 text-sm md:text-base text-white/70">
            <li>• Authorization for wholesale petroleum liquid supply and export</li>
            <li>• Compliance alignment with Nigerian midstream and downstream regulations</li>
            <li>• Adherence to applicable quality, safety, and operational standards</li>
            <li>• Institutional credibility for international petroleum transactions</li>
          </ul>

          <p className="mt-4 max-w-3xl text-xs md:text-sm leading-relaxed text-white/50">
            All export activities are conducted in accordance with NMDPRA regulations,
            applicable international petroleum trade standards, and banking compliance
            requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About | Simcol Petroleum",
  description:
    "Simcol Petroleum Nigeria Limited is a refinery-aligned physical trader and exporter of refined petroleum products, operating an export-only mandate from Nigeria.",
};

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-28 pb-20">
      <PageHeader
        title="About Simcol Petroleum"
        description="A refinery-aligned physical trading and export company focused exclusively on refined petroleum exports to international markets."
      />

      <section className="space-y-12">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Company Overview
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/70">
            Simcol Petroleum Nigeria Limited is the Nigerian operating entity within the
            Simcol Petroleum group. The business is structured as a physical exporter
            of refined petroleum products, aligned with international refinery,
            banking, and compliance standards.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Role & Mandate
          </h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/70">
            Simcol Petroleum operates strictly as a principal. The company does not
            act as a broker, intermediary, or marketing agent. All transactions are
            executed on a principal-to-principal basis with qualified counterparties.
          </p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Products & Export Scope
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
      </section>
    </main>
  );
}
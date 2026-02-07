import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance & Legal Notice | Simcol Petroleum Nigeria Limited",
  description:
    "Compliance, legal notice, and commercial disclaimers for Simcol Petroleum Nigeria Limited (RC 1969739).",
};

/* ------------------------------------------------------------------ */
/* CONFIGURATION                                                      */
/* ------------------------------------------------------------------ */

const COMPANY = {
  legalName: "Simcol Petroleum Nigeria Limited",
  registration: "RC 1969739",
  established: "2007",
  desk: "Dubai Execution Desk",
  email: "commercial@simcolgroup.com",
  phone: "+971 50 466 8906",
} as const;

const COMPLIANCE_SECTIONS = [
  {
    title: "1. No Offer / No Allocation Commitment",
    content:
      "Website content, communications, and documents are provided for preliminary commercial discussions only. Nothing on this website constitutes a firm offer, allocation commitment, or binding agreement. Any transaction proceeds only under executed contractual documentation and confirmed counterparty acceptance.",
  },
  {
    title: "2. Counterparty Due Diligence (KYC/KYB)",
    content:
      "Simcol engages counterparties on a documentation-first basis. Buyers may be required to provide KYB/KYC documentation, authorized signatory confirmation, company registration certificates, beneficial ownership disclosure, and other compliance information prior to advancing commercial discussions. Simcol reserves the right to decline engagement where documentation is incomplete or counterparty profile does not align with institutional standards.",
  },
  {
    title: "3. Sanctions & Restricted Parties Screening",
    content:
      "Simcol expects all counterparties to comply with applicable sanctions and restricted party screening requirements. Engagement may be declined or terminated where sanctions screening, jurisdictional alignment, or regulatory compliance is not satisfactory. Buyers are responsible for ensuring their own compliance with applicable export controls and sanctions regulations.",
  },
  {
    title: "4. Principal Trading Counterparty (Not Broker/Facilitator)",
    content:
      "Simcol operates as a principal trading counterparty and follows a refinery-aligned engagement process. We are not brokers, facilitators, or intermediaries. Where buyer-side intermediaries are involved, clear role definition, written authorization from end-user/buyer, and mandate documentation may be required before commercial engagement proceeds.",
  },
  {
    title: "5. Performance Bonds, Deposits & Financial Instruments",
    content:
      "Certain sellers/refineries may require a performance bond, bank guarantee, proof of funds, or deposit prior to issuing commercial terms, SCO/FCO, or other formal documentation. These requirements vary by transaction size, counterparty profile, and refinery policies. Simcol will communicate specific requirements during the commercial engagement phase. Such instruments are typically held by sellers/refineries, not by Simcol.",
  },
  {
    title: "6. Confidentiality & Information Use",
    content:
      "Materials shared by Simcol (including transaction frameworks, readiness checklists, templates, and commercial terms) may be confidential and are intended only for the recipient counterparty. Unauthorized distribution, reproduction, or sharing with third parties is prohibited without Simcol's prior written consent. Counterparties should treat all commercial discussions and related information as confidential.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "Simcol Petroleum Nigeria Limited provides information on this website 'as is' without warranties of any kind. While we strive for accuracy, information may change without notice. Simcol shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of this website or reliance on its content. All commercial transactions are subject to separate contractual terms and conditions.",
  },
  {
    title: "8. Governing Law & Dispute Resolution",
    content:
      "These terms and any commercial engagements are governed by the laws of the jurisdiction specified in executed contractual documentation. Where no jurisdiction is specified, Nigerian law shall apply. Parties agree to attempt good-faith resolution of disputes prior to initiating formal proceedings. Specific dispute resolution mechanisms (arbitration, mediation, or litigation) will be defined in transaction-specific agreements.",
  },
  {
    title: "9. Amendment & Updates",
    content:
      "Simcol reserves the right to update these compliance statements and legal notices at any time without prior notification. Continued use of this website or engagement with Simcol following such changes constitutes acceptance of updated terms. The 'Last Updated' date below indicates the most recent revision.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6">
      <h2 className="text-base font-semibold text-neutral-100">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function CompliancePage() {
  const lastUpdated = "February 7, 2026"; // Update this when you make changes
  const phoneHref = `tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`;

  return (
    <main className="relative z-10 bg-transparent max-w-4xl mx-auto px-6 py-16 space-y-14">
      <section className="simcol-section">
        <div className="simcol-container">
          <div className="rounded-3xl border border-neutral-900 bg-neutral-950/40 p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Compliance &amp; Legal Notice
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100 md:text-5xl">
              Commercial Disclaimers &amp; Engagement Standards
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-300 md:text-lg">
              This page sets out compliance posture and legal notices for{" "}
              {COMPANY.legalName} ({COMPANY.registration}), operating via the{" "}
              {COMPANY.desk}.
            </p>

            <div className="mt-8 grid gap-4 rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-400">
                  Legal Entity
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-100">
                  {COMPANY.legalName}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-400">
                  Registration
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-100">
                  {COMPANY.registration}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Est. {COMPANY.established}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-400">
                  Contact
                </p>
                <p className="mt-1 text-sm text-neutral-100">
                  <a
                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                    href={`mailto:${COMPANY.email}`}
                  >
                    {COMPANY.email}
                  </a>
                  <br />
                  <a
                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                    href={phoneHref}
                  >
                    {COMPANY.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Compliance Sections */}
            <div className="mt-10 space-y-6">
              {COMPLIANCE_SECTIONS.map((section) => (
                <Block key={section.title} title={section.title}>
                  {section.content}
                </Block>
              ))}
            </div>

            {/* Last Updated */}
            <div className="mt-8 rounded-2xl border border-neutral-900 bg-neutral-950/60 p-4 text-center">
              <p className="text-xs text-neutral-500">
                Last Updated: {lastUpdated}
              </p>
            </div>

            {/* Contact for Questions */}
            <div className="mt-8 rounded-2xl border border-neutral-900 bg-neutral-950/50 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Questions about compliance?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                For specific questions regarding compliance requirements,
                documentation standards, or legal terms, please contact our
                commercial desk at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-neutral-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {COMPANY.email}
                </a>{" "}
                or{" "}
                <a
                  href={phoneHref}
                  className="text-neutral-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {COMPANY.phone}
                </a>
                .
              </p>
            </div>

            {/* Helpful Links */}
            <div className="mt-8 rounded-2xl border border-neutral-900 bg-neutral-950/50 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Helpful Links
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/transaction-framework"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  Transaction Framework
                </Link>
                <Link
                  href="/documentation"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  Buyer Documentation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  Contact / Submit Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

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
      <PageHeader
        title="About Simcol Petroleum"
        description="A refinery-aligned physical trading and export company focused exclusively on refined petroleum exports to international markets."
      />

      <section className="space-y-12">
        {/* Your existing content */}
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Buyer Submission Desk | Simcol Petroleum",
  description:
    "Request submission access for export-focused refined product transactions via Simcol Petroleum Nigeria Limited (Dubai Execution Desk). Documentation-led, refinery-aligned engagement.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Buyer Submission Desk | Simcol Petroleum",
    description:
      "Documentation-led buyer engagement for export-focused refined petroleum products. Dubai execution desk.",
    url: "/contact",
    siteName: "Simcol Petroleum",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
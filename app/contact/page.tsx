import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Simcol Petroleum | Nigeria Petroleum Export Enquiries | Dubai Execution Desk",
  description:
    "Submit institutional petroleum supply enquiries to Simcol Petroleum Nigeria Limited. Jet A-1 and AGO export requests handled via Dubai execution desk. Principal-to-principal engagement only.",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
      {/* NEW: Institutional inquiry line */}
      <div className="mb-8 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-5">
        <p className="text-sm text-neutral-300">
          For institutional supply inquiries and commercial coordination, please contact the Dubai execution desk.
        </p>
      </div>
      <ContactClient />
    </main>
  );
}
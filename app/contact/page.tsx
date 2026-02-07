import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Simcol Petroleum",
  description:
    "Buyer submission desk for export-focused refined product requests via Dubai execution desk.",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
      <ContactClient />
    </main>
  );
}
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Simcol Petroleum",
  description:
    "Request secure submission access for export-focused refined product transactions via the Dubai execution desk.",
};

export default function Page() {
  return <ContactClient />;
}

"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const email = "commercial@simcolgroup.com";
  const phone = "+971 50 466 8906";
  const location = "Dubai, United Arab Emirates";

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Export Product Request — Simcol Petroleum");
    const body = encodeURIComponent(
      [
        "Hello Simcol Commercial Desk,",
        "",
        "We would like to submit an export product request.",
        "",
        "Company Name:",
        "Country / City:",
        "Product (AGO / Jet A-1):",
        "Quantity (MT):",
        "Delivery Basis (FOB / CIF):",
        "Destination Port (if CIF):",
        "Target Loading Window:",
        "Buyer Role (End Buyer / Mandate / Broker):",
        "",
        "Regards,",
        "Name:",
        "Title:",
        "Company:",
        "Phone:",
      ].join("\n")
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section className="mx-auto max-w-5xl">
      <PageHeader
        title="Contact"
        description="Buyer submission desk for export-focused refined product requests via Dubai execution desk."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Left: Primary action */}
        <div className="rounded-2xl border border-white/10 bg-black/35 p-6 md:p-7 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">Submit a Request</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Use the email template below to initiate a product request. We’ll respond
            with the required submission pack and next steps.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-400/15"
              onClick={() => setSubmitted(true)}
            >
              Email Commercial Desk
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10"
              onClick={async () => {
                await navigator.clipboard.writeText(email);
                setSubmitted(true);
              }}
            >
              Copy Email
            </button>
          </div>

          {submitted && (
            <p className="mt-4 text-xs text-white/55">
              Tip: include product, quantity, delivery basis (FOB/CIF), destination,
              and target loading window.
            </p>
          )}
        </div>

        {/* Right: Contact details */}
        <div className="rounded-2xl border border-white/10 bg-black/35 p-6 md:p-7 backdrop-blur">
          <h2 className="text-lg font-semibold text-white">Desk Details</h2>

          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-white/50">Email</dt>
              <dd className="mt-1 text-white/80">
                <a className="hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-white/50">Phone</dt>
              <dd className="mt-1 text-white/80">
                <a
                  className="hover:underline"
                  href={`tel:${phone.replace(/\s/g, "")}`}
                >
                  {phone}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-white/50">Location</dt>
              <dd className="mt-1 text-white/80">{location}</dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs leading-relaxed text-white/55">
              Note: This page is for preliminary commercial engagement and planning only
              and does not constitute an offer, allocation commitment, or binding agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
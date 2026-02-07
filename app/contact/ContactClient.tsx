"use client";

import { useMemo, useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  FileText,
  Building2,
} from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const DESK = {
  // Keep this aligned with your brand + footer
  deskName: "Dubai Execution Desk",
  // Use your commercial inbox (not info@)
  email: "commercial@simcolgroup.com",
  // Keep location generic unless you want to publish full address
  locationLine1: "Dubai, United Arab Emirates",
  hoursLine1: "Sunday – Thursday",
  hoursLine2: "8:00 AM – 6:00 PM GST",
} as const;

export default function ContactClient() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const minimumInputs = useMemo(
    () => [
      "Requested product (Jet A-1 or AGO/WAF spec GO)",
      "Quantity and preferred lifting structure (spot / term, if applicable)",
      "Delivery basis (FOB/CIF) and destination/discharge terms",
      "Target loading window (dates)",
      "Corporate details (KYB) and authorized signatory confirmation (KYC)",
    ],
    []
  );

  const submissionPack = useMemo(
    () => [
      "Company registration / trade license + operating address",
      "Authorized signatory details (passport + authority confirmation)",
      "Beneficial ownership / directors (where applicable)",
      "Sanctions/compliance confirmation (jurisdiction alignment; screening readiness)",
      "Banking readiness statement (LC/SBLC/PB/deposit as required by seller/refinery)",
    ],
    []
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) newErrors.company = "Company name is required";

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide at least 20 characters for context";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    try {
      /**
       * Replace this with your real API call when ready:
       * await fetch('/api/contact', { method: 'POST', headers: {...}, body: JSON.stringify(formData) })
       */
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
              Simcol Petroleum Nigeria Limited
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Buyer Submission Desk
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-300 md:text-lg">
              Request submission access for export-focused refined product transactions via
              the Dubai execution desk. Progression is documentation-led and aligned to
              seller/refinery process discipline.
            </p>

            <div className="mt-7 rounded-2xl border border-neutral-800 bg-neutral-900/25 p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-neutral-300" />
                <p className="text-sm leading-relaxed text-neutral-300">
                  For preliminary discussions and process alignment only. This page does not
                  constitute an offer, allocation commitment, or binding agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Desk info + checklists */}
          <aside className="space-y-6 lg:col-span-1">
            {/* Desk details */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/25 p-7">
              <h2 className="text-lg font-semibold text-neutral-100">
                {DESK.deskName}
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                    <MapPin className="h-5 w-5 text-neutral-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-100">Location</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-300">
                      {DESK.locationLine1}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                    <Mail className="h-5 w-5 text-neutral-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-100">Email</h3>
                    <a
                      href={`mailto:${DESK.email}`}
                      className="mt-1 inline-block text-sm text-neutral-200 underline decoration-neutral-700 underline-offset-4 hover:text-white"
                    >
                      {DESK.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
                    <Clock className="h-5 w-5 text-neutral-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-100">
                      Business Hours
                    </h3>
                    <p className="mt-1 text-sm text-neutral-300">
                      {DESK.hoursLine1}
                      <br />
                      {DESK.hoursLine2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimum inputs */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/25 p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-neutral-100">
                  Minimum Buyer Inputs
                </h3>
                <FileText className="h-4 w-4 text-neutral-400" />
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                {minimumInputs.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            {/* Submission pack */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/25 p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-neutral-100">
                  Submission Pack (KYB/KYC)
                </h3>
                <Building2 className="h-4 w-4 text-neutral-400" />
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                {submissionPack.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
                <p className="text-xs leading-relaxed text-neutral-400">
                  Where required by the seller/refinery, financial prerequisites may include
                  PB/deposit/prepayment or other instruments (e.g., LC/SBLC). Such requirements
                  remain the buyer’s responsibility as a condition precedent to commercial progression.
                </p>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <section className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/25 p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-neutral-100">
                Submission Request
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Provide concise details. If you already have a documentation pack prepared,
                reference it in your message and we will confirm the appropriate submission pathway.
              </p>

              {/* Status messages */}
              {status === "success" && (
                <div className="mt-6 rounded-xl border border-emerald-900/40 bg-emerald-950/30 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <div>
                      <p className="text-sm font-medium text-emerald-200">
                        Request received.
                      </p>
                      <p className="mt-1 text-sm text-emerald-200/80">
                        We will review your submission and respond within one business day.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 rounded-xl border border-rose-900/40 bg-rose-950/30 p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 text-rose-300" />
                    <div>
                      <p className="text-sm font-medium text-rose-200">
                        Submission failed.
                      </p>
                      <p className="mt-1 text-sm text-rose-200/80">
                        Please retry or email the desk directly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-200"
                    >
                      Full Name <span className="text-neutral-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={`mt-2 w-full rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-600 ${
                        errors.name ? "border-rose-700/60" : "border-neutral-800"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-2 flex items-center gap-1 text-xs text-rose-300">
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-200"
                    >
                      Email Address <span className="text-neutral-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={`mt-2 w-full rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-600 ${
                        errors.email ? "border-rose-700/60" : "border-neutral-800"
                      }`}
                      placeholder="name@company.com"
                    />
                    {errors.email && (
                      <p className="mt-2 flex items-center gap-1 text-xs text-rose-300">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-neutral-200"
                  >
                    Company Name <span className="text-neutral-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className={`mt-2 w-full rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-600 ${
                      errors.company ? "border-rose-700/60" : "border-neutral-800"
                    }`}
                    placeholder="Your company legal name"
                  />
                  {errors.company && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-rose-300">
                      <AlertCircle className="h-4 w-4" />
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-200"
                  >
                    Submission Details <span className="text-neutral-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className={`mt-2 w-full resize-none rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-600 ${
                      errors.message ? "border-rose-700/60" : "border-neutral-800"
                    }`}
                    placeholder="Include product, quantity, delivery basis (FOB/CIF), loading window, destination/discharge, and confirmation of KYB/KYC readiness. If instruments may be required (PB/LC/SBLC), note your banking readiness."
                  />
                  {errors.message && (
                    <p className="mt-2 flex items-center gap-1 text-xs text-rose-300">
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-100 px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent" />
                      <span>Submitting…</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-500">
                  Fields marked * are required.
                </p>
              </form>

              {/* Bottom disclaimers */}
              <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6">
                <h3 className="text-sm font-semibold text-neutral-100">
                  Important Notes
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                  <li>
                    This submission channel is for preliminary discussions and process alignment only and does not
                    constitute an offer, allocation commitment, or binding agreement.
                  </li>
                  <li>
                    Transaction steps and prerequisites vary by seller/refinery, jurisdiction, and counterparty profile.
                  </li>
                  <li>
                    Where required by the seller/refinery, PB/deposit/prepayment or other instruments (LC/SBLC) remain
                    the buyer’s responsibility as a condition precedent to commercial progression.
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/documentation"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-900"
                  >
                    Documentation Requirements →
                  </a>
                  <a
                    href="/transaction-framework"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-900"
                  >
                    Transaction Framework →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer line */}
        <div className="mt-12 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Simcol Petroleum Nigeria Limited. All rights reserved.
        </div>
      </div>
    </div>
  );
}
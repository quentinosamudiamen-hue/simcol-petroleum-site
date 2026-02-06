import Link from "next/link";

/* ------------------------------------------------------------------ */
/* CONFIGURATION                                                      */
/* ------------------------------------------------------------------ */

const COMPANY_INFO = {
  legalName: "Simcol Petroleum Nigeria Limited",
  registrationNumber: "RC 1969739", // TODO: replace with actual
  address: "Dubai, United Arab Emirates",
  email: "commercial@simcolgroup.com",
  phone: "+971 50 466 8906", // TODO: replace with actual
  established: "2022",
} as const;

const FOOTER_LINKS = {
  company: [
    { label: "About Simcol", href: "/about" },
    { label: "Our Advantage", href: "/advantage" },
    { label: "Transaction Process", href: "/transaction-framework" },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Compliance", href: "/compliance" },
  ],
  resources: [
    { label: "Products", href: "/products" },
    { label: "Documentation", href: "/documentation" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

const SCOPE_ITEMS = [
  "Export-only refined petroleum products",
  "Institutional buyer engagement",
  "Refinery-aligned transaction discipline",
] as const;

/* ------------------------------------------------------------------ */
/* COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneHref = `tel:${COMPANY_INFO.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main footer content */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-4 flex h-9 w-fit items-center rounded-xl border border-neutral-800 bg-neutral-950/70 px-3">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-neutral-200">
                SIMCOL
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              {COMPANY_INFO.legalName}
            </p>
            <p className="mt-2 text-sm text-neutral-500">Dubai Execution Desk</p>
            <p className="mt-4 text-xs text-neutral-500">Est. {COMPANY_INFO.established}</p>

            {/* Quick links */}
            <div className="mt-6 flex flex-col gap-2">
              {FOOTER_LINKS.resources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="transition-colors hover:text-neutral-100"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>

              <li>
                <a href={phoneHref} className="transition-colors hover:text-neutral-100">
                  {COMPANY_INFO.phone}
                </a>
              </li>

              <li className="text-neutral-500">{COMPANY_INFO.address}</li>
            </ul>
          </div>
        </div>

        {/* Scope & Disclaimer */}
        <div className="mt-10 rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                Scope
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {SCOPE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-neutral-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                Notice
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                This website content is provided for preliminary commercial discussions and
                execution planning only and does not constitute an offer, allocation commitment,
                or binding agreement.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-neutral-900 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © {currentYear} {COMPANY_INFO.legalName}
            </p>
            <p>
              {COMPANY_INFO.registrationNumber} • {COMPANY_INFO.address}
            </p>
          </div>

          <p className="text-neutral-600">Export-focused refined petroleum products</p>
        </div>
      </div>
    </footer>
  );
}
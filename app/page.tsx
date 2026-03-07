import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nigerian Petroleum Export | Jet A-1 & AGO | Dubai Execution Desk",
  description:
    "NMDPRA-licensed petroleum export trading. Refinery-aligned Jet A-1 and AGO (WAF specification) exports from Nigeria via Dubai execution desk. Principal-to-principal transactions with institutional documentation.",
  alternates: {
    canonical: "https://www.simcolgroup.com/",
  },
  openGraph: {
    title: "Nigerian Petroleum Export | Jet A-1 & AGO | Dubai Execution Desk",
    description:
      "Export-focused refined product trading: Jet A-1 and AGO (WAF specification). Compliance-first, principal-only engagement via Dubai execution desk.",
    url: "https://www.simcolgroup.com/",
    siteName: "Simcol Petroleum",
    type: "website",
    images: [
      {
        url: "/brand/og-image.png",   // ← FIXED
        width: 1200,
        height: 630,
        alt: "Simcol Petroleum — Dubai Execution Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigerian Petroleum Export | Jet A-1 & AGO | Dubai Execution Desk",
    description:
      "NMDPRA-licensed petroleum export trading. Jet A-1 and AGO (WAF specification). Dubai execution desk.",
    images: ["/brand/og-image.png"],  // ← FIXED
  },
};

export default function HomePage() {
  return (
    <main className="relative z-10 bg-transparent max-w-4xl mx-auto px-6 py-16 space-y-14">

      {/* HERO */}
      <section className="simcol-fullbleed">
        <section className="simcol-hero" role="region" aria-labelledby="hero-heading">
          <div className="simcol-hero-bg" style={{ backgroundImage: `url("/brand/banner-bg.jpg")` }} aria-hidden="true" />
          <div className="simcol-hero-overlay" aria-hidden="true" />
          <div className="simcol-hero-content">
            <div className="simcol-hero-label">Dubai Execution Desk</div>
            <h1 id="hero-heading">
              Simcol Petroleum
              <span className="highlight">Export-Only Refined Products</span>
            </h1>
            <p className="simcol-hero-subtitle">
              Institutional refined product exports supported by refinery-aligned
              sourcing, regulatory compliance, and disciplined execution.
            </p>
            <div className="simcol-hero-features">
              <div className="simcol-hero-feature">
                <span className="simcol-hero-feature-icon" aria-hidden="true">✓</span>
                Export-only mandate
              </div>
              <div className="simcol-hero-feature">
                <span className="simcol-hero-feature-icon" aria-hidden="true">✓</span>
                Institutional documentation
              </div>
              <div className="simcol-hero-feature">
                <span className="simcol-hero-feature-icon" aria-hidden="true">✓</span>
                Refinery-aligned process
              </div>
            </div>
            <div className="simcol-hero-actions" aria-label="Primary actions">
              <Link href="/transaction-framework" className="simcol-btn simcol-btn-primary">
                View Framework
              </Link>
              <Link href="/contact" className="simcol-btn simcol-btn-secondary">
                Contact Execution Desk
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* TRUST SIGNALS ROW */}
      <section className="simcol-fullbleed" aria-label="Institutional trust signals">
        <div style={{ background: "rgba(0,0,0,0.45)", borderTop: "1px solid rgba(46,204,113,0.15)", borderBottom: "1px solid rgba(46,204,113,0.15)", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="md:grid-cols-4">
            {[
              "Refinery-Aligned Sourcing",
              "Dubai Execution Capability",
              "Regulatory Compliance",
              "Institutional Documentation Standards",
            ].map((label) => (
              <div key={label} style={{ border: "1px solid rgba(46,204,113,0.25)", borderRadius: "0.75rem", padding: "1.25rem 1rem", textAlign: "center", background: "rgba(46,204,113,0.04)" }}>
                <span style={{ display: "block", color: "#2ecc71", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }} aria-hidden="true">✓</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.75)", fontWeight: 500, letterSpacing: "0.02em" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="simcol-info-bar" aria-label="Key focus areas">
        <div className="simcol-info-inner">
          <div className="simcol-info-item">
            <div className="simcol-info-number">Dubai</div>
            <div className="simcol-info-label">Execution Desk</div>
          </div>
          <div className="simcol-info-item">
            <div className="simcol-info-number">Jet A-1</div>
            <div className="simcol-info-label">Aviation Fuel</div>
          </div>
          <div className="simcol-info-item">
            <div className="simcol-info-number">AGO</div>
            <div className="simcol-info-label">WAF Spec GO</div>
          </div>
        </div>
      </section>

      {/* ── NEW: ABOUT THE COMPANY ──────────────────────────────────────────── */}
      <section className="simcol-section" aria-labelledby="about-heading">
        <div className="simcol-container">
          <div className="simcol-section-header">
            <div className="simcol-tag">About</div>
            <h2 id="about-heading" className="simcol-title">Nigeria's Export-Only Petroleum Operator</h2>
          </div>
          <div style={{ maxWidth: "48rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.75", fontSize: "1rem" }}>
              Simcol Petroleum Nigeria Limited (RC 1969739) is an NMDPRA-licensed petroleum trading and export company established in 2007. We specialise exclusively in the export of refined petroleum products — Jet A-1 aviation fuel and AGO (Automotive Gas Oil) — sourced from Nigerian refineries including the Dangote Refinery complex, the largest single-train refinery in the world.
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.75", fontSize: "1rem" }}>
              Our operations are structured around a Dubai-based execution desk that coordinates international buyer engagement, trade finance documentation, and cross-border settlement in alignment with global petroleum trading standards. This positions Simcol at the intersection of Nigerian refinery capacity and international institutional demand — a corridor that is growing rapidly as Nigeria transitions from a crude exporter to a refined products exporter.
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.75", fontSize: "1rem" }}>
              We do not participate in domestic Nigerian fuel distribution, retail operations, or crude oil trading. Every transaction is export-only, principal-to-principal, with institutional documentation standards applied across all counterparty engagements.
            </p>
            <div style={{ marginTop: "0.5rem" }}>
              <Link href="/about" className="simcol-card-link">Learn more about Simcol →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW: PRODUCTS OVERVIEW ──────────────────────────────────────────── */}
      <section className="simcol-section gray" aria-labelledby="products-heading">
        <div className="simcol-container">
          <div className="simcol-section-header">
            <div className="simcol-tag">Products</div>
            <h2 id="products-heading" className="simcol-title">Jet A-1 & AGO — Export Grade</h2>
            <p className="simcol-subtitle">
              Both products are sourced from refinery-aligned supply chains and delivered under internationally recognised specification standards.
            </p>
          </div>
          <div className="simcol-grid-2">
            <div className="simcol-card">
              <div className="simcol-card-num">Jet A-1</div>
              <div className="simcol-card-title">Aviation Fuel Export</div>
              <div className="simcol-card-desc">
                Export-grade Jet A-1 kerosene meeting ASTM D1655 and DEF STAN 91-091 international aviation specifications. Sourced from Nigerian refinery output for delivery to airline operators, aviation fueling companies, and government aviation buyers across West Africa, Europe, and Asia.
              </div>
              <Link href="/products" className="simcol-card-link">View Jet A-1 specification →</Link>
            </div>
            <div className="simcol-card">
              <div className="simcol-card-num">AGO</div>
              <div className="simcol-card-title">Gas Oil Export</div>
              <div className="simcol-card-desc">
                Automotive Gas Oil (AGO) meeting EN 590 and West African Specification (WAF Spec) standards. Maximum 50ppm sulphur content. Available in export lot sizes for institutional buyers including energy distributors, trading houses, and government procurement entities.
              </div>
              <Link href="/products" className="simcol-card-link">View AGO specification →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="simcol-section gray" aria-labelledby="process-heading">
        <div className="simcol-container">
          <div className="simcol-section-header">
            <div className="simcol-tag">Process</div>
            <h2 id="process-heading" className="simcol-title">Refinery-Aligned Execution</h2>
            <p className="simcol-subtitle">
              We run a disciplined buyer onboarding and documentation flow designed for institutional counterparties.
            </p>
          </div>
          <div className="simcol-grid-2">
            <div className="simcol-card">
              <div className="simcol-card-num">01</div>
              <div className="simcol-card-title">Buyer Onboarding</div>
              <div className="simcol-card-desc">KYB/KYC readiness, signatory authority, and counterparty screening.</div>
              <Link href="/documentation" className="simcol-card-link">View documentation →</Link>
            </div>
            <div className="simcol-card">
              <div className="simcol-card-num">02</div>
              <div className="simcol-card-title">Transaction Framework</div>
              <div className="simcol-card-desc">Structured request submission, verification, and execution discipline.</div>
              <Link href="/transaction-framework" className="simcol-card-link">View framework →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="simcol-cta" aria-labelledby="cta-heading">
        <div className="simcol-cta-inner">
          <h2 id="cta-heading">
            Ready to Engage <span className="highlight">Commercially</span>?
          </h2>
          <p>Contact our Dubai execution desk to align on process, documentation, and readiness for refinery-aligned export engagement.</p>
          <div className="simcol-cta-buttons" aria-label="Call to action">
            <Link href="/contact" className="simcol-btn simcol-btn-primary">Contact Execution Desk</Link>
            <Link href="/products" className="simcol-btn simcol-btn-secondary">View Products</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
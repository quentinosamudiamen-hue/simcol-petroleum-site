import Link from "next/link";

export default function HomePage() {
  return (
    <main className="simcol-redesign">
      {/* FULL-BLEED HERO (breaks out of any max-width shell safely) */}
      <section className="simcol-fullbleed">
        <section
          className="simcol-hero"
          role="region"
          aria-labelledby="hero-heading"
        >
          {/* Background image */}
          <div
            className="simcol-hero-bg"
            style={{ backgroundImage: `url("/brand/banner-bg.jpg")` }}
            aria-hidden="true"
          />
          {/* Overlay */}
          <div className="simcol-hero-overlay" aria-hidden="true" />

          {/* Content */}
          <div className="simcol-hero-content">
            <div className="simcol-hero-label">Dubai Execution Desk</div>

            <h1 id="hero-heading">
              Simcol Petroleum
              <span className="highlight">Export-Only Refined Products</span>
            </h1>

            <p className="simcol-hero-subtitle">
              Refinery-aligned execution for institutional buyers. Focused on Jet
              A-1 and AGO (WAF spec GO) exports with disciplined onboarding and
              documentation.
            </p>

            <div className="simcol-hero-features">
              <div className="simcol-hero-feature">
                <span className="simcol-hero-feature-icon" aria-hidden="true">
                  ✓
                </span>
                Export-only mandate
              </div>
              <div className="simcol-hero-feature">
                <span className="simcol-hero-feature-icon" aria-hidden="true">
                  ✓
                </span>
                Institutional documentation
              </div>
              <div className="simcol-hero-feature">
                <span className="simcol-hero-feature-icon" aria-hidden="true">
                  ✓
                </span>
                Refinery-aligned process
              </div>
            </div>

            <div className="simcol-hero-actions" aria-label="Primary actions">
              <Link
                href="/transaction-framework"
                className="simcol-btn simcol-btn-primary"
              >
                View Framework
              </Link>
              <Link href="/contact" className="simcol-btn simcol-btn-secondary">
                Submit Buyer Request
              </Link>
            </div>
          </div>
        </section>
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

      {/* SECTION: HOW WE WORK */}
      <section className="simcol-section gray" aria-labelledby="process-heading">
        <div className="simcol-container">
          <div className="simcol-section-header">
            <div className="simcol-tag">Process</div>
            <h2 id="process-heading" className="simcol-title">
              Refinery-Aligned Execution
            </h2>
            <p className="simcol-subtitle">
              We run a disciplined buyer onboarding and documentation flow designed
              for institutional counterparties.
            </p>
          </div>

          <div className="simcol-grid-2">
            <div className="simcol-card">
              <div className="simcol-card-num">01</div>
              <div className="simcol-card-title">Buyer Onboarding</div>
              <div className="simcol-card-desc">
                KYB/KYC readiness, signatory authority, and counterparty screening.
              </div>
              <Link href="/documentation" className="simcol-card-link">
                View documentation →
              </Link>
            </div>

            <div className="simcol-card">
              <div className="simcol-card-num">02</div>
              <div className="simcol-card-title">Transaction Framework</div>
              <div className="simcol-card-desc">
                Structured request submission, verification, and execution discipline.
              </div>
              <Link href="/transaction-framework" className="simcol-card-link">
                View framework →
              </Link>
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
          <p>
            Submit a buyer request and receive the required onboarding checklist
            and next steps.
          </p>
          <div className="simcol-cta-buttons" aria-label="Call to action">
            <Link href="/contact" className="simcol-btn simcol-btn-primary">
              Submit Buyer Request
            </Link>
            <Link href="/products" className="simcol-btn simcol-btn-secondary">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
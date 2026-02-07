import Link from "next/link";

export const metadata = {
  title: "Our Advantage | Simcol Petroleum",
  description:
    "Why institutional counterparties engage Simcol Petroleum Nigeria Limited — refinery-aligned execution, export-only scope, and disciplined documentation.",
};

const pillars = [
  {
    title: "Export-Only Focus",
    desc: "Clear mandate: refined product exports only. No domestic retail. No ambiguity on scope or counterparties.",
    points: [
      "Export-only refined products: Jet A-1 and AGO (WAF spec GO)",
      "Institutional buyer engagement and KYB/KYC readiness",
      "Structured buyer request submission and document discipline",
    ],
  },
  {
    title: "Refinery-Aligned Discipline",
    desc: "A process designed to mirror refinery expectations — structured onboarding, compliance alignment, and execution control.",
    points: [
      "Defined transaction framework and buyer SOP",
      "Document-led engagement with signatory authority checks",
      "Commercial discussions only after readiness milestones",
    ],
  },
  {
    title: "Dubai Execution Desk",
    desc: "A Dubai-based commercial and execution desk for international buyers — built for speed, professionalism, and coordination.",
    points: [
      "Central coordination for buyers and counterparties",
      "Fast turnaround on onboarding, submissions, and next steps",
      "Institutional tone across documentation and communications",
    ],
  },
];

const proof = [
  { k: "Role", v: "Physical trader / exporter (not a broker)" },
  { k: "Products", v: "Jet A-1, AGO (WAF spec GO)" },
  { k: "Scope", v: "Export-only" },
  { k: "Desk", v: "Dubai, UAE" },
];

export default function AdvantagePage() {
  return (
    <main className="relative z-10 bg-transparent max-w-4xl mx-auto px-6 py-16 space-y-14">
      <section className="simcol-section">
        <div className="simcol-container">
          <div className="simcol-section-header">
            <div className="simcol-tag">Why Simcol</div>
            <h1 className="simcol-title">Our Advantage</h1>
            <p className="simcol-subtitle">
              We operate a disciplined, export-only engagement model built for
              institutional counterparties — with refinery-aligned documentation
              and execution controls.
            </p>
          </div>

          {/* Proof strip */}
          <div
            className="simcol-grid-2"
            style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
          >
            {proof.map((item) => (
              <div
                key={item.k}
                className="simcol-card"
                style={{ padding: "1.6rem", borderRadius: 14 }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(46, 204, 113, 0.9)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.k}
                </div>
                <div style={{ color: "var(--charcoal)", fontWeight: 800 }}>
                  {item.v}
                </div>
              </div>
            ))}
          </div>

          {/* Pillars */}
          <div style={{ marginTop: "2.5rem" }} className="simcol-grid-2">
            {pillars.map((p) => (
              <div key={p.title} className="simcol-card">
                <div className="simcol-card-title">{p.title}</div>
                <div className="simcol-card-desc">{p.desc}</div>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.2rem",
                    color: "var(--gray-700)",
                    lineHeight: 1.9,
                  }}
                >
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>

                <div style={{ marginTop: "1.5rem" }}>
                  <Link href="/contact" className="simcol-card-link">
                    Submit buyer request →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <section className="simcol-cta" style={{ marginTop: "4rem" }}>
            <div className="simcol-cta-inner">
              <h2>
                Built for <span className="highlight">Institutional</span> Buyers
              </h2>
              <p>
                If you&apos;re ready to engage commercially, submit a request and we
                will respond with the required onboarding checklist and next steps.
              </p>
              <div className="simcol-cta-buttons">
                <Link href="/contact" className="simcol-btn simcol-btn-primary">
                  Submit Buyer Request
                </Link>
                <Link href="/documentation" className="simcol-btn simcol-btn-secondary">
                  View Documentation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
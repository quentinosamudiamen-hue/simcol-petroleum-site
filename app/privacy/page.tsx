export const metadata = {
  title: "Privacy Policy | Simcol Petroleum",
  description:
    "Privacy Policy for Simcol Petroleum Nigeria Limited — how we collect, use, and protect information in the course of institutional engagement.",
};

export default function PrivacyPage() {
  const updated = "February 7, 2026";

  return (
    <main className="simcol-redesign">
      <section className="simcol-section">
        <div className="simcol-container">
          <div className="simcol-section-header">
            <div className="simcol-tag">Legal</div>
            <h1 className="simcol-title">Privacy Policy</h1>
            <p className="simcol-subtitle">Last updated: {updated}</p>
          </div>

          <div
            className="simcol-card"
            style={{ maxWidth: 980, margin: "0 auto" }}
          >
            <div className="simcol-card-desc" style={{ marginBottom: 0 }}>
              <p style={{ marginTop: 0 }}>
                This Privacy Policy describes how{" "}
                <strong>Simcol Petroleum Nigeria Limited</strong> (“Simcol”,
                “we”, “us”) collects, uses, and protects information obtained
                through this website in connection with preliminary commercial
                discussions and institutional engagement.
              </p>

              <h2 style={h2}>1. Scope & Purpose</h2>
              <p>
                This website is intended for institutional counterparties only.
                Information collected is used solely for commercial evaluation,
                onboarding readiness, compliance screening, and communication
                related to export-focused refined petroleum transactions.
              </p>

              <h2 style={h2}>2. Information We May Collect</h2>
              <ul style={ul}>
                <li>Contact details (name, email address, phone number)</li>
                <li>Company and role information</li>
                <li>Inquiry or submission details provided voluntarily</li>
                <li>
                  Technical information (IP address, browser type, device data)
                  for security and performance monitoring
                </li>
              </ul>

              <h2 style={h2}>3. How Information Is Used</h2>
              <p>Information may be used to:</p>
              <ul style={ul}>
                <li>Respond to inquiries and buyer submissions</li>
                <li>Assess onboarding readiness and mandate alignment</li>
                <li>Conduct compliance, sanctions, and KYB/KYC screening</li>
                <li>
                  Maintain internal records related to commercial discussions
                </li>
                <li>Improve website performance and security</li>
              </ul>

              <h2 style={h2}>4. Confidentiality & Disclosure</h2>
              <p>
                We do not sell or rent personal information. Information may be
                shared internally or with trusted advisors, service providers,
                or counterparties strictly on a need-to-know basis and only for
                legitimate commercial or compliance purposes.
              </p>

              <h2 style={h2}>5. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect information against unauthorized access, misuse, or
                disclosure. However, no transmission or storage system can be
                guaranteed to be completely secure.
              </p>

              <h2 style={h2}>6. Data Retention</h2>
              <p>
                Information is retained only for as long as necessary to support
                commercial evaluation, compliance obligations, or legitimate
                business purposes, unless a longer retention period is required
                by law.
              </p>

              <h2 style={h2}>7. Third-Party Services</h2>
              <p>
                This website may use third-party infrastructure or analytics
                services to operate and secure the site. These providers are
                required to handle information in accordance with applicable
                confidentiality and data protection obligations.
              </p>

              <h2 style={h2}>8. Your Rights</h2>
              <p>
                Depending on applicable law, you may have the right to request
                access to, correction of, or deletion of personal information
                held by us. Requests will be evaluated in light of legal,
                regulatory, and compliance obligations.
              </p>

              <h2 style={h2}>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Updates will
                be posted on this page with a revised “Last updated” date.
              </p>

              <h2 style={h2}>10. Contact</h2>
              <p style={{ marginBottom: 0 }}>
                For privacy-related inquiries, contact{" "}
                <a href="mailto:commercial@simcolgroup.com">
                  commercial@simcolgroup.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const h2: React.CSSProperties = {
  marginTop: "1.6rem",
  marginBottom: "0.6rem",
  fontSize: "1.15rem",
  fontWeight: 900,
  color: "var(--charcoal)",
  letterSpacing: "-0.01em",
};

const ul: React.CSSProperties = {
  marginTop: "0.4rem",
  paddingLeft: "1.25rem",
  lineHeight: 1.9,
  color: "var(--gray-700)",
};
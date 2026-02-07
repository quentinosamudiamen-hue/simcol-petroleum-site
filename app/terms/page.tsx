export const metadata = {
  title: "Terms of Use | Simcol Petroleum",
  description:
    "Terms of Use for Simcol Petroleum Nigeria Limited — Dubai Execution Desk. Website use, content limitations, and disclaimers.",
};

export default function TermsPage() {
  const updated = "February 7, 2026";

  return (
    <main className="simcol-redesign">
      <section className="simcol-section">
        <div className="simcol-container">
          <div className="simcol-section-header">
            <div className="simcol-tag">Legal</div>
            <h1 className="simcol-title">Terms of Use</h1>
            <p className="simcol-subtitle">Last updated: {updated}</p>
          </div>

          <div
            className="simcol-card"
            style={{ maxWidth: 980, margin: "0 auto" }}
          >
            <div className="simcol-card-desc" style={{ marginBottom: 0 }}>
              <p style={{ marginTop: 0 }}>
                These Terms of Use govern access to and use of this website
                operated by <strong>Simcol Petroleum Nigeria Limited</strong>
                (&quot;Simcol&quot;, &quot;we&quot;, &quot;us&quot;). By accessing
                this website, you agree to these Terms.
              </p>

              <h2 style={h2}>1. Website Purpose</h2>
              <p>
                This website is provided for preliminary commercial discussions,
                execution planning, and informational purposes only. Content on
                this site does not constitute an offer, allocation commitment,
                solicitation, or binding agreement.
              </p>

              <h2 style={h2}>2. No Reliance</h2>
              <p>
                You acknowledge that information on this website may be
                incomplete, indicative, and subject to change without notice.
                You should not rely on this website as the sole basis for any
                decision or transaction.
              </p>

              <h2 style={h2}>3. Confidentiality &amp; Process Discipline</h2>
              <p>
                Certain commercial, compliance, and operational information may
                only be provided after counterparty onboarding and readiness
                steps (e.g., KYB/KYC, signatory authority, and screening).
                Unauthorized use, reproduction, or distribution of materials may
                be prohibited.
              </p>

              <h2 style={h2}>4. Intellectual Property</h2>
              <p>
                All website content, branding, documents, and materials are
                owned by Simcol or licensed to Simcol and are protected by
                applicable intellectual property laws. You may not copy, modify,
                distribute, or create derivative works without prior written
                permission.
              </p>

              <h2 style={h2}>5. Prohibited Use</h2>
              <ul style={ul}>
                <li>Use the website for unlawful or fraudulent purposes.</li>
                <li>Attempt to gain unauthorized access to systems or data.</li>
                <li>Misrepresent identity, mandate, or end-user status.</li>
                <li>
                  Use content to solicit, market, or intermediates without
                  authorization.
                </li>
              </ul>

              <h2 style={h2}>6. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. We are
                not responsible for third-party content, policies, or practices.
              </p>

              <h2 style={h2}>7. Disclaimer of Warranties</h2>
              <p>
                The website is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, express or
                implied, including fitness for a particular purpose or
                non-infringement.
              </p>

              <h2 style={h2}>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Simcol shall not be
                liable for any direct, indirect, incidental, consequential, or
                special damages arising from or related to your use of this
                website.
              </p>

              <h2 style={h2}>9. Changes</h2>
              <p>
                We may update these Terms from time to time. Continued use of
                the website after updates constitutes acceptance of the revised
                Terms.
              </p>

              <h2 style={h2}>10. Contact</h2>
              <p style={{ marginBottom: 0 }}>
                For legal or compliance inquiries, contact{" "}
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
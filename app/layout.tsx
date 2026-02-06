import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

/* ------------------------------------------------------------------ */
/* FONTS                                                              */
/* ------------------------------------------------------------------ */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ------------------------------------------------------------------ */
/* SITE CONFIGURATION                                                 */
/* ------------------------------------------------------------------ */

const SITE = {
  name: "Simcol Petroleum",
  url: "https://www.simcolgroup.com",
  legalName: "Simcol Petroleum Nigeria Limited",
  rc: "RC 1969739",
  phone: "+971 50 466 8906",
  email: "commercial@simcolgroup.com",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  foundingDate: "2022-08-31",
  description:
    "Export-focused refined petroleum products trading via Dubai execution desk",
  // Optional: add once you have these public URLs
  // logoUrl: "https://www.simcolgroup.com/brand/simcol-logo.png",
  // sameAs: ["https://www.linkedin.com/company/<your-page>"],
} as const;

/* ------------------------------------------------------------------ */
/* METADATA                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Simcol Petroleum | Dubai Execution Desk",
    template: "%s | Simcol Petroleum",
  },
  description:
    "Simcol Petroleum Nigeria Limited — Export-focused refined products: Jet A-1 and AGO (WAF spec). Dubai-based commercial & execution desk for institutional buyers.",
  keywords: [
    "petroleum trading",
    "refined products export",
    "Jet A-1",
    "AGO",
    "Dubai execution desk",
    "West African refinery",
    "institutional buyers",
    "petroleum distribution",
    "Simcol Petroleum Nigeria Limited",
    "RC 1969739",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: "Simcol Petroleum | Dubai Execution Desk",
    description:
      "Export-focused refined petroleum products: Jet A-1 and AGO (WAF spec). Dubai execution desk for institutional buyer engagement.",
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simcol Petroleum | Dubai Execution Desk",
    description:
      "Export-focused refined petroleum products trading via Dubai execution desk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add when you set up Google Search Console
    // google: "your-verification-code",
  },
};

/* ------------------------------------------------------------------ */
/* STRUCTURED DATA                                                    */
/* ------------------------------------------------------------------ */

function generateStructuredData() {
  const orgId = `${SITE.url}/#organization`;
  const websiteId = `${SITE.url}/#website`;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: SITE.legalName,
    legalName: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    description: SITE.description,
    identifier: SITE.rc,
    foundingDate: SITE.foundingDate,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        email: SITE.email,
        contactType: "Commercial Inquiries",
        areaServed: ["AE", "NG"],
        availableLanguage: ["en"],
      },
    ],
    // Optional (enable once you have public links)
    // logo: SITE.logoUrl,
    // sameAs: SITE.sameAs,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": orgId },
    // If you don't have /search, remove this block.
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return { orgJsonLd, websiteJsonLd };
}

/* ------------------------------------------------------------------ */
/* LAYOUT                                                             */
/* ------------------------------------------------------------------ */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { orgJsonLd, websiteJsonLd } = generateStructuredData();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        {/* Schema.org structured data for SEO */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Global background graphics */}
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden="true"
        >
          {/* Subtle green radial gradient at top */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.07),transparent_55%)]" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]
            [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)]
            [background-size:72px_72px]"
          />

          {/* Bottom fade to background */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neutral-950 to-transparent" />
        </div>

        <Nav />
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
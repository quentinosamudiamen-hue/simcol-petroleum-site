import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
} as const;

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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simcol Petroleum — Dubai Execution Desk",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Simcol Petroleum | Dubai Execution Desk",
    description:
      "Export-focused refined petroleum products trading via Dubai execution desk",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

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
};

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
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return { orgJsonLd, websiteJsonLd };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { orgJsonLd, websiteJsonLd } = generateStructuredData();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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

        {/* ✅ Background layer */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 simcol-bg-radial" />
          <div className="absolute inset-0 simcol-bg-grid opacity-[0.045]" />
          <div className="absolute inset-x-0 bottom-0 h-64 simcol-bg-fade" />
        </div>

        {/* ✅ Content above background */}
        <div className="relative z-10 min-h-screen">
          <Suspense fallback={null}>
            <Nav />
          </Suspense>

          {/* ✅ PATCH: global top padding so headings never hide under fixed nav */}
          <main className="pt-24">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
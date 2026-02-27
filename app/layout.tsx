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
  legalName: "Simcol Petroleum Nigeria Limited",
  rc: "RC 1969739",
  url: "https://www.simcolgroup.com",
  phone: "+971 50 466 8906",
  email: "commercial@simcolgroup.com",
  locale: "en_US",
  twitter: "@simcolgroup",
  ogImage: "/og-image.jpg", // must exist in /public
};

/* ------------------------------------------------------------------ */
/* GLOBAL METADATA                                                    */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} | Dubai Execution Desk`,
    template: `%s | ${SITE.name}`,
  },

  description:
    "NMDPRA-licensed petroleum export trading. Refinery-aligned Jet A-1 and AGO (WAF specification) exports from Nigeria via Dubai execution desk. Principal-to-principal transactions with institutional documentation.",

  applicationName: SITE.name,

  keywords: [
    "Nigerian petroleum export",
    "Jet A-1 export Nigeria",
    "AGO export Nigeria",
    "WAF specification gas oil",
    "Dubai petroleum trading desk",
    "NMDPRA licensed exporter",
    "principal-to-principal petroleum trading",
  ],

  alternates: {
    canonical: `${SITE.url}/`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    title: `${SITE.name} | Dubai Execution Desk`,
    description:
      "Export-focused refined product trading: Jet A-1 and AGO (WAF specification). Compliance-first, principal-only engagement.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Dubai Execution Desk`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Dubai Execution Desk`,
    description:
      "NMDPRA-licensed petroleum export trading. Jet A-1 and AGO (WAF specification). Dubai execution desk.",
    images: [SITE.ogImage],
  },

  creator: SITE.legalName,
  publisher: SITE.legalName,

  // ✅ FIX: provide BOTH PNG + ICO + apple icon so every browser picks correctly
  // Required files:
  //  - public/favicon.png
  //  - public/favicon.ico
  //  - public/apple-touch-icon.png  (or Next app route icon: app/apple-icon.png)
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

/* ------------------------------------------------------------------ */
/* ORG SCHEMA (JSON-LD)                                               */
/* ------------------------------------------------------------------ */

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    legalName: SITE.legalName,
    url: SITE.url,
    brand: SITE.name,
    description:
      "NMDPRA-licensed petroleum export trading company. Refinery-aligned Jet A-1 and AGO (WAF specification) exports from Nigeria via Dubai execution desk.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "Sales",
        email: SITE.email,
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };

  return (
    <Script
      id="org-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* ROOT LAYOUT                                                        */
/* ------------------------------------------------------------------ */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <OrganizationJsonLd />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
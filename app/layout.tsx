import type { Metadata } from "next";
import { headers } from 'next/headers';
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE = {
  name: "Simcol Petroleum",
  legalName: "Simcol Petroleum Nigeria Limited",
  rc: "RC 1969739",
  url: "https://www.simcolgroup.com",
  phone: "+971 50 466 8906",
  email: "commercial@simcolgroup.com",
  locale: "en_US",
  twitter: "@simcolgroup",
  ogImage: "/brand/og-image.png", // ← FIXED: was /og-image.jpg (file didn't exist)
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.legalName} | Dubai Execution Desk`,
    template: `%s | ${SITE.legalName}`,
  },
  description:
    "NMDPRA-licensed petroleum export trading. Refinery-aligned Jet A-1 and AGO (WAF specification) exports from Nigeria via Dubai execution desk. Principal-to-principal transactions with institutional documentation.",
  applicationName: SITE.name,
  keywords: [
    // Brand
    "Simcol Petroleum Nigeria Limited",
    "Simcol Group",
    "RC 1969739",
    // Core commercial
    "Nigerian petroleum export company",
    "Jet A-1 export Nigeria",
    "Jet A-1 aviation fuel supplier Nigeria",
    "AGO export Nigeria",
    "automotive gas oil Nigeria",
    "WAF specification gas oil",
    "diesel export Nigeria",
    // Spec terms buyers search
    "ASTM D1655",
    "DEF STAN 91-091",
    "EN 590 gas oil",
    // Positioning
    "Dubai petroleum trading desk",
    "NMDPRA licensed exporter",
    "Dangote Refinery export",
    "West Africa petroleum export",
    "principal-to-principal petroleum trading",
    "institutional petroleum buyer",
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
    title: `${SITE.legalName} | Dubai Execution Desk`,
    description:
      "Export-focused refined product trading: Jet A-1 and AGO (WAF specification). Compliance-first, principal-only engagement.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.legalName} — Jet A-1 & AGO Export | Dubai Execution Desk`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} | Dubai Execution Desk`,
    description:
      "NMDPRA-licensed petroleum export trading. Jet A-1 and AGO (WAF specification). Dubai execution desk.",
    images: [SITE.ogImage],
  },
  creator: SITE.legalName,
  publisher: SITE.legalName,
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    legalName: SITE.legalName,
    url: SITE.url,
    brand: SITE.name,
    foundingDate: "2007",                    // ← ADDED
    identifier: {                            // ← ADDED: RC number as structured data
      "@type": "PropertyValue",
      name: "RC Number",
      value: "1969739",
    },
    description:
      "NMDPRA-licensed petroleum export trading company. Refinery-aligned Jet A-1 and AGO (WAF specification) exports from Nigeria via Dubai execution desk.",
    knowsAbout: [                            // ← ADDED: topical authority signals
      "Jet A-1 Aviation Fuel Export",
      "AGO Gas Oil Export",
      "Refined Petroleum Products Nigeria",
      "Dangote Refinery Supply Chain",
      "West Africa Petroleum Trade",
      "NMDPRA Export Licensing",
      "International Petroleum Documentation",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "Sales",
        email: SITE.email,
        availableLanguage: ["English"],
        areaServed: ["NG", "GH", "AE", "GB", "SG", "ZA", "KE"],  // ← ADDED
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
        description: "Execution Desk",
      },
      {
        "@type": "PostalAddress",       // ← ADDED: registered entity address
        addressCountry: "NG",
        description: "Registered Entity",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/625824",
    ],
  };

  return (
    <Script
      id="org-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const isTier6 = host.startsWith('tier6.');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <OrganizationJsonLd />
        {!isTier6 && <Nav />}
        {children}
        {!isTier6 && <Footer />}
      </body>
    </html>
  );
}
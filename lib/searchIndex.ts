// lib/searchIndex.ts

export type SearchDoc = {
  href: string;
  title: string;
  description: string;
  keywords: string[];
};

export const SEARCH_INDEX: SearchDoc[] = [
  {
    href: "/",
    title: "Home",
    description:
      "Dubai execution desk for export-only refined petroleum products with refinery-aligned transaction discipline.",
    keywords: [
      "simcol",
      "simcol petroleum",
      "dubai execution desk",
      "export",
      "refined petroleum",
      "energy trading",
    ],
  },
  {
    href: "/about",
    title: "About Simcol Petroleum",
    description:
      "Simcol Petroleum Nigeria Limited is a physical refined products trader focused on export-only execution.",
    keywords: [
      "about",
      "company",
      "simcol petroleum",
      "physical trader",
      "export-only",
      "refinery aligned",
    ],
  },
  {
    href: "/products",
    title: "Products",
    description:
      "Export-focused refined products including Jet A-1 aviation fuel and AGO (WAF spec gasoil).",
    keywords: [
      "products",
      "jet a-1",
      "jet fuel",
      "aviation fuel",
      "ago",
      "gasoil",
      "waf spec",
    ],
  },
  {
    href: "/transaction-framework",
    title: "Transaction Framework",
    description:
      "Refinery-aligned buyer onboarding, documentation, and execution process for export transactions.",
    keywords: [
      "transaction framework",
      "framework",
      "buyer onboarding",
      "kyc",
      "kyb",
      "fco",
      "sco",
      "process",
    ],
  },
  {
    href: "/documentation",
    title: "Documentation",
    description:
      "Buyer submission requirements, readiness checklist, and institutional documentation standards.",
    keywords: [
      "documentation",
      "buyer requirements",
      "checklist",
      "kyc",
      "kyb",
      "submission",
    ],
  },
  {
    href: "/compliance",
    title: "Compliance",
    description:
      "Compliance posture, sanctions awareness, and buyer screening readiness for international engagement.",
    keywords: [
      "compliance",
      "sanctions",
      "screening",
      "aml",
      "kyc",
      "regulatory",
    ],
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Submit buyer requests and connect with the Dubai-based commercial execution desk.",
    keywords: [
      "contact",
      "buyer request",
      "request quote",
      "dubai",
      "commercial desk",
    ],
  },
];
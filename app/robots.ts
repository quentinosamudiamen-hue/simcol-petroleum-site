import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.simcolgroup.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/buyer-product-request",
          "/buyer-product-request/",
          "/buyer-product-request/received",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
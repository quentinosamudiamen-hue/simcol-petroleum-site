import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.simcolgroup.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/transaction-framework`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/documentation`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/compliance`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
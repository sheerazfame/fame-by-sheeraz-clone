import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { FAME_AI_PACKAGES } from "@/lib/services";

const LEGACY_SERVICES = [
  "celebrities",
  "entrepreneurs",
  "networking",
  "prservices",
];

const TOP_LEVEL = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "casestudies", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "press", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "bookacall", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "speaker", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "gallery", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "realestate", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "fame-ai", priority: 0.95, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const topLevel = TOP_LEVEL.map((entry) => ({
    url: entry.path ? `${SITE.url}/${entry.path}` : SITE.url,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const legacyServices = LEGACY_SERVICES.map((slug) => ({
    url: `${SITE.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const fameAiServices = FAME_AI_PACKAGES.map((pkg) => ({
    url: `${SITE.url}/services/${pkg.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...topLevel, ...legacyServices, ...fameAiServices];
}

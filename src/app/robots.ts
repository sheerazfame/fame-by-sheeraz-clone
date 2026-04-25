import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User"],
        allow: "/",
      },
      {
        userAgent: ["Claude-Web", "ClaudeBot", "anthropic-ai"],
        allow: "/",
      },
      {
        userAgent: ["Google-Extended", "Googlebot", "Googlebot-News"],
        allow: "/",
      },
      {
        userAgent: ["PerplexityBot", "Perplexity-User"],
        allow: "/",
      },
      {
        userAgent: ["Bingbot", "Applebot", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

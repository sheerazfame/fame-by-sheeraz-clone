import { SITE } from "@/lib/site";

type JsonLdValue = string | number | boolean | null | JsonLdObject | JsonLdValue[];
interface JsonLdObject {
  [key: string]: JsonLdValue;
}

interface JsonLdProps {
  data: JsonLdObject | JsonLdObject[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    description: SITE.shortDescription,
    foundingDate: "2020",
    founder: { "@id": `${SITE.url}#sheeraz` },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.whatsappUS,
        contactType: "customer service",
        areaServed: ["US", "CA"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.whatsappUAE,
        contactType: "customer service",
        areaServed: ["AE", "SA", "IN"],
        availableLanguage: ["English", "Arabic", "Hindi"],
      },
    ],
    sameAs: [
      SITE.social.x,
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.youtube,
      SITE.social.tiktok,
    ],
  };
}

export function personSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}#sheeraz`,
    name: "Sheeraz Hasan",
    alternateName: ["Sheeraz Hassan", "Sheeraz"],
    jobTitle: "#1 FAME & AI Strategist",
    description:
      "Global fame strategist, founder of Fame by Sheeraz, Hollywood.AI, Bollywood.AI and Hollywood.TV. Generated $3B+ in earned media for Kim Kardashian, Logan Paul, Zendaya, Priyanka Chopra and 250+ public figures.",
    url: SITE.url,
    image: `${SITE.url}/images/about-sheeraz.jpg`,
    birthDate: "1974-02-28",
    birthPlace: { "@type": "Place", name: "London, United Kingdom" },
    nationality: "British",
    knowsAbout: [
      "Celebrity PR",
      "AI media strategy",
      "Fame engineering",
      "Generative engine optimization",
      "Brand amplification",
      "AI search optimization",
      "Hollywood",
      "Bollywood",
    ],
    worksFor: { "@id": `${SITE.url}#organization` },
    sameAs: [
      SITE.social.x,
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.imdb,
      "https://hollywood.ai",
      "https://bollywood.ai",
      "https://www.sheeraz.com",
    ],
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.shortDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE.url}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(args: {
  slug: string;
  name: string;
  description: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${args.slug}#service`,
    name: args.name,
    description: args.description,
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: "AI-powered fame engineering",
    url: `${SITE.url}/services/${args.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Pricing on application — three tiers (Starter, Growth, Mogul)",
      },
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

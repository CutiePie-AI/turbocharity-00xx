export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

export const seoMetadata: Record<string, SEOMetadata> = {
  "/": {
    title: "TurboCharity — AI-Powered Nonprofit Creation | From Idea to 501(c)(3) in Days",
    description:
      "Launch your nonprofit fast with TurboCharity. AI-powered incorporation, bylaws generation, and IRS Form 1023-EZ filing — no lawyers needed. Start free today.",
    keywords: [
      "start a nonprofit",
      "501(c)(3) application",
      "nonprofit creation platform",
      "AI nonprofit formation",
      "incorporate nonprofit online",
      "IRS Form 1023-EZ",
      "tax-exempt status",
      "create a charity",
    ],
    ogTitle: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
    ogDescription:
      "AI-powered nonprofit creation platform. Incorporate, generate bylaws, and auto-fill IRS Form 1023-EZ without expensive lawyers.",
  },

  "/directory": {
    title: "Nonprofit Directory — Browse Charities & Organizations | TurboCharity",
    description:
      "Explore our curated directory of nonprofits created with TurboCharity. Search by state, category, or mission to discover charitable organizations near you.",
    keywords: [
      "nonprofit directory",
      "charity search",
      "501(c)(3) organizations",
      "find nonprofits",
      "charitable organizations",
      "nonprofit database",
      "local charities",
      "community organizations",
    ],
    ogTitle: "Nonprofit Directory — Discover Charities & Organizations",
    ogDescription:
      "Browse our curated directory of nonprofits. Search by state, category, or mission to find charitable organizations.",
  },

  "/blog": {
    title: "Nonprofit Formation Blog — Guides, Tips & Resources | TurboCharity",
    description:
      "Expert advice on starting a nonprofit, 501(c)(3) applications, nonprofit compliance, and charity management. Free guides and resources for founders.",
    keywords: [
      "nonprofit blog",
      "501(c)(3) guide",
      "nonprofit formation tips",
      "charity startup advice",
      "nonprofit compliance",
      "nonprofit management",
      "start a charity guide",
      "tax-exempt organization",
    ],
    ogTitle: "Nonprofit Formation Blog — Expert Guides & Resources",
    ogDescription:
      "Expert advice on starting a nonprofit, 501(c)(3) applications, compliance, and management. Free guides for founders.",
  },

  "/pricing": {
    title: "Pricing — Affordable Nonprofit Formation Packages | TurboCharity",
    description:
      "Transparent nonprofit formation pricing starting at $0. Compare plans for incorporation, bylaws, EIN filing, and 501(c)(3) applications. No hidden fees.",
    keywords: [
      "nonprofit formation cost",
      "501(c)(3) application cost",
      "cheap nonprofit incorporation",
      "nonprofit filing fees",
      "affordable charity formation",
      "nonprofit pricing",
      "incorporation packages",
      "EIN filing cost",
    ],
    ogTitle: "Pricing — Start Your Nonprofit From $0 | TurboCharity",
    ogDescription:
      "Transparent nonprofit formation pricing. Compare plans for incorporation, bylaws, EIN filing, and 501(c)(3) applications.",
  },

  "/about": {
    title: "About TurboCharity — Our Mission to Democratize Nonprofit Creation",
    description:
      "TurboCharity makes nonprofit formation accessible to everyone. Learn about our AI-driven platform, team, and mission to empower changemakers worldwide.",
    keywords: [
      "about TurboCharity",
      "nonprofit creation platform",
      "AI nonprofit tools",
      "nonprofit technology",
      "charity formation company",
      "mission-driven startup",
      "democratize nonprofit",
      "social impact technology",
    ],
    ogTitle: "About TurboCharity — Democratizing Nonprofit Creation",
    ogDescription:
      "Learn how TurboCharity uses AI to make nonprofit formation accessible, affordable, and fast for changemakers everywhere.",
  },

  "/get-started": {
    title: "Get Started — Create Your Nonprofit in Minutes | TurboCharity",
    description:
      "Start your nonprofit journey today. Answer a few questions and let our AI generate your articles of incorporation, bylaws, and IRS forms instantly.",
    keywords: [
      "start nonprofit now",
      "create charity online",
      "nonprofit registration",
      "form a nonprofit",
      "nonprofit application",
      "register 501(c)(3)",
      "begin nonprofit formation",
      "launch a charity",
    ],
    ogTitle: "Get Started — Launch Your Nonprofit in Minutes",
    ogDescription:
      "Answer a few questions, and our AI generates your articles of incorporation, bylaws, and IRS forms. Start free.",
  },

  "/contact": {
    title: "Contact Us — Get Help With Your Nonprofit Formation | TurboCharity",
    description:
      "Have questions about starting a nonprofit? Contact TurboCharity for expert support on incorporation, 501(c)(3) filing, compliance, and platform features.",
    keywords: [
      "contact TurboCharity",
      "nonprofit help",
      "501(c)(3) support",
      "nonprofit formation questions",
      "charity creation help",
      "customer support nonprofit",
      "nonprofit assistance",
      "incorporation help",
    ],
    ogTitle: "Contact Us — Expert Nonprofit Formation Support",
    ogDescription:
      "Questions about starting a nonprofit? Get expert support on incorporation, 501(c)(3) filing, compliance, and more.",
  },
};

/**
 * Generates JSON-LD structured data for a given route.
 */
export function getJsonLd(route: string) {
  const meta = seoMetadata[route];
  if (!meta) return null;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com";

  const base = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.ogTitle,
    description: meta.ogDescription,
    url: `${baseUrl}${route === "/" ? "" : route}`,
    publisher: {
      "@type": "Organization",
      name: "TurboCharity",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.svg`,
      },
    },
  };

  if (route === "/") {
    return {
      ...base,
      "@type": "WebSite",
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/directory?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  }

  return base;
}

/**
 * Generates Open Graph & Twitter Card metadata for Next.js Metadata API.
 */
export function getOpenGraphMeta(route: string) {
  const meta = seoMetadata[route];
  if (!meta) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com";

  return {
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `${baseUrl}${route === "/" ? "" : route}`,
      siteName: "TurboCharity",
      locale: "en_US",
      type: "website" as const,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

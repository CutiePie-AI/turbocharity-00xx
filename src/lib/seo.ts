// ─── SEO metadata helpers ─────────────────────────────────────────────────────

const SITE_NAME = 'TurboCharity';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://turbocharity.com';

export interface PageMetadata {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
  };
}

const metadataMap: Record<string, PageMetadata> = {
  home: {
    title: `${SITE_NAME} — From Idea to 501(c)(3) in Days`,
    description:
      'AI-powered nonprofit creation. Generate bylaws, articles of incorporation, and auto-fill IRS Form 1023-EZ without expensive lawyers.',
    openGraph: {
      title: `${SITE_NAME} — From Idea to 501(c)(3) in Days`,
      description:
        'AI-powered nonprofit creation. Generate bylaws, articles of incorporation, and auto-fill IRS Form 1023-EZ without expensive lawyers.',
      url: SITE_URL,
    },
  },
  pricing: {
    title: `Pricing — ${SITE_NAME}`,
    description:
      'Affordable plans to incorporate your nonprofit. Start free, or unlock full document generation and IRS filing for a one-time fee.',
    openGraph: {
      title: `Pricing — ${SITE_NAME}`,
      description:
        'Affordable plans to incorporate your nonprofit. Start free, or unlock full document generation and IRS filing for a one-time fee.',
      url: `${SITE_URL}/pricing`,
    },
  },
  about: {
    title: `About — ${SITE_NAME}`,
    description:
      'Learn about the team behind TurboCharity and our mission to make nonprofit creation accessible to everyone.',
    openGraph: {
      title: `About — ${SITE_NAME}`,
      description:
        'Learn about the team behind TurboCharity and our mission to make nonprofit creation accessible to everyone.',
      url: `${SITE_URL}/about`,
    },
  },
  resources: {
    title: `Resources — ${SITE_NAME}`,
    description:
      'Guides, templates, and expert advice to help you start, run, and grow your nonprofit organization.',
    openGraph: {
      title: `Resources — ${SITE_NAME}`,
      description:
        'Guides, templates, and expert advice to help you start, run, and grow your nonprofit organization.',
      url: `${SITE_URL}/resources`,
    },
  },
  states: {
    title: `State Filing Guides — ${SITE_NAME}`,
    description:
      'State-by-state guides to nonprofit incorporation, filing fees, processing times, and compliance requirements.',
    openGraph: {
      title: `State Filing Guides — ${SITE_NAME}`,
      description:
        'State-by-state guides to nonprofit incorporation, filing fees, processing times, and compliance requirements.',
      url: `${SITE_URL}/states`,
    },
  },
  faq: {
    title: `FAQ — ${SITE_NAME}`,
    description:
      'Frequently asked questions about starting a nonprofit, IRS filing, and using TurboCharity.',
    openGraph: {
      title: `FAQ — ${SITE_NAME}`,
      description:
        'Frequently asked questions about starting a nonprofit, IRS filing, and using TurboCharity.',
      url: `${SITE_URL}/faq`,
    },
  },
};

/**
 * Generate page-level metadata for a given page key.
 * Falls back to home metadata if the key is not found.
 */
export function generateMetadata(page: string): PageMetadata {
  return metadataMap[page] ?? metadataMap.home;
}

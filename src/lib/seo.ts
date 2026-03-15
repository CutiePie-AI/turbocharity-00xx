import type { Metadata } from 'next';

// --- Site configuration --------------------------------------------------

export const SITE_CONFIG = {
  siteName: 'TurboCharity',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://turbocharity.com',
  description:
    'AI-powered nonprofit creation. Generate bylaws, articles of incorporation, and auto-fill IRS Form 1023-EZ without expensive lawyers.',
  twitterHandle: '@turbocharity',
} as const;

// --- Page metadata map ---------------------------------------------------

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: `${SITE_CONFIG.siteName} — From Idea to 501(c)(3) in Days`,
    description: SITE_CONFIG.description,
    path: '',
  },
  about: {
    title: `About — ${SITE_CONFIG.siteName}`,
    description:
      'Learn about the team behind TurboCharity and our mission to make nonprofit creation accessible to everyone.',
    path: '/about',
  },
  states: {
    title: `State Filing Guides — ${SITE_CONFIG.siteName}`,
    description:
      'State-by-state guides to nonprofit incorporation, filing fees, processing times, and compliance requirements.',
    path: '/states',
  },
  blog: {
    title: `Blog — ${SITE_CONFIG.siteName}`,
    description:
      'Guides, tips, and insights for starting and running a nonprofit organization.',
    path: '/blog',
  },
  resources: {
    title: `Resources — ${SITE_CONFIG.siteName}`,
    description:
      'Guides, templates, and expert advice to help you start, run, and grow your nonprofit organization.',
    path: '/resources',
  },
  faq: {
    title: `FAQ — ${SITE_CONFIG.siteName}`,
    description:
      'Frequently asked questions about starting a nonprofit, IRS filing, and using TurboCharity.',
    path: '/faq',
  },
  'get-started': {
    title: `Get Started — ${SITE_CONFIG.siteName}`,
    description:
      'Start your 501(c)(3) nonprofit today. Answer a few questions and let TurboCharity generate your documents.',
    path: '/get-started',
  },
  pricing: {
    title: `Pricing — ${SITE_CONFIG.siteName}`,
    description:
      'Affordable plans to incorporate your nonprofit. Start free, or unlock full document generation and IRS filing for a one-time fee.',
    path: '/pricing',
  },
  privacy: {
    title: `Privacy Policy — ${SITE_CONFIG.siteName}`,
    description:
      'TurboCharity privacy policy. Learn how we collect, use, and protect your personal information.',
    path: '/privacy',
  },
  terms: {
    title: `Terms of Service — ${SITE_CONFIG.siteName}`,
    description:
      'TurboCharity terms of service. Read the terms and conditions governing use of our platform.',
    path: '/terms',
  },
};

// --- Metadata generators -------------------------------------------------

/**
 * Generate a Next.js Metadata object for a given page key.
 * Falls back to the home page metadata when the key is not found.
 */
export function generatePageMeta(page: string): Metadata {
  const meta = PAGE_META[page] ?? PAGE_META.home;
  const url = `${SITE_CONFIG.siteUrl}${meta.path}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: SITE_CONFIG.siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      site: SITE_CONFIG.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate a Metadata object from explicit title, description, and path.
 * Useful for dynamic pages like individual blog posts or state pages.
 */
export function generateMetadata(
  title: string,
  description: string,
  path: string = '',
): Metadata {
  const url = `https://turbocharity.com${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'TurboCharity',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
  };
}

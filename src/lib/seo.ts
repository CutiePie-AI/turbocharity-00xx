// ---------------------------------------------------------------------------
// TurboCharity – SEO metadata helpers for Next.js App Router
// ---------------------------------------------------------------------------

import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://turbocharity.com';
const SITE_NAME = 'TurboCharity';
const DEFAULT_DESCRIPTION =
  'TurboCharity is the TurboTax for nonprofit creation — AI-powered tools that walk you through state-specific incorporation, generate compliant bylaws, and auto-fill IRS Form 1023-EZ. Start your nonprofit without spending thousands on lawyers.';

// ---------------------------------------------------------------------------
// Default / shared metadata fragments
// ---------------------------------------------------------------------------

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  locale: 'en_US',
  siteName: SITE_NAME,
  url: SITE_URL,
  images: [
    {
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'TurboCharity — From idea to 501(c)(3) in days, not months.',
    },
  ],
};

const defaultTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  site: '@turbocharity',
  creator: '@turbocharity',
  images: [`${SITE_URL}/og-image.png`],
};

// ---------------------------------------------------------------------------
// Per-page metadata definitions
// ---------------------------------------------------------------------------

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'Start a Nonprofit for Free',
    description:
      'From idea to 501(c)(3) in days, not months. AI-powered nonprofit creation tools that handle state incorporation, bylaws, and IRS Form 1023-EZ — no lawyer needed.',
    path: '/',
  },
  pricing: {
    title: 'Pricing',
    description:
      'Start your nonprofit for free or unlock full document generation for just $29. Compare TurboCharity plans and see how much you can save vs. hiring a lawyer.',
    path: '/pricing',
  },
  states: {
    title: 'State-by-State Nonprofit Filing Guide',
    description:
      'Browse nonprofit incorporation requirements, filing fees, and processing times for all 50 US states and Washington DC. Find your state and start filing today.',
    path: '/states',
  },
  guide: {
    title: 'How to Start a Nonprofit — Step-by-Step Guide',
    description:
      'A complete, beginner-friendly guide to starting a 501(c)(3) nonprofit. Learn about incorporation, bylaws, EIN, IRS filing, and more — all in plain English.',
    path: '/guide',
  },
  about: {
    title: 'About TurboCharity',
    description:
      'TurboCharity was built to make nonprofit creation accessible to everyone — college students, community organizers, and anyone with a mission who shouldn\'t need $5K for a lawyer.',
    path: '/about',
  },
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Generate a Next.js `Metadata` object for a given page key.
 *
 * Falls back to sensible defaults when the page key is not recognized.
 *
 * @example
 * ```ts
 * // app/pricing/page.tsx
 * export const metadata = generateMetadata('pricing');
 * ```
 */
export function generateMetadata(page: string): Metadata {
  const meta = PAGE_META[page];

  const title = meta?.title ?? SITE_NAME;
  const description = meta?.description ?? DEFAULT_DESCRIPTION;
  const url = meta ? `${SITE_URL}${meta.path}` : SITE_URL;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultTwitter,
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export { PAGE_META, SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };

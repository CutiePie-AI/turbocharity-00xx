import type { StateInfo } from '@/data/states';
import type { BlogPost } from '@/data/blog-posts';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://turbocharity.com';

// --- Organization --------------------------------------------------------

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TurboCharity',
    url: SITE_URL,
    description: 'AI-powered nonprofit formation platform',
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://twitter.com/turbocharity',
      'https://www.facebook.com/turbocharity',
      'https://www.linkedin.com/company/turbocharity',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@turbocharity.com',
      contactType: 'customer support',
    },
  };
}

// --- WebSite (search action) ---------------------------------------------

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TurboCharity',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// --- HowTo (state-specific nonprofit creation) ---------------------------

export function howToSchema(state: StateInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Start a 501(c)(3) Nonprofit in ${state.name}`,
    description: `Step-by-step guide to incorporating a nonprofit in ${state.name}. Filing fee: $${state.filingFee}. Processing time: ${state.processingTime}.`,
    totalTime: state.processingTime,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: state.filingFee,
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Define Your Mission',
        text: 'Write a clear mission statement that meets IRS charitable purpose requirements.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: `File Articles of Incorporation in ${state.name}`,
        text: `Submit your Articles of Incorporation to the ${state.name} Secretary of State. Filing fee: $${state.filingFee}. Online filing: ${state.onlineFilingAvailable ? 'Available' : 'Not available'}.`,
        url: state.secretaryOfStateUrl,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Draft Bylaws',
        text: `Create bylaws that comply with ${state.name} nonprofit corporation law, including board structure, officer roles, and conflict-of-interest policy.`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Obtain Your EIN',
        text: 'Apply for an Employer Identification Number (EIN) from the IRS at no cost.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'File IRS Form 1023-EZ',
        text: 'Submit the streamlined 1023-EZ application for 501(c)(3) tax-exempt status. Filing fee: $275.',
      },
    ],
  };
}

// --- Article (blog posts) ------------------------------------------------

/**
 * Generate Article schema from a full BlogPost object.
 */
export function articleSchemaFromPost(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: {
      '@type': 'Organization',
      name: 'TurboCharity',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

/**
 * Generate Article schema from individual parameters.
 */
export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  author: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TurboCharity',
    },
  };
}

// --- FAQ Page ------------------------------------------------------------

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

// --- Breadcrumb ----------------------------------------------------------

export interface BreadcrumbItem {
  name: string;
  url: string;
  /** @deprecated Use `url` instead */
  href?: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

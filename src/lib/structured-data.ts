const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://turbocharity.com';

/**
 * Organization schema for TurboCharity.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TurboCharity',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'AI-powered nonprofit creation platform. Incorporate, generate bylaws, and auto-fill IRS Form 1023-EZ without expensive lawyers.',
    sameAs: [],
  };
}

/**
 * WebSite schema with search action.
 */
export function getWebsiteSchema() {
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

/**
 * FAQPage schema from an array of questions and answers.
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Article schema for blog posts.
 */
export function getArticleSchema(post: {
  title: string;
  author: string;
  publishedDate: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishedDate,
    description: post.description,
    publisher: {
      '@type': 'Organization',
      name: 'TurboCharity',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

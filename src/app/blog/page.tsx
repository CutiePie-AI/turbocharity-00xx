import type { Metadata } from 'next';
import Container from '@/components/Container';
import Breadcrumb from '@/components/Breadcrumb';
import StructuredData from '@/components/StructuredData';
import BlogListClient from '@/components/BlogListClient';
import { blogPosts } from '@/data/blog-posts';
import { SITE_CONFIG } from '@/lib/seo';

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Nonprofit Formation Blog | TurboCharity',
  description:
    'Expert guides, tips, and insights on starting a nonprofit, 501(c)(3) formation, and charity management.',
  openGraph: {
    title: 'Nonprofit Formation Blog | TurboCharity',
    description:
      'Expert guides, tips, and insights on starting a nonprofit, 501(c)(3) formation, and charity management.',
    url: `${SITE_CONFIG.siteUrl}/blog`,
    siteName: SITE_CONFIG.siteName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonprofit Formation Blog | TurboCharity',
    description:
      'Expert guides, tips, and insights on starting a nonprofit, 501(c)(3) formation, and charity management.',
    site: SITE_CONFIG.twitterHandle,
  },
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/blog`,
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────

function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nonprofit Formation Blog | TurboCharity',
    description:
      'Expert guides, tips, and insights on starting a nonprofit, 501(c)(3) formation, and charity management.',
    url: `${SITE_CONFIG.siteUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.siteName,
      url: SITE_CONFIG.siteUrl,
    },
    mainEntity: {
      '@type': 'Blog',
      name: 'TurboCharity Blog',
      description:
        'Expert guides, tips, and insights on starting a nonprofit, 501(c)(3) formation, and charity management.',
      blogPost: blogPosts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          '@type': 'Organization',
          name: post.author,
        },
        url: `${SITE_CONFIG.siteUrl}/blog/${post.slug}`,
      })),
    },
  };
}

// ─── Breadcrumb Items ────────────────────────────────────────────────────────

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog' },
];

// ─── Page Component ──────────────────────────────────────────────────────────

// Sort posts newest-first for display
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50/60">
      <StructuredData data={buildStructuredData()} />

      {/* ───────── Hero / Header ───────── */}
      <section className="border-b border-gray-100 bg-white">
        <Container className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Breadcrumb */}
            <div className="mb-8 flex justify-center">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Insights &amp; Guides
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              TurboCharity Blog
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Practical guides, expert tips, and actionable insights to help you
              start a nonprofit, navigate 501(c)(3) formation, and manage your
              charity with confidence. Whether you&apos;re a first-time founder
              or a seasoned organizer, you&apos;ll find resources to move your
              mission forward.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-primary">
                {blogPosts.length}
              </p>
              <p className="text-xs font-medium text-gray-500">Articles</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-secondary">
                {Array.from(new Set(blogPosts.map((p) => p.category))).length}
              </p>
              <p className="text-xs font-medium text-gray-500">Categories</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-accent">Free</p>
              <p className="text-xs font-medium text-gray-500">Always</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── Blog List with Client-Side Filtering ───────── */}
      <section>
        <Container className="py-12 lg:py-16">
          <BlogListClient posts={sortedPosts} />
        </Container>
      </section>

      {/* ───────── Bottom CTA ───────── */}
      <section className="border-t border-gray-200 bg-white">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="text-2xl font-extrabold text-dark sm:text-3xl">
            Ready to Start Your Nonprofit?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            TurboCharity handles the paperwork so you can focus on your mission.
            AI-powered filing in any state.
          </p>
          <a
            href="/get-started"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
          >
            Get Started Free
          </a>
        </Container>
      </section>
    </main>
  );
}

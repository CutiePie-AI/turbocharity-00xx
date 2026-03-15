import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import StructuredData from '@/components/StructuredData';
import ShareButtons from '@/components/ShareButtons';
import {
  blogPosts,
  getBlogPostBySlug,
  getAllBlogSlugs,
} from '@/data/blog-posts';
import { notFound } from 'next/navigation';

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

/* ---------- Metadata ---------- */

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found | TurboCharity' };
  }
  return {
    title: `${post.title} | TurboCharity`,
    description: post.metaDescription || post.excerpt,
  };
}

/* ---------- Helpers ---------- */

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  'Getting Started': 'bg-blue-50 text-blue-700',
  'Legal Guide': 'bg-purple-50 text-purple-700',
  Fundraising: 'bg-emerald-50 text-emerald-700',
  'Tax Compliance': 'bg-amber-50 text-amber-700',
  'State Guides': 'bg-rose-50 text-rose-700',
};

/**
 * Render HTML content from the blog post.
 * Splits on HTML tags to produce paragraphs, h2, h3, and strong elements.
 */
function renderContent(html: string) {
  const parts: { type: string; text: string }[] = [];
  // Match tags and text between them
  const regex = /<(h2|h3|p|strong)>(.*?)<\/\1>/g;
  let match: RegExpExecArray | null;
  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(html)) !== null) {
    parts.push({ type: match[1], text: match[2] });
  }

  // Fallback: if no tags matched, split by paragraphs
  if (parts.length === 0) {
    const lines = html
      .split(/\n\n+/)
      .map((l) => l.trim())
      .filter(Boolean);
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h2
            key={i}
            className="mb-4 mt-8 text-2xl font-bold text-dark first:mt-0"
          >
            {line.replace('## ', '')}
          </h2>
        );
      }
      return (
        <p key={i} className="mb-4 leading-relaxed text-gray-700">
          {line}
        </p>
      );
    });
  }

  return parts.map((part, i) => {
    switch (part.type) {
      case 'h2':
        return (
          <h2
            key={i}
            className="mb-4 mt-8 text-2xl font-bold text-dark first:mt-0"
          >
            {part.text}
          </h2>
        );
      case 'h3':
        return (
          <h3
            key={i}
            className="mb-3 mt-6 text-xl font-semibold text-dark"
          >
            {part.text}
          </h3>
        );
      case 'strong':
        return (
          <p key={i} className="mb-4 font-semibold leading-relaxed text-dark">
            {part.text}
          </p>
        );
      default:
        return (
          <p
            key={i}
            className="mb-4 leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: part.text }}
          />
        );
    }
  });
}

/* ---------- Page component ---------- */

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const categoryColor =
    CATEGORY_COLORS[post.category] ?? 'bg-gray-50 text-gray-700';

  // Related posts: same category, excluding current
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const siteUrl = 'https://turbocharity.com';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: {
      '@type': 'Organization',
      name: 'TurboCharity',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={articleSchema} />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <Container className="py-3">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg
                  className="h-4 w-4 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <svg
                  className="h-4 w-4 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="truncate font-medium text-gray-700">
                {post.title}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Article + Sidebar */}
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <article className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColor}`}
              >
                {post.category}
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-dark sm:text-4xl">
                {post.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {post.author}
                </span>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span className="h-1 w-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {post.readingTime} min read
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose-custom max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Share */}
            <div className="mt-10 border-t border-gray-100 pt-6">
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg font-bold text-dark">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group block rounded-xl border border-gray-100 p-4 transition-all duration-200 hover:border-primary/20 hover:shadow-md"
                      >
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                            CATEGORY_COLORS[related.category] ??
                            'bg-gray-50 text-gray-700'
                          }`}
                        >
                          {related.category}
                        </span>
                        <h4 className="mt-2 text-sm font-semibold text-dark transition-colors group-hover:text-primary">
                          {related.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500">
                          {related.readingTime} min read
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-teal-400 p-6 text-white">
                <h3 className="text-lg font-bold">
                  Ready to Start Your Nonprofit?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  TurboCharity automates the entire formation process. Get
                  started in minutes.
                </p>
                <Link
                  href="/get-started"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-lg transition-all hover:shadow-xl"
                >
                  Get Started Free
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Back to blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-blue-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Blog
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

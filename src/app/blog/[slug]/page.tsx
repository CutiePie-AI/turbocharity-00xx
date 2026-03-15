import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | TurboCharity`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://turbocharity.com/blog/${post.slug}`,
      siteName: 'TurboCharity',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://turbocharity.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: post.author },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `https://turbocharity.com/blog/${post.slug}`,
    publisher: { '@type': 'Organization', name: 'TurboCharity' },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <article className="mx-auto max-w-3xl py-16 sm:py-24">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            {/* Post meta */}
            <div className="mt-6 flex items-center gap-x-3 text-sm text-gray-500">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} min read</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.author}</span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Post content */}
            <div
              className="prose prose-lg prose-blue mt-10 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA section */}
            <div className="mt-16 rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Ready to start your nonprofit?
              </h3>
              <p className="mt-2 text-gray-600">
                Join our waitlist and be the first to use TurboCharity.
              </p>
              <div className="mt-4">
                <NewsletterSignup />
              </div>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import Breadcrumb from '@/components/Breadcrumb';
import Container from '@/components/Container';
import ShareButtons from '@/components/ShareButtons';
import StructuredData from '@/components/StructuredData';

const BASE_URL = 'https://turbocharity.com';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | TurboCharity Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | TurboCharity Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      url: `${BASE_URL}/blog/${post.slug}`,
      ...(post.featuredImage
        ? {
            images: [
              {
                url: post.featuredImage,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      ...(post.featuredImage ? { images: [post.featuredImage] } : {}),
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function CalendarIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  // Find related posts from the same category, excluding the current post
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If we don't have enough related posts from the same category, fill with recent posts
  const additionalPosts =
    relatedPosts.length < 2
      ? blogPosts
          .filter((p) => p.slug !== post.slug && !relatedPosts.some((rp) => rp.slug === p.slug))
          .slice(0, 3 - relatedPosts.length)
      : [];

  const allRelatedPosts = [...relatedPosts, ...additionalPosts].slice(0, 3);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ];

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TurboCharity',
      url: BASE_URL,
    },
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    ...(post.featuredImage
      ? {
          image: {
            '@type': 'ImageObject',
            url: post.featuredImage,
          },
        }
      : {}),
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BASE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <StructuredData data={articleStructuredData} />
      <StructuredData data={breadcrumbStructuredData} />

      <Container className="py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <article className="mx-auto max-w-3xl">
          {/* Article Header */}
          <header className="mb-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mb-6 text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 border-b border-t border-gray-200 py-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <UserIcon />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarIcon />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="blog-content mb-10 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-8 border-t border-gray-200 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-600">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <ShareButtons url={postUrl} title={post.title} />
          </div>

          {/* Back to Blog Link */}
          <div className="mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-blue-700"
            >
              <ArrowLeftIcon />
              Back to all articles
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {allRelatedPosts.length > 0 && (
          <section className="mx-auto max-w-5xl border-t border-gray-200 pt-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-dark">
              Related Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allRelatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="mb-3">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-dark transition-colors group-hover:text-primary line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <time dateTime={relatedPost.publishedAt}>
                      {formatDate(relatedPost.publishedAt)}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{relatedPost.readingTime} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>

      {/* Scoped styles for HTML content rendering */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-content h2 {
              font-size: 1.5rem;
              font-weight: 700;
              color: #1E293B;
              margin-top: 2rem;
              margin-bottom: 0.75rem;
              line-height: 1.3;
            }
            .blog-content h3 {
              font-size: 1.25rem;
              font-weight: 600;
              color: #1E293B;
              margin-top: 1.5rem;
              margin-bottom: 0.5rem;
              line-height: 1.4;
            }
            .blog-content p {
              margin-bottom: 1.25rem;
              line-height: 1.75;
            }
            .blog-content ul,
            .blog-content ol {
              margin-bottom: 1.25rem;
              padding-left: 1.5rem;
            }
            .blog-content ul {
              list-style-type: disc;
            }
            .blog-content ol {
              list-style-type: decimal;
            }
            .blog-content li {
              margin-bottom: 0.5rem;
              line-height: 1.75;
            }
            .blog-content a {
              color: #2563EB;
              text-decoration: underline;
              text-underline-offset: 2px;
            }
            .blog-content a:hover {
              color: #1e40af;
            }
            .blog-content strong {
              font-weight: 600;
              color: #1E293B;
            }
            .blog-content blockquote {
              border-left: 4px solid #2563EB;
              padding-left: 1rem;
              margin: 1.5rem 0;
              color: #4B5563;
              font-style: italic;
            }
            .blog-content code {
              background-color: #F3F4F6;
              padding: 0.125rem 0.375rem;
              border-radius: 0.25rem;
              font-size: 0.875em;
            }
            .blog-content pre {
              background-color: #1E293B;
              color: #E2E8F0;
              padding: 1rem;
              border-radius: 0.5rem;
              overflow-x: auto;
              margin-bottom: 1.25rem;
            }
            .blog-content pre code {
              background-color: transparent;
              padding: 0;
              color: inherit;
            }
            .blog-content img {
              border-radius: 0.5rem;
              margin: 1.5rem 0;
              max-width: 100%;
              height: auto;
            }
            .blog-content h2:first-child {
              margin-top: 0;
            }
          `,
        }}
      />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import StructuredData from '@/components/StructuredData';
import { getArticleSchema } from '@/lib/structured-data';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog-posts';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found | TurboCharity' };
  }

  return {
    title: `${post.title} | TurboCharity Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

function Breadcrumbs({ postTitle }: { postTitle: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </li>
        <li>
          <Link href="/blog" className="transition-colors hover:text-primary">
            Blog
          </Link>
        </li>
        <li aria-hidden="true">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </li>
        <li className="max-w-[200px] truncate font-medium text-gray-900" aria-current="page">
          {postTitle}
        </li>
      </ol>
    </nav>
  );
}

function CTABanner({ variant = 'default' }: { variant?: 'default' | 'bottom' }) {
  const isBottom = variant === 'bottom';
  return (
    <div
      className={`my-10 rounded-2xl p-8 text-center ${
        isBottom
          ? 'bg-gradient-to-r from-primary to-blue-700 text-white'
          : 'border-2 border-primary/20 bg-primary/5'
      }`}
    >
      <h3 className={`mb-3 text-2xl font-bold ${isBottom ? 'text-white' : 'text-dark'}`}>
        Ready to Start Your Nonprofit?
      </h3>
      <p className={`mx-auto mb-6 max-w-lg text-base ${isBottom ? 'text-blue-100' : 'text-gray-600'}`}>
        TurboCharity makes it easy to go from idea to 501(c)(3) tax-exempt status. AI-powered
        document generation, guided filing, and expert support — all in one platform.
      </p>
      <Link
        href="/pricing"
        className={`inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-bold transition-colors ${
          isBottom
            ? 'bg-white text-primary hover:bg-gray-100'
            : 'bg-primary text-white hover:bg-blue-700'
        }`}
      >
        Start Your Nonprofit Today
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}

function RelatedPosts({ posts }: { posts: typeof blogPosts }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="mb-8 text-2xl font-bold text-dark">Related Articles</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-40 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-10 w-10 text-primary/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mb-2 text-base font-bold text-dark group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, post.category, 3);
  // If not enough from the same category, fill from other posts
  const relatedPosts =
    related.length >= 3
      ? related
      : [
          ...related,
          ...blogPosts
            .filter((p) => p.slug !== post.slug && !related.find((r) => r.slug === p.slug))
            .slice(0, 3 - related.length),
        ];

  // Split content at roughly the midpoint for CTA insertion
  const contentParts = post.content.split('</p>');
  const midpoint = Math.floor(contentParts.length / 2);
  const firstHalf = contentParts.slice(0, midpoint).join('</p>') + '</p>';
  const secondHalf = contentParts.slice(midpoint).join('</p>');

  return (
    <>
      <StructuredData
        data={getArticleSchema({
          title: post.title,
          author: post.author,
          publishedDate: post.publishedDate,
          description: post.excerpt,
        })}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <Container className="py-8 md:py-12">
          <Breadcrumbs postTitle={post.title} />

          <article className="mx-auto max-w-3xl">
            {/* Post header */}
            <header className="mb-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="mb-6 text-3xl font-extrabold leading-tight text-dark md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 pb-6 text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.authorRole}</p>
                  </div>
                </div>
                <span aria-hidden="true" className="hidden sm:inline">&middot;</span>
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span aria-hidden="true" className="hidden sm:inline">&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            {/* Post content — first half */}
            <div
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-dark
                prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl
                prose-p:leading-relaxed prose-p:text-gray-700
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-dark"
              dangerouslySetInnerHTML={{ __html: firstHalf }}
            />

            {/* Mid-content CTA */}
            <CTABanner />

            {/* Post content — second half */}
            <div
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-dark
                prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl
                prose-p:leading-relaxed prose-p:text-gray-700
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-dark"
              dangerouslySetInnerHTML={{ __html: secondHalf }}
            />

            {/* Bottom CTA */}
            <CTABanner variant="bottom" />
          </article>

          {/* Related posts */}
          <RelatedPosts posts={relatedPosts} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

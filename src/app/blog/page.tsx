import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nonprofit Formation Blog | TurboCharity',
  description:
    'Expert guides on starting a 501(c)(3) nonprofit, IRS filing, state incorporation, bylaws, and more. Free resources from TurboCharity.',
  openGraph: {
    title: 'Nonprofit Formation Blog | TurboCharity',
    description: 'Expert guides on starting a 501(c)(3) nonprofit.',
    url: 'https://turbocharity.com/blog',
    siteName: 'TurboCharity',
    type: 'website',
  },
  alternates: {
    canonical: 'https://turbocharity.com/blog',
  },
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-16 sm:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              TurboCharity Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Expert guides and resources for starting your nonprofit
              organization.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-2xl border border-gray-200 p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center gap-x-2 text-xs text-gray-500">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-gray-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

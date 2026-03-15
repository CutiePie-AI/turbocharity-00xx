import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { blogPosts, getAllCategories, getFeaturedPost } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Nonprofit Blog - Tips, Guides & Resources | TurboCharity',
  description:
    'Expert guides on starting a nonprofit, 501(c)(3) applications, bylaws, IRS forms, and nonprofit governance. Free resources for aspiring nonprofit founders.',
  openGraph: {
    title: 'Nonprofit Blog - Tips, Guides & Resources | TurboCharity',
    description:
      'Expert guides on starting a nonprofit, 501(c)(3) applications, bylaws, IRS forms, and nonprofit governance.',
  },
};

function CategoryBadge({ category }: { category: string }) {
  const colorMap: Record<string, string> = {
    'Getting Started': 'bg-blue-100 text-blue-800',
    Legal: 'bg-purple-100 text-purple-800',
    'IRS & Taxes': 'bg-amber-100 text-amber-800',
    Governance: 'bg-green-100 text-green-800',
  };
  const colors = colorMap[category] || 'bg-gray-100 text-gray-800';
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${colors}`}>
      {category}
    </span>
  );
}

function PostCard({
  slug,
  title,
  excerpt,
  publishedDate,
  readTime,
  category,
  author,
}: {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  category: string;
  author: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-12 w-12 text-primary/30"
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
        <div className="absolute left-4 top-4">
          <CategoryBadge category={category} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={publishedDate}>
            {new Date(publishedDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readTime}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-dark group-hover:text-primary transition-colors">
          <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{excerpt}</p>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {author.charAt(0)}
          </div>
          <span>{author}</span>
        </div>
      </div>
    </article>
  );
}

function Sidebar({ categories }: { categories: string[] }) {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-dark">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => {
            const count = blogPosts.filter((p) => p.category === category).length;
            return (
              <li key={category}>
                <span className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                  {category}
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    {count}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Newsletter signup */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="mb-2 text-lg font-bold text-dark">Stay Updated</h3>
        <p className="mb-4 text-sm text-gray-600">
          Get the latest nonprofit formation tips, guides, and IRS updates delivered to your inbox.
        </p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-dark p-6 text-white">
        <h3 className="mb-2 text-lg font-bold">Ready to Start?</h3>
        <p className="mb-4 text-sm text-gray-300">
          Launch your nonprofit in days, not months. TurboCharity handles the paperwork so you can
          focus on your mission.
        </p>
        <Link
          href="/pricing"
          className="inline-block w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Get Started Free
        </Link>
      </div>
    </aside>
  );
}

export default function BlogPage() {
  const featured = getFeaturedPost();
  const categories = getAllCategories();
  const nonFeaturedPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero / Featured Post */}
        {featured && (
          <section className="bg-white border-b border-gray-200">
            <Container className="py-12 md:py-16">
              <div className="grid items-center gap-8 md:grid-cols-2">
                {/* Featured image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <svg
                      className="h-16 w-16 text-primary/25"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    <span className="text-sm font-medium text-primary/40">Featured Article</span>
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                      Featured
                    </span>
                    <CategoryBadge category={featured.category} />
                  </div>
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-dark md:text-4xl">
                    <Link href={`/blog/${featured.slug}`} className="hover:text-primary transition-colors">
                      {featured.title}
                    </Link>
                  </h1>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">{featured.excerpt}</p>
                  <div className="mb-6 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {featured.author.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-700">{featured.author}</span>
                    </div>
                    <span aria-hidden="true">&middot;</span>
                    <time dateTime={featured.publishedDate}>
                      {new Date(featured.publishedDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Read Article
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* Blog Grid + Sidebar */}
        <Container className="py-12 md:py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-dark md:text-3xl">Latest Articles</h2>
            <p className="mt-2 text-gray-600">
              Expert guides and resources to help you start and run your nonprofit successfully.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* Posts grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {nonFeaturedPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  publishedDate={post.publishedDate}
                  readTime={post.readTime}
                  category={post.category}
                  author={post.author}
                />
              ))}
            </div>

            {/* Sidebar */}
            <Sidebar categories={categories} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

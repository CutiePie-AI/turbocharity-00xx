import type { Metadata } from 'next';
import Container from '@/components/Container';
import BlogListClient from '@/components/BlogListClient';
import { blogPosts, BLOG_CATEGORIES } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Nonprofit Formation Blog | TurboCharity',
  description:
    'Expert guides, tips, and insights on nonprofit formation, 501(c)(3) status, bylaws, IRS compliance, and fundraising for new organizations.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

        <Container className="relative py-16 text-center sm:py-20">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            TurboCharity Blog
          </span>
          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Nonprofit Formation Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
            Expert guides on starting a nonprofit, filing for 501(c)(3) status,
            writing bylaws, and everything in between.
          </p>
        </Container>
      </section>

      {/* Blog list */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <BlogListClient
            posts={blogPosts}
            categories={[...BLOG_CATEGORIES]}
          />
        </Container>
      </section>
    </main>
  );
}

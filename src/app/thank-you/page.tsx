import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

/* ── Social share links (static hrefs) ───────────────────── */

const SITE_URL = 'https://turbocharity.com';
const SHARE_TEXT = encodeURIComponent(
  "I just started my nonprofit journey with TurboCharity! From idea to 501(c)(3) in days, not months.",
);

const socialLinks = [
  {
    name: 'Twitter',
    href: `https://twitter.com/intent/tweet?text=${SHARE_TEXT}&url=${encodeURIComponent(SITE_URL)}`,
    color: 'bg-[#1DA1F2] hover:bg-[#1a8cd8]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`,
    color: 'bg-[#0A66C2] hover:bg-[#004182]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`,
    color: 'bg-[#1877F2] hover:bg-[#166fe5]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

/* ── Next steps ──────────────────────────────────────────── */

const nextSteps = [
  {
    title: 'Check your email',
    description:
      'We\'ve sent a confirmation with your account details and next steps for your nonprofit formation.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Join our community',
    description:
      'Connect with other nonprofit founders, share ideas, and get advice from experienced leaders.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Explore our guides',
    description:
      'Browse our library of free resources covering everything from board governance to fundraising.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

/* ── Related blog posts ──────────────────────────────────── */

const blogPosts = [
  {
    title: '5 Steps to Filing Your IRS Form 1023-EZ',
    excerpt:
      'A clear walkthrough of the simplified IRS application for tax-exempt status.',
    href: '#',
    category: 'Guides',
  },
  {
    title: 'How to Write Bylaws That Actually Work',
    excerpt:
      'Practical tips for creating governing documents that serve your mission.',
    href: '#',
    category: 'Governance',
  },
  {
    title: 'Nonprofit Fundraising 101: Where to Start',
    excerpt:
      'From grants to crowdfunding, learn the basics of raising money for your cause.',
    href: '#',
    category: 'Fundraising',
  },
];

/* ── Page ───────────────────────────────────────────────── */

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* ── Hero ────────────────────────────── */}
        <section className="bg-gradient-to-b from-primary/5 to-gray-50 py-20">
          <Container className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
              Welcome aboard!
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600">
              Your signup is complete. You&apos;re one step closer to making a real difference in the&nbsp;world.
            </p>
          </Container>
        </section>

        {/* ── Next steps ─────────────────────── */}
        <section className="py-16">
          <Container>
            <h2 className="text-center text-2xl font-bold text-dark">What happens next</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
              {nextSteps.map((item, idx) => (
                <div
                  key={item.title}
                  className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <span className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Social share ───────────────────── */}
        <section className="border-y border-gray-200 bg-white py-12">
          <Container className="text-center">
            <h2 className="text-xl font-bold text-dark">Spread the word</h2>
            <p className="mt-2 text-sm text-gray-600">
              Help others discover an easier way to start a nonprofit.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors ${link.color}`}
                >
                  {link.icon}
                  Share on {link.name}
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Related blog posts ─────────────── */}
        <section className="py-16">
          <Container>
            <h2 className="text-center text-2xl font-bold text-dark">
              Resources to get you started
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Curated guides to help you along your nonprofit journey.
            </p>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-dark group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read more
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section className="bg-primary py-12">
          <Container className="text-center">
            <h2 className="text-2xl font-bold text-white">
              Ready to take the next step?
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              Start building your nonprofit with our easy-to-use tools.
            </p>
            <Link
              href="/get-started"
              className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-bold text-primary transition-colors hover:bg-blue-50"
            >
              Go to Dashboard
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import DirectorySearch from '@/components/DirectorySearch';
import Accordion from '@/components/Accordion';
import WaitlistForm from '@/components/WaitlistForm';
import { blogPosts } from '@/data/blog-posts';
import { FAQ_ITEMS } from '@/data/faqs';
import { STATES } from '@/data/states';

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  STATS DATA                                                               */
/* ═══════════════════════════════════════════════════════════════════════════ */

const STATS = [
  { value: '50', label: 'State Guides' },
  { value: '$0', label: 'Platform Cost' },
  { value: '1000+', label: 'Nonprofits Helped' },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  HOW IT WORKS                                                             */
/* ═══════════════════════════════════════════════════════════════════════════ */

const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Choose Your State',
    description:
      'Select your state from our directory to see exact filing requirements, fees, and timelines tailored to your location.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Follow Our Guide',
    description:
      'Use our step-by-step guide, templates, and AI-powered tools to prepare your articles of incorporation, bylaws, and IRS forms.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'File & Launch',
    description:
      'Submit your documents to your state and the IRS. We guide you through every step until your 501(c)(3) status is official.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  FEATURED BLOG POSTS (first 3)                                            */
/* ═══════════════════════════════════════════════════════════════════════════ */

const featuredPosts = blogPosts.slice(0, 3);

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  HOME PAGE COMPONENT                                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  const [waitlistEmail, setWaitlistEmail] = useState('');

  return (
    <main>
      {/* ────────────────────── 1. HERO ────────────────────── */}
      <section
        aria-label="Hero"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-teal-300/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Free 501(c)(3) Formation Guides
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            From Idea to 501(c)(3) in Days, Not Months
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            Free state-by-state guides, templates, and AI-powered tools to help you start a nonprofit without expensive lawyers or months of paperwork.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              href="/states"
              className="text-base font-bold shadow-xl shadow-emerald-600/30"
            >
              Browse State Guides
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="#how-it-works"
              className="border-white/60 text-white hover:bg-white/10 hover:text-white"
            >
              See How It Works
            </Button>
          </div>

          {/* Waitlist mini signup */}
          <div className="mt-10 w-full max-w-md">
            <p className="mb-3 text-sm font-medium text-blue-100">
              Get notified when new tools launch:
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handled by WaitlistForm component below
              }}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder-blue-200 backdrop-blur-sm outline-none transition-shadow focus:border-white/50 focus:ring-2 focus:ring-white/25"
                aria-label="Email address for waitlist"
              />
              <Button type="submit" size="md" variant="secondary">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ────────────────── STATS BAR ──────────────────────── */}
      <section aria-label="Platform statistics" className="border-b border-gray-200 bg-white">
        <Container className="py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-600 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ────────────────── HOW IT WORKS ───────────────────── */}
      <section id="how-it-works" aria-label="How it works" className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Three simple steps to create your legally compliant nonprofit.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map((item, i) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Connector line (visible on md+) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-primary/40 to-transparent md:block" />
                )}

                {/* Step icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-lg shadow-blue-500/25">
                  {item.icon}
                </div>

                <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  Step {item.step}
                </span>

                <h3 className="mt-3 text-xl font-bold text-dark">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ────────────── STATE DIRECTORY SEARCH ─────────────── */}
      <section id="states" aria-label="State directory" className="bg-white py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
              Find Your State Guide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Every state has different nonprofit formation requirements. Search below to find your state-specific guide with filing fees, timelines, and step-by-step instructions.
            </p>
          </div>

          <div className="mt-12">
            <DirectorySearch states={STATES} />
          </div>
        </Container>
      </section>

      {/* ────────────── FEATURED BLOG POSTS ────────────────── */}
      <section aria-label="Featured articles" className="bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
              Nonprofit Formation Resources
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Expert guides and templates to help you start and grow your nonprofit.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image placeholder */}
                <div className="flex h-48 items-center justify-center rounded-t-2xl bg-gradient-to-br from-blue-50 to-teal-50">
                  <svg className="h-12 w-12 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-dark group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>{post.readingTime} min read</span>
                    <span className="font-semibold text-primary group-hover:underline">
                      Read more
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:text-blue-700"
            >
              View All Articles
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* ──────────────────── FAQ SECTION ───────────────────── */}
      <section id="faq" aria-label="Frequently asked questions" className="bg-white py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Everything you need to know about starting a nonprofit with TurboCharity.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </Container>
      </section>

      {/* ─────────────────── FINAL CTA ─────────────────────── */}
      <section
        aria-label="Call to action"
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white sm:py-28"
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <Container className="relative text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Start Your Nonprofit?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-200">
            Join thousands of founders who turned their vision into a legally recognized nonprofit &mdash; in days, not months.
          </p>

          <div className="mx-auto mt-10 max-w-lg">
            <WaitlistForm compact className="text-left" />
          </div>

          <p className="mt-6 text-sm text-blue-300">
            No credit card required &middot; Free guides &middot; Cancel anytime
          </p>
        </Container>
      </section>
    </main>
  );
}

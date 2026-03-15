import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/seo';
import { FAQ_ITEMS } from '@/data/faqs';
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import Accordion from '@/components/Accordion';
import Breadcrumb from '@/components/Breadcrumb';
import Container from '@/components/Container';
import StructuredData from '@/components/StructuredData';

const PAGE_TITLE = 'Frequently Asked Questions | TurboCharity';
const PAGE_DESCRIPTION =
  'Find answers to common questions about starting a nonprofit, 501(c)(3) status, IRS Form 1023-EZ, and how TurboCharity can help.';
const PAGE_URL = `${SITE_CONFIG.siteUrl}/faq`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_CONFIG.siteName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: SITE_CONFIG.twitterHandle,
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'FAQ' },
];

const BREADCRUMB_SD_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'FAQ', href: '/faq' },
];

export default function FAQPage() {
  return (
    <main>
      {/* ── Structured Data ────────────────────────────────────────────── */}
      <StructuredData data={faqSchema(FAQ_ITEMS)} />
      <StructuredData data={breadcrumbSchema(BREADCRUMB_SD_ITEMS)} />

      {/* ── Header / Breadcrumb ────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-gray-50 to-white pb-12 pt-8 sm:pb-16 sm:pt-10">
        <Container className="max-w-4xl">
          <Breadcrumb items={BREADCRUMB_ITEMS} />

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-dark sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Everything you need to know about starting a nonprofit, filing for
            501(c)(3) tax-exempt status, and how TurboCharity simplifies the
            entire process.
          </p>
        </Container>
      </section>

      {/* ── FAQ Accordion ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Accordion items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* ── CTA Section ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <Container className="relative max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-200">
            Our team is here to help. Get in touch or start building your
            nonprofit today — no legal expertise required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-started"
              className="inline-block rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-emerald-600/30 transition-colors hover:bg-emerald-600"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-lg border border-white/30 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Contact Support
            </Link>
          </div>

          <p className="mt-4 text-sm text-blue-300">
            No credit card required
          </p>
        </Container>
      </section>
    </main>
  );
}

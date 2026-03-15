import Link from 'next/link';
import type { Metadata } from 'next';
import { FAQ_ITEMS } from '@/data/faqs';
import Accordion from '@/components/Accordion';
import Breadcrumb from '@/components/Breadcrumb';
import Container from '@/components/Container';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TurboCharity',
  description:
    'Find answers to common questions about starting a nonprofit, 501(c)(3) status, IRS Form 1023-EZ, and how TurboCharity can help.',
  openGraph: {
    title: 'Frequently Asked Questions | TurboCharity',
    description:
      'Find answers to common questions about starting a nonprofit, 501(c)(3) status, IRS Form 1023-EZ, and how TurboCharity can help.',
    url: 'https://turbocharity.com/faq',
    siteName: 'TurboCharity',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | TurboCharity',
    description:
      'Find answers to common questions about starting a nonprofit, 501(c)(3) status, IRS Form 1023-EZ, and how TurboCharity can help.',
    site: '@turbocharity',
  },
  alternates: {
    canonical: 'https://turbocharity.com/faq',
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'FAQ' },
];

export default function FaqPage() {
  return (
    <main>
      <StructuredData data={faqStructuredData} />

      {/* ───────────────── Header ───────────────── */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white">
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
              Find answers to common questions about starting a nonprofit,
              obtaining 501(c)(3) status, and how TurboCharity simplifies the
              process.
            </p>
          </div>
        </Container>
      </section>

      {/* ───────────────── Breadcrumb ───────────────── */}
      <section className="border-b border-gray-200 bg-white">
        <Container className="py-4">
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </section>

      {/* ───────────────── FAQ Accordion ───────────────── */}
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">
              Common Questions
            </h2>
            <p className="mt-3 text-gray-600">
              Everything you need to know about forming a nonprofit with
              TurboCharity. Can&apos;t find what you&apos;re looking for? Reach
              out to our support team.
            </p>

            <div className="mt-10">
              <Accordion items={FAQ_ITEMS} />
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-200">
              Our team is here to help. Get in touch or start building your
              nonprofit today — it only takes a few minutes.
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
                className="inline-block rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Contact Support
              </Link>
            </div>
            <p className="mt-4 text-sm text-blue-300">
              No credit card required
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

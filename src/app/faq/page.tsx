import type { Metadata } from 'next';
import Container from '@/components/Container';
import Breadcrumb from '@/components/Breadcrumb';
import Accordion from '@/components/Accordion';
import StructuredData from '@/components/StructuredData';
import { FAQ_ITEMS } from '@/data/faqs';

/* ────────────────────────────── Metadata ────────────────────────────── */

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TurboCharity',
  description:
    'Find answers to common questions about forming a 501(c)(3) nonprofit with TurboCharity. Pricing, timelines, state support, and more.',
  openGraph: {
    title: 'Frequently Asked Questions | TurboCharity',
    description:
      'Find answers to common questions about forming a 501(c)(3) nonprofit with TurboCharity.',
    type: 'website',
  },
};

/* ──────────────────────── Structured Data (JSON-LD) ────────────────── */

function buildFaqJsonLd() {
  return {
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
}

/* ────────────────────────────── Page ────────────────────────────────── */

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50/60">
      <StructuredData data={buildFaqJsonLd()} />

      {/* ───────────── Hero ───────────── */}
      <section className="border-b border-gray-100 bg-white">
        <Container className="py-16 lg:py-20">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ' },
            ]}
          />

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Got Questions?
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Everything you need to know about starting your nonprofit with
              TurboCharity. Can&apos;t find an answer? Reach out to our support
              team.
            </p>
          </div>
        </Container>
      </section>

      {/* ───────────── FAQ Accordion ───────────── */}
      <section>
        <Container className="py-14 lg:py-18">
          <div className="mx-auto max-w-3xl">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </Container>
      </section>
    </main>
  );
}

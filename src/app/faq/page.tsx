import type { Metadata } from 'next';
import Container from '@/components/Container';
import Accordion from '@/components/Accordion';
import StructuredData from '@/components/StructuredData';
import { faqs } from '@/data/faqs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TurboCharity',
  description:
    'Get answers to common questions about starting a nonprofit, 501(c)(3) status, IRS filing, costs, and ongoing compliance requirements.',
};

export default function FaqPage() {
  // Build FAQPage structured data
  const allFaqItems = faqs.flatMap((group) => group.items);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

        <Container className="relative py-16 text-center sm:py-20">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Help Center
          </span>
          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
            Everything you need to know about starting a nonprofit and using
            TurboCharity.
          </p>
        </Container>
      </section>

      {/* FAQ content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {faqs.map((group) => (
              <div key={group.category}>
                {/* Category header */}
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="text-xl font-bold text-dark sm:text-2xl">
                    {group.category}
                  </h2>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Accordion for this category */}
                <div className="rounded-2xl border border-gray-100 bg-white px-6 shadow-sm">
                  <Accordion items={group.items} allowMultiple={false} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gray-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-dark">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Our team is here to help. Reach out and we&apos;ll get back to you
              within 24 hours.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-3 font-bold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

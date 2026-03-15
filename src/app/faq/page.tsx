import type { Metadata } from "next";
import Link from "next/link";
import { faqItems, type FAQItem } from "@/data/faq";
import { generateMetadata as seoMetadata } from "@/lib/seo";

const FAQ_CATEGORIES: Record<FAQItem["category"], string> = {
  general: "General",
  process: "Process & Timeline",
  legal: "Legal & Requirements",
  pricing: "Pricing & Plans",
  security: "Security & Privacy",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  ...seoMetadata(
    "Frequently Asked Questions",
    "Find answers to common questions about starting a 501(c)(3) nonprofit with TurboCharity. Learn about costs, timelines, requirements, and more.",
    "/faq"
  ),
  other: {
    "script:ld+json": JSON.stringify(faqStructuredData),
  },
};

function FAQAccordionItem({ item }: { item: FAQItem }) {
  return (
    <details className="group border-b border-gray-200 last:border-b-0">
      <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors [&::-webkit-details-marker]:hidden">
        <span>{item.question}</span>
        <svg
          className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </summary>
      <div className="pb-5 pr-12 text-gray-600 leading-relaxed">
        {item.answer}
      </div>
    </details>
  );
}

function FAQGroup({
  category,
  label,
  items,
}: {
  category: string;
  label: string;
  items: FAQItem[];
}) {
  return (
    <section id={category} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{label}</h2>
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-200 px-6">
        {items.map((item) => (
          <FAQAccordionItem key={item.question} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function FAQPage() {
  const grouped = Object.entries(FAQ_CATEGORIES).reduce(
    (acc, [key, label]) => {
      const items = faqItems.filter((item) => item.category === key);
      if (items.length > 0) {
        acc.push({ category: key, label, items });
      }
      return acc;
    },
    [] as { category: string; label: string; items: FAQItem[] }[]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about starting a 501(c)(3) nonprofit
            with TurboCharity. Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>

        {/* Category navigation */}
        <nav className="flex flex-wrap gap-2 justify-center mb-12">
          {grouped.map(({ category, label }) => (
            <a
              key={category}
              href={`#${category}`}
              className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* FAQ groups */}
        <div className="space-y-12">
          {grouped.map(({ category, label, items }) => (
            <FAQGroup
              key={category}
              category={category}
              label={label}
              items={items}
            />
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-blue-600 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to start your nonprofit?
          </h2>
          <p className="mt-3 text-lg text-blue-100 max-w-xl mx-auto">
            Join thousands of founders who used TurboCharity to launch their
            501(c)(3) — fast, affordable, and without a lawyer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

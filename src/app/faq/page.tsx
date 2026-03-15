import type { Metadata } from "next";
import { faqItems, faqCategories, type FAQItem } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about starting a 501(c)(3) nonprofit with TurboCharity. Learn about costs, timelines, requirements, and more.",
  alternates: {
    canonical: "https://turbocharity.com/faq",
  },
  other: {
    "script:ld+json": JSON.stringify({
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
    }),
  },
};

function FAQAccordionItem({ item }: { item: FAQItem }) {
  return (
    <details className="group border-b border-gray-200 py-4">
      <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-gray-900 hover:text-blue-600">
        <span className="pr-4 text-lg">{item.question}</span>
        <span className="ml-auto flex-shrink-0 text-gray-400 transition-transform group-open:rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </summary>
      <p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p>
    </details>
  );
}

export default function FAQPage() {
  const groupedFaqs = Object.entries(faqCategories).map(([key, label]) => ({
    category: key as FAQItem["category"],
    label,
    items: faqItems.filter((item) => item.category === key),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about starting a 501(c)(3) nonprofit
            with TurboCharity.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {groupedFaqs
            .filter((group) => group.items.length > 0)
            .map((group) => (
              <section key={group.category}>
                <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                  {group.label}
                </h2>
                <div className="divide-y divide-gray-200">
                  {group.items.map((item) => (
                    <FAQAccordionItem key={item.question} item={item} />
                  ))}
                </div>
              </section>
            ))}
        </div>

        <section className="mt-16 rounded-2xl bg-blue-600 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to start your nonprofit?
          </h2>
          <p className="mt-3 text-lg text-blue-100">
            Join thousands of founders who launched their 501(c)(3) with
            TurboCharity. Get started for free today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/signup"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
            >
              Get started free
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              View pricing
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

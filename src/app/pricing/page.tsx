import { Metadata } from 'next';
import Container from '@/components/Container';
import { PRICING_TIERS, PRICING_FAQS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Pricing | TurboCharity - Affordable Nonprofit Creation',
  description:
    'Start your nonprofit for free or unlock the full document suite for a one-time fee. No subscriptions, no hidden costs.',
  openGraph: {
    title: 'Pricing | TurboCharity',
    description:
      'Start your nonprofit for free or unlock the full document suite for a one-time fee.',
  },
};

/* ---------- Sub-components ---------- */

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <svg
        className="h-5 w-5 flex-shrink-0 text-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function PricingCard({ tier }: { tier: (typeof PRICING_TIERS)[number] }) {
  const ring = tier.highlighted
    ? 'border-primary ring-2 ring-primary/20 shadow-xl shadow-primary/10'
    : 'border-gray-200 shadow-sm';

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-8 transition-shadow hover:shadow-lg ${ring}`}
    >
      {tier.highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-bold text-dark">{tier.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{tier.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-dark">{tier.priceLabel}</span>
        {tier.price > 0 && (
          <span className="text-sm font-medium text-gray-400">one-time</span>
        )}
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f.text} className="flex items-start gap-3">
            <CheckIcon included={f.included} />
            <span
              className={`text-sm ${f.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}
            >
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={tier.ctaHref}
        className={`mt-8 block rounded-xl py-3 text-center font-semibold transition-all ${
          tier.highlighted
            ? 'bg-primary text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700'
            : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}

/* ---------- Feature comparison data ---------- */

const COMPARISON_FEATURES = [
  'Mission statement generator',
  'State requirements lookup',
  'Basic compliance checklist',
  'Community forum access',
  'Articles of Incorporation',
  'Bylaws generation',
  'EIN application guide',
  'IRS Form 1023-EZ assistant',
  'Priority support',
  'Attorney review',
];

/* ---------- Page ---------- */

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-blue-50/60 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Simple, One-Time Pricing
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              No subscriptions. No hidden fees. Pay once and get everything
              you need to launch your nonprofit.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Comparison Table */}
      <section className="border-t border-gray-100 bg-gray-50/60 py-12 sm:py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
            Feature Comparison
          </h2>
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-gray-700">Feature</th>
                  {PRICING_TIERS.map((t) => (
                    <th
                      key={t.name}
                      className="min-w-[100px] py-3 text-center font-semibold text-gray-700"
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((feature, idx) => (
                  <tr
                    key={feature}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}
                  >
                    <td className="py-3 pr-4 text-gray-700">{feature}</td>
                    {PRICING_TIERS.map((tier) => {
                      const match = tier.features.find((f) => f.text === feature);
                      const included = match?.included ?? false;
                      return (
                        <td key={tier.name} className="py-3 text-center">
                          {included ? (
                            <svg
                              className="mx-auto h-5 w-5 text-emerald-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <span className="text-gray-300">&mdash;</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-bold text-dark sm:text-3xl">
            Pricing FAQ
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {PRICING_FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-base font-bold text-dark">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-blue-50/60 to-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-dark sm:text-3xl">
              Start building your nonprofit today
            </h2>
            <p className="mt-3 text-gray-600">
              Join thousands of founders who launched their nonprofits with
              TurboCharity. Start free, upgrade when you are ready.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
              >
                Get started free
              </a>
              <a
                href="/resources"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-8 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Read our guides
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

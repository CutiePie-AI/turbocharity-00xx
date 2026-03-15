import { Metadata } from 'next';
import Container from '@/components/Container';
import { HOW_IT_WORKS_STEPS } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'How It Works | TurboCharity - Start a Nonprofit Step by Step',
  description:
    'Follow our 7-step process to go from idea to IRS-recognized 501(c)(3) nonprofit. Estimated total time: under 3 hours.',
  openGraph: {
    title: 'How It Works | TurboCharity',
    description:
      'Follow our 7-step process to go from idea to IRS-recognized 501(c)(3) nonprofit.',
  },
};

/* ---------- Helpers ---------- */

function parseMins(est: string): number {
  const match = est.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function formatTotalTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours === 0) return `${mins} minutes`;
  if (mins === 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
  return `${hours} hour${hours > 1 ? 's' : ''} ${mins} minutes`;
}

/* ---------- Page ---------- */

export default function HowItWorksPage() {
  const totalMinutes = HOW_IT_WORKS_STEPS.reduce(
    (sum, s) => sum + parseMins(s.estimatedTime),
    0,
  );

  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-blue-50/60 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              How TurboCharity Works
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Go from idea to IRS-recognized 501(c)(3) nonprofit in{' '}
              <span className="font-semibold text-primary">7 simple steps</span>.
              No lawyers required.
            </p>
            {/* Total time badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Estimated total: {formatTotalTime(totalMinutes)}
            </div>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isLast = idx === HOW_IT_WORKS_STEPS.length - 1;
              return (
                <div key={step.step} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline connector */}
                  {!isLast && (
                    <div
                      className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-0.5 bg-gradient-to-b from-primary/40 to-primary/10"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step number circle */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-bold text-dark">
                        {step.title}
                      </h2>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-500">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {step.estimatedTime}
                      </span>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Total Time Summary */}
      <section className="border-y border-gray-100 bg-gray-50/60 py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-dark">Total Estimated Time</h2>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-sm border border-gray-200"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {step.step}
                  </span>
                  <span className="text-sm text-gray-600">{step.estimatedTime}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg font-semibold text-dark">
              Total:{' '}
              <span className="text-primary">
                {formatTotalTime(totalMinutes)}
              </span>{' '}
              of active work
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Plus processing time for state and IRS filings (varies by state)
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-white to-blue-50/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center text-white shadow-xl shadow-primary/20 sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to begin?
            </h2>
            <p className="mt-3 text-blue-100">
              Join thousands of nonprofit founders who used TurboCharity to
              turn their vision into a legally recognized organization.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-primary shadow-lg transition-all hover:bg-blue-50"
              >
                Get started free &rarr;
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-3 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                View pricing
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

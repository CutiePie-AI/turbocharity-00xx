import type { Metadata } from 'next';
import Container from '@/components/Container';
import StateSearch from '@/components/StateSearch';
import { STATES } from '@/lib/states';

export const metadata: Metadata = {
  title: 'Nonprofit Filing Requirements by State | TurboCharity',
  description:
    'Compare nonprofit filing requirements, fees, and processing times for all 50 states. Find everything you need to incorporate your nonprofit organization.',
  openGraph: {
    title: 'Nonprofit Filing Requirements by State | TurboCharity',
    description:
      'Compare nonprofit filing requirements, fees, and processing times for all 50 states.',
  },
};

export default function StatesPage() {
  return (
    <main className="min-h-screen bg-gray-50/60">
      {/* Hero / Header */}
      <section className="bg-white border-b border-gray-100">
        <Container className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              State-by-State Guide
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              Nonprofit Filing Requirements{' '}
              <span className="text-primary">by State</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Every state has different requirements for incorporating a nonprofit. Find your
              state below to learn about filing fees, processing times, and everything you
              need to get started.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-2xl font-extrabold text-primary">{STATES.length}</p>
              <p className="text-xs font-medium text-gray-500">States Covered</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-2xl font-extrabold text-secondary">
                ${Math.min(...STATES.map((s) => s.filingFee))}
              </p>
              <p className="text-xs font-medium text-gray-500">Lowest Filing Fee</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-2xl font-extrabold text-accent">
                {STATES.filter((s) => s.onlineFilingAvailable).length}
              </p>
              <p className="text-xs font-medium text-gray-500">Online Filing States</p>
            </div>
          </div>
        </Container>
      </section>

      {/* States directory */}
      <section>
        <Container className="py-12 lg:py-16">
          <StateSearch states={STATES} />
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-white">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="text-2xl font-extrabold text-dark sm:text-3xl">
            Ready to Start Your Nonprofit?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            TurboCharity handles the paperwork so you can focus on your mission.
            AI-powered filing in any state.
          </p>
          <a
            href="/#pricing"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
          >
            Get Started Free
          </a>
        </Container>
      </section>
    </main>
  );
}

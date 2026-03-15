import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'How TurboCharity Works — 5 Simple Steps to 501(c)(3)',
  description:
    'Learn how TurboCharity takes you from mission statement to tax-exempt status in 5 simple steps. AI-generated documents, state filing, and IRS submission in days instead of months.',
  openGraph: {
    title: 'How TurboCharity Works — 5 Simple Steps to 501(c)(3)',
    description:
      'Learn how TurboCharity takes you from mission statement to tax-exempt status in 5 simple steps.',
  },
};

const steps = [
  {
    number: 1,
    icon: '\u2753',
    title: 'Answer Simple Questions',
    description:
      'Tell us about your mission, board members, and location. Our guided questionnaire covers everything needed to incorporate your nonprofit — no legal jargon required.',
    time: '~15 minutes',
  },
  {
    number: 2,
    icon: '\u2728',
    title: 'AI Generates Your Documents',
    description:
      'Our AI instantly creates state-compliant bylaws, articles of incorporation, and a conflict of interest policy tailored to your organization.',
    time: '~2 minutes',
  },
  {
    number: 3,
    icon: '\u270F\uFE0F',
    title: 'Review & Customize',
    description:
      'Edit every generated document with guided suggestions. Our smart editor highlights important sections and explains legal language in plain English.',
    time: '~30 minutes',
  },
  {
    number: 4,
    icon: '\uD83C\uDFDB\uFE0F',
    title: 'File with the State',
    description:
      'We submit your incorporation papers to the correct state agency, track the filing, and notify you the moment your nonprofit is officially formed.',
    time: '3-7 business days',
  },
  {
    number: 5,
    icon: '\u2705',
    title: 'Apply for 501(c)(3)',
    description:
      'Our system auto-fills IRS Form 1023-EZ using the information you already provided. Review, e-sign, and submit — all without leaving TurboCharity.',
    time: '~20 minutes + IRS processing',
  },
];

const comparisonData = [
  { label: 'Research requirements', traditional: '2-4 weeks', turbo: 'Instant' },
  { label: 'Draft documents', traditional: '2-6 weeks', turbo: '2 minutes' },
  { label: 'Attorney review', traditional: '$1,500-$5,000', turbo: 'Included' },
  { label: 'State filing', traditional: '2-4 weeks', turbo: '3-7 days' },
  { label: 'IRS application', traditional: '4-8 weeks', turbo: '20 minutes' },
  { label: 'Total timeline', traditional: '3-6 months', turbo: '5-10 days' },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28">
          <Container className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl lg:text-6xl">
              How TurboCharity Works
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl">
              Five straightforward steps take you from an idea to a fully
              registered 501(c)(3) nonprofit — powered by AI, guided by experts.
            </p>
          </Container>
        </section>

        {/* ─── Steps Timeline ─── */}
        <section className="py-20 lg:py-28">
          <Container>
            <h2 className="mb-16 text-center text-3xl font-bold text-dark sm:text-4xl">
              Your Path to Tax-Exempt Status
            </h2>

            {/* Desktop horizontal timeline */}
            <div className="hidden lg:block">
              {/* Connector line */}
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute left-0 right-0 top-10 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary" />
                <div className="relative grid grid-cols-5 gap-4">
                  {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center text-center">
                      {/* Circle */}
                      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-lg ring-4 ring-primary/20">
                        {step.icon}
                      </div>
                      <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Step {step.number}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-dark">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                      <span className="mt-3 text-xs font-medium text-secondary">
                        {step.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile / tablet vertical timeline */}
            <div className="lg:hidden">
              <div className="relative ml-6 border-l-2 border-primary/30 pl-8">
                {steps.map((step) => (
                  <div key={step.number} className="relative mb-12 last:mb-0">
                    {/* Dot on the line */}
                    <div className="absolute -left-[2.65rem] flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-md ring-4 ring-primary/20">
                      {step.icon}
                    </div>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Step {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-dark">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                    <span className="mt-2 inline-block text-xs font-medium text-secondary">
                      {step.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── Comparison Timeline ─── */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <Container>
            <h2 className="mb-4 text-center text-3xl font-bold text-dark sm:text-4xl">
              Traditional vs. TurboCharity
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-gray-600">
              See how much time and money you save compared to the traditional
              nonprofit formation process.
            </p>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-dark text-white">
                <div className="px-6 py-4 text-sm font-semibold">Milestone</div>
                <div className="px-6 py-4 text-center text-sm font-semibold">
                  Traditional Route
                </div>
                <div className="px-6 py-4 text-center text-sm font-semibold text-secondary">
                  TurboCharity
                </div>
              </div>

              {/* Table rows */}
              {comparisonData.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } ${
                    i === comparisonData.length - 1
                      ? 'border-t-2 border-primary font-bold'
                      : ''
                  }`}
                >
                  <div className="px-6 py-4 text-sm text-gray-800">{row.label}</div>
                  <div className="px-6 py-4 text-center text-sm text-gray-500">
                    {row.traditional}
                  </div>
                  <div className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    {row.turbo}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── Video Placeholder ─── */}
        <section className="py-20 lg:py-28">
          <Container className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
              Watch TurboCharity in Action
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-gray-600">
              See a 3-minute walkthrough of the entire process — from sign-up to
              IRS submission.
            </p>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  {/* Play button placeholder */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-8 w-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    Video coming soon
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-gradient-to-r from-primary to-blue-700 py-20 lg:py-24">
          <Container className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Launch Your Nonprofit?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Join thousands of changemakers who skipped the paperwork and went
              straight to making an impact.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/get-started" variant="secondary" size="lg">
                Start for Free
              </Button>
              <Button href="/features" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Explore Features
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

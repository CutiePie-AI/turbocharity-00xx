import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Breadcrumb from '@/components/Breadcrumb';
import StateSidebar from '@/components/StateSidebar';
import StructuredData from '@/components/StructuredData';
import { STATES, getAllStateSlugs, getStateBySlug, getStateRegion, type StateInfo } from '@/lib/states';

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return getAllStateSlugs().map((slug) => ({ slug }));
}

/* ---------- Dynamic metadata ---------- */

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const state = getStateBySlug(params.slug);
  if (!state) return {};

  return {
    title: `How to Start a Nonprofit in ${state.name} | TurboCharity`,
    description: `Step-by-step guide to forming a nonprofit in ${state.name}. Filing fee: $${state.filingFee}. Processing time: ${state.processingTime}. ${state.onlineFilingAvailable ? 'Online filing available.' : 'Mail-in filing required.'} Complete ${state.abbreviation} nonprofit incorporation guide.`,
    openGraph: {
      title: `How to Start a Nonprofit in ${state.name} | TurboCharity`,
      description: `Start a nonprofit in ${state.name} — $${state.filingFee} filing fee, ${state.processingTime} processing. Complete step-by-step guide.`,
    },
  };
}

/* ---------- Helpers ---------- */

function getOverview(state: StateInfo): string {
  const onlinePart = state.onlineFilingAvailable
    ? `${state.name} offers convenient online filing through the Secretary of State's office, making the incorporation process straightforward.`
    : `${state.name} currently requires mail-in filing for nonprofit incorporation, so plan for additional processing time.`;

  const noticePart = state.requiresPublicationNotice
    ? ` Note that ${state.name} requires a publication notice as part of the incorporation process, which may add to your timeline and costs.`
    : '';

  return `Filing a nonprofit corporation in ${state.name} (${state.abbreviation}) requires submitting Articles of Incorporation to the state along with a $${state.filingFee} filing fee. ${onlinePart}${noticePart} Typical processing takes ${state.processingTime}.`;
}

function getFilingSteps(state: StateInfo): string[] {
  return [
    `Choose a unique name for your ${state.name} nonprofit and verify availability through the ${state.abbreviation} Secretary of State's business name database.`,
    `Appoint a registered agent with a physical address in ${state.name} to receive legal documents on behalf of your organization.`,
    `Prepare and file your Articles of Incorporation with the ${state.name} Secretary of State, including your nonprofit's purpose, registered agent, and incorporator information.${state.onlineFilingAvailable ? ' You can file online for faster processing.' : ' Submit your filing via mail to the Secretary of State.'}`,
    `Pay the $${state.filingFee} state filing fee.${state.requiresPublicationNotice ? ` Publish the required notice of incorporation in a ${state.name}-approved newspaper.` : ''}`,
    `Draft your corporate bylaws and hold an organizational meeting to elect your initial board of directors and adopt the bylaws.`,
    `Apply for a Federal Employer Identification Number (EIN) from the IRS — this is free and can be done online at irs.gov.`,
    `File IRS Form 1023 or 1023-EZ to apply for 501(c)(3) federal tax-exempt status for your ${state.name} nonprofit.`,
  ];
}

function getRelatedStates(currentSlug: string): StateInfo[] {
  const currentRegion = getStateRegion(currentSlug);
  const related: StateInfo[] = [];

  // First, pick states from the same region
  const sameRegion = STATES.filter(
    (s) => s.slug !== currentSlug && getStateRegion(s.slug) === currentRegion,
  );
  for (const s of sameRegion) {
    if (related.length >= 3) break;
    related.push(s);
  }

  // Fill remaining with popular states
  const popularSlugs = ['california', 'texas', 'new-york', 'florida', 'delaware', 'illinois'];
  for (const slug of popularSlugs) {
    if (related.length >= 3) break;
    const s = STATES.find((st) => st.slug === slug);
    if (s && s.slug !== currentSlug && !related.some((r) => r.slug === s.slug)) {
      related.push(s);
    }
  }

  return related.slice(0, 3);
}

function buildHowToSchema(state: StateInfo, steps: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Start a Nonprofit in ${state.name}`,
    description: `Step-by-step guide to incorporating a nonprofit organization in ${state.name} (${state.abbreviation}).`,
    totalTime: state.processingTime,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: state.filingFee,
    },
    step: steps.map((text, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: `Step ${idx + 1}`,
      text,
    })),
  };
}

/* ---------- Checklist items ---------- */

const requirementsList = [
  { label: 'Articles of Incorporation', description: 'Filed with the Secretary of State' },
  { label: 'Corporate Bylaws', description: 'Internal governance document' },
  { label: 'Employer Identification Number (EIN)', description: 'Federal tax ID from the IRS' },
  { label: 'Registered Agent', description: 'Person or entity to receive legal documents' },
  { label: 'Board of Directors', description: 'Minimum of 3 directors in most states' },
  { label: 'Conflict of Interest Policy', description: 'Required for 501(c)(3) application' },
  { label: 'Initial Meeting Minutes', description: 'Document of organizational meeting' },
  { label: 'State Tax Exemption Application', description: 'Separate from federal 501(c)(3)' },
];

/* ---------- Page component ---------- */

export default function StatePage({ params }: PageProps) {
  const state = getStateBySlug(params.slug);
  if (!state) notFound();

  const overview = getOverview(state);
  const steps = getFilingSteps(state);
  const relatedStates = getRelatedStates(state.slug);
  const howToSchema = buildHowToSchema(state, steps);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'State Guides', href: '/states' },
    { label: state.name },
  ];

  return (
    <main className="min-h-screen bg-gray-50/60">
      <StructuredData data={howToSchema} />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <Container className="py-3">
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </div>

      {/* Hero */}
      <section className="border-b border-gray-100 bg-white">
        <Container className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary">
                {state.abbreviation}
              </span>
              {state.onlineFilingAvailable && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-medium text-secondary">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Online Filing Available
                </span>
              )}
              {state.requiresPublicationNotice && (
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-amber-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Publication Notice Required
                </span>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              How to Start a Nonprofit in {state.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{overview}</p>

            {/* Key stats row */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-primary">${state.filingFee}</p>
                <p className="mt-1 text-xs font-medium text-gray-500">Filing Fee</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                <p className="text-lg font-bold text-dark">{state.processingTime}</p>
                <p className="mt-1 text-xs font-medium text-gray-500">Processing Time</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                <p className="text-lg font-bold text-dark">
                  {state.onlineFilingAvailable ? (
                    <span className="text-secondary">Yes</span>
                  ) : (
                    <span className="text-gray-400">No</span>
                  )}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500">Online Filing</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                <p className="text-lg font-bold text-dark">
                  {state.requiresPublicationNotice ? (
                    <span className="text-amber-600">Yes</span>
                  ) : (
                    <span className="text-secondary">No</span>
                  )}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500">Publication Required</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content sections */}
      <Container className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-4xl gap-12 lg:max-w-6xl lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Requirements Checklist */}
            <section>
              <h2 className="text-2xl font-extrabold text-dark">Requirements</h2>
              <p className="mt-2 text-gray-600">
                Key documents and requirements to incorporate a nonprofit in {state.name}:
              </p>
              <ul className="mt-6 space-y-3">
                {requirementsList.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-dark">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Step-by-Step Guide */}
            <section>
              <h2 className="text-2xl font-extrabold text-dark">
                Step-by-Step Guide for {state.name}
              </h2>
              <p className="mt-2 text-gray-600">
                Follow these steps to incorporate your nonprofit in {state.name}:
              </p>
              <ol className="mt-6 space-y-4">
                {steps.map((step, idx) => (
                  <li key={idx} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {idx + 1}
                    </span>
                    <p className="pt-1 leading-relaxed text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Estimated Costs Breakdown */}
            <section>
              <h2 className="text-2xl font-extrabold text-dark">Estimated Costs</h2>
              <p className="mt-2 text-gray-600">
                Estimated costs to incorporate a nonprofit in {state.name}:
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="px-5 py-3 text-sm font-semibold text-gray-600">Fee Type</th>
                      <th className="px-5 py-3 text-right text-sm font-semibold text-gray-600">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-5 py-3.5 text-sm font-medium text-dark">
                        State Filing Fee (Articles of Incorporation)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                        ${state.filingFee}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 text-sm font-medium text-dark">
                        Expedited Processing (optional)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                        ${Math.round(state.filingFee * 1.5)} - ${state.filingFee * 3}
                      </td>
                    </tr>
                    {state.requiresPublicationNotice && (
                      <tr>
                        <td className="px-5 py-3.5 text-sm font-medium text-dark">
                          Publication Notice
                        </td>
                        <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                          $50 - $300
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-5 py-3.5 text-sm font-medium text-dark">
                        IRS Form 1023-EZ (501c3)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                        $275
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 text-sm font-medium text-dark">
                        IRS Form 1023 Full (501c3)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                        $600
                      </td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="px-5 py-3.5 text-sm font-bold text-dark">
                        Estimated Total (with 1023-EZ)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-bold text-primary">
                        ${state.filingFee + 275}
                        {state.requiresPublicationNotice ? '+' : ''}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Useful Links */}
            <section>
              <h2 className="text-2xl font-extrabold text-dark">Useful Links</h2>
              <div className="mt-6 space-y-3">
                <a
                  href={state.secretaryOfStateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-dark">
                      {state.name} Secretary of State
                    </p>
                    <p className="text-sm text-gray-500">{state.secretaryOfStateUrl}</p>
                  </div>
                  <svg
                    className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.irs.gov/charities-non-profits/application-for-recognition-of-exemption"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-dark">IRS 501(c)(3) Application</p>
                    <p className="text-sm text-gray-500">
                      Apply for federal tax-exempt status
                    </p>
                  </div>
                  <svg
                    className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-dark">IRS EIN Application</p>
                    <p className="text-sm text-gray-500">
                      Get a free Employer Identification Number
                    </p>
                  </div>
                  <svg
                    className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <StateSidebar state={state} />
          </div>
        </div>
      </Container>

      {/* Related States */}
      <section className="border-t border-gray-200 bg-white">
        <Container className="py-12 lg:py-16">
          <h2 className="text-center text-2xl font-extrabold text-dark">
            Explore Nearby States
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
            Compare nonprofit filing requirements in similar states
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
            {relatedStates.map((rs) => (
              <Link
                key={rs.slug}
                href={`/states/${rs.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {rs.abbreviation}
                  </span>
                  <svg
                    className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-bold text-dark group-hover:text-primary transition-colors">
                  {rs.name}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <span>${rs.filingFee} fee</span>
                  <span>{rs.processingTime}</span>
                </div>
                {rs.onlineFilingAvailable && (
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-secondary">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Online Filing
                  </span>
                )}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-gray-50">
        <Container className="py-16 text-center">
          <h2 className="text-2xl font-extrabold text-dark sm:text-3xl">
            Start Your {state.name} Nonprofit Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            TurboCharity makes it easy to incorporate your nonprofit in {state.name}.
            AI-powered filing, expert support, and guaranteed accuracy.
          </p>
          <a
            href="/#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
          >
            Start Your {state.name} Nonprofit Now
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </Container>
      </section>
    </main>
  );
}

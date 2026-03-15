import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import { STATES, type StateInfo } from '@/lib/states';

/* ---------- Static params ---------- */

export function generateStaticParams() {
  return STATES.map((state) => ({ slug: state.slug }));
}

/* ---------- Dynamic metadata ---------- */

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const state = STATES.find((s) => s.slug === params.slug);
  if (!state) return {};

  return {
    title: `${state.name} Nonprofit Filing Requirements | TurboCharity`,
    description: `Learn how to start a nonprofit in ${state.name}. Filing fee: $${state.filingFee}. Processing time: ${state.processingTime}. Complete guide to ${state.abbreviation} nonprofit incorporation.`,
    openGraph: {
      title: `${state.name} Nonprofit Filing Requirements | TurboCharity`,
      description: `Start a nonprofit in ${state.name} — $${state.filingFee} filing fee, ${state.processingTime} processing.`,
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
  const steps = [
    `Choose a unique name for your ${state.name} nonprofit and verify availability through the ${state.abbreviation} Secretary of State's business name database.`,
    `Appoint a registered agent with a physical address in ${state.name} to receive legal documents on behalf of your organization.`,
    `Prepare and file your Articles of Incorporation with the ${state.name} Secretary of State, including your nonprofit's purpose, registered agent, and incorporator information.${state.onlineFilingAvailable ? ' You can file online for faster processing.' : ' Submit your filing via mail to the Secretary of State.'}`,
    `Pay the $${state.filingFee} state filing fee.${state.requiresPublicationNotice ? ` Publish the required notice of incorporation in a ${state.name}-approved newspaper.` : ''}`,
    `Draft your corporate bylaws and hold an organizational meeting to elect your initial board of directors and adopt the bylaws.`,
    `Apply for a Federal Employer Identification Number (EIN) from the IRS — this is free and can be done online at irs.gov.`,
    `File IRS Form 1023 or 1023-EZ to apply for 501(c)(3) federal tax-exempt status for your ${state.name} nonprofit.`,
  ];
  return steps;
}

function getRelatedStates(currentSlug: string): StateInfo[] {
  const currentIndex = STATES.findIndex((s) => s.slug === currentSlug);
  const related: StateInfo[] = [];
  const totalStates = STATES.length;

  // Pick 4 states: 2 nearby in list + 2 popular
  const popularSlugs = ['california', 'texas', 'new-york', 'florida', 'delaware', 'illinois'];
  const nearby = [
    STATES[(currentIndex + 1) % totalStates],
    STATES[(currentIndex - 1 + totalStates) % totalStates],
  ].filter((s) => s.slug !== currentSlug);

  for (const s of nearby) {
    if (related.length < 4 && !related.some((r) => r.slug === s.slug)) {
      related.push(s);
    }
  }

  for (const slug of popularSlugs) {
    if (related.length >= 4) break;
    const s = STATES.find((st) => st.slug === slug);
    if (s && s.slug !== currentSlug && !related.some((r) => r.slug === s.slug)) {
      related.push(s);
    }
  }

  return related.slice(0, 4);
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
  const state = STATES.find((s) => s.slug === params.slug);
  if (!state) notFound();

  const overview = getOverview(state);
  const steps = getFilingSteps(state);
  const relatedStates = getRelatedStates(state.slug);

  return (
    <main className="min-h-screen bg-gray-50/60">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <Container className="py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/states" className="hover:text-primary transition-colors">
              States
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-dark">{state.name}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
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
              {state.name} Nonprofit Filing Requirements
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{overview}</p>

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
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-3 lg:max-w-6xl">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Requirements Checklist */}
            <section>
              <h2 className="text-2xl font-extrabold text-dark">Requirements Checklist</h2>
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

            {/* Filing Steps */}
            <section>
              <h2 className="text-2xl font-extrabold text-dark">
                Filing Steps for {state.name}
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
                    <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Fees Breakdown */}
            <section>
              <h2 className="text-2xl font-extrabold text-dark">Fees Breakdown</h2>
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
                      <td className="px-5 py-3.5 text-sm text-dark font-medium">
                        State Filing Fee (Articles of Incorporation)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                        ${state.filingFee}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 text-sm text-dark font-medium">
                        Expedited Processing (optional)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                        ${Math.round(state.filingFee * 1.5)} - ${state.filingFee * 3}
                      </td>
                    </tr>
                    {state.requiresPublicationNotice && (
                      <tr>
                        <td className="px-5 py-3.5 text-sm text-dark font-medium">
                          Publication Notice
                        </td>
                        <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                          $50 - $300
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-5 py-3.5 text-sm text-dark font-medium">
                        IRS Form 1023-EZ (501c3)
                      </td>
                      <td className="px-5 py-3.5 text-right text-sm font-semibold text-dark">
                        $275
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 text-sm text-dark font-medium">
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
          <aside className="space-y-8 lg:col-span-1">
            {/* CTA Card */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-50 p-6">
              <h3 className="text-lg font-extrabold text-dark">
                Start Your {state.name} Nonprofit with TurboCharity
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Skip the paperwork headaches. Our AI-powered platform handles your{' '}
                {state.name} nonprofit filing from start to finish.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  `${state.name} Articles of Incorporation`,
                  'Custom Bylaws & Policies',
                  '501(c)(3) Application',
                  'Registered Agent Service',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/#pricing"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
              >
                Start Your {state.abbreviation} Nonprofit
              </a>
            </div>

            {/* Related States */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-extrabold text-dark">Related States</h3>
              <p className="mt-1 text-sm text-gray-500">
                Explore nonprofit filing in other states
              </p>
              <div className="mt-4 space-y-3">
                {relatedStates.map((rs) => (
                  <Link
                    key={rs.slug}
                    href={`/states/${rs.slug}`}
                    className="flex items-center justify-between rounded-lg border border-gray-100 p-3 transition-colors hover:border-primary/20 hover:bg-primary/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-600">
                        {rs.abbreviation}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-dark">{rs.name}</p>
                        <p className="text-xs text-gray-500">${rs.filingFee} fee</p>
                      </div>
                    </div>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-extrabold text-dark">Quick Facts</h3>
              <dl className="mt-4 space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm text-gray-500">State</dt>
                  <dd className="text-sm font-semibold text-dark">{state.name}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm text-gray-500">Abbreviation</dt>
                  <dd className="text-sm font-semibold text-dark">{state.abbreviation}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm text-gray-500">Filing Fee</dt>
                  <dd className="text-sm font-semibold text-primary">${state.filingFee}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm text-gray-500">Processing</dt>
                  <dd className="text-sm font-semibold text-dark">{state.processingTime}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <dt className="text-sm text-gray-500">Online Filing</dt>
                  <dd className="text-sm font-semibold">
                    {state.onlineFilingAvailable ? (
                      <span className="text-secondary">Available</span>
                    ) : (
                      <span className="text-gray-400">Not available</span>
                    )}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Publication Notice</dt>
                  <dd className="text-sm font-semibold">
                    {state.requiresPublicationNotice ? (
                      <span className="text-amber-600">Required</span>
                    ) : (
                      <span className="text-secondary">Not required</span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-white">
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
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
          >
            Start Your {state.name} Nonprofit with TurboCharity
          </a>
        </Container>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { states, getStateBySlug, getRelatedStates } from '@/data/states';

interface StatePageProps {
  params: { state: string };
}

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export function generateMetadata({ params }: StatePageProps): Metadata {
  const state = getStateBySlug(params.state);
  if (!state) return { title: 'State Not Found | TurboCharity' };

  return {
    title: `How to Start a Nonprofit in ${state.name} | TurboCharity`,
    description: `Complete guide to forming a 501(c)(3) nonprofit in ${state.name}. Filing fee: $${state.filingFee}. Processing time: ${state.processingTime}. Step-by-step instructions.`,
  };
}

const checklistSteps = [
  {
    title: 'Choose a Name for Your Nonprofit',
    description:
      'Select a unique name that complies with your state\'s naming requirements. The name typically must include "Incorporated," "Corporation," or an abbreviation, and cannot be too similar to existing entities.',
  },
  {
    title: 'Appoint a Registered Agent',
    description:
      'Designate a registered agent with a physical address in your state who will receive legal documents, tax notices, and official correspondence on behalf of your nonprofit.',
  },
  {
    title: 'File Articles of Incorporation',
    description:
      'Submit your formation documents to the state. These articles establish your nonprofit as a legal entity and should include required provisions for 501(c)(3) eligibility, such as a purpose clause and dissolution clause.',
  },
  {
    title: 'Create Bylaws & Hold Organizational Meeting',
    description:
      'Draft bylaws that govern how your nonprofit operates, including board structure, officer roles, meeting procedures, and conflict of interest policies. Hold your first board meeting to formally adopt them.',
  },
  {
    title: 'Obtain an EIN from the IRS',
    description:
      'Apply for an Employer Identification Number (EIN) from the IRS. This is your nonprofit\'s federal tax ID and is required for opening bank accounts, filing taxes, and hiring employees.',
  },
  {
    title: 'Apply for Federal 501(c)(3) Tax Exemption',
    description:
      'File IRS Form 1023 or 1023-EZ to apply for federal tax-exempt status. This is the critical step that allows donors to make tax-deductible contributions to your organization.',
  },
  {
    title: 'Apply for State Tax Exemption',
    description:
      'After receiving federal tax-exempt status, apply for applicable state tax exemptions including income tax, sales tax, and property tax exemptions where available.',
  },
  {
    title: 'Register for Charitable Solicitation',
    description:
      'Most states require nonprofits to register before soliciting donations from the public. File the necessary registration with your state\'s charity regulator, typically the Attorney General or Secretary of State.',
  },
];

export default function StatePage({ params }: StatePageProps) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const relatedStates = getRelatedStates(state.slug, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <Container className="py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/directory" className="transition-colors hover:text-primary">
                State Guides
              </Link>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-medium text-gray-900">{state.name}</span>
            </nav>
          </Container>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-blue-800 py-12 text-white">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-200">
                {state.abbreviation} Nonprofit Formation Guide
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How to Start a Nonprofit in {state.name}
              </h1>
              <p className="mt-4 text-lg text-blue-100">{state.description}</p>
            </div>
          </Container>
        </section>

        <Container className="py-12">
          <div className="lg:flex lg:gap-12">
            {/* Main Content */}
            <div className="flex-1">
              {/* Key Info Cards */}
              <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Filing Fee
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">${state.filingFee}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Processing Time
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">{state.processingTime}</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Publication Notice
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">
                    {state.requiresPublicationNotice ? 'Required' : 'Not Required'}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    State Tax Exemption
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">
                    {state.hasStateTaxExemption ? 'Available' : 'N/A'}
                  </p>
                </div>
              </div>

              {/* Requirements Summary */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {state.name} Nonprofit Requirements at a Glance
                </h2>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                        &#10003;
                      </span>
                      <span className="text-gray-700">
                        File Articles of Incorporation with the {state.name} Secretary of State
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                        &#10003;
                      </span>
                      <span className="text-gray-700">
                        Pay the ${state.filingFee} state filing fee
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                        &#10003;
                      </span>
                      <span className="text-gray-700">
                        Appoint a registered agent with a physical address in {state.name}
                      </span>
                    </li>
                    {state.requiresPublicationNotice && (
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs text-amber-600">
                          !
                        </span>
                        <span className="text-gray-700">
                          Publish a notice of incorporation in a local newspaper (required in {state.name})
                        </span>
                      </li>
                    )}
                    {state.hasStateTaxExemption && (
                      <li className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                          &#10003;
                        </span>
                        <span className="text-gray-700">
                          Apply for {state.name} state tax exemption after receiving federal 501(c)(3) status
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </section>

              {/* Step-by-Step Checklist */}
              <section className="mb-10">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Step-by-Step Incorporation Checklist
                </h2>
                <div className="space-y-4">
                  {checklistSteps.map((step, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                          <p className="mt-2 text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-800 p-8 text-white sm:p-12">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Let TurboCharity Handle This For You
                  </h2>
                  <p className="mt-4 text-blue-100">
                    Skip the paperwork and legal complexity. Our AI-powered platform will
                    incorporate your nonprofit in {state.name}, generate your bylaws, obtain your
                    EIN, and prepare your 501(c)(3) application &mdash; all in days, not months.
                  </p>
                  <div className="mt-8">
                    <Button href="/" variant="secondary" size="lg">
                      Start Your {state.name} Nonprofit Today
                    </Button>
                  </div>
                  <p className="mt-4 text-sm text-blue-200">
                    Starting at $49 &middot; No hidden fees &middot; Money-back guarantee
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar - Related States */}
            <aside className="mt-12 lg:mt-0 lg:w-72 lg:shrink-0">
              <div className="sticky top-8">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-lg font-semibold text-gray-900">
                    Explore Other States
                  </h2>
                  <ul className="space-y-3">
                    {relatedStates.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/directory/${related.slug}`}
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-50"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900 group-hover:text-primary">
                              {related.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              ${related.filingFee} &middot; {related.processingTime}
                            </p>
                          </div>
                          <svg
                            className="h-4 w-4 text-gray-400 group-hover:text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">Need Help?</h2>
                  <p className="mb-4 text-sm text-gray-600">
                    Our nonprofit formation experts can answer your questions about incorporating
                    in {state.name}.
                  </p>
                  <Button href="/" variant="outline" size="sm" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

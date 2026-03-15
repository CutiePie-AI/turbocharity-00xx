import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import { resources, RESOURCE_CATEGORIES } from '@/data/resources';

export const metadata: Metadata = {
  title: 'Nonprofit Resources & Tools | TurboCharity',
  description:
    'Free resources, templates, guides, and tools to help you start and run your nonprofit organization. Curated by TurboCharity.',
};

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function FreeBadge() {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
      Free
    </span>
  );
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />

        <Container className="relative py-16 text-center sm:py-20">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Free Resources
          </span>
          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Nonprofit Resources & Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
            Guides, templates, and tools to help you start and manage your
            nonprofit organization successfully.
          </p>
        </Container>
      </section>

      {/* Resources grouped by category */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="space-y-16">
            {RESOURCE_CATEGORIES.map((category) => {
              const categoryResources = resources.filter(
                (r) => r.category === category
              );
              if (categoryResources.length === 0) return null;

              return (
                <div key={category}>
                  {/* Section header */}
                  <div className="mb-6 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-dark">
                      {category}
                    </h2>
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500">
                      {categoryResources.length}{' '}
                      {categoryResources.length === 1
                        ? 'resource'
                        : 'resources'}
                    </span>
                  </div>

                  {/* Resource cards */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryResources.map((resource) => {
                      const cardContent = (
                        <>
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-base font-bold text-dark transition-colors group-hover:text-primary">
                              {resource.title}
                            </h3>
                            <div className="flex shrink-0 items-center gap-2">
                              {resource.isFree && <FreeBadge />}
                              {resource.isExternal && <ExternalIcon />}
                            </div>
                          </div>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                            {resource.description}
                          </p>
                          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                            {resource.isExternal
                              ? 'Visit Resource'
                              : 'View Resource'}
                            <svg
                              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                        </>
                      );

                      const cardClassName =
                        'group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md';

                      if (resource.isExternal) {
                        return (
                          <a
                            key={resource.id}
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cardClassName}
                          >
                            {cardContent}
                          </a>
                        );
                      }

                      return (
                        <Link
                          key={resource.id}
                          href={resource.href}
                          className={cardClassName}
                        >
                          {cardContent}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-2xl bg-gray-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-dark">
              Ready to Put These Resources to Work?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              TurboCharity automates the nonprofit formation process using AI.
              Answer a few questions and we generate all your documents.
            </p>
            <Link
              href="/get-started"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              Start Your Nonprofit Free
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Breadcrumb from '@/components/Breadcrumb';
import Badge from '@/components/Badge';
import Card from '@/components/ui/Card';
import StructuredData from '@/components/StructuredData';
import { RESOURCES, type ResourceCategory } from '@/data/resources';

/* ────────────────────────────── Metadata ────────────────────────────── */

export const metadata: Metadata = {
  title: 'Nonprofit Resources & Tools | TurboCharity',
  description:
    'Free resources, guides, templates, and tools to help you start and run your nonprofit organization successfully.',
  openGraph: {
    title: 'Nonprofit Resources & Tools | TurboCharity',
    description:
      'Free resources, guides, templates, and tools to help you start and run your nonprofit organization successfully.',
    type: 'website',
  },
};

/* ────────────────────────────── Helpers ─────────────────────────────── */

const CATEGORY_ORDER: ResourceCategory[] = [
  'Getting Started',
  'Legal',
  'Financial',
  'Growth',
];

const CATEGORY_META: Record<
  ResourceCategory,
  { description: string; icon: string; badgeVariant: 'primary' | 'secondary' | 'default' | 'outline' }
> = {
  'Getting Started': {
    description:
      'Everything you need to know to launch your nonprofit from scratch.',
    icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
    badgeVariant: 'primary',
  },
  Legal: {
    description:
      'Understand the legal documents and compliance requirements for nonprofits.',
    icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z',
    badgeVariant: 'secondary',
  },
  Financial: {
    description:
      'Budgeting, grant writing, and financial compliance resources for nonprofits.',
    icon: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
    badgeVariant: 'default',
  },
  Growth: {
    description:
      'Strategies for fundraising, volunteer management, and scaling your impact.',
    icon: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
    badgeVariant: 'primary',
  },
};

/** Group resources by category, preserving the predefined order. */
function groupByCategory() {
  const grouped = new Map<ResourceCategory, typeof RESOURCES>();

  for (const category of CATEGORY_ORDER) {
    const items = RESOURCES.filter((r) => r.category === category);
    if (items.length > 0) {
      grouped.set(category, items);
    }
  }

  return grouped;
}

/* ──────────────────────── Structured Data (JSON-LD) ────────────────── */

function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nonprofit Resources & Tools',
    description:
      'Free resources, guides, templates, and tools to help you start and run your nonprofit organization successfully.',
    url: 'https://turbocharity.com/resources',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: RESOURCES.length,
      itemListElement: RESOURCES.map((resource, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: resource.title,
          description: resource.excerpt,
          url: `https://turbocharity.com/resources/${resource.slug}`,
        },
      })),
    },
  };
}

/* ────────────────────────────── Category Icon ───────────────────────── */

function CategoryIcon({ d }: { d: string }) {
  return (
    <svg
      className="h-6 w-6 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

/* ────────────────────────────── External Link Icon ──────────────────── */

function ExternalLinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

/* ────────────────────────────── Page ────────────────────────────────── */

export default function ResourcesPage() {
  const grouped = groupByCategory();

  return (
    <main className="min-h-screen bg-gray-50/60">
      <StructuredData data={buildJsonLd()} />

      {/* ───────────── Hero ───────────── */}
      <section className="border-b border-gray-100 bg-white">
        <Container className="py-16 lg:py-20">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Resources' },
            ]}
          />

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Free Guides &amp; Templates
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              Nonprofit Resources{' '}
              <span className="text-primary">&amp; Tools</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Everything you need to start, manage, and grow your nonprofit
              organization. Our curated library of guides covers legal
              requirements, financial planning, and growth strategies — all
              free.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-6">
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-primary">
                {RESOURCES.length}
              </p>
              <p className="text-xs font-medium text-gray-500">Free Guides</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-secondary">
                {CATEGORY_ORDER.length}
              </p>
              <p className="text-xs font-medium text-gray-500">Categories</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-accent">100%</p>
              <p className="text-xs font-medium text-gray-500">Free Access</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────── Resource Categories ───────────── */}
      {Array.from(grouped.entries()).map(([category, resources]) => {
        const meta = CATEGORY_META[category];
        return (
          <section
            key={category}
            id={category.toLowerCase().replace(/\s+/g, '-')}
            className="border-b border-gray-100"
          >
            <Container className="py-14 lg:py-18">
              {/* Category header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CategoryIcon d={meta.icon} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-dark sm:text-3xl">
                    {category}
                  </h2>
                  <p className="mt-1 max-w-2xl text-gray-600">
                    {meta.description}
                  </p>
                </div>
              </div>

              {/* Resource grid */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    rel="noopener"
                    className="group block"
                  >
                    <Card hover className="flex h-full flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Badge variant={meta.badgeVariant}>{category}</Badge>
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                            Free
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {resource.readTime}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-dark group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>

                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                        {resource.excerpt}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                        Read guide
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </Card>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {/* ───────────── External Resources Section ───────────── */}
      <section className="border-b border-gray-100">
        <Container className="py-14 lg:py-18">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-dark sm:text-3xl">
                External Resources
              </h2>
              <p className="mt-1 max-w-2xl text-gray-600">
                Trusted third-party tools and official government resources for nonprofit founders.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'IRS Tax Exempt Organization Search',
                description: 'Search for existing tax-exempt organizations and verify 501(c)(3) status on the official IRS database.',
                url: 'https://www.irs.gov/charities-non-profits/tax-exempt-organization-search',
                free: true,
              },
              {
                title: 'IRS Form 1023-EZ (Pay.gov)',
                description: 'File IRS Form 1023-EZ online for streamlined 501(c)(3) tax-exempt status application.',
                url: 'https://www.pay.gov/public/form/start/29759424',
                free: false,
              },
              {
                title: 'GuideStar / Candid',
                description: 'Research nonprofit organizations, access Form 990 data, and benchmark your nonprofit against peers.',
                url: 'https://www.guidestar.org/',
                free: true,
              },
              {
                title: 'Grants.gov',
                description: 'Find and apply for federal grants. The official source for all federally available grant opportunities.',
                url: 'https://www.grants.gov/',
                free: true,
              },
              {
                title: 'National Council of Nonprofits',
                description: 'Resources, tools, and advocacy for nonprofit organizations across the United States.',
                url: 'https://www.councilofnonprofits.org/',
                free: true,
              },
              {
                title: 'VolunteerMatch',
                description: 'Connect with volunteers passionate about your cause. Post opportunities and manage your volunteer program.',
                url: 'https://www.volunteermatch.org/',
                free: true,
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card hover className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline">External</Badge>
                    {item.free && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                        Free
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-dark group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    Visit site
                    <ExternalLinkIcon />
                  </span>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── CTA Section ───────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <Container className="relative text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Put These Resources to Work?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-200">
            TurboCharity automates the paperwork so you can focus on your
            mission. Start your 501(c)(3) today with AI-powered document
            generation.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-600/30 transition-colors hover:bg-emerald-600"
            >
              Get Started Free
            </Link>
            <Link
              href="/states"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              View State Guides
            </Link>
          </div>

          <p className="mt-4 text-sm text-blue-300">
            No credit card required
          </p>
        </Container>
      </section>
    </main>
  );
}

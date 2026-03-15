import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Resources — Guides, Templates & Tools for Nonprofits | TurboCharity',
  description:
    'Explore nonprofit formation guides, downloadable templates, a state-by-state filing directory, FAQs, and our blog. Everything you need to launch and run a 501(c)(3).',
  openGraph: {
    title: 'Resources — Guides, Templates & Tools for Nonprofits',
    description:
      'Explore nonprofit formation guides, downloadable templates, a state-by-state filing directory, FAQs, and our blog.',
  },
};

/* ────────────────────────────────────────────────────────── */
/*  Resource categories                                       */
/* ────────────────────────────────────────────────────────── */

interface ResourceCard {
  icon: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  color: string;
}

const categories: ResourceCard[] = [
  {
    icon: '\uD83D\uDCD6',
    title: 'Nonprofit Formation Guide',
    description:
      'A comprehensive, step-by-step guide covering everything from choosing a name to filing your 1023-EZ. Written in plain English for first-time founders.',
    href: '/resources/formation-guide',
    linkLabel: 'Read the guide',
    color: 'bg-blue-50 text-primary',
  },
  {
    icon: '\uD83D\uDCDD',
    title: 'Blog & Articles',
    description:
      'Tips on governance, fundraising, compliance deadlines, and nonprofit management — updated weekly by our team of nonprofit experts.',
    href: '/blog',
    linkLabel: 'Browse articles',
    color: 'bg-emerald-50 text-secondary',
  },
  {
    icon: '\uD83D\uDDFA\uFE0F',
    title: 'State Filing Directory',
    description:
      'Requirements, fees, and direct agency links for incorporating a nonprofit in all 50 states plus DC. Filter by your state to see exactly what you need.',
    href: '/resources/state-directory',
    linkLabel: 'Find your state',
    color: 'bg-amber-50 text-accent',
  },
  {
    icon: '\u2753',
    title: 'Frequently Asked Questions',
    description:
      'Quick answers to the most common questions about nonprofit formation, 501(c)(3) status, costs, timelines, and ongoing compliance requirements.',
    href: '/faq',
    linkLabel: 'View FAQ',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: '\uD83D\uDCC4',
    title: 'Downloadable Templates',
    description:
      'Free, lawyer-reviewed templates for bylaws, board resolutions, meeting minutes, conflict of interest policies, and donation receipts.',
    href: '/resources/templates',
    linkLabel: 'Download templates',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: '\uD83C\uDF93',
    title: 'Webinars & Workshops',
    description:
      'On-demand video workshops covering nonprofit accounting basics, board recruitment strategies, grant writing, and annual filing walkthroughs.',
    href: '/resources/webinars',
    linkLabel: 'Watch now',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: '\uD83D\uDCCA',
    title: 'Compliance Checklist',
    description:
      'Interactive checklists for federal and state compliance. Track your progress from formation through your first annual filing in one place.',
    href: '/resources/compliance-checklist',
    linkLabel: 'Get the checklist',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: '\uD83D\uDCAC',
    title: 'Community Forum',
    description:
      'Connect with other nonprofit founders, ask questions, share experiences, and learn from a supportive community of changemakers.',
    href: '/community',
    linkLabel: 'Join the conversation',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: '\uD83D\uDCE6',
    title: 'Nonprofit Starter Kit',
    description:
      'A bundled download with every template, checklist, and quick-start guide you need to launch your nonprofit — all in one ZIP file.',
    href: '/resources/starter-kit',
    linkLabel: 'Download starter kit',
    color: 'bg-orange-50 text-orange-600',
  },
];

/* ────────────────────────────────────────────────────────── */
/*  Page component                                            */
/* ────────────────────────────────────────────────────────── */

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28">
          <Container className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Resources
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl">
              Guides, templates, tools, and expert insights to help you launch
              and manage your nonprofit with confidence.
            </p>
          </Container>
        </section>

        {/* ─── Resource Grid ─── */}
        <section className="py-20 lg:py-28">
          <Container>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${card.color}`}
                  >
                    {card.icon}
                  </div>

                  {/* Content */}
                  <h2 className="mt-5 text-xl font-bold text-dark group-hover:text-primary">
                    {card.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {card.description}
                  </p>

                  {/* Link label */}
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-blue-700">
                    {card.linkLabel}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── Newsletter CTA ─── */}
        <section className="bg-gradient-to-r from-primary to-blue-700 py-20 lg:py-24">
          <Container className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Stay Up to Date
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Get nonprofit tips, compliance reminders, and new resources
              delivered to your inbox every month.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-lg border-0 px-5 py-3 text-sm text-gray-900 shadow-sm focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-all hover:bg-emerald-600"
              >
                Subscribe
              </button>
            </form>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

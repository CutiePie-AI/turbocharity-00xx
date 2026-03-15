import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Features — Everything You Need to Launch Your Nonprofit | TurboCharity',
  description:
    'AI document generation, IRS auto-fill, state compliance tracking, board management, and ongoing compliance tools. Discover every feature TurboCharity offers.',
  openGraph: {
    title: 'Features — Everything You Need to Launch Your Nonprofit',
    description:
      'AI document generation, IRS auto-fill, state compliance tracking, board management, and ongoing compliance tools.',
  },
};

/* ────────────────────────────────────────────────────────── */
/*  Feature data                                              */
/* ────────────────────────────────────────────────────────── */

const features = [
  {
    id: 'smart-docs',
    badge: 'Document Generation',
    title: 'Smart Document Generation',
    description:
      'Our AI creates state-compliant bylaws, articles of incorporation, conflict of interest policies, and more — tailored to your mission, board size, and jurisdiction. Every document is reviewed against current state requirements so you never have to worry about outdated templates.',
    bullets: [
      'State-specific articles of incorporation',
      'Customizable bylaws with guided editing',
      'Conflict of interest policy included',
      'Organizational resolutions & minutes templates',
    ],
    icon: '\uD83D\uDCDD',
  },
  {
    id: 'irs-autofill',
    badge: 'IRS Filing',
    title: 'IRS Form Auto-Fill',
    description:
      'TurboCharity securely connects to your financial accounts through Plaid and pre-fills IRS Form 1023-EZ with accurate data. No more hunting for EIN confirmation letters or re-entering your address five times.',
    bullets: [
      'Auto-populated Form 1023-EZ',
      'Secure financial account linking via Plaid',
      'Built-in eligibility checker',
      'E-signature and electronic submission',
    ],
    icon: '\uD83D\uDCCB',
  },
  {
    id: 'compliance-tracker',
    badge: 'Compliance',
    title: 'State Compliance Tracker',
    description:
      'A real-time dashboard shows your filing status with every required state agency. Color-coded indicators let you see at a glance what is complete, pending, or needs attention — across all 50 states.',
    bullets: [
      'Real-time filing status dashboard',
      'Color-coded progress indicators',
      'Automated deadline reminders',
      'Direct links to state agency portals',
    ],
    icon: '\uD83D\uDDFA\uFE0F',
  },
  {
    id: 'board-management',
    badge: 'Governance',
    title: 'Board Management',
    description:
      'Invite board members, assign roles, schedule meetings, and track votes — all from one place. Meeting minutes are auto-generated from agenda items so you can focus on the discussion, not the documentation.',
    bullets: [
      'Member directory with role management',
      'Meeting scheduler with agenda builder',
      'Auto-generated meeting minutes',
      'Vote tracking and resolution archive',
    ],
    icon: '\uD83D\uDC65',
  },
  {
    id: 'ongoing-compliance',
    badge: 'Annual Filings',
    title: 'Ongoing Compliance',
    description:
      'After formation, TurboCharity keeps working for you. Annual filing reminders, auto-generated Form 990-N, and state annual report preparation ensure your nonprofit stays in good standing year after year.',
    bullets: [
      'Annual filing deadline alerts',
      'Auto-generated Form 990-N (e-Postcard)',
      'State annual report drafts',
      'Charitable solicitation renewal tracking',
    ],
    icon: '\uD83D\uDD04',
  },
];

const integrations = [
  { name: 'Plaid', description: 'Secure bank linking' },
  { name: 'Stripe', description: 'Donation processing' },
  { name: 'QuickBooks', description: 'Accounting sync' },
  { name: 'Google Workspace', description: 'Email & docs' },
  { name: 'Slack', description: 'Team notifications' },
];

const securityItems = [
  {
    icon: '\uD83D\uDEE1\uFE0F',
    title: 'SOC 2 Type II',
    description:
      'Independently audited controls for security, availability, and confidentiality.',
  },
  {
    icon: '\uD83D\uDD12',
    title: 'AES-256 Encryption',
    description:
      'All data encrypted at rest and in transit using bank-grade AES-256 encryption.',
  },
  {
    icon: '\uD83D\uDDC4\uFE0F',
    title: 'Data Protection',
    description:
      'GDPR and CCPA compliant. Your data is yours — export or delete it any time.',
  },
];

/* ────────────────────────────────────────────────────────── */
/*  Page component                                            */
/* ────────────────────────────────────────────────────────── */

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28">
          <Container className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Everything You Need to Launch Your Nonprofit
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl">
              From your first bylaw to your annual filing, TurboCharity gives
              you the tools, intelligence, and guidance to operate with
              confidence.
            </p>
            <div className="mt-8">
              <Button href="/get-started" size="lg">
                Get Started Free
              </Button>
            </div>
          </Container>
        </section>

        {/* ─── Alternating Feature Sections ─── */}
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={feature.id}
              id={feature.id}
              className={`py-20 lg:py-28 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <Container>
                <div
                  className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {feature.badge}
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-dark sm:text-4xl">
                      {feature.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {feature.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-700">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs text-secondary">
                            &#10003;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image placeholder */}
                  <div className="w-full flex-1">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
                      <div className="text-center">
                        <span className="text-5xl">{feature.icon}</span>
                        <p className="mt-3 text-sm text-gray-500">
                          {feature.title} illustration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}

        {/* ─── Integrations ─── */}
        <section className="py-20 lg:py-28">
          <Container className="text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Integrates With Your Favorite Tools
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Seamlessly connect TurboCharity to the platforms you already use.
            </p>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {integrations.map((int) => (
                <div
                  key={int.name}
                  className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-500">
                    {int.name[0]}
                  </div>
                  <span className="mt-3 font-semibold text-dark">{int.name}</span>
                  <span className="mt-1 text-xs text-gray-500">{int.description}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── Security ─── */}
        <section className="bg-dark py-20 text-white lg:py-28">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Enterprise-Grade Security
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Your nonprofit data is sensitive. We treat it that way.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
              {securityItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 text-center"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="bg-gradient-to-r from-primary to-blue-700 py-20 lg:py-24">
          <Container className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Start Building Your Nonprofit Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              No credit card required. Answer a few questions and let AI handle
              the paperwork.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/get-started" variant="secondary" size="lg">
                Get Started Free
              </Button>
              <Button
                href="/how-it-works"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                See How It Works
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

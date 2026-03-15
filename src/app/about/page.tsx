import Link from 'next/link';
import type { Metadata } from 'next';
import { generatePageMeta } from '@/lib/seo';

export const metadata: Metadata = generatePageMeta('about');

const STATS = [
  { value: '50', label: 'States Covered' },
  { value: '$2,000+', label: 'Saved Per Nonprofit' },
  { value: '10x', label: 'Faster Than Lawyers' },
  { value: '100%', label: 'IRS Compliant' },
];

const VALUES = [
  {
    title: 'Accessibility',
    description:
      'Starting a nonprofit should not require thousands in legal fees. We make the process affordable and available to everyone.',
  },
  {
    title: 'Accuracy',
    description:
      'Our platform generates state-specific, IRS-compliant documents so your filing is right the first time.',
  },
  {
    title: 'Speed',
    description:
      'What used to take months with a lawyer now takes days. We automate the paperwork so you can focus on your mission.',
  },
  {
    title: 'Transparency',
    description:
      'No hidden fees, no confusing legal jargon. We guide you through every step in plain English.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-teal-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            About TurboCharity
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            We believe everyone with a vision to do good deserves the tools to
            make it official — without the red tape and legal fees.
          </p>
        </div>
      </section>

      {/* ───────────────── Mission ───────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
          Our Mission
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
          <p>
            TurboCharity exists to democratize nonprofit creation. Starting a
            501(c)(3) has traditionally meant hiring expensive lawyers, navigating
            confusing government forms, and waiting months for approval. We
            think that&apos;s broken.
          </p>
          <p>
            Our AI-powered platform generates state-specific articles of
            incorporation, bylaws, conflict-of-interest policies, and even
            auto-fills IRS Form 1023-EZ — all in a fraction of the time and
            cost of the traditional process.
          </p>
          <p>
            Whether you&apos;re a student launching a community project, a
            grassroots organizer formalizing your movement, or a social
            entrepreneur building something big, TurboCharity gives you the
            same professional-quality documents that used to cost thousands.
          </p>
        </div>
      </section>

      {/* ───────────────── Stats ───────────────── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-primary sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Values ───────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            What We Stand For
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our core values guide every feature we build and every decision we
            make.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-dark">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── Team Placeholder ───────────────── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
              Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A small, passionate team of builders, lawyers, and nonprofit
              veterans dedicated to making charitable work easier.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Coming Soon',
                role: 'Founder & CEO',
                initials: 'TC',
              },
              {
                name: 'Coming Soon',
                role: 'Head of Product',
                initials: 'TC',
              },
              {
                name: 'Coming Soon',
                role: 'Nonprofit Legal Advisor',
                initials: 'TC',
              },
            ].map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-2xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-bold text-dark">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Start Your Nonprofit?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-200">
            Join the movement of founders creating legally recognized nonprofits
            in days, not months.
          </p>

          <div className="mt-10">
            <Link
              href="/get-started"
              className="inline-block rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-emerald-600/30 transition-colors hover:bg-emerald-600"
            >
              Get Started Free
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-300">
            No credit card required
          </p>
        </div>
      </section>
    </main>
  );
}

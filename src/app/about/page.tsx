import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'About TurboCharity - Making Nonprofit Creation Accessible to Everyone',
  description:
    'Learn about TurboCharity\'s mission to make nonprofit creation accessible, affordable, and fast. Meet our team and discover our values.',
  openGraph: {
    title: 'About TurboCharity - Making Nonprofit Creation Accessible to Everyone',
    description:
      'Learn about TurboCharity\'s mission to make nonprofit creation accessible, affordable, and fast.',
  },
};

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'Co-Founder & CEO',
    bio: 'Former nonprofit attorney with 12 years of experience helping organizations obtain 501(c)(3) status. Sarah saw firsthand how the complexity and cost of nonprofit formation prevented passionate people from making a difference. She founded TurboCharity to change that.',
    initials: 'SM',
  },
  {
    name: 'David Chen',
    role: 'Co-Founder & CTO',
    bio: 'Full-stack engineer and AI specialist who previously built compliance automation tools at a Fortune 500 company. David leads the engineering team and is passionate about using technology to remove barriers for social good organizations.',
    initials: 'DC',
  },
  {
    name: 'Michael Torres',
    role: 'Head of Nonprofit Services',
    bio: 'IRS Enrolled Agent and nonprofit consultant who has helped over 500 organizations navigate the tax-exempt application process. Michael ensures every TurboCharity user gets accurate, up-to-date guidance based on the latest IRS regulations.',
    initials: 'MT',
  },
];

const values = [
  {
    name: 'Accessibility',
    description:
      'Nonprofit creation shouldn\'t require a law degree or deep pockets. We make the process understandable and affordable for everyone, regardless of their background or budget.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Transparency',
    description:
      'No hidden fees, no confusing jargon, no surprises. We believe you deserve to understand every step of the process and every dollar you spend.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Innovation',
    description:
      'We leverage AI and modern technology to automate the tedious parts of nonprofit formation, so you can focus on what matters most — your mission and your community.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    name: 'Community',
    description:
      'We\'re building more than a product — we\'re building a community of changemakers. Every nonprofit we help launch makes the world a little bit better.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero / Mission */}
        <section className="bg-gradient-to-b from-primary/5 to-white py-20 md:py-28">
          <Container className="text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Our Mission
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-dark md:text-5xl lg:text-6xl">
              Making Nonprofit Creation{' '}
              <span className="text-primary">Accessible to Everyone</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              We believe that anyone with a passion for making a difference should be able to start a
              nonprofit — without navigating a maze of legal complexity or spending thousands on
              attorney fees.
            </p>
          </Container>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-dark">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  TurboCharity was born out of frustration. Our co-founder Sarah Mitchell spent over
                  a decade as a nonprofit attorney, watching passionate founders struggle through
                  mountains of paperwork, confusing IRS forms, and legal jargon that seemed designed
                  to discourage them. Many of the people she worked with had incredible ideas for
                  serving their communities but were held back by a process that was unnecessarily
                  complex, slow, and expensive.
                </p>
                <p>
                  In 2024, Sarah teamed up with David Chen, an AI engineer who shared her vision of
                  using technology to democratize access to legal services. Together, they built
                  TurboCharity — a platform that takes the entire nonprofit formation process and
                  makes it as simple as answering a few questions. Our AI generates state-compliant
                  Articles of Incorporation, IRS-ready bylaws, conflict of interest policies, and
                  even pre-fills your Form 1023-EZ application.
                </p>
                <p>
                  What used to take months and cost thousands of dollars can now be done in days for
                  a fraction of the price. But speed and affordability are only part of the
                  equation. We built TurboCharity to be educational, too — every step of the process
                  includes clear explanations so you understand not just what you&apos;re filing, but
                  why. Because when you understand the foundation of your nonprofit, you&apos;re better
                  equipped to lead it.
                </p>
                <p>
                  Today, TurboCharity has helped thousands of founders across all 50 states turn
                  their ideas into legally recognized 501(c)(3) organizations. From first-time
                  founders to seasoned community leaders, we&apos;re proud to be the platform that
                  people trust to launch their missions.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-16 md:py-24">
          <Container>
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-dark md:text-4xl">Our Values</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                These four principles guide everything we build and every interaction we have with
                nonprofit founders.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-dark">{value.name}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-dark md:text-4xl">Meet the Team</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                We&apos;re a team of nonprofit experts, engineers, and advocates united by a single
                goal: making it easier for you to do good.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Avatar placeholder */}
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-700 text-2xl font-bold text-white">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-gradient-to-r from-primary to-blue-700 py-16 md:py-24">
          <Container className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Launch Your Nonprofit?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Join thousands of founders who have used TurboCharity to turn their ideas into
              legally recognized 501(c)(3) organizations.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-gray-100"
              >
                Get Started Today
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Read Our Blog
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

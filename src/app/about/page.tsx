import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About TurboCharity | Our Mission to Democratize Nonprofit Creation',
  description:
    'Learn about TurboCharity\'s mission to make nonprofit creation accessible to everyone through AI-powered tools and expert guidance.',
  openGraph: {
    title: 'About TurboCharity',
    description:
      'Our mission is to democratize nonprofit creation so every good idea gets a fair shot at changing the world.',
    url: 'https://turbocharity.com/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission: Democratize Nonprofit Creation
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We believe every great cause deserves a chance to become a reality, regardless of budget
            or legal expertise.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every year, thousands of passionate individuals have ideas that could transform their
            communities. They want to launch after-school programs, food banks, environmental
            initiatives, and mental health services. But before they can make any of that happen, they
            hit a wall: the legal and financial barriers of creating a nonprofit organization.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Traditional nonprofit formation costs between $2,000 and $5,000 in legal fees alone.
            The process takes months of navigating complex IRS paperwork, state filings, and governance
            documents. For many aspiring changemakers -- especially those in underserved communities --
            these barriers are simply too high. Good ideas die before they ever get a chance to make
            an impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The system was designed for organizations with resources, not for the grassroots leaders
            who need it most. We set out to change that.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            TurboCharity uses artificial intelligence to guide you through every step of nonprofit
            creation. Our platform generates your articles of incorporation, bylaws, conflict of
            interest policies, and IRS Form 1023 or 1023-EZ -- all tailored to your specific mission
            and state requirements.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What used to take months now takes days. What used to cost thousands now costs a fraction
            of the price. Our AI-powered tools do not just fill in templates -- they understand nonprofit
            law and adapt to your unique situation, asking the right questions and producing documents
            that meet legal standards.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We also provide step-by-step guidance on state-specific filing requirements, board
            governance best practices, and ongoing compliance obligations. You are never left guessing
            what to do next.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We envision a world where starting a nonprofit is as straightforward as starting a blog.
            A world where the quality of an idea -- not the size of a legal budget -- determines
            whether a cause gets off the ground. Every community organizer, every passionate volunteer,
            every visionary leader deserves a fair shot at turning their idea into a legally recognized
            organization.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our long-term goal is to support nonprofit founders from formation through their first
            year of operations: helping with grant applications, donor management, compliance filings,
            and everything in between. We are building the operating system for the next generation of
            nonprofits.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every good idea deserves a fair shot. That is not just our tagline -- it is the principle
            that drives every feature we build, every guide we write, and every founder we support.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Team</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We are a team of nonprofit veterans, legal experts, and technologists united by a shared
            mission.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Placeholder Cards */}
            {[
              {
                role: 'CEO & Co-Founder',
                description:
                  'Nonprofit sector veteran with 15+ years of experience in organization development.',
              },
              {
                role: 'CTO & Co-Founder',
                description:
                  'Full-stack engineer and AI specialist passionate about civic technology.',
              },
              {
                role: 'Head of Legal',
                description:
                  'Nonprofit attorney who has helped form hundreds of 501(c)(3) organizations.',
              },
            ].map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nonprofit?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of founders who have used TurboCharity to bring their vision to life.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}

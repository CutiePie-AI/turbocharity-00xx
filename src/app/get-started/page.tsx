import type { Metadata } from 'next';
import GetStartedWizard from '@/components/GetStartedWizard';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Start Your Nonprofit | TurboCharity',
  description:
    'Launch your 501(c)(3) nonprofit in days. Complete our simple wizard to get started with AI-powered document generation tailored to your state.',
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 px-4 py-16 text-center text-white sm:px-6 sm:py-20">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Start Your Nonprofit
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
          Answer a few questions and we&apos;ll generate everything you need to
          incorporate and file for 501(c)(3) status.
        </p>
      </section>

      {/* Wizard */}
      <section className="mx-auto -mt-8 max-w-2xl px-4 sm:px-6">
        <GetStartedWizard />
      </section>

      {/* Trust badges */}
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <TrustBadges />
      </section>
    </main>
  );
}

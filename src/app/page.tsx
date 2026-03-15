'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import ExitIntentBanner from '@/components/ExitIntentBanner';
import LeadMagnetPopup, { useLeadMagnetTrigger } from '@/components/LeadMagnetPopup';

export default function Home() {
  const { showPopup, closePopup } = useLeadMagnetTrigger();

  return (
    <>
      <ExitIntentBanner />
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">TurboCharity</h1>
          <p className="mt-4 text-lg text-gray-600">
            From Idea to 501(c)(3) in Days, Not Months
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Started Free
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
      <LeadMagnetPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
}

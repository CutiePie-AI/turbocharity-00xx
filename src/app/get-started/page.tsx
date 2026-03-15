import type { Metadata } from "next";
import GetStartedWizard from "@/components/GetStartedWizard";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Start Your Nonprofit | TurboCharity",
  description:
    "Launch your 501(c)(3) nonprofit in days. Our AI-powered wizard walks you through every step — state filings, IRS forms, bylaws, and more.",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero header */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 px-4 pb-16 pt-20 text-center text-white sm:px-6 sm:pb-20 sm:pt-28">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Start Your Nonprofit Today
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-blue-100">
          Answer a few questions and we&apos;ll generate your state-compliant
          documents in minutes.
        </p>
      </section>

      {/* Wizard */}
      <section className="-mt-10 px-4 pb-16 sm:px-6">
        <GetStartedWizard />
      </section>

      {/* Trust badges */}
      <section className="border-t border-gray-100 bg-white px-4 py-12 sm:px-6">
        <TrustBadges className="mx-auto max-w-4xl" />
      </section>
    </main>
  );
}

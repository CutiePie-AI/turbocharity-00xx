import Link from 'next/link';
import type { Metadata } from 'next';
import { generatePageMeta } from '@/lib/seo';

export const metadata: Metadata = generatePageMeta('terms');

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: March 14, 2026</p>

      <div className="mt-10 space-y-10 text-gray-600 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-dark [&_h2]:mb-3 [&_p]:mb-4">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the TurboCharity website at{' '}
            <Link href="/" className="text-primary hover:underline">
              turbocharity.com
            </Link>{' '}
            and related services (collectively, the &quot;Service&quot;), you
            agree to be bound by these Terms of Service (&quot;Terms&quot;). If
            you do not agree to these Terms, do not use the Service.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            TurboCharity provides an AI-powered platform that assists users in
            creating nonprofit organization documents, including articles of
            incorporation, bylaws, and IRS Form 1023-EZ preparation. Our
            Service generates documents based on information you provide and
            applicable state and federal requirements.
          </p>
        </section>

        <section>
          <h2>3. Not Legal Advice</h2>
          <p>
            <strong>
              TurboCharity is not a law firm and does not provide legal advice.
            </strong>{' '}
            The documents and information provided through our Service are for
            informational and self-help purposes only. We recommend consulting
            with a qualified attorney for legal advice specific to your
            situation. Use of our Service does not create an attorney-client
            relationship.
          </p>
        </section>

        <section>
          <h2>4. User Accounts</h2>
          <p>
            To access certain features of the Service, you must create an
            account. You are responsible for:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>Providing accurate and complete registration information</li>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2>5. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>
              Provide truthful and accurate information about your nonprofit
              organization
            </li>
            <li>Use the Service only for lawful purposes</li>
            <li>
              Not use the Service to create fraudulent or misleading documents
            </li>
            <li>
              Review all generated documents before filing with government
              agencies
            </li>
            <li>
              Comply with all applicable federal, state, and local laws and
              regulations
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Fees and Payment</h2>
          <p>
            Certain features of the Service require payment. All fees are
            displayed before purchase. Payments are processed securely through
            our third-party payment processor. All fees are non-refundable
            unless otherwise stated or required by applicable law.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            The Service, including its design, text, graphics, logos, and
            software, is owned by TurboCharity and protected by copyright,
            trademark, and other intellectual property laws. Documents generated
            for you through the Service are yours to use for their intended
            purpose.
          </p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TurboCharity shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Service. Our total
            liability shall not exceed the amount you paid us in the 12 months
            preceding the claim.
          </p>
          <p>
            We do not guarantee that filings will be accepted by any government
            agency. Processing times and outcomes depend on factors outside our
            control.
          </p>
        </section>

        <section>
          <h2>9. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, whether express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the Service will be
            uninterrupted, error-free, or secure.
          </p>
        </section>

        <section>
          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless TurboCharity, its
            officers, directors, employees, and agents from any claims,
            damages, losses, liabilities, and expenses (including attorneys&apos;
            fees) arising from your use of the Service or violation of these
            Terms.
          </p>
        </section>

        <section>
          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service at any time,
            with or without cause. Upon termination, your right to use the
            Service ceases immediately. Sections that by their nature should
            survive termination shall survive, including intellectual property,
            limitation of liability, and indemnification provisions.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the State of Delaware, without regard to conflict of law
            principles. Any disputes arising under these Terms shall be resolved
            in the state or federal courts located in Delaware.
          </p>
        </section>

        <section>
          <h2>13. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify you of material changes by posting the updated Terms on this
            page with a revised &quot;Last updated&quot; date. Your continued
            use of the Service after changes constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section>
          <h2>14. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact
            us at:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:support@turbocharity.com"
              className="text-primary hover:underline"
            >
              support@turbocharity.com
            </a>
          </p>
          <p>
            <strong>TurboCharity</strong>
            <br />
            Attn: Legal Team
          </p>
        </section>
      </div>
    </main>
  );
}

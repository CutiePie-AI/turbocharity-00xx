import Link from 'next/link';
import type { Metadata } from 'next';
import { generatePageMeta } from '@/lib/seo';

export const metadata: Metadata = generatePageMeta('privacy');

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: March 14, 2026</p>

      <div className="mt-10 space-y-10 text-gray-600 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-dark [&_h2]:mb-3 [&_p]:mb-4">
        <section>
          <h2>1. Introduction</h2>
          <p>
            TurboCharity (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            operates the website at{' '}
            <Link href="/" className="text-primary hover:underline">
              turbocharity.com
            </Link>{' '}
            and related services. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website or use our services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> When you create an account or
            use our services, we may collect your name, email address, mailing
            address, phone number, and payment information.
          </p>
          <p>
            <strong>Nonprofit Information:</strong> To generate your formation
            documents, we collect information about your planned nonprofit,
            including mission statement, board member names and addresses, and
            organizational structure.
          </p>
          <p>
            <strong>Usage Data:</strong> We automatically collect information
            about how you interact with our services, including your IP address,
            browser type, pages visited, and time spent on pages.
          </p>
          <p>
            <strong>Cookies:</strong> We use cookies and similar tracking
            technologies to enhance your experience, analyze trends, and
            administer the website.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>Generate nonprofit formation documents tailored to your state</li>
            <li>Process payments and manage your account</li>
            <li>Send transactional emails related to your filings</li>
            <li>Improve and optimize our platform</li>
            <li>Provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>
              <strong>Service providers</strong> who assist us in operating our
              platform (payment processors, hosting providers, email services)
            </li>
            <li>
              <strong>Government agencies</strong> when required to process your
              nonprofit filings (e.g., state Secretary of State offices, the IRS)
            </li>
            <li>
              <strong>Legal authorities</strong> when required by law or to
              protect our rights
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information, including encryption in transit (TLS/SSL) and
            at rest. However, no method of transmission over the Internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is
            active or as needed to provide you services. We may retain certain
            information as required by law or for legitimate business purposes,
            such as resolving disputes and enforcing our agreements.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="mb-4 ml-6 list-disc space-y-1">
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a
              href="mailto:support@turbocharity.com"
              className="text-primary hover:underline"
            >
              support@turbocharity.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>8. Third-Party Services</h2>
          <p>
            Our platform may contain links to third-party websites and services.
            We are not responsible for the privacy practices of these third
            parties. We encourage you to review their privacy policies before
            providing any personal information.
          </p>
        </section>

        <section>
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not
            knowingly collect personal information from children under 13. If we
            learn we have collected information from a child under 13, we will
            delete it promptly.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the updated policy on this page
            with a revised &quot;Last updated&quot; date. Your continued use of
            our services after changes are posted constitutes acceptance of the
            revised policy.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
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
            Attn: Privacy Team
          </p>
        </section>
      </div>
    </main>
  );
}

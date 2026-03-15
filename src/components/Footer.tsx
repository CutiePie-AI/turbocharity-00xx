import Link from 'next/link';
import Container from '@/components/Container';
import NewsletterSignup from '@/components/NewsletterSignup';

const quickLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'State Guides', href: '/states' },
  { label: 'Get Started', href: '/get-started' },
  { label: 'Blog', href: '/blog' },
];

const resourceLinks = [
  { label: 'Nonprofit Formation Guide', href: '/blog/how-to-start-a-501c3-nonprofit-step-by-step-guide' },
  { label: 'IRS Form 1023-EZ Guide', href: '/blog/irs-form-1023-ez-eligibility-and-filing-guide' },
  { label: 'Bylaws Template', href: '/blog/nonprofit-bylaws-template-what-to-include' },
  { label: 'Resources', href: '/resources' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'About', href: '/about' },
];

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'twitter':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return null;
  }
}

const socialLinks = [
  { name: 'twitter', href: 'https://twitter.com/turbocharity', label: 'Twitter' },
  { name: 'facebook', href: 'https://facebook.com/turbocharity', label: 'Facebook' },
  { name: 'linkedin', href: 'https://linkedin.com/company/turbocharity', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-dark text-gray-300">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1.5">
              <span className="text-xl" aria-hidden="true">{'\u26A1'}</span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Turbo<span className="text-primary">Charity</span>
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
              AI-powered nonprofit creation. From idea to 501(c)(3) in days, not
              months. Free state-by-state guides, templates, and tools.
            </p>

            {/* Social media links */}
            <div className="mt-5 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-10 border-t border-gray-700 pt-8">
          <NewsletterSignup dark />
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TurboCharity. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

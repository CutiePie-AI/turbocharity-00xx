import Link from 'next/link';
import Container from './Container';

const footerLinks = {
  Product: [
    { href: '/get-started', label: 'Get Started' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#features', label: 'Features' },
  ],
  Company: [
    { href: '/contact', label: 'Contact' },
    { href: '/thank-you', label: 'Community' },
  ],
  Legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-dark text-gray-300">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              TurboCharity
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              From Idea to 501(c)(3) in Days, Not Months. AI-powered nonprofit creation.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
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
          ))}
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} TurboCharity. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

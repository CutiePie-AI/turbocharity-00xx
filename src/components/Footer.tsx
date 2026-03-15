import Link from 'next/link';
import Container from '@/components/Container';

const footerLinks = {
  Product: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
  ],
  Resources: [
    { name: 'Resource Hub', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-dark text-gray-300">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              <span aria-hidden="true">&#9889;</span> TurboCharity
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              From Idea to 501(c)(3) in Days, Not Months. AI-powered nonprofit creation.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.name}
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

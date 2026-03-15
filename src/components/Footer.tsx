import Link from 'next/link';

const footerLinks = {
  Product: [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Get Started', href: '/pricing' },
  ],
  Resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Nonprofit Guide', href: '/blog/how-to-start-a-nonprofit-complete-guide' },
    { name: '501(c)(3) vs 501(c)(4)', href: '/blog/501c3-vs-501c4-differences' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/about#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-xl font-bold text-white">Turbo</span>
              <span className="text-xl font-bold text-primary">Charity</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              From idea to 501(c)(3) in days, not months. AI-powered nonprofit
              creation made simple and affordable.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
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

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TurboCharity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

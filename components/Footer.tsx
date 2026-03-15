import Link from 'next/link';
import { Zap } from 'lucide-react';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const columns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'State Guides', href: '/states' },
      { label: 'Nonprofit Types', href: '/nonprofit-types' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Glossary', href: '/glossary' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Twitter', href: 'https://twitter.com/turbocharity' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/turbocharity' },
      { label: 'Email', href: 'mailto:hello@turbocharity.com' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top section: Logo + Columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Zap className="h-7 w-7 text-[#2563EB]" aria-hidden="true" />
              <span className="text-xl font-bold tracking-tight">TurboCharity</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              The fastest way to launch your nonprofit. AI-powered tools to handle
              formation, compliance, and 501(c)(3) applications.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.title} className="col-span-1 md:col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                      {...(link.href.startsWith('http') || link.href.startsWith('mailto')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TurboCharity. All rights reserved.
          </p>
          <p className="text-sm italic text-gray-500">
            From idea to 501(c)(3) in days, not months.
          </p>
        </div>
      </div>
    </footer>
  );
}

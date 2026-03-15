import Link from "next/link";

const footerLinks = {
  Platform: [
    { name: "Get Started", href: "/get-started" },
    { name: "Pricing", href: "/pricing" },
    { name: "Directory", href: "/directory" },
    { name: "Blog", href: "/blog" },
  ],
  Resources: [
    { name: "Starting a Nonprofit", href: "/guides/complete-guide-starting-nonprofit" },
    { name: "501(c)(3) Guide", href: "/guides/understanding-501c3-status" },
    { name: "Writing Bylaws", href: "/guides/writing-nonprofit-bylaws" },
    { name: "Compliance Checklist", href: "/guides/nonprofit-compliance-checklist" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-primary">
                Turbo<span className="text-secondary">Charity</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              AI-powered nonprofit creation platform. From idea to 501(c)(3) in
              days, not months.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {category}
              </h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} TurboCharity, Inc. All rights
              reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              TurboCharity is not a law firm and does not provide legal advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

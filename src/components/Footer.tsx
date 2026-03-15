import Link from "next/link";

const footerLinks = {
  Product: [
    { name: "Get Started", href: "/get-started" },
    { name: "Pricing", href: "/pricing" },
    { name: "Directory", href: "/directory" },
    { name: "Blog", href: "/blog" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  Resources: [
    { name: "Guides", href: "/guides" },
    { name: "FAQ", href: "/faq" },
    { name: "State Requirements", href: "/states" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TurboCharity, Inc. All rights
            reserved. TurboCharity is not a law firm and does not provide legal
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

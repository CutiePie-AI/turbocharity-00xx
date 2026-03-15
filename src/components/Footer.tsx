import { Container } from "./Container";
import { NewsletterSignup } from "./NewsletterSignup";

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "https://twitter.com/turbocharity", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/company/turbocharity", external: true },
      { label: "Email", href: "mailto:hello@turbocharity.com" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      {/* ---------- Newsletter band ---------- */}
      <Container className="py-12 sm:py-16">
        <NewsletterSignup />
      </Container>

      {/* ---------- Link columns ---------- */}
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
          {FOOTER_COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href, ...rest }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...("external" in rest
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* ---------- Bottom bar ---------- */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-gray-500">
          <p>&copy; 2024 TurboCharity. All rights reserved.</p>
          <p className="text-gray-500">
            From idea to 501(c)(3) in days, not months.
          </p>
        </Container>
      </div>
    </footer>
  );
}

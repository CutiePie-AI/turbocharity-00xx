export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Directory", href: "/directory" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Directory", href: "/directory" },
    { label: "Guides", href: "/guides" },
    { label: "Tools", href: "/tools" },
    { label: "Pricing", href: "/pricing" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
    { label: "API", href: "/api" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;

export const SITE_NAME = "TurboCharity";
export const SITE_TAGLINE = "From idea to 501(c)(3) in days, not months.";
export const SITE_DESCRIPTION =
  "TurboCharity uses AI to streamline every step of nonprofit creation — from filing paperwork to launching your mission. Start your 501(c)(3) today.";

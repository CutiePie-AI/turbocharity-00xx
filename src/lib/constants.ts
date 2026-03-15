export const SITE_NAME = "TurboCharity";

export const TAGLINE = "From idea to 501(c)(3) in days, not months.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Directory", href: "/directory" },
  { label: "Guides", href: "/guides" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Directory", href: "/directory" },
    { label: "Guides", href: "/guides" },
    { label: "Tools", href: "/tools" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/turbocharity",
  github: "https://github.com/turbocharity",
  linkedin: "https://linkedin.com/company/turbocharity",
  youtube: "https://youtube.com/@turbocharity",
} as const;

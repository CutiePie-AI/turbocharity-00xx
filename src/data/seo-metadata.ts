export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

const seoMetadata: Record<string, SeoMetadata> = {
  "/": {
    title: "TurboCharity — AI-Powered Nonprofit Creation | From Idea to 501(c)(3) in Days",
    description:
      "Launch your nonprofit fast with TurboCharity. AI-powered platform handles incorporation, bylaws, and IRS Form 1023-EZ filing so you skip the lawyers.",
    keywords: [
      "start a nonprofit",
      "501(c)(3) application",
      "nonprofit creation platform",
      "AI nonprofit formation",
      "create a charity online",
      "IRS Form 1023-EZ",
      "nonprofit incorporation",
      "tax-exempt status",
    ],
    ogTitle: "TurboCharity — From Idea to 501(c)(3) in Days, Not Months",
    ogDescription:
      "AI-powered nonprofit creation. Incorporate, generate bylaws, and file for tax-exempt status without expensive attorneys.",
  },

  "/directory": {
    title: "Nonprofit Directory — Browse Organizations Created with TurboCharity",
    description:
      "Explore nonprofits launched on TurboCharity. Discover community organizations, charities, and foundations formed with AI-powered tools nationwide.",
    keywords: [
      "nonprofit directory",
      "charity directory",
      "501(c)(3) organizations",
      "nonprofit search",
      "community organizations",
      "charitable foundations",
      "nonprofit listings",
    ],
    ogTitle: "Nonprofit Directory — Organizations Powered by TurboCharity",
    ogDescription:
      "Browse the growing directory of nonprofits launched on TurboCharity across all 50 states.",
  },

  "/blog": {
    title: "Nonprofit Formation Blog — Guides, Tips & Compliance Updates | TurboCharity",
    description:
      "Expert guides on starting a nonprofit, 501(c)(3) applications, compliance deadlines, fundraising strategies, and state-specific formation requirements.",
    keywords: [
      "nonprofit blog",
      "501(c)(3) guide",
      "how to start a nonprofit",
      "nonprofit compliance tips",
      "charity formation advice",
      "nonprofit fundraising",
      "tax-exempt organization",
    ],
    ogTitle: "Nonprofit Formation Blog — Expert Guides & Tips | TurboCharity",
    ogDescription:
      "Stay up to date with expert articles on nonprofit creation, IRS compliance, and fundraising strategies.",
  },

  "/pricing": {
    title: "Pricing — Affordable Nonprofit Formation Packages | TurboCharity",
    description:
      "Transparent pricing for nonprofit creation. Starting at $49. Includes incorporation, bylaws, EIN, and 501(c)(3) filing. No hidden fees or surprises.",
    keywords: [
      "nonprofit formation cost",
      "501(c)(3) filing price",
      "affordable nonprofit creation",
      "cheap nonprofit registration",
      "nonprofit incorporation cost",
      "charity startup pricing",
      "nonprofit lawyer alternative",
    ],
    ogTitle: "Affordable Nonprofit Formation Packages — TurboCharity Pricing",
    ogDescription:
      "Start your nonprofit from $49. Transparent pricing with no hidden fees for incorporation and tax-exempt filing.",
  },

  "/about": {
    title: "About TurboCharity — Our Mission to Democratize Nonprofit Creation",
    description:
      "TurboCharity makes nonprofit formation accessible to everyone. Learn how our AI platform helps founders launch charities faster and more affordably.",
    keywords: [
      "about TurboCharity",
      "nonprofit creation mission",
      "AI nonprofit platform",
      "democratize charity formation",
      "nonprofit technology",
      "social impact platform",
    ],
    ogTitle: "About TurboCharity — Democratizing Nonprofit Creation with AI",
    ogDescription:
      "Our mission is to remove barriers to nonprofit formation so every changemaker can launch their organization.",
  },

  "/get-started": {
    title: "Start Your Nonprofit Today — Free AI-Guided Setup | TurboCharity",
    description:
      "Answer a few questions and let AI handle your nonprofit paperwork. Incorporation, bylaws, and 501(c)(3) filing completed in days, not months.",
    keywords: [
      "start a nonprofit online",
      "create a 501(c)(3)",
      "nonprofit registration",
      "form a charity",
      "nonprofit application online",
      "register nonprofit organization",
      "AI nonprofit setup",
    ],
    ogTitle: "Start Your Nonprofit Today — AI-Guided Formation | TurboCharity",
    ogDescription:
      "Begin your nonprofit journey in minutes. Our AI walks you through every step from incorporation to tax-exempt status.",
  },

  "/contact": {
    title: "Contact TurboCharity — Get Help with Your Nonprofit Formation",
    description:
      "Questions about starting a nonprofit? Contact our team for expert guidance on incorporation, 501(c)(3) filing, and state compliance requirements.",
    keywords: [
      "contact TurboCharity",
      "nonprofit formation help",
      "501(c)(3) support",
      "nonprofit questions",
      "charity formation assistance",
      "nonprofit customer support",
    ],
    ogTitle: "Contact Us — TurboCharity Nonprofit Formation Support",
    ogDescription:
      "Reach out to our team for help with nonprofit formation, tax-exempt applications, and compliance questions.",
  },
};

export default seoMetadata;

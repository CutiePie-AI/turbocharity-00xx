// ─── Site-wide content constants ─────────────────────────────────────────────

export const TAGLINE = "From idea to 501(c)(3) in days, not months.";

export const DESCRIPTION =
  "TurboCharity uses AI to generate your bylaws, articles of incorporation, and IRS Form 1023-EZ so you can launch a legally compliant nonprofit without expensive lawyers or months of paperwork.";

export const CTA_PRIMARY = "Start Your Nonprofit Free";
export const CTA_SECONDARY = "See How It Works";

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  title: string;
  description: string;
  icon: string; // emoji / placeholder
}

export const FEATURES: Feature[] = [
  {
    title: "AI Document Generation",
    description:
      "Our AI drafts your bylaws, articles of incorporation, conflict-of-interest policy, and more — tailored to your state.",
    icon: "doc",
  },
  {
    title: "IRS Form Auto-Fill",
    description:
      "We pre-populate IRS Form 1023-EZ with your information so filing for tax-exempt status is painless.",
    icon: "form",
  },
  {
    title: "State Compliance Engine",
    description:
      "Every state has different rules. Our engine ensures your documents meet the exact requirements for your state.",
    icon: "shield",
  },
  {
    title: "Board & Governance Tools",
    description:
      "Set up your board of directors, assign roles, and get meeting-minute templates from day one.",
    icon: "users",
  },
  {
    title: "EIN & Tax Filing",
    description:
      "Apply for your Employer Identification Number and stay on top of annual reporting deadlines.",
    icon: "hash",
  },
  {
    title: "Fundraising Launchpad",
    description:
      "Get a branded donation page, donor CRM basics, and grant-readiness checklist as soon as you incorporate.",
    icon: "rocket",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We went from a napkin idea to a fully registered 501(c)(3) in under two weeks. TurboCharity made the impossible possible.",
    name: "Maria Gonzalez",
    role: "Founder, Literacy Bridge",
  },
  {
    quote:
      "I was quoted $4,000 by a lawyer. TurboCharity handled everything for $29. The documents were accepted on the first try.",
    name: "David Chen",
    role: "Executive Director, GreenFuture Alliance",
  },
  {
    quote:
      "As someone with zero legal experience, the step-by-step process felt like having a nonprofit attorney in my pocket.",
    name: "Aisha Patel",
    role: "Co-founder, Youth Code Initiative",
  },
  {
    quote:
      "The state compliance engine caught two issues that would have delayed our filing by months. Absolutely worth it.",
    name: "James Okafor",
    role: "President, Community Builders Network",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to form a nonprofit with TurboCharity?",
    answer:
      "Most users complete the questionnaire in under 30 minutes. Document generation is instant. State processing times vary (typically 3-14 business days), and IRS determination usually takes 2-4 weeks with Form 1023-EZ.",
  },
  {
    question: "Do I need a lawyer to use TurboCharity?",
    answer:
      "No. Our AI generates all the legal documents you need — bylaws, articles of incorporation, conflict-of-interest policies, and IRS forms. Everything is reviewed for compliance with federal and state requirements.",
  },
  {
    question: "Is TurboCharity available in all 50 states?",
    answer:
      "Yes! We support nonprofit formation in all 50 U.S. states plus Washington D.C. Our state compliance engine automatically adapts your documents to meet each state's specific requirements.",
  },
  {
    question: "What's the difference between the Free, Starter, and Pro plans?",
    answer:
      "The Free plan lets you explore the platform and generate a preview of your documents. Starter ($29) includes full document generation and state filing guidance. Pro ($49) adds priority support, EIN application assistance, and a fundraising launchpad.",
  },
  {
    question: "What is a 501(c)(3) and why do I need one?",
    answer:
      "A 501(c)(3) is a tax-exempt nonprofit organization recognized by the IRS. This status allows your organization to receive tax-deductible donations, apply for grants, and enjoy exemption from federal income tax.",
  },
  {
    question: "Can I cancel or get a refund?",
    answer:
      "You can cancel your account at any time. If you're not satisfied with the Starter or Pro plan, we offer a full refund within 30 days of purchase — no questions asked.",
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Explore the platform and preview your documents.",
    features: [
      "Mission questionnaire",
      "Document preview (watermarked)",
      "State requirements overview",
      "Email support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$29",
    period: "one-time",
    description: "Everything you need to incorporate your nonprofit.",
    features: [
      "Full document generation",
      "Bylaws & articles of incorporation",
      "IRS Form 1023-EZ auto-fill",
      "State filing instructions",
      "Conflict-of-interest policy",
      "30-day money-back guarantee",
    ],
    cta: "Choose Starter",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "one-time",
    description: "Launch and grow with premium tools and support.",
    features: [
      "Everything in Starter",
      "EIN application assistance",
      "Priority email & chat support",
      "Fundraising launchpad",
      "Board governance templates",
      "Grant-readiness checklist",
      "Annual compliance reminders",
    ],
    cta: "Choose Pro",
    highlighted: false,
  },
];

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  highlighted: boolean;
  features: PricingFeature[];
  cta: string;
  ctaHref: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    priceLabel: '$0',
    description: 'Explore the platform and learn about the nonprofit creation process.',
    highlighted: false,
    features: [
      { text: 'Mission statement generator', included: true },
      { text: 'State requirements lookup', included: true },
      { text: 'Basic compliance checklist', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Articles of Incorporation', included: false },
      { text: 'Bylaws generation', included: false },
      { text: 'EIN application guide', included: false },
      { text: 'IRS Form 1023-EZ assistant', included: false },
      { text: 'Priority support', included: false },
      { text: 'Attorney review', included: false },
    ],
    cta: 'Get Started Free',
    ctaHref: '/signup',
  },
  {
    name: 'Starter',
    price: 29,
    priceLabel: '$29',
    description: 'Everything you need to incorporate and file for tax-exempt status.',
    highlighted: true,
    features: [
      { text: 'Mission statement generator', included: true },
      { text: 'State requirements lookup', included: true },
      { text: 'Basic compliance checklist', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Articles of Incorporation', included: true },
      { text: 'Bylaws generation', included: true },
      { text: 'EIN application guide', included: true },
      { text: 'IRS Form 1023-EZ assistant', included: true },
      { text: 'Priority support', included: false },
      { text: 'Attorney review', included: false },
    ],
    cta: 'Get Starter',
    ctaHref: '/signup?plan=starter',
  },
  {
    name: 'Pro',
    price: 49,
    priceLabel: '$49',
    description: 'Full document suite plus priority support and professional review.',
    highlighted: false,
    features: [
      { text: 'Mission statement generator', included: true },
      { text: 'State requirements lookup', included: true },
      { text: 'Basic compliance checklist', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Articles of Incorporation', included: true },
      { text: 'Bylaws generation', included: true },
      { text: 'EIN application guide', included: true },
      { text: 'IRS Form 1023-EZ assistant', included: true },
      { text: 'Priority support', included: true },
      { text: 'Attorney review', included: true },
    ],
    cta: 'Get Pro',
    ctaHref: '/signup?plan=pro',
  },
];

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const PRICING_FAQS: PricingFAQ[] = [
  {
    question: "What's included in the free plan?",
    answer:
      'The free plan gives you access to our mission statement generator, state requirements lookup tool, a basic compliance checklist, and community forum access. It is a great way to explore the platform and understand the nonprofit creation process before committing.',
  },
  {
    question: 'Is it really a one-time payment?',
    answer:
      'Yes. Both the Starter and Pro plans are one-time payments, not subscriptions. You pay once and get lifetime access to all the features included in your plan, plus any future updates we add to that tier.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'We offer a full 30-day money-back guarantee on both paid plans. If you are not satisfied for any reason, contact our support team within 30 days of purchase and we will issue a complete refund, no questions asked.',
  },
  {
    question: 'Do you offer a student or hardship discount?',
    answer:
      'Yes. We offer a 50 percent discount for students, educators, and individuals facing financial hardship. Contact our support team with documentation of your student status or situation and we will provide a discount code.',
  },
  {
    question: 'What about IRS filing fees and state fees?',
    answer:
      'TurboCharity fees cover our platform and document generation services only. IRS filing fees (275 dollars for Form 1023-EZ or 600 dollars for the full Form 1023) and state incorporation fees (typically 25 to 250 dollars depending on your state) are paid directly to the respective government agencies.',
  },
];

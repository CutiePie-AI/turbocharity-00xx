// ---------------------------------------------------------------------------
// TurboCharity – central content data
// ---------------------------------------------------------------------------

export const SITE_NAME = 'TurboCharity';

export const TAGLINE = 'From idea to 501(c)(3) in days, not months.';

export const DESCRIPTION =
  'TurboCharity is the TurboTax for nonprofit creation — AI-powered tools that walk you through state-specific incorporation, generate compliant bylaws, and auto-fill IRS Form 1023-EZ. Start your nonprofit without spending thousands on lawyers.';

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    title: 'AI-Powered Document Generation',
    description:
      'Our AI drafts your Articles of Incorporation, bylaws, conflict-of-interest policies, and board resolutions in minutes — customized to your mission and state requirements.',
    icon: 'FileText',
  },
  {
    title: 'State-Specific Compliance',
    description:
      'Every state has different rules for nonprofit incorporation. TurboCharity automatically tailors your documents and filing steps to meet your state\'s exact requirements.',
    icon: 'Shield',
  },
  {
    title: 'IRS Form 1023-EZ Auto-Fill',
    description:
      'Answer simple questions about your nonprofit and we auto-populate IRS Form 1023-EZ so you can apply for 501(c)(3) tax-exempt status without hiring a tax attorney.',
    icon: 'Zap',
  },
  {
    title: 'Step-by-Step Guidance',
    description:
      'A guided walkthrough breaks the entire process into bite-sized steps — from choosing a name to receiving your IRS determination letter — so nothing falls through the cracks.',
    icon: 'MapPin',
  },
  {
    title: 'Affordable Pricing',
    description:
      'Traditional nonprofit attorneys charge $2,000-$5,000. TurboCharity gives you the same results starting at $0, making nonprofit creation accessible to students, organizers, and dreamers on any budget.',
    icon: 'DollarSign',
  },
  {
    title: 'Community Support',
    description:
      'Join thousands of first-time founders in our community forum. Get answers from peers who\'ve been through the process and mentorship from experienced nonprofit leaders.',
    icon: 'Users',
  },
];

// ---------------------------------------------------------------------------
// Pricing Tiers
// ---------------------------------------------------------------------------

export interface PricingTier {
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    priceLabel: '$0',
    description: 'Explore the platform and see what you need before you file.',
    features: [
      'Mission statement builder',
      'State requirements overview',
      'Nonprofit name availability check',
      'Community forum access',
      'Basic step-by-step checklist',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: 29,
    priceLabel: '$29',
    description: 'Everything you need to incorporate and file for 501(c)(3) status.',
    features: [
      'Full AI document generation',
      'Articles of Incorporation',
      'Customized bylaws',
      'Conflict-of-interest policy',
      'IRS Form 1023-EZ auto-fill',
      'State-specific filing instructions',
      'Email support',
    ],
    cta: 'Start for $29',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: 49,
    priceLabel: '$49',
    description: 'The full package — documents, filing help, and ongoing tools to run your nonprofit.',
    features: [
      'Everything in Starter',
      'Priority support (24-hour response)',
      'EIN application assistance',
      'Financial account connection setup',
      'Board resolution templates',
      'Annual compliance reminders',
      'Fundraising toolkit access',
      'Donor management basics',
    ],
    cta: 'Go Pro for $49',
    highlighted: false,
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jasmine Torres',
    role: 'College Junior, Founder of FoodShare Campus',
    quote:
      'I started a campus food pantry and had no idea how to make it official. TurboCharity walked me through everything in a weekend. We got our 501(c)(3) determination letter in under three weeks — my advisor couldn\'t believe it.',
    avatar: '/avatars/jasmine-torres.jpg',
  },
  {
    name: 'Marcus Williams',
    role: 'Community Organizer, South Side Youth Arts',
    quote:
      'We\'d been running our youth arts program informally for two years because lawyers quoted us $3,500 to incorporate. TurboCharity cost us $29 and the documents were just as professional. Now we can apply for grants.',
    avatar: '/avatars/marcus-williams.jpg',
  },
  {
    name: 'Priya Nair',
    role: 'High School Senior, Co-Founder of STEM Sisters',
    quote:
      'As a 17-year-old, I thought starting a real nonprofit was impossible without my parents hiring a lawyer. TurboCharity made the whole process feel like filling out a college application — straightforward and totally doable.',
    avatar: '/avatars/priya-nair.jpg',
  },
  {
    name: 'David Okonkwo',
    role: 'Graduate Student, Founder of CleanWater Initiative',
    quote:
      'I compared TurboCharity to LegalZoom and Incfile. The others felt like generic form-fillers. TurboCharity actually explained *why* each step mattered and generated bylaws specific to our environmental mission. Worth every penny.',
    avatar: '/avatars/david-okonkwo.jpg',
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is a 501(c)(3)?',
    answer:
      'A 501(c)(3) is a type of nonprofit organization recognized by the IRS as tax-exempt. Donations made to a 501(c)(3) are tax-deductible for the donor, which makes it much easier to fundraise. Most charities, educational organizations, and religious institutions operate as 501(c)(3)s. To qualify, your organization must be organized and operated exclusively for charitable, educational, religious, scientific, or literary purposes.',
  },
  {
    question: 'How long does it take to start a nonprofit?',
    answer:
      'With TurboCharity, you can complete your state incorporation documents in as little as one day and file them the same week. State processing times vary from 3 to 15 business days depending on where you incorporate. After that, filing IRS Form 1023-EZ typically takes 2-4 weeks for approval. End to end, most of our users go from idea to IRS determination letter in 4-8 weeks — compared to 3-6 months using traditional methods.',
  },
  {
    question: 'Do I need a lawyer to start a nonprofit?',
    answer:
      'No. While an attorney can be helpful for complex situations, there is no legal requirement to hire one. TurboCharity\'s AI-powered platform generates the same documents a nonprofit attorney would prepare — Articles of Incorporation, bylaws, conflict-of-interest policies, and IRS forms — at a fraction of the cost. Our documents have been reviewed by legal professionals and are used by thousands of nonprofits across the country.',
  },
  {
    question: 'What states are supported?',
    answer:
      'TurboCharity supports nonprofit incorporation in all 50 US states plus the District of Columbia. Each state has different filing requirements, fees, and processing times. Our platform automatically customizes your documents and provides step-by-step instructions specific to your state. You can check your state\'s requirements, filing fees, and estimated timeline on our States Directory page.',
  },
  {
    question: 'What\'s the difference between TurboCharity and LegalZoom?',
    answer:
      'LegalZoom and similar services charge $500-$1,500+ for nonprofit formation packages and often use one-size-fits-all templates. TurboCharity starts at $0 (free tier) with full document generation at $29. More importantly, our AI generates documents tailored to your specific mission and state rather than filling in blanks on a generic template. We also provide step-by-step guidance designed specifically for first-time founders — not just documents, but education about what each step means and why it matters.',
  },
  {
    question: 'How much does IRS filing cost?',
    answer:
      'The IRS charges a $275 user fee to file Form 1023-EZ (the streamlined application for smaller nonprofits). If your organization expects gross receipts over $50,000 or assets over $250,000, you\'ll need to file the full Form 1023, which has an $600 user fee. These are government fees paid directly to the IRS and are separate from TurboCharity\'s platform pricing. State incorporation fees range from $25 to $300 depending on your state.',
  },
  {
    question: 'Can I start a nonprofit as a minor?',
    answer:
      'Yes, with some caveats. There is no federal minimum age to start a nonprofit. However, most states require incorporators and board members to be at least 18 years old. If you\'re under 18, you can still be the driving force behind your nonprofit — you\'ll just need at least one adult (a parent, teacher, or mentor) to serve as a board member and sign legal documents. Many of our most passionate founders are high school students who recruit a supportive adult to help with the legal formalities.',
  },
  {
    question: 'What documents do I need to start a nonprofit?',
    answer:
      'To fully establish a 501(c)(3) nonprofit you\'ll need: (1) Articles of Incorporation filed with your state, (2) Bylaws that govern how your organization operates, (3) An Employer Identification Number (EIN) from the IRS, (4) A Conflict of Interest Policy, (5) IRS Form 1023-EZ or Form 1023 to apply for tax-exempt status, and (6) Initial board meeting minutes. TurboCharity generates all of these documents for you and guides you through each filing step.',
  },
];

// ---------------------------------------------------------------------------
// CTAs
// ---------------------------------------------------------------------------

export const CTA_PRIMARY = 'Start Your Nonprofit Free';
export const CTA_SECONDARY = 'See How It Works';

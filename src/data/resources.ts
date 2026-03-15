export interface Resource {
  id: string;
  title: string;
  description: string;
  href: string;
  category: ResourceCategory;
  isExternal: boolean;
  isFree: boolean;
}

export type ResourceCategory =
  | 'Formation Guides'
  | 'Legal Templates'
  | 'IRS & Tax'
  | 'Fundraising'
  | 'State Resources'
  | 'Tools & Software';

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  'Formation Guides',
  'Legal Templates',
  'IRS & Tax',
  'Fundraising',
  'State Resources',
  'Tools & Software',
];

export const resources: Resource[] = [
  {
    id: 'start-nonprofit-guide',
    title: 'Complete Guide to Starting a 501(c)(3)',
    description:
      'Step-by-step walkthrough of the entire nonprofit formation process, from choosing a name to receiving your IRS determination letter.',
    href: '/blog/how-to-start-a-501c3-nonprofit-step-by-step-guide',
    category: 'Formation Guides',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'student-nonprofit-guide',
    title: 'Student Nonprofit Formation Guide',
    description:
      'Everything high school and college students need to know about starting a nonprofit, including fiscal sponsorship options.',
    href: '/blog/student-nonprofit-guide-high-school-college',
    category: 'Formation Guides',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'bylaws-template',
    title: 'Nonprofit Bylaws Template & Guide',
    description:
      'Comprehensive bylaws template with explanations of every required section, including conflict-of-interest and dissolution clauses.',
    href: '/blog/nonprofit-bylaws-template-what-to-include',
    category: 'Legal Templates',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'articles-of-incorporation-checklist',
    title: 'Articles of Incorporation Checklist',
    description:
      'Ensure your Articles of Incorporation include all required provisions for IRS approval with this comprehensive checklist.',
    href: '/resources/articles-checklist',
    category: 'Legal Templates',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'conflict-of-interest-policy',
    title: 'Conflict of Interest Policy Template',
    description:
      'IRS-recommended conflict of interest policy template that satisfies Form 1023 and 1023-EZ requirements.',
    href: '/resources/coi-template',
    category: 'Legal Templates',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'irs-form-1023-ez-guide',
    title: 'IRS Form 1023-EZ Filing Guide',
    description:
      'Detailed guide covering eligibility requirements, step-by-step filing instructions, and common mistakes to avoid.',
    href: '/blog/irs-form-1023-ez-eligibility-and-filing-guide',
    category: 'IRS & Tax',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'irs-ein-application',
    title: 'IRS EIN Application (SS-4)',
    description:
      'Apply for your Employer Identification Number directly through the IRS website. Required before filing for tax-exempt status.',
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    category: 'IRS & Tax',
    isExternal: true,
    isFree: true,
  },
  {
    id: 'irs-tax-exempt-status',
    title: 'IRS Tax-Exempt Status Resources',
    description:
      'Official IRS page with publications, forms, and guidance for organizations seeking tax-exempt status under section 501(c)(3).',
    href: 'https://www.irs.gov/charities-non-profits/charitable-organizations',
    category: 'IRS & Tax',
    isExternal: true,
    isFree: true,
  },
  {
    id: 'grant-writing-101',
    title: 'Grant Writing 101 for New Nonprofits',
    description:
      'Learn the fundamentals of grant writing, including how to find grant opportunities and write compelling proposals.',
    href: '/resources/grant-writing',
    category: 'Fundraising',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'donor-management-guide',
    title: 'Donor Management Best Practices',
    description:
      'How to build and maintain relationships with donors, track contributions, and create effective acknowledgment processes.',
    href: '/resources/donor-management',
    category: 'Fundraising',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'state-filing-costs',
    title: 'State Filing Costs Comparison (2025)',
    description:
      'Compare nonprofit incorporation costs, annual report fees, and filing requirements across all 50 states.',
    href: '/blog/nonprofit-incorporation-costs-by-state-2025',
    category: 'State Resources',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'state-directory',
    title: 'State-by-State Nonprofit Filing Directory',
    description:
      'Find your state\'s Secretary of State office, filing requirements, fees, and processing times for nonprofit incorporation.',
    href: '/states',
    category: 'State Resources',
    isExternal: false,
    isFree: true,
  },
  {
    id: 'charity-navigator',
    title: 'Charity Navigator',
    description:
      'The leading independent charity evaluator. Useful for researching similar organizations and understanding best practices.',
    href: 'https://www.charitynavigator.org',
    category: 'Tools & Software',
    isExternal: true,
    isFree: true,
  },
  {
    id: 'guidestar-candid',
    title: 'GuideStar by Candid',
    description:
      'Register your new nonprofit on GuideStar to increase visibility and build credibility with donors and grant-makers.',
    href: 'https://www.guidestar.org',
    category: 'Tools & Software',
    isExternal: true,
    isFree: true,
  },
];

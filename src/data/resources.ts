export interface Resource {
  title: string;
  url: string;
  description: string;
  category: 'government' | 'legal' | 'financial' | 'education';
  free: boolean;
}

export const resources: Resource[] = [
  {
    title: 'IRS Tax-Exempt Organization Search (Tax Exempt Organization Search)',
    url: 'https://www.irs.gov/charities-non-profits/tax-exempt-organization-search',
    description:
      'Official IRS database to verify 501(c)(3) status, search for existing tax-exempt organizations, and check if an organization has had its status revoked. Essential for due diligence and confirming your own approval.',
    category: 'government',
    free: true,
  },
  {
    title: 'IRS Form 1023-EZ Application (Pay.gov)',
    url: 'https://www.pay.gov/public/form/start/29473278',
    description:
      'The official IRS portal for filing Form 1023-EZ, the streamlined application for 501(c)(3) tax-exempt status. The $275 filing fee is paid through this portal. This is the only way to file Form 1023-EZ; there is no paper option.',
    category: 'government',
    free: false,
  },
  {
    title: 'IRS EIN Online Application',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    description:
      'Apply for a free Employer Identification Number (EIN) directly from the IRS. Your EIN is required to open a bank account, file tax returns, and apply for 501(c)(3) status. The online application is immediate and available Monday through Friday.',
    category: 'government',
    free: true,
  },
  {
    title: 'Candid (formerly GuideStar and Foundation Center)',
    url: 'https://candid.org/',
    description:
      'The leading source of nonprofit data and research. Candid provides access to Foundation Directory Online for grant research, GuideStar profiles for nonprofit transparency, and educational resources on nonprofit management and fundraising.',
    category: 'education',
    free: false,
  },
  {
    title: 'National Council of Nonprofits',
    url: 'https://www.councilofnonprofits.org/',
    description:
      'The largest network of nonprofits in the United States, offering free resources on nonprofit management, governance best practices, legal compliance, advocacy, and state-specific guidance. Their state association directory connects you to local nonprofit support organizations.',
    category: 'education',
    free: true,
  },
  {
    title: 'IRS Charities and Nonprofits Resource Page',
    url: 'https://www.irs.gov/charities-non-profits',
    description:
      'Comprehensive IRS resource page covering the application process for tax-exempt status, annual filing requirements (Form 990), compliance guidelines, and educational materials for nonprofit organizations.',
    category: 'government',
    free: true,
  },
  {
    title: 'Grants.gov Federal Grant Search',
    url: 'https://www.grants.gov/',
    description:
      'The official U.S. government portal for finding and applying to federal grants. Lists thousands of grant opportunities from 26 federal agencies. Nonprofits with 501(c)(3) status are eligible for many federal grant programs.',
    category: 'financial',
    free: true,
  },
  {
    title: 'Nonprofit Accounting Basics (Greater Washington Society of CPAs)',
    url: 'https://www.nonprofitaccountingbasics.org/',
    description:
      'Free educational resource covering nonprofit accounting fundamentals, including fund accounting, financial statements, budgeting, internal controls, and audit preparation. Created by CPAs specifically for nonprofit leaders who are not financial professionals.',
    category: 'financial',
    free: true,
  },
  {
    title: 'Multistate Filing (Charitable Solicitation Registration)',
    url: 'https://www.multistatefiling.org/',
    description:
      'Official resource for the Unified Registration Statement (URS) used for charitable solicitation registration across multiple states. Provides state-by-state registration requirements, forms, fees, and deadlines for nonprofit fundraising compliance.',
    category: 'legal',
    free: true,
  },
  {
    title: 'BoardSource',
    url: 'https://boardsource.org/',
    description:
      'The leading organization focused on nonprofit board leadership. Offers research, tools, and training on board governance, recruitment, diversity, strategic planning, and fiduciary responsibilities. Some resources are free; premium content requires membership.',
    category: 'education',
    free: false,
  },
];

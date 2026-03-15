export interface Resource {
  title: string;
  description: string;
  url: string;
  category: 'Government' | 'Legal Templates' | 'Financial Tools' | 'Learning';
  isFree: boolean;
}

export const resources: Resource[] = [
  {
    title: 'IRS Tax Exempt Organization Search (TEOS)',
    description:
      'Official IRS tool to search for organizations that have received tax-exempt status. Useful for verifying 501(c)(3) status and researching similar organizations in your space.',
    url: 'https://www.irs.gov/charities-non-profits/tax-exempt-organization-search',
    category: 'Government',
    isFree: true,
  },
  {
    title: 'IRS Form 1023-EZ Online Application',
    description:
      'The official Pay.gov portal where you submit Form 1023-EZ to apply for 501(c)(3) tax-exempt status. The streamlined form costs $275 and is processed in 2-4 weeks.',
    url: 'https://www.pay.gov/public/form/start/62759871',
    category: 'Government',
    isFree: false,
  },
  {
    title: 'IRS Charities and Nonprofits Resource Center',
    description:
      'Comprehensive IRS resource hub covering tax-exempt status applications, annual filing requirements, compliance guidelines, and educational materials for nonprofit organizations.',
    url: 'https://www.irs.gov/charities-and-nonprofits',
    category: 'Government',
    isFree: true,
  },
  {
    title: 'National Association of State Charity Officials (NASCO)',
    description:
      'Directory of state charity regulators with links to each state\'s charitable solicitation registration requirements. Essential for nonprofits that fundraise across state lines.',
    url: 'https://www.nasconet.org/',
    category: 'Government',
    isFree: true,
  },
  {
    title: 'GuideStar by Candid (Nonprofit Profiles)',
    description:
      'The largest source of nonprofit data in the world. Create a free profile for your nonprofit to increase transparency and credibility. Donors and grant makers use GuideStar to research organizations.',
    url: 'https://www.guidestar.org/',
    category: 'Learning',
    isFree: true,
  },
  {
    title: 'National Council of Nonprofits',
    description:
      'The largest network of nonprofits in the U.S., offering free toolkits, policy updates, and best practices guides on governance, financial management, and compliance.',
    url: 'https://www.councilofnonprofits.org/',
    category: 'Learning',
    isFree: true,
  },
  {
    title: 'Nonprofit Bylaws Template (Harbor Compliance)',
    description:
      'Free downloadable bylaws template with guidance on required provisions for nonprofit corporations. Includes sections on board structure, officers, meetings, and dissolution.',
    url: 'https://www.harborcompliance.com/information/nonprofit-bylaws',
    category: 'Legal Templates',
    isFree: true,
  },
  {
    title: 'Conflict of Interest Policy Template (IRS Sample)',
    description:
      'The IRS provides a sample conflict of interest policy in the Form 1023 instructions. This is the standard that the IRS expects nonprofits to follow for board governance.',
    url: 'https://www.irs.gov/instructions/i1023#en_US_201701_publink1000237950',
    category: 'Legal Templates',
    isFree: true,
  },
  {
    title: 'Foundation Directory Online by Candid',
    description:
      'The most comprehensive database of U.S. grant makers, foundations, and corporate giving programs. Research potential funders by geography, issue area, and grant size. Free basic access available at public libraries.',
    url: 'https://fconline.foundationcenter.org/',
    category: 'Financial Tools',
    isFree: false,
  },
  {
    title: 'Wave Financial (Free Accounting Software)',
    description:
      'Free accounting and invoicing software suitable for small nonprofits. Track income and expenses, generate financial reports, and manage receipts without monthly subscription costs.',
    url: 'https://www.waveapps.com/',
    category: 'Financial Tools',
    isFree: true,
  },
  {
    title: 'Nonprofit Ready (Free Online Courses)',
    description:
      'Free online learning platform with courses specifically designed for nonprofit professionals. Topics include fundraising, financial management, board governance, and strategic planning.',
    url: 'https://www.nonprofitready.org/',
    category: 'Learning',
    isFree: true,
  },
  {
    title: 'IRS EIN Online Application',
    description:
      'Apply for a free Employer Identification Number (EIN) directly from the IRS. Required for opening a bank account, filing taxes, and applying for 501(c)(3) status. The online process takes minutes.',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
    category: 'Government',
    isFree: true,
  },
  {
    title: 'Google for Nonprofits',
    description:
      'Free access to Google Workspace, Google Ad Grants ($10,000/month in free advertising), YouTube Nonprofit Program, and Google Earth tools for eligible 501(c)(3) organizations.',
    url: 'https://www.google.com/nonprofits/',
    category: 'Financial Tools',
    isFree: true,
  },
  {
    title: 'Nonprofit Articles of Incorporation Template',
    description:
      'Generic articles of incorporation template with required language for 501(c)(3) tax-exempt organizations. Includes purpose clauses, dissolution provisions, and private inurement restrictions.',
    url: 'https://www.nolo.com/legal-encyclopedia/forming-nonprofit-corporation-702.html',
    category: 'Legal Templates',
    isFree: true,
  },
  {
    title: 'Grants.gov Federal Grant Database',
    description:
      'The official U.S. government portal for finding and applying for federal grants. Search over 1,000 grant programs from 26 federal agencies. Registration is free but the application process requires preparation.',
    url: 'https://www.grants.gov/',
    category: 'Financial Tools',
    isFree: true,
  },
];

export function getResourcesByCategory(category: Resource['category']): Resource[] {
  return resources.filter((resource) => resource.category === category);
}

export function getFreeResources(): Resource[] {
  return resources.filter((resource) => resource.isFree);
}

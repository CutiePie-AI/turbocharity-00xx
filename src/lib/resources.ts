// ─── Resource / Guide entries ─────────────────────────────────────────────────

export type ResourceCategory = 'Getting Started' | 'Legal' | 'Financial' | 'Growth';

export interface Resource {
  title: string;
  slug: string;
  excerpt: string;
  category: ResourceCategory;
  readTime: string;
  content: string;
}

export const RESOURCES: Resource[] = [
  {
    title: 'How to Start a 501(c)(3) Nonprofit',
    slug: 'how-to-start-a-501c3-nonprofit',
    excerpt:
      'A step-by-step walkthrough of everything you need to launch a legally compliant nonprofit from scratch.',
    category: 'Getting Started',
    readTime: '8 min read',
    content:
      'Starting a 501(c)(3) nonprofit involves choosing a mission, naming your organization, appointing a board of directors, drafting bylaws, filing articles of incorporation with your state, and applying for tax-exempt status with the IRS using Form 1023 or 1023-EZ.',
  },
  {
    title: 'Choosing a Mission Statement',
    slug: 'choosing-a-mission-statement',
    excerpt:
      'Your mission statement defines your purpose. Learn how to write one that resonates with donors and the IRS.',
    category: 'Getting Started',
    readTime: '5 min read',
    content:
      'A strong mission statement is concise, specific, and action-oriented. It should clearly communicate what your nonprofit does, who it serves, and why it matters. The IRS also reviews your mission when evaluating your 1023-EZ application.',
  },
  {
    title: 'Understanding Articles of Incorporation',
    slug: 'understanding-articles-of-incorporation',
    excerpt:
      'Articles of incorporation are the foundational legal document for your nonprofit. Here is what to include.',
    category: 'Legal',
    readTime: '6 min read',
    content:
      'Articles of incorporation establish your nonprofit as a legal entity in your state. They typically include your organization name, purpose, registered agent, incorporator information, and dissolution clause required by the IRS.',
  },
  {
    title: 'Nonprofit Bylaws Explained',
    slug: 'nonprofit-bylaws-explained',
    excerpt:
      'Bylaws govern how your nonprofit operates internally. Learn the key sections every set of bylaws should have.',
    category: 'Legal',
    readTime: '7 min read',
    content:
      'Bylaws cover board structure, officer roles, meeting procedures, voting rules, conflict-of-interest policies, and amendment processes. While not always filed with the state, they are required by the IRS for tax-exempt applications.',
  },
  {
    title: 'Conflict of Interest Policy Guide',
    slug: 'conflict-of-interest-policy-guide',
    excerpt:
      'A conflict of interest policy protects your nonprofit and is required for IRS Form 1023-EZ.',
    category: 'Legal',
    readTime: '5 min read',
    content:
      'The IRS requires nonprofits to adopt a conflict of interest policy. This document outlines how board members and officers must disclose potential conflicts and recuse themselves from related decisions.',
  },
  {
    title: 'Applying for an EIN',
    slug: 'applying-for-an-ein',
    excerpt:
      'Your Employer Identification Number is like a Social Security number for your nonprofit. Here is how to get one.',
    category: 'Getting Started',
    readTime: '4 min read',
    content:
      'You can apply for an EIN online through the IRS website at no cost. You will need your articles of incorporation and basic information about your organization. The process takes about 15 minutes and you receive your EIN immediately.',
  },
  {
    title: 'Nonprofit Budgeting 101',
    slug: 'nonprofit-budgeting-101',
    excerpt:
      'Learn how to create a realistic budget for your nonprofit, from startup costs to ongoing operations.',
    category: 'Financial',
    readTime: '7 min read',
    content:
      'A nonprofit budget should include startup costs (filing fees, legal costs), recurring expenses (rent, salaries, insurance), and projected revenue (donations, grants, program fees). Review and adjust your budget quarterly.',
  },
  {
    title: 'Grant Writing for Beginners',
    slug: 'grant-writing-for-beginners',
    excerpt:
      'Grants are a vital funding source. Learn the basics of finding opportunities and writing winning proposals.',
    category: 'Financial',
    readTime: '9 min read',
    content:
      'Effective grant writing starts with research. Identify foundations and government agencies aligned with your mission. Follow application instructions precisely, tell a compelling story with data, and always submit before the deadline.',
  },
  {
    title: 'Tax-Exempt Status and Annual Filing Requirements',
    slug: 'tax-exempt-status-annual-filing',
    excerpt:
      'Maintaining your 501(c)(3) status requires annual filings. Learn what is due and when.',
    category: 'Financial',
    readTime: '6 min read',
    content:
      'Most small nonprofits must file Form 990-N (e-Postcard) annually. Larger organizations file Form 990 or 990-EZ. Missing three consecutive years of filing results in automatic revocation of tax-exempt status.',
  },
  {
    title: 'Building a Fundraising Strategy',
    slug: 'building-a-fundraising-strategy',
    excerpt:
      'A diversified fundraising strategy helps your nonprofit thrive. Explore online giving, events, and major gifts.',
    category: 'Growth',
    readTime: '8 min read',
    content:
      'Successful nonprofits diversify their fundraising across individual donations, grants, events, corporate sponsorships, and earned revenue. Start with low-cost digital strategies like email campaigns and social media, then expand as your donor base grows.',
  },
  {
    title: 'Recruiting and Retaining Volunteers',
    slug: 'recruiting-and-retaining-volunteers',
    excerpt:
      'Volunteers are the lifeblood of many nonprofits. Learn how to attract, engage, and keep great volunteers.',
    category: 'Growth',
    readTime: '6 min read',
    content:
      'Recruit volunteers by posting on platforms like VolunteerMatch and your social media channels. Retain them by providing clear roles, regular appreciation, and opportunities for growth. Track volunteer hours for grant applications.',
  },
  {
    title: 'Scaling Your Nonprofit Impact',
    slug: 'scaling-your-nonprofit-impact',
    excerpt:
      'Ready to grow? Learn strategies for expanding your programs, team, and reach without losing focus.',
    category: 'Growth',
    readTime: '7 min read',
    content:
      'Scaling a nonprofit requires strong systems, a clear theory of change, and sustainable funding. Consider partnerships, technology investments, and outcome measurement frameworks to grow your impact while staying mission-aligned.',
  },
];

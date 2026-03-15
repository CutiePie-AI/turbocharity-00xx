export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  featured?: boolean
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-start-a-nonprofit',
    title: 'How to Start a Nonprofit in 2026: The Complete Guide',
    excerpt:
      'Everything you need to know about starting a nonprofit organization, from choosing a mission to filing for 501(c)(3) status.',
    content:
      'Starting a nonprofit can feel overwhelming, but it does not have to be. This guide walks you through the entire process step by step, from defining your mission to obtaining tax-exempt status with the IRS.',
    author: 'Sarah Mitchell',
    date: '2026-01-15',
    featured: true,
    tags: ['getting-started', 'guide'],
  },
  {
    slug: '501c3-vs-501c4-differences',
    title: '501(c)(3) vs 501(c)(4): Which Is Right for You?',
    excerpt:
      'Understanding the key differences between 501(c)(3) and 501(c)(4) organizations to choose the best structure for your mission.',
    content:
      'One of the most common questions we receive is about the difference between 501(c)(3) and 501(c)(4) organizations. While both are tax-exempt, they serve very different purposes and come with different rules.',
    author: 'David Park',
    date: '2026-01-22',
    tags: ['tax-exempt', 'legal'],
  },
  {
    slug: 'writing-nonprofit-bylaws',
    title: 'Writing Nonprofit Bylaws: A Practical Template',
    excerpt:
      'Your nonprofit bylaws are the backbone of your governance. Learn what to include and download our free template.',
    content:
      'Bylaws are the internal rules that govern how your nonprofit operates. They cover everything from board structure to meeting procedures and are required by most states.',
    author: 'Sarah Mitchell',
    date: '2026-02-01',
    tags: ['bylaws', 'governance'],
  },
  {
    slug: 'nonprofit-board-of-directors-guide',
    title: 'Building Your Nonprofit Board of Directors',
    excerpt:
      'How to recruit, organize, and manage an effective board of directors for your new nonprofit organization.',
    content:
      'A strong board of directors is essential for nonprofit success. Your board provides governance, fundraising support, and strategic direction. Here is how to build one that works.',
    author: 'Maria Chen',
    date: '2026-02-10',
    featured: true,
    tags: ['board', 'governance'],
  },
  {
    slug: 'state-filing-fees-guide',
    title: 'Nonprofit Filing Fees by State: Complete Breakdown',
    excerpt:
      'A comprehensive look at incorporation filing fees across all 50 states, plus tips for keeping costs low.',
    content:
      'Filing fees vary significantly from state to state. Some states charge as little as 25 dollars while others can cost over 250 dollars. Here is a complete breakdown to help you budget.',
    author: 'David Park',
    date: '2026-02-18',
    tags: ['filing', 'costs'],
  },
  {
    slug: 'irs-form-1023-ez-guide',
    title: 'IRS Form 1023-EZ: Streamlined Application Guide',
    excerpt:
      'Step-by-step instructions for completing IRS Form 1023-EZ to apply for 501(c)(3) tax-exempt status.',
    content:
      'The IRS Form 1023-EZ is the simplified version of the full 1023 application. If your nonprofit expects annual gross receipts of 50,000 dollars or less, you likely qualify for this streamlined form.',
    author: 'Sarah Mitchell',
    date: '2026-02-25',
    tags: ['irs', '1023-ez', 'tax-exempt'],
  },
  {
    slug: 'fundraising-strategies-new-nonprofits',
    title: '10 Fundraising Strategies for New Nonprofits',
    excerpt:
      'Practical fundraising ideas that work even when you are just getting started and have no donor base yet.',
    content:
      'Fundraising is often the biggest challenge for new nonprofits. The good news is that there are many effective strategies that do not require an existing donor network or a big budget.',
    author: 'Maria Chen',
    date: '2026-03-05',
    tags: ['fundraising', 'strategy'],
  },
  {
    slug: 'nonprofit-compliance-checklist',
    title: 'Annual Nonprofit Compliance Checklist',
    excerpt:
      'Stay on top of your nonprofit obligations with this annual compliance checklist covering federal and state requirements.',
    content:
      'Running a nonprofit comes with ongoing compliance obligations. Missing a deadline can result in penalties or even loss of tax-exempt status. Use this checklist to stay organized throughout the year.',
    author: 'David Park',
    date: '2026-03-12',
    featured: true,
    tags: ['compliance', 'annual-filing'],
  },
  {
    slug: 'grant-writing-basics',
    title: 'Grant Writing Basics for Nonprofit Founders',
    excerpt:
      'Learn the fundamentals of grant writing and how to craft compelling proposals that win funding.',
    content:
      'Grants can be a significant source of funding for nonprofits. Learning to write effective grant proposals is a skill every nonprofit founder should develop.',
    author: 'Maria Chen',
    date: '2026-03-10',
    tags: ['grants', 'fundraising'],
  },
]

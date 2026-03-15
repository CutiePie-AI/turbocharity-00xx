// ---------------------------------------------------------------------------
// TurboCharity – Resource / guide library
// ---------------------------------------------------------------------------

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
    title: 'How to Write a Mission Statement',
    slug: 'how-to-write-a-mission-statement',
    excerpt:
      'Craft a clear, inspiring mission statement that guides your nonprofit and convinces the IRS your purpose qualifies for tax-exempt status.',
    category: 'Getting Started',
    readTime: '5 min read',
    content: `Your mission statement is the foundation of your nonprofit. It tells donors, volunteers, and the IRS exactly why your organization exists. A strong mission statement is concise (one to two sentences), specific about the population you serve, and clearly tied to a recognized exempt purpose such as charitable, educational, or scientific activities.

Start by answering three questions: Who do you serve? What problem do you solve? How do you solve it? For example, "FoodShare Campus reduces food insecurity among college students by operating campus food pantries and connecting students with government nutrition programs." Notice how it names the audience, the problem, and the approach in a single sentence.

Avoid vague language like "making the world a better place." The IRS reviewers read thousands of applications and look for specificity. Run your draft by a few people outside your organization — if they can explain what you do after reading one sentence, you have a winner.`,
  },
  {
    title: 'Understanding Nonprofit Bylaws',
    slug: 'understanding-nonprofit-bylaws',
    excerpt:
      'Learn what bylaws are, why every nonprofit needs them, and what provisions are required by state law and the IRS.',
    category: 'Legal',
    readTime: '7 min read',
    content: `Bylaws are the internal rulebook for your nonprofit. They define how your board is structured, how meetings are conducted, how officers are elected, and how amendments to the bylaws themselves are made. While the Articles of Incorporation create your organization as a legal entity, the bylaws govern day-to-day operations and decision-making.

Most states require nonprofits to adopt bylaws, and the IRS expects to see them as part of your 501(c)(3) application. Key provisions include: the number and qualifications of directors, term lengths, quorum requirements, officer roles, fiscal year, and a conflict-of-interest policy. Some states also require specific language about indemnification of directors and dissolution procedures.

TurboCharity generates bylaws customized to your state's requirements and your organization's structure. You can review and edit every section before your board formally adopts them at the organizational meeting. Think of bylaws as a living document — you can amend them as your nonprofit grows, but getting the foundation right saves headaches later.`,
  },
  {
    title: 'Board of Directors Requirements',
    slug: 'board-of-directors-requirements',
    excerpt:
      'Understand how many directors you need, what their responsibilities are, and how to build an effective founding board.',
    category: 'Legal',
    readTime: '6 min read',
    content: `Every nonprofit corporation is governed by a board of directors (sometimes called trustees). The board is legally responsible for overseeing the organization's finances, ensuring compliance with laws, and advancing the mission. Directors have three fiduciary duties: the duty of care (make informed decisions), the duty of loyalty (put the nonprofit's interests first), and the duty of obedience (stay true to the mission).

State requirements for board size vary. Some states allow a single director, while others require a minimum of three. The IRS strongly prefers boards with at least three unrelated members — having a diverse, independent board signals good governance and reduces the risk of conflicts of interest. When recruiting your founding board, look for people with complementary skills: someone who understands finances, someone with fundraising connections, and someone deeply connected to the community you serve.

Remember that board members are volunteers — they should not be compensated for their board service (though reasonable expense reimbursement is fine). Keep initial terms staggered (e.g., one-, two-, and three-year terms) so the entire board does not turn over at once. Document everything in your bylaws and initial board resolution.`,
  },
  {
    title: 'Filing Articles of Incorporation',
    slug: 'filing-articles-of-incorporation',
    excerpt:
      'A step-by-step guide to preparing and filing your Articles of Incorporation with your state\'s Secretary of State.',
    category: 'Legal',
    readTime: '6 min read',
    content: `Articles of Incorporation (called a Certificate of Formation in some states) is the legal document that officially creates your nonprofit corporation under state law. It is filed with your state's Secretary of State office and typically costs between $25 and $300, depending on the state.

The document must include several key elements: the nonprofit's legal name, its registered agent and office address, a statement of purpose, a dissolution clause directing remaining assets to another 501(c)(3), and language limiting your activities to those permitted under Section 501(c)(3) of the Internal Revenue Code. Getting this language right is critical — if the IRS finds your purpose clause too broad or your dissolution clause missing, your tax-exempt application will be delayed or denied.

TurboCharity generates Articles of Incorporation with all required IRS and state-specific language already included. Once generated, you review the document, sign it, and file it with your state (many states now accept online filings). After the state approves your filing, you'll receive a stamped copy or filing confirmation — keep this safe, as you'll need it for your IRS application.`,
  },
  {
    title: 'IRS Form 1023-EZ Guide',
    slug: 'irs-form-1023-ez-guide',
    excerpt:
      'Everything you need to know about the streamlined IRS application for 501(c)(3) tax-exempt status.',
    category: 'Legal',
    readTime: '8 min read',
    content: `IRS Form 1023-EZ is the streamlined application for organizations seeking 501(c)(3) tax-exempt status. Introduced in 2014, it replaced the need for most small nonprofits to complete the much longer Form 1023 (which can run 30+ pages). To qualify for the EZ version, your organization must have projected annual gross receipts of $50,000 or less for the next three years and total assets of $250,000 or less.

The form is filed online through pay.gov and costs $275. It asks about your organization's structure, activities, and finances in a series of yes/no and short-answer questions. Key sections include your Employer Identification Number (EIN), the specific type of 501(c)(3) you're applying for (public charity vs. private foundation), and attestations that your organizing documents contain the required provisions.

Most organizations that file Form 1023-EZ receive a determination letter within 2-4 weeks — dramatically faster than the 3-6 month timeline for the full Form 1023. TurboCharity pre-fills the form using information you've already provided during the incorporation process, checks your eligibility automatically, and flags any answers that might cause the IRS to request additional information.`,
  },
  {
    title: 'State vs Federal Requirements',
    slug: 'state-vs-federal-requirements',
    excerpt:
      'Learn the difference between state incorporation and federal tax-exempt status — and why you need both.',
    category: 'Getting Started',
    readTime: '5 min read',
    content: `One of the most common sources of confusion for new nonprofit founders is the relationship between state and federal requirements. Incorporating as a nonprofit under state law and obtaining 501(c)(3) status from the IRS are two separate steps, and you need both to operate as a fully recognized tax-exempt organization.

State incorporation creates your nonprofit as a legal entity — it can enter contracts, open bank accounts, and hire employees. But state incorporation alone does not make you tax-exempt. For that, you need to apply to the IRS for 501(c)(3) recognition. Once approved, your organization is exempt from federal income tax and donors can deduct their contributions.

Many states also require nonprofits to register for state-level tax exemptions separately (such as state income tax and sales tax exemptions), and to register before soliciting charitable donations. These requirements vary widely — some states require registration before you raise a single dollar, while others have exemptions for small organizations. TurboCharity provides a state-specific checklist so you don't miss any of these extra steps.`,
  },
  {
    title: 'Nonprofit Fundraising Basics',
    slug: 'nonprofit-fundraising-basics',
    excerpt:
      'Practical fundraising strategies for brand-new nonprofits that don\'t have an existing donor base.',
    category: 'Financial',
    readTime: '6 min read',
    content: `Fundraising is the lifeblood of most nonprofits, but it can feel daunting when you're just starting out with no donor list and no track record. The good news: every successful nonprofit started exactly where you are. The key is to begin with the people who already believe in you — your personal network — and expand from there.

Start with a "founding donor" campaign: reach out personally to friends, family, classmates, and colleagues. A personal email or message explaining your mission and asking for a specific amount (even $25) is far more effective than a generic social media post. Set a modest goal — raising $1,000 from 40 people at $25 each is achievable and gives you momentum. Once you have your 501(c)(3) status, every donation becomes tax-deductible, which is a powerful incentive for larger gifts.

As you grow, diversify your revenue streams. Apply for small grants from community foundations (many offer grants specifically for new nonprofits), host low-cost fundraising events, and explore crowdfunding platforms like GoFundMe Charity or Facebook Fundraisers. Keep meticulous records of every donation — you'll need them for your annual IRS filing (Form 990-N or 990-EZ) and to build trust with future donors and grantmakers.`,
  },
  {
    title: 'Grant Writing 101',
    slug: 'grant-writing-101',
    excerpt:
      'Learn the fundamentals of writing compelling grant proposals that win funding for your nonprofit.',
    category: 'Financial',
    readTime: '7 min read',
    content: `Grants are a major funding source for nonprofits, but competition is stiff. A well-written grant proposal tells a compelling story: here's the problem, here's our unique approach to solving it, here's what success looks like, and here's exactly how we'll use your money. Grantmakers want to fund organizations that are credible, specific, and measurable.

Before you write a single word, research potential funders thoroughly. Look at community foundations, corporate giving programs, and government grants (grants.gov). Read their guidelines carefully — every funder has specific priorities, eligible activities, and formatting requirements. Applying for a grant that doesn't align with your mission wastes everyone's time. Start with smaller, local grants (often $1,000-$10,000) where competition is less intense and review timelines are shorter.

A standard grant proposal includes: an executive summary, a statement of need (backed by data), a project description with clear objectives and timeline, an evaluation plan explaining how you'll measure impact, an organizational background section, and a detailed budget. Write in plain, confident language — avoid jargon and be specific. Instead of "we'll help the community," write "we'll provide 200 after-school STEM workshops to 50 middle school students in the Eastside neighborhood over 12 months."`,
  },
  {
    title: 'Volunteer Management',
    slug: 'volunteer-management',
    excerpt:
      'How to recruit, onboard, and retain volunteers who are essential to your nonprofit\'s success.',
    category: 'Growth',
    readTime: '5 min read',
    content: `Volunteers are the backbone of most new nonprofits. They bring energy, skills, and community connections that no budget can buy. But managing volunteers effectively requires intentional systems — people give their time freely, and they'll stop giving it if they feel disorganized, undervalued, or unclear about their role.

Start by creating clear volunteer role descriptions, just as you would for a paid position. Define what each volunteer will do, how much time is expected, who they report to, and what training you'll provide. A one-page onboarding document that covers your mission, expectations, and key contacts goes a long way. Use a simple tool like a shared spreadsheet or a free volunteer management platform (VolunteerHub, SignUpGenius) to track hours and schedule shifts.

Retention is everything. Recognize your volunteers regularly — a personal thank-you note, a shout-out at meetings, or a small end-of-year appreciation event costs almost nothing but means the world. Check in periodically to make sure the work is fulfilling and adjust assignments if it's not. Happy volunteers recruit more volunteers, so investing in their experience creates a virtuous cycle of growth.`,
  },
  {
    title: 'Nonprofit Accounting Basics',
    slug: 'nonprofit-accounting-basics',
    excerpt:
      'Essential financial management practices every new nonprofit founder needs to know from day one.',
    category: 'Financial',
    readTime: '6 min read',
    content: `Nonprofit accounting follows different rules than for-profit bookkeeping, and getting it right from the start saves enormous headaches later. The biggest difference: nonprofits track money by "fund" or restriction level (unrestricted, temporarily restricted, permanently restricted) because donors often earmark gifts for specific purposes, and you are legally required to use those funds as directed.

Open a dedicated bank account for your nonprofit as soon as you receive your EIN — never mix personal and organizational funds. Use accounting software designed for nonprofits (Wave is free, QuickBooks has a nonprofit discount) and categorize every transaction. At minimum, track income by source (donations, grants, events, earned revenue) and expenses by program area and administrative category. This categorization is required for your annual IRS filing.

Even if you're small, establish basic financial controls: require two signatures on checks over a certain amount, have someone other than the treasurer review bank statements monthly, and keep all receipts. These practices aren't bureaucracy for its own sake — they protect your organization, build trust with donors and grantmakers, and are exactly what auditors look for if you grow large enough to require an independent audit.`,
  },
  {
    title: 'Marketing Your Nonprofit',
    slug: 'marketing-your-nonprofit',
    excerpt:
      'Build awareness and attract supporters with practical, low-budget marketing strategies.',
    category: 'Growth',
    readTime: '5 min read',
    content: `Marketing a nonprofit is about storytelling — sharing your mission, your impact, and the people you serve in a way that moves others to act. The good news: you don't need a big budget. You need clarity, consistency, and compelling content. Start by defining your core message: who do you help, how do you help them, and what happens when someone supports your cause?

Social media is your most powerful free tool. Choose two platforms where your audience already spends time (Instagram and TikTok for younger supporters, Facebook and LinkedIn for professionals and grantmakers) and post consistently. Share behind-the-scenes stories, volunteer spotlights, impact statistics, and calls to action. Video performs especially well — a 60-second clip of a beneficiary sharing their story is more persuasive than any brochure.

Don't neglect email. Build an email list from day one (your website should have a clear signup form) and send a brief monthly update highlighting what you've accomplished, what's coming next, and how people can get involved. Google offers $10,000/month in free advertising credits to eligible nonprofits through Google Ad Grants — apply as soon as you receive your 501(c)(3) determination letter. Pair that with a simple, mobile-friendly website that makes it easy to donate, volunteer, or learn more.`,
  },
  {
    title: 'Building a Board of Advisors',
    slug: 'building-a-board-of-advisors',
    excerpt:
      'Learn how an advisory board can amplify your nonprofit\'s credibility and expertise without the legal obligations of a governing board.',
    category: 'Growth',
    readTime: '5 min read',
    content: `An advisory board is a group of individuals who provide non-binding strategic advice, lend credibility, and open doors that your governing board may not be able to on its own. Unlike your board of directors, advisory board members have no fiduciary duties, no voting power, and no legal liability — which makes it much easier to recruit prominent names.

Think about what gaps your organization has. Need help with fundraising strategy? Recruit a development professional. Want to strengthen your programs? Invite a subject-matter expert. Trying to gain credibility with grantmakers? Ask a respected community leader to lend their name. The ask is lighter than a board seat: "We'd love your advice 2-3 times a year and permission to list your name on our website."

Keep your advisory board engaged with a brief quarterly email update and one annual meeting (virtual is fine). Ask specific, targeted questions rather than vague requests for "general advice." And always express gratitude — a handwritten note after each interaction goes a long way. A well-curated advisory board of 5-8 people can dramatically accelerate a new nonprofit's growth, grant success, and community reputation.`,
  },
];

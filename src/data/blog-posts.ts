export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string; // HTML content
  author: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  tags: string[];
  readingTime: number; // minutes
  featuredImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-start-a-501c3-nonprofit-step-by-step-guide',
    title: 'How to Start a 501(c)(3) Nonprofit: A Step-by-Step Guide for 2025',
    metaDescription: 'Learn how to start a 501(c)(3) nonprofit organization in 2025. Complete guide covering incorporation, bylaws, EIN, and IRS Form 1023-EZ filing.',
    excerpt: 'Starting a nonprofit doesn\'t have to cost thousands in legal fees. Here\'s your complete roadmap from idea to tax-exempt status.',
    content: `<h2>Why Start a 501(c)(3)?</h2><p>A 501(c)(3) designation from the IRS gives your nonprofit tax-exempt status, makes donations tax-deductible for your supporters, and opens the door to grants and institutional funding. For grassroots organizers, students, and community leaders, it\'s the gold standard of credibility.</p><h2>Step 1: Define Your Mission</h2><p>Every nonprofit starts with a clear, focused mission statement. The IRS wants to see that your organization serves a charitable, educational, religious, scientific, or literary purpose. Keep it specific — "reducing food insecurity in Austin, TX" is stronger than "helping people."</p><h2>Step 2: Choose Your State and Incorporate</h2><p>You\'ll need to file Articles of Incorporation with your state\'s Secretary of State office. Requirements vary by state — filing fees range from $0 (some states) to $300+. TurboCharity generates state-specific articles automatically.</p><h2>Step 3: Draft Your Bylaws</h2><p>Bylaws are your nonprofit\'s operating manual. They define your board structure, meeting requirements, officer roles, and conflict-of-interest policies. The IRS reviews these during your application.</p><h2>Step 4: Get Your EIN</h2><p>Apply for an Employer Identification Number (EIN) from the IRS — it\'s free and takes minutes online at IRS.gov. You\'ll need this for your bank account and tax filings.</p><h2>Step 5: File IRS Form 1023-EZ</h2><p>If your nonprofit expects less than $50,000 in annual gross receipts and less than $250,000 in total assets, you likely qualify for the streamlined Form 1023-EZ. The filing fee is $275. TurboCharity auto-fills this form using your information.</p><h2>How Long Does It Take?</h2><p>Traditional route with a lawyer: 3-6 months and $2,000-$5,000. With TurboCharity: as little as a few days for the paperwork, plus IRS processing time (typically 2-4 weeks for 1023-EZ).</p>`,
    author: 'TurboCharity Team',
    publishedAt: '2025-01-15T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z',
    tags: ['501c3', 'nonprofit formation', 'guide', 'IRS'],
    readingTime: 7
  },
  {
    slug: 'nonprofit-incorporation-costs-by-state-2025',
    title: 'Nonprofit Incorporation Costs by State: Complete 2025 Breakdown',
    metaDescription: 'Compare nonprofit incorporation costs across all 50 states. Filing fees, annual reports, and hidden costs explained for 2025.',
    excerpt: 'State filing fees for nonprofit incorporation range from $0 to over $300. Here\'s what you\'ll actually pay in every state.',
    content: `<h2>What Does It Cost to Incorporate a Nonprofit?</h2><p>The cost to incorporate a nonprofit varies dramatically by state. Some states like Kentucky charge as little as $8, while others like New York can cost $75+ just for the filing. But incorporation fees are just the beginning.</p><h2>State Filing Fees Overview</h2><p>Here\'s what you need to know: most states charge between $25 and $125 for Articles of Incorporation. On top of that, you\'ll face annual report fees (typically $10-$50/year), potential publication requirements (New York requires newspaper publication costing $200-$1,000+), and state-specific registration for charitable solicitation.</p><h2>Hidden Costs to Watch For</h2><p>Beyond filing fees, budget for: IRS Form 1023-EZ filing ($275), registered agent service ($50-$300/year if you use a service), and state charitable solicitation registration. Many states require registration before you can legally fundraise.</p><h2>How TurboCharity Saves You Money</h2><p>Traditional lawyers charge $2,000-$5,000 for nonprofit formation. TurboCharity automates the entire process — generating state-specific documents, auto-filling IRS forms, and guiding you through each state\'s requirements — at a fraction of the cost.</p><h2>Free and Low-Cost States</h2><p>If you\'re flexible on where to incorporate, consider states with the lowest fees: Kentucky ($8), Colorado ($50 online), and Arizona ($40). However, most nonprofits should incorporate in the state where they\'ll primarily operate.</p>`,
    author: 'TurboCharity Team',
    publishedAt: '2025-01-18T00:00:00Z',
    updatedAt: '2025-01-18T00:00:00Z',
    tags: ['incorporation costs', 'state filing', 'nonprofit budget'],
    readingTime: 6
  },
  {
    slug: 'irs-form-1023-ez-eligibility-and-filing-guide',
    title: 'IRS Form 1023-EZ: Eligibility Requirements and Filing Guide',
    metaDescription: 'Is your nonprofit eligible for IRS Form 1023-EZ? Learn eligibility requirements, filing steps, processing times, and common mistakes to avoid.',
    excerpt: 'Form 1023-EZ is the fastest path to 501(c)(3) status. Find out if you qualify and how to file correctly the first time.',
    content: `<h2>What Is Form 1023-EZ?</h2><p>Form 1023-EZ is the IRS\'s streamlined application for tax-exempt status under section 501(c)(3). Introduced in 2014, it replaced the lengthy Form 1023 (26+ pages) with a simplified version for smaller organizations. The filing fee is $275.</p><h2>Eligibility Requirements</h2><p>To use Form 1023-EZ, your organization must: have projected annual gross receipts of $50,000 or less for the next 3 years, have total assets of $250,000 or less, be organized in the United States, and not be a successor to a for-profit entity. Use the IRS\'s eligibility worksheet to confirm.</p><h2>Step-by-Step Filing Process</h2><p>1. Complete the eligibility worksheet. 2. Create an account on Pay.gov. 3. Fill out the form online (it\'s only about 3 pages). 4. Pay the $275 fee. 5. Submit electronically. There is no paper filing option for 1023-EZ.</p><h2>Processing Times</h2><p>As of 2025, the IRS typically processes Form 1023-EZ applications within 2-4 weeks. Compare that to 3-6 months for the full Form 1023. Your determination letter arrives by mail.</p><h2>Common Mistakes to Avoid</h2><p>The top reasons for rejection: incorrect EIN, mission statement that doesn\'t match IRS charitable purposes, not completing the eligibility worksheet first, and selecting the wrong foundation classification. TurboCharity\'s guided process prevents all of these.</p>`,
    author: 'TurboCharity Team',
    publishedAt: '2025-01-22T00:00:00Z',
    updatedAt: '2025-01-22T00:00:00Z',
    tags: ['IRS', 'Form 1023-EZ', 'tax-exempt status', 'filing guide'],
    readingTime: 5
  },
  {
    slug: 'student-nonprofit-guide-high-school-college',
    title: 'How to Start a Nonprofit as a Student: High School & College Guide',
    metaDescription: 'Complete guide for high school and college students starting a nonprofit. Learn about 501(c)(3) formation, fiscal sponsors, and building your board.',
    excerpt: 'You don\'t need to wait until you\'re older to make an impact. Here\'s how students are launching real nonprofits while still in school.',
    content: `<h2>Why Students Are Starting Nonprofits</h2><p>A growing number of high school and college students are founding nonprofits to address issues they care about — from environmental justice to education equity. And yes, you can legally start a 501(c)(3) at any age (though minors may need an adult to sign certain documents).</p><h2>Option 1: Full 501(c)(3) Status</h2><p>If you\'re serious about long-term impact, filing for your own 501(c)(3) status gives you full control. You\'ll need to incorporate in your state, draft bylaws, assemble a board (minimum 3 members in most states), and file with the IRS.</p><h2>Option 2: Fiscal Sponsorship</h2><p>Not ready for the full process? A fiscal sponsor is an existing 501(c)(3) that "hosts" your project. Donations flow through them, giving your donors tax deductions while you build your track record. Popular fiscal sponsors include Hack Club (for tech), and local community foundations.</p><h2>Building Your Board</h2><p>Most states require at least 3 board members. For student nonprofits, consider: a faculty advisor, a parent or community leader, and a peer. Your board provides governance, not day-to-day management.</p><h2>College Application Boost</h2><p>Beyond the impact you\'ll create, founding a nonprofit demonstrates leadership, initiative, and social awareness. Admissions officers notice founders who take action, not just volunteers.</p><h2>TurboCharity for Students</h2><p>We built TurboCharity specifically for people who can\'t afford $2,000+ in legal fees. Our platform walks you through every step with state-specific guidance, auto-generated documents, and plain-English explanations.</p>`,
    author: 'TurboCharity Team',
    publishedAt: '2025-01-25T00:00:00Z',
    updatedAt: '2025-01-25T00:00:00Z',
    tags: ['students', 'high school', 'college', 'nonprofit formation', 'fiscal sponsor'],
    readingTime: 6
  },
  {
    slug: 'nonprofit-bylaws-template-what-to-include',
    title: 'Nonprofit Bylaws Template: What to Include and Why It Matters',
    metaDescription: 'Free nonprofit bylaws guide with essential sections. Learn what the IRS requires, state-specific rules, and how to draft compliant bylaws for your 501(c)(3).',
    excerpt: 'Your bylaws are your nonprofit\'s constitution. Here\'s exactly what to include to satisfy the IRS and your state.',
    content: `<h2>What Are Nonprofit Bylaws?</h2><p>Bylaws are the internal governing document for your nonprofit. They\'re not filed with the state (in most cases), but the IRS reviews them as part of your 501(c)(3) application. Think of them as your organization\'s operating manual.</p><h2>Essential Sections</h2><p><strong>Article I: Name and Purpose</strong> — State your legal name and charitable mission. This must align with your Articles of Incorporation and IRS application.</p><p><strong>Article II: Board of Directors</strong> — Define the number of directors (minimum varies by state), terms of service, how they\'re elected, and removal procedures. Most nonprofits use 3-year staggered terms.</p><p><strong>Article III: Officers</strong> — At minimum, you need a President, Secretary, and Treasurer. Define their duties and how they\'re selected.</p><p><strong>Article IV: Meetings</strong> — Specify how often the board meets (annually at minimum), quorum requirements (usually a majority), and whether virtual meetings are allowed.</p><p><strong>Article V: Conflict of Interest Policy</strong> — The IRS strongly recommends (essentially requires) this. Board members must disclose and recuse themselves from decisions where they have a financial interest.</p><p><strong>Article VI: Dissolution Clause</strong> — Required by the IRS. Assets must be distributed to another 501(c)(3) upon dissolution, not to individuals.</p><h2>State-Specific Requirements</h2><p>Some states have specific bylaw requirements. California requires certain language about inspecting records. New York has rules about board size. TurboCharity generates state-compliant bylaws automatically based on where you incorporate.</p>`,
    author: 'TurboCharity Team',
    publishedAt: '2025-01-28T00:00:00Z',
    updatedAt: '2025-01-28T00:00:00Z',
    tags: ['bylaws', 'nonprofit governance', 'IRS requirements', 'template'],
    readingTime: 6
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

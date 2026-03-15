export interface FaqItem {
  question: string;
  answer: string;
}

export type FaqCategory =
  | 'General'
  | 'Formation Process'
  | 'IRS & Tax-Exempt Status'
  | 'Costs & Pricing'
  | 'After Formation';

export const FAQ_CATEGORIES: FaqCategory[] = [
  'General',
  'Formation Process',
  'IRS & Tax-Exempt Status',
  'Costs & Pricing',
  'After Formation',
];

export interface FaqGroup {
  category: FaqCategory;
  items: FaqItem[];
}

export const faqs: FaqGroup[] = [
  {
    category: 'General',
    items: [
      {
        question: 'What is a 501(c)(3) nonprofit organization?',
        answer:
          'A 501(c)(3) is an organization that has been granted tax-exempt status by the IRS. This means the organization does not pay federal income tax on money received that is related to its exempt purpose. Additionally, donations made to 501(c)(3) organizations are tax-deductible for the donors.',
      },
      {
        question: 'What is TurboCharity and how does it help?',
        answer:
          'TurboCharity is an AI-powered platform that automates the nonprofit formation process. We generate state-specific Articles of Incorporation, bylaws, conflict-of-interest policies, and auto-fill IRS Form 1023-EZ — all based on your answers to a few simple questions. What typically costs $2,000-$5,000 with a lawyer, we do at a fraction of the cost.',
      },
      {
        question: 'Do I need a lawyer to start a nonprofit?',
        answer:
          'No. While lawyers can be helpful, they are not required to form a nonprofit. TurboCharity was built to make the process accessible without legal fees. Our platform generates IRS-compliant documents and guides you through every filing step. For complex situations (e.g., international operations or unusual structures), we recommend consulting an attorney.',
      },
    ],
  },
  {
    category: 'Formation Process',
    items: [
      {
        question: 'What are the basic steps to form a nonprofit?',
        answer:
          'The key steps are: 1) Define your mission and choose a name. 2) Incorporate in your state by filing Articles of Incorporation. 3) Draft your bylaws and conflict-of-interest policy. 4) Obtain an EIN from the IRS. 5) File IRS Form 1023-EZ (or Form 1023) for 501(c)(3) status. 6) Register for state-level tax exemptions and charitable solicitation. TurboCharity automates steps 2-5.',
      },
      {
        question: 'How many board members do I need?',
        answer:
          'Most states require a minimum of 1-3 board members (directors). However, the IRS and nonprofit best practices recommend at least 3 unrelated board members to demonstrate proper governance. Some states like California and New York have specific requirements — TurboCharity tailors your documents to your state\'s rules.',
      },
      {
        question: 'Can I start a nonprofit by myself?',
        answer:
          'You can initiate the process yourself, but you will need other people involved. Most states require at least 1-3 directors on your board, and the IRS prefers to see at least 3 unrelated board members. You can serve as both an officer and a director, but you cannot be the sole board member in most states.',
      },
      {
        question: 'What state should I incorporate in?',
        answer:
          'In most cases, you should incorporate in the state where your nonprofit will primarily operate. This simplifies compliance and avoids having to register as a foreign entity in multiple states. Some states have lower fees than others, but the cost savings rarely justify the added complexity of out-of-state incorporation.',
      },
    ],
  },
  {
    category: 'IRS & Tax-Exempt Status',
    items: [
      {
        question: 'What is the difference between Form 1023 and Form 1023-EZ?',
        answer:
          'Form 1023-EZ is a streamlined, 3-page version of the full 26-page Form 1023. It is available for smaller organizations that expect annual gross receipts of $50,000 or less and total assets of $250,000 or less. The filing fee for 1023-EZ is $275 (vs. $600 for the full 1023), and processing typically takes 2-4 weeks instead of 3-6 months.',
      },
      {
        question: 'How long does it take to get 501(c)(3) status?',
        answer:
          'With Form 1023-EZ, the IRS typically processes applications within 2-4 weeks. The full Form 1023 can take 3-6 months or longer. Before filing with the IRS, you need to incorporate in your state (processing times vary from same-day to several weeks) and obtain an EIN (immediate online).',
      },
      {
        question: 'What is an EIN and how do I get one?',
        answer:
          'An EIN (Employer Identification Number) is like a Social Security number for your organization. It is required for opening a bank account, filing taxes, and applying for tax-exempt status. You can apply for free online at IRS.gov — the process takes just a few minutes and you receive your EIN immediately.',
      },
      {
        question: 'Can my 501(c)(3) application be denied?',
        answer:
          'Yes, but it is uncommon with properly prepared applications. Common reasons for denial include: a mission statement that does not align with IRS charitable purposes, incomplete documentation, incorrect EIN, or not meeting eligibility requirements for Form 1023-EZ. TurboCharity\'s guided process is designed to prevent these issues.',
      },
    ],
  },
  {
    category: 'Costs & Pricing',
    items: [
      {
        question: 'How much does it cost to start a nonprofit?',
        answer:
          'The minimum costs include: state incorporation filing fee ($0-$300 depending on state), IRS Form 1023-EZ filing fee ($275), and potentially a registered agent service ($50-$300/year). With a lawyer, total costs can reach $2,000-$5,000+. With TurboCharity, you pay our platform fee plus only the government filing fees.',
      },
      {
        question: 'Are there any recurring fees after formation?',
        answer:
          'Yes. Most states require an annual report (typically $10-$50/year). You must also file IRS Form 990, 990-EZ, or 990-N annually (there is no IRS fee for filing, but you may need professional help). Some states also require annual charitable solicitation registration renewals. TurboCharity provides reminders for all compliance deadlines.',
      },
      {
        question: 'Does TurboCharity charge monthly fees?',
        answer:
          'TurboCharity offers both one-time and subscription options. Our core formation package is a one-time fee. We also offer an optional compliance subscription that includes annual filing reminders, document updates, and ongoing support to keep your nonprofit in good standing.',
      },
    ],
  },
  {
    category: 'After Formation',
    items: [
      {
        question: 'What do I need to do after receiving my 501(c)(3) determination letter?',
        answer:
          'After receiving your IRS determination letter: 1) Apply for state tax exemptions (income, sales, property). 2) Register for charitable solicitation in states where you will fundraise. 3) Open a business bank account. 4) Set up basic bookkeeping. 5) Schedule your first board meeting. 6) Begin fundraising and operations.',
      },
      {
        question: 'Can I pay myself a salary from my nonprofit?',
        answer:
          'Yes. Nonprofit founders and employees can receive reasonable compensation for their work. The key word is "reasonable" — salaries must be comparable to what similar organizations pay for similar roles. Excessive compensation can jeopardize your tax-exempt status and create legal issues.',
      },
      {
        question: 'What annual filings are required?',
        answer:
          'At minimum, you must file an annual information return with the IRS (Form 990, 990-EZ, or 990-N depending on your revenue). Most states also require an annual report with the Secretary of State and potentially an annual charitable solicitation registration renewal. Failure to file can result in loss of tax-exempt status.',
      },
    ],
  },
];

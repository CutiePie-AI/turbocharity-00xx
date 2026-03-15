export type FaqCategory = 'Formation' | 'Legal' | 'Financial' | 'Operations';

export interface Faq {
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqs: Faq[] = [
  {
    question: 'How much does it cost to start a nonprofit?',
    answer:
      'The total cost to start a nonprofit typically ranges from $300 to $1,000 when you handle the process yourself. This includes state filing fees ($8-$300 depending on your state), the IRS Form 1023-EZ fee ($275), and optional costs like a registered agent service. Hiring a lawyer can add $2,000-$5,000 to these costs.',
    category: 'Financial',
  },
  {
    question: 'How long does it take to get 501(c)(3) status?',
    answer:
      'The timeline depends on which IRS form you use. Form 1023-EZ (for smaller organizations) is typically processed in 2-4 weeks. The full Form 1023 can take 3-6 months or longer. Before filing with the IRS, you also need to incorporate at the state level, which takes 3-15 business days depending on the state.',
    category: 'Formation',
  },
  {
    question: 'What is the difference between a nonprofit and a 501(c)(3)?',
    answer:
      'A nonprofit is a type of corporation formed under state law that does not distribute profits to owners or shareholders. A 501(c)(3) is a federal tax designation from the IRS that grants tax-exempt status and makes donations to your organization tax-deductible. You must first incorporate as a nonprofit at the state level, then separately apply to the IRS for 501(c)(3) status.',
    category: 'Formation',
  },
  {
    question: 'How many board members does a nonprofit need?',
    answer:
      'Most states require a minimum of three board members for a nonprofit corporation. Some states like California allow as few as one director. Governance best practices recommend five to seven board members to ensure diverse perspectives and effective oversight. Board members should bring different skills and community connections to the organization.',
    category: 'Legal',
  },
  {
    question: 'Can I pay myself a salary from my nonprofit?',
    answer:
      'Yes, nonprofit employees (including founders) can receive reasonable compensation for work performed. The key requirement is that compensation must be "reasonable" — meaning comparable to what similar organizations pay for similar roles. The IRS scrutinizes excessive compensation as a form of private inurement, which can jeopardize your tax-exempt status.',
    category: 'Financial',
  },
  {
    question: 'Do I need a lawyer to start a nonprofit?',
    answer:
      'No, you are not legally required to hire a lawyer to start a nonprofit. Many founders successfully incorporate and obtain 501(c)(3) status on their own, especially using Form 1023-EZ. However, if your organization has complex structures, significant assets, or unusual activities, consulting a nonprofit attorney can help you avoid costly mistakes.',
    category: 'Formation',
  },
  {
    question: 'What is the difference between Form 1023 and Form 1023-EZ?',
    answer:
      'Form 1023-EZ is a streamlined three-page application for organizations with projected annual gross receipts under $50,000 and total assets under $250,000. The full Form 1023 is a comprehensive 26+ page application required for larger organizations. Both cost $275 to file, but Form 1023-EZ is processed in weeks while Form 1023 can take months.',
    category: 'Formation',
  },
  {
    question: 'Does my nonprofit need to file taxes?',
    answer:
      'Yes, most 501(c)(3) organizations must file an annual information return with the IRS. Organizations with gross receipts under $50,000 file Form 990-N (e-Postcard). Those with gross receipts under $200,000 and assets under $500,000 can file Form 990-EZ. Larger organizations file the full Form 990. Failure to file for three consecutive years results in automatic revocation of tax-exempt status.',
    category: 'Financial',
  },
  {
    question: 'Can a nonprofit make money and have a surplus?',
    answer:
      'Absolutely. Nonprofits can and should generate revenue that exceeds expenses. The distinction is that surplus funds must be reinvested into the organization\'s mission rather than distributed to founders, board members, or shareholders. Many healthy nonprofits maintain financial reserves to ensure long-term sustainability and weather unexpected challenges.',
    category: 'Financial',
  },
  {
    question: 'What is a registered agent and do I need one?',
    answer:
      'A registered agent is a person or company designated to receive legal documents and official correspondence on behalf of your nonprofit. Every state requires a registered agent with a physical address in the state of incorporation. You can serve as your own registered agent, appoint a board member, or hire a registered agent service for $50-$300 per year.',
    category: 'Legal',
  },
  {
    question: 'Can a nonprofit operate in multiple states?',
    answer:
      'Yes, a nonprofit can operate nationwide. You incorporate in one state (your "home" state) and then register as a "foreign" nonprofit in each additional state where you have a physical presence or conduct significant activities. Most states also require charitable solicitation registration before you can fundraise within their borders.',
    category: 'Operations',
  },
  {
    question: 'What are nonprofit bylaws and are they required?',
    answer:
      'Bylaws are your nonprofit\'s internal governing document that outline how the organization will be managed. They cover board structure, officer roles, meeting procedures, conflict of interest policies, and amendment processes. While not always required to be filed with the state, the IRS reviews bylaws during the 501(c)(3) application and expects specific provisions.',
    category: 'Legal',
  },
  {
    question: 'How does a nonprofit maintain its tax-exempt status?',
    answer:
      'To maintain 501(c)(3) status, your organization must file annual IRS returns (Form 990, 990-EZ, or 990-N), operate exclusively for exempt purposes, avoid private inurement and excessive compensation, refrain from political campaign activity, and limit lobbying activities. Failing to file annual returns for three consecutive years results in automatic revocation.',
    category: 'Operations',
  },
  {
    question: 'What is the role of a nonprofit board of directors?',
    answer:
      'The board of directors provides governance and strategic oversight, not day-to-day management. Board members have three fiduciary duties: the duty of care (making informed decisions), the duty of loyalty (acting in the organization\'s interest), and the duty of obedience (ensuring compliance with the mission and law). The board hires leadership, approves budgets, and ensures accountability.',
    category: 'Legal',
  },
  {
    question: 'Can I convert an existing business into a nonprofit?',
    answer:
      'Converting a for-profit business into a nonprofit is possible but complex. You generally need to form a new nonprofit corporation and transfer assets to it, which may trigger tax consequences. The IRS scrutinizes conversions closely to ensure they are not attempts to avoid taxes. Consulting a nonprofit attorney is strongly recommended for conversions.',
    category: 'Operations',
  },
];

export const faqsByCategory: Record<FaqCategory, Faq[]> = {
  Formation: faqs.filter((faq) => faq.category === 'Formation'),
  Legal: faqs.filter((faq) => faq.category === 'Legal'),
  Financial: faqs.filter((faq) => faq.category === 'Financial'),
  Operations: faqs.filter((faq) => faq.category === 'Operations'),
};

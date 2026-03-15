export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

/** @deprecated Use FaqItem */
export type FAQ = FaqItem;

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How long does it take to form a nonprofit with TurboCharity?',
    answer:
      'Most users complete the questionnaire in under 30 minutes, and document generation is instant. State processing times vary from 3 to 14 business days depending on your state, and IRS determination for Form 1023-EZ typically takes 2 to 4 weeks. In total, you can have full 501(c)(3) status in as little as 3 to 6 weeks.',
    category: 'Getting Started',
  },
  {
    question: 'Do I need a lawyer to start a nonprofit?',
    answer:
      'No, you do not need a lawyer to form a nonprofit. TurboCharity generates all the legal documents you need, including Articles of Incorporation, bylaws, conflict-of-interest policies, and IRS forms. Everything is reviewed for compliance with both federal and state-specific requirements. However, organizations with complex structures may benefit from consulting an attorney.',
    category: 'Getting Started',
  },
  {
    question: 'Is TurboCharity available in all 50 states?',
    answer:
      'Yes, TurboCharity supports nonprofit formation in all 50 U.S. states plus Washington D.C. Our state compliance engine automatically adapts your documents to meet each state\'s specific requirements, including the correct filing forms, required language, and board structure rules.',
    category: 'Getting Started',
  },
  {
    question: 'What is a 501(c)(3) and why do I need one?',
    answer:
      'A 501(c)(3) is a tax-exempt nonprofit organization recognized by the IRS under section 501(c)(3) of the Internal Revenue Code. This status allows your organization to receive tax-deductible donations from supporters, apply for grants from foundations and government agencies, and enjoy exemption from federal income tax. It is considered the gold standard for charitable organizations in the United States.',
    category: 'Tax-Exempt Status',
  },
  {
    question: 'What is the difference between a 501(c)(3) and a 501(c)(4)?',
    answer:
      'A 501(c)(3) organization is organized for charitable, religious, educational, or scientific purposes and can receive tax-deductible donations. A 501(c)(4) is a social welfare organization that can engage in more lobbying and political activity but cannot offer donors a tax deduction. Most nonprofit founders seeking to raise charitable donations and apply for grants should choose the 501(c)(3) structure.',
    category: 'Tax-Exempt Status',
  },
  {
    question: 'How much does it cost to start a nonprofit?',
    answer:
      'Total government fees typically range from $300 to $800 in most states. This includes the state filing fee (ranging from $8 in Kentucky to $250 in Alaska), the IRS Form 1023-EZ fee ($275), and any additional state registration fees. Traditional lawyers charge $2,000 to $5,000 on top of these fees. TurboCharity provides professional-quality formation at a fraction of the cost of legal counsel.',
    category: 'Costs & Fees',
  },
  {
    question: 'What is the IRS Form 1023-EZ and do I qualify?',
    answer:
      'Form 1023-EZ is the streamlined IRS application for 501(c)(3) tax-exempt status. You qualify if your organization projects annual gross receipts of $50,000 or less for each of the next 3 years and has total assets of $250,000 or less. The filing fee is $275, and processing typically takes 2 to 4 weeks, compared to 3 to 6 months for the full Form 1023.',
    category: 'IRS Filing',
  },
  {
    question: 'How many board members do I need for my nonprofit?',
    answer:
      'The minimum number of board members varies by state, ranging from 1 (in states like California, Michigan, and North Carolina) to 5 (in New Hampshire). Most states require at least 3 board members. Regardless of your state\'s minimum, the IRS recommends at least 3 independent directors for 501(c)(3) organizations to demonstrate proper governance.',
    category: 'Governance',
  },
  {
    question: 'Do I need a registered agent for my nonprofit?',
    answer:
      'Almost all states require a registered agent, which is a person or entity designated to receive legal documents and official correspondence on behalf of your nonprofit. The registered agent must have a physical street address (not a PO Box) in the state of incorporation. You can serve as your own registered agent or hire a professional registered agent service.',
    category: 'Formation Requirements',
  },
  {
    question: 'What are nonprofit bylaws and are they required?',
    answer:
      'Bylaws are the internal governing document that defines how your nonprofit operates, including board structure, officer roles, meeting requirements, and voting procedures. While most states do not require bylaws to be filed with the state, the IRS reviews them as part of your 501(c)(3) application. Properly drafted bylaws are essential for maintaining good governance and protecting your tax-exempt status.',
    category: 'Formation Requirements',
  },
  {
    question: 'Can I pay myself a salary from my nonprofit?',
    answer:
      'Yes, nonprofits can and do pay employees, including founders, a reasonable salary for work performed. The key requirement is that compensation must be "reasonable" and comparable to what similar organizations pay for similar positions. The IRS prohibits "private inurement," meaning excessive compensation or benefits that disproportionately benefit insiders. Your board should approve all compensation through a formal process.',
    category: 'Operations',
  },
  {
    question: 'What annual filings are required after forming a nonprofit?',
    answer:
      'At the federal level, all 501(c)(3) organizations must file an annual information return with the IRS (Form 990-N, 990-EZ, or 990 depending on your size). Most states also require an annual or biennial report filed with the Secretary of State. If you fundraise, you may need to renew charitable solicitation registrations annually. Failure to file IRS returns for three consecutive years results in automatic revocation of tax-exempt status.',
    category: 'Compliance',
  },
  {
    question: 'Can a nonprofit make a profit?',
    answer:
      'Yes, nonprofits can and should generate surplus revenue (more income than expenses). The key distinction is that profits cannot be distributed to individuals, directors, or officers as dividends. All surplus revenue must be reinvested into the organization\'s charitable mission. Having a financial reserve is actually a sign of good financial management and organizational sustainability.',
    category: 'Operations',
  },
  {
    question: 'Do I need to register for charitable solicitation before fundraising?',
    answer:
      'Approximately 40 states plus Washington D.C. require nonprofits to register before soliciting donations from the public. Notable exceptions include Idaho, Indiana, Montana, and Wyoming. If you fundraise online, you may need to register in every state where your donors reside. Penalties for non-compliance can include fines of $1,000 or more per violation.',
    category: 'Compliance',
  },
  {
    question: 'What is the difference between incorporating and getting tax-exempt status?',
    answer:
      'Incorporating creates your nonprofit as a legal entity under state law by filing Articles of Incorporation with the Secretary of State. Tax-exempt status is a separate federal designation obtained by filing Form 1023 or 1023-EZ with the IRS. You must incorporate first, then apply for tax-exempt status. State incorporation does not automatically grant tax exemption, and vice versa. Many states also require a separate state tax exemption application.',
    category: 'Getting Started',
  },
];

/** Alias for backward compatibility */
export const faqs = FAQ_ITEMS;

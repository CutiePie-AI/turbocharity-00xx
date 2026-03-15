// ---------------------------------------------------------------------------
// TurboCharity – Step-by-step nonprofit creation guide
// ---------------------------------------------------------------------------

export interface GuideStep {
  step: number;
  title: string;
  description: string;
  estimatedTime: string;
}

export const STEP_BY_STEP_GUIDE: GuideStep[] = [
  {
    step: 1,
    title: 'Define Your Mission and Purpose',
    description:
      'Write a clear, compelling mission statement that explains who you serve, what problem you solve, and how you plan to do it. The IRS requires that your mission fall within recognized exempt purposes such as charitable, educational, religious, or scientific activities. A strong mission statement will also guide your fundraising and recruit passionate board members.',
    estimatedTime: '1-2 hours',
  },
  {
    step: 2,
    title: 'Choose a Name and Check Availability',
    description:
      'Pick a unique name for your nonprofit that reflects your mission and is not already in use in your state. Most states require the name to include a designator like "Inc." or "Corporation." TurboCharity\'s name-check tool searches your state\'s business registry so you can confirm availability before filing.',
    estimatedTime: '30 minutes',
  },
  {
    step: 3,
    title: 'Recruit Your Initial Board of Directors',
    description:
      'Most states require a minimum of one to three directors to form a nonprofit board. Choose people who believe in your mission and bring diverse skills — fundraising, finance, legal, or community connections. Board members are legally responsible for overseeing the organization, so pick individuals you trust to act in the nonprofit\'s best interest.',
    estimatedTime: '1-2 weeks',
  },
  {
    step: 4,
    title: 'File Articles of Incorporation with Your State',
    description:
      'Articles of Incorporation (sometimes called a Certificate of Formation) officially create your nonprofit as a legal entity. TurboCharity generates this document with all required IRS language — including the purpose clause, dissolution clause, and limitation on activities — customized to your state\'s specific requirements.',
    estimatedTime: '1-2 hours to prepare, 3-15 business days for state processing',
  },
  {
    step: 5,
    title: 'Obtain an EIN and Draft Governing Documents',
    description:
      'Apply for a free Employer Identification Number (EIN) from the IRS — you can do this online and receive it immediately. Then adopt your bylaws, elect officers, and hold an organizational board meeting. TurboCharity generates your bylaws, conflict-of-interest policy, and initial board resolutions so everything is ready to sign.',
    estimatedTime: '1-3 hours',
  },
  {
    step: 6,
    title: 'File IRS Form 1023-EZ for 501(c)(3) Status',
    description:
      'If your nonprofit expects annual gross receipts of $50,000 or less and total assets of $250,000 or less, you likely qualify for the streamlined Form 1023-EZ. TurboCharity auto-fills the form based on your earlier answers and flags any eligibility issues before you submit. The IRS user fee is $275, payable online at pay.gov.',
    estimatedTime: '1-2 hours to prepare, 2-4 weeks for IRS approval',
  },
  {
    step: 7,
    title: 'Set Up Operations and Start Making an Impact',
    description:
      'Once you receive your IRS determination letter, open a bank account, register for any required state charitable solicitation licenses, and set up basic accounting. TurboCharity\'s Pro plan helps you connect financial accounts, sends annual compliance reminders, and gives you fundraising tools so you can focus on your mission from day one.',
    estimatedTime: '1-2 days',
  },
];

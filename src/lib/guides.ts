export interface GuideStep {
  step: number;
  title: string;
  description: string;
  estimatedTime: string;
}

export const HOW_IT_WORKS_STEPS: GuideStep[] = [
  {
    step: 1,
    title: 'Define Your Mission',
    description:
      'Use our AI-powered mission statement generator to articulate your nonprofit purpose. Answer a few questions about your cause, target beneficiaries, and goals, and we will craft a compelling mission statement that resonates with donors and satisfies IRS requirements.',
    estimatedTime: '15 minutes',
  },
  {
    step: 2,
    title: 'Choose Your State & Structure',
    description:
      'Select the state where you want to incorporate and review the specific requirements, fees, and processing times. Our platform automatically adapts all documents to comply with your chosen state regulations.',
    estimatedTime: '10 minutes',
  },
  {
    step: 3,
    title: 'Generate Incorporation Documents',
    description:
      'We generate your Articles of Incorporation tailored to your state requirements. Review the document, make any adjustments, and download it ready to file with your Secretary of State office.',
    estimatedTime: '20 minutes',
  },
  {
    step: 4,
    title: 'Create Your Bylaws',
    description:
      'Our bylaws generator creates a comprehensive governance document covering board structure, officer roles, meeting procedures, conflict of interest policies, and more. Customize any section to fit your organization.',
    estimatedTime: '30 minutes',
  },
  {
    step: 5,
    title: 'Obtain Your EIN',
    description:
      'Follow our step-by-step guide to apply for your Employer Identification Number from the IRS. We walk you through the online application and explain each question so you can complete it with confidence.',
    estimatedTime: '15 minutes',
  },
  {
    step: 6,
    title: 'File for 501(c)(3) Status',
    description:
      'Our IRS Form 1023-EZ assistant pre-fills your application using information you have already provided. Review each section, verify the details, and submit directly to the IRS through Pay.gov.',
    estimatedTime: '45 minutes',
  },
  {
    step: 7,
    title: 'Launch & Stay Compliant',
    description:
      'Once approved, use our compliance dashboard to track annual filing deadlines, state registration renewals, and other obligations. We send reminders so you never miss a deadline or risk losing your tax-exempt status.',
    estimatedTime: '10 minutes',
  },
];

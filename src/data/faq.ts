export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "process" | "legal" | "pricing" | "security";
}

export const faqItems: FAQItem[] = [
  // General
  {
    question: "What is TurboCharity?",
    answer:
      "TurboCharity is an online platform that helps you start a 501(c)(3) nonprofit organization quickly and affordably. We provide step-by-step guidance, automated document preparation, state and federal filing assistance, and ongoing compliance tools so you can focus on your mission instead of paperwork.",
    category: "general",
  },
  {
    question: "What is a 501(c)(3) organization?",
    answer:
      "A 501(c)(3) is a tax-exempt nonprofit organization recognized by the IRS. This designation allows your organization to receive tax-deductible donations, apply for grants, and avoid paying federal income tax on revenue related to your mission. Common examples include charities, educational institutions, religious organizations, and scientific research groups.",
    category: "general",
  },
  {
    question: "How is TurboCharity different from LegalZoom?",
    answer:
      "TurboCharity is purpose-built for nonprofits, while LegalZoom is a general legal services platform. We offer nonprofit-specific guidance at every step, lower pricing tailored to nonprofit budgets, specialized compliance tools for tax-exempt organizations, and a free tier so you can get started with no upfront cost. Our platform also provides ongoing compliance monitoring and state-specific filing support that general legal platforms typically lack.",
    category: "general",
  },
  {
    question: "Can students start nonprofits?",
    answer:
      "Yes! There is no minimum age requirement to start a nonprofit, though board members typically need to be at least 18 years old. Many students have successfully founded impactful organizations. TurboCharity can help you find qualified board members, navigate school-related considerations, and set up your nonprofit so it can grow alongside your education.",
    category: "general",
  },

  // Process
  {
    question: "How long does it take to start a nonprofit with TurboCharity?",
    answer:
      "You can complete the initial setup and document preparation in as little as one day. State incorporation typically takes 1-2 weeks depending on your state. IRS 501(c)(3) approval via Form 1023-EZ can take 2-4 weeks, while the full Form 1023 may take 3-6 months. TurboCharity streamlines every step to minimize delays.",
    category: "process",
  },
  {
    question: "What is Form 1023-EZ?",
    answer:
      "Form 1023-EZ is a simplified version of the IRS application for 501(c)(3) tax-exempt status. It is available to smaller organizations that expect annual gross receipts of $50,000 or less and total assets of $250,000 or less. The form is shorter, the filing fee is lower ($275 vs. $600), and processing times are significantly faster. TurboCharity will help you determine if your organization qualifies.",
    category: "process",
  },
  {
    question: "What states are supported?",
    answer:
      "TurboCharity supports nonprofit formation in all 50 U.S. states and the District of Columbia. Each state has different incorporation requirements, filing fees, and ongoing compliance obligations. Our platform provides state-specific guidance and documents tailored to your chosen state of incorporation.",
    category: "process",
  },
  {
    question: "Do I need a board of directors?",
    answer:
      "Yes, most states require nonprofits to have a board of directors. The minimum number of board members varies by state, but is typically between one and three. Your board provides governance and oversight for the organization. TurboCharity provides guidance on board composition, responsibilities, and helps you draft the necessary governance documents.",
    category: "process",
  },
  {
    question: "What about fundraising after I form my nonprofit?",
    answer:
      "Once you have 501(c)(3) status, you can accept tax-deductible donations, apply for grants, and run fundraising campaigns. Most states require you to register before soliciting donations (charitable solicitation registration). TurboCharity provides guidance on fundraising compliance, helps you understand state registration requirements, and offers tools to track your obligations.",
    category: "process",
  },
  {
    question: "What ongoing compliance is needed after formation?",
    answer:
      "Nonprofits must file an annual IRS return (Form 990, 990-EZ, or 990-N depending on your size), maintain state registrations, hold regular board meetings, and keep accurate financial records. Some states require annual reports and charitable solicitation renewals. TurboCharity provides compliance reminders, filing checklists, and tools to help you stay on track year after year.",
    category: "process",
  },

  // Legal
  {
    question: "Do I need a lawyer to start a nonprofit?",
    answer:
      "No, you are not legally required to hire a lawyer to start a nonprofit. TurboCharity provides the guidance, document templates, and filing assistance that would otherwise require legal help. However, if your organization has complex legal needs, such as unusual governance structures or international operations, consulting an attorney may be beneficial. Our platform will flag situations where legal counsel is recommended.",
    category: "legal",
  },

  // Pricing
  {
    question: "How much does it cost to start a nonprofit?",
    answer:
      "Costs vary by state but typically include state incorporation fees ($0-$300), IRS filing fees ($275 for Form 1023-EZ or $600 for Form 1023), and any state-specific registrations. TurboCharity offers a free tier that covers guided setup and document preparation, with paid plans starting at an affordable rate for filing assistance and premium features. This is significantly less than the $1,000-$3,000+ that lawyers or other services typically charge.",
    category: "pricing",
  },
  {
    question: "What's included in the free tier?",
    answer:
      "The free tier includes step-by-step nonprofit formation guidance, document preparation for articles of incorporation and bylaws, a board governance toolkit, our 501(c)(3) eligibility quiz, EIN application guidance, and access to our educational guides and resources. Paid plans add features like automated state and federal filing, compliance monitoring, priority support, and advanced tools.",
    category: "pricing",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes, TurboCharity offers a 30-day money-back guarantee on all paid plans. If you are not satisfied with our service, contact our support team within 30 days of purchase for a full refund. Please note that government filing fees paid to state agencies or the IRS are non-refundable as those are third-party charges.",
    category: "pricing",
  },

  // Security
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. TurboCharity uses bank-level 256-bit SSL encryption for all data in transit and AES-256 encryption for data at rest. We never share your personal information with third parties for marketing purposes. Our infrastructure is hosted on SOC 2 compliant servers, and we perform regular security audits. You can delete your data at any time from your account settings.",
    category: "security",
  },
];

export const faqCategories: Record<FAQItem["category"], string> = {
  general: "General",
  process: "Process & Requirements",
  legal: "Legal",
  pricing: "Pricing & Plans",
  security: "Security & Privacy",
};

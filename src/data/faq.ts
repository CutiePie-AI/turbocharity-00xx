export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "process" | "legal" | "pricing" | "security";
}

export const faqItems: FAQItem[] = [
  {
    question: "What is TurboCharity?",
    answer:
      "TurboCharity is an online platform that helps you start a 501(c)(3) nonprofit organization quickly and affordably. We guide you through every step — from choosing a name and drafting bylaws to filing your articles of incorporation, obtaining an EIN, and submitting your IRS tax-exempt application. Our streamlined process eliminates the confusion and high legal fees traditionally associated with nonprofit formation.",
    category: "general",
  },
  {
    question: "How long does it take to start a nonprofit with TurboCharity?",
    answer:
      "The time to complete your nonprofit formation depends on the complexity of your organization and state processing times. With TurboCharity, you can complete all the paperwork in as little as one day. State incorporation typically takes 1-2 weeks (or faster with expedited filing). IRS determination for Form 1023-EZ applications usually takes 2-4 weeks, while the full Form 1023 can take 3-6 months.",
    category: "process",
  },
  {
    question: "What is a 501(c)(3) nonprofit?",
    answer:
      "A 501(c)(3) is a type of tax-exempt organization recognized by the IRS. It includes charitable, religious, educational, scientific, and literary organizations. Donors to 501(c)(3) organizations can deduct their contributions on their federal tax returns, making this status highly valuable for fundraising. The designation refers to Section 501(c)(3) of the Internal Revenue Code.",
    category: "legal",
  },
  {
    question: "Do I need a lawyer to start a nonprofit?",
    answer:
      "No, you do not need a lawyer to start a nonprofit. TurboCharity was designed to make the process accessible without legal representation. Our platform generates all the required documents, provides state-specific guidance, and walks you through the IRS application step by step. However, if your organization has complex legal needs — such as international operations or unusual structures — consulting an attorney may still be beneficial.",
    category: "legal",
  },
  {
    question: "How much does it cost to start a nonprofit?",
    answer:
      "Costs vary by state but typically include: state incorporation fees ($50-$300), IRS application fees ($275 for Form 1023-EZ or $600 for the full Form 1023), and an optional registered agent fee. TurboCharity offers a free tier that covers guided document preparation. Our paid plans start at $49 and include premium features such as expedited filing support, compliance reminders, and priority assistance. This is significantly less than the $1,000-$5,000+ that attorneys typically charge.",
    category: "pricing",
  },
  {
    question: "What states are supported?",
    answer:
      "TurboCharity supports nonprofit formation in all 50 U.S. states and the District of Columbia. Each state has its own incorporation requirements, and our platform automatically adapts forms, filing instructions, and compliance checklists to match your specific state's rules. We keep our state guides updated as laws change.",
    category: "process",
  },
  {
    question: "What is Form 1023-EZ?",
    answer:
      "Form 1023-EZ is a simplified version of the IRS application for 501(c)(3) tax-exempt status. It's available to smaller organizations that expect annual gross receipts of $50,000 or less and total assets of $250,000 or less. The form is filed online, costs $275, and is typically processed in 2-4 weeks — much faster than the full Form 1023. TurboCharity helps you determine your eligibility and guides you through the application.",
    category: "legal",
  },
  {
    question: "Do I need a board of directors?",
    answer:
      "Yes, most states require a nonprofit to have a board of directors (sometimes called a board of trustees). The minimum number varies by state — some require just one director, while others require three or more. Board members are responsible for overseeing the organization's mission, finances, and operations. TurboCharity provides guidance on board structure, roles, and best practices for recruiting qualified members.",
    category: "legal",
  },
  {
    question: "Can students start a nonprofit?",
    answer:
      "Absolutely! There is no minimum age requirement to serve as a nonprofit incorporator in most states, though board members may need to be at least 18. Many successful nonprofits have been founded by students passionate about a cause. TurboCharity makes the process straightforward enough for anyone to follow, and our guides include specific tips for student-led organizations, including partnering with adult advisors and school-based fundraising strategies.",
    category: "general",
  },
  {
    question: "What about fundraising after I form my nonprofit?",
    answer:
      "Once you receive your 501(c)(3) determination letter from the IRS, you can begin accepting tax-deductible donations. Many states also require you to register for charitable solicitation before actively fundraising. TurboCharity provides a post-formation checklist that includes fundraising registration guidance, tips for setting up online donation pages, grant-writing resources, and strategies for your first fundraising campaign.",
    category: "process",
  },
  {
    question: "Is my data secure on TurboCharity?",
    answer:
      "Yes, we take data security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We do not sell or share your personal information with third parties. Our platform follows industry-standard security practices including regular security audits, role-based access controls, and secure cloud infrastructure. You can delete your account and all associated data at any time.",
    category: "security",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes. If you're not satisfied with TurboCharity's paid services, you can request a full refund within 30 days of purchase — no questions asked. If you've already submitted filings through our platform and encounter issues, our support team will work with you to resolve them. Government filing fees paid directly to state agencies or the IRS are non-refundable, as those are third-party charges.",
    category: "pricing",
  },
  {
    question: "What's included in the free tier?",
    answer:
      "TurboCharity's free tier includes: step-by-step nonprofit formation guidance, state-specific filing instructions, document templates for articles of incorporation and bylaws, an EIN application walkthrough, access to our nonprofit directory and community guides, and free tools like our nonprofit name checker and budget calculator. Paid plans add features like auto-filled government forms, compliance calendar reminders, expedited support, and expert review of your filings.",
    category: "pricing",
  },
  {
    question: "How is TurboCharity different from LegalZoom?",
    answer:
      "TurboCharity is purpose-built for nonprofit formation, while LegalZoom is a general legal services platform. Key differences include: our platform is specifically designed for 501(c)(3) organizations with nonprofit-specific guidance at every step; we offer a generous free tier so you can get started at no cost; our pricing is significantly lower for comparable services; and we provide ongoing compliance tools and resources tailored to nonprofits rather than generic legal templates.",
    category: "general",
  },
  {
    question: "What ongoing compliance is needed after forming a nonprofit?",
    answer:
      "After formation, nonprofits must maintain compliance to keep their tax-exempt status. This typically includes: filing an annual IRS Form 990 (or 990-EZ / 990-N depending on revenue), renewing state registrations and charitable solicitation permits, holding regular board meetings and keeping minutes, maintaining accurate financial records, and following your organization's bylaws. TurboCharity's compliance dashboard and calendar reminders help you stay on top of all deadlines.",
    category: "process",
  },
];

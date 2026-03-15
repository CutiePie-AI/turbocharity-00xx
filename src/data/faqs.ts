export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to form a nonprofit with TurboCharity?",
    answer:
      "Most users complete the questionnaire in under 30 minutes. Document generation is instant. State processing times vary (typically 3-14 business days), and IRS determination usually takes 2-4 weeks with Form 1023-EZ.",
  },
  {
    question: "Do I need a lawyer to use TurboCharity?",
    answer:
      "No. Our AI generates all the legal documents you need — bylaws, articles of incorporation, conflict-of-interest policies, and IRS forms. Everything is reviewed for compliance with federal and state requirements.",
  },
  {
    question: "Is TurboCharity available in all 50 states?",
    answer:
      "Yes! We support nonprofit formation in all 50 U.S. states plus Washington D.C. Our state compliance engine automatically adapts your documents to meet each state's specific requirements.",
  },
  {
    question: "What is a 501(c)(3) and why do I need one?",
    answer:
      "A 501(c)(3) is a tax-exempt nonprofit organization recognized by the IRS. This status allows your organization to receive tax-deductible donations, apply for grants, and enjoy exemption from federal income tax.",
  },
  {
    question: "What's included in each pricing tier?",
    answer:
      "The Free plan gives you access to state guides and a basic checklist. Pro ($49) includes full document generation, filing guidance, and email support. Premium ($149) adds IRS form preparation, priority support, and attorney review of your documents.",
  },
];

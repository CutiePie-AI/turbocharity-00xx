export interface FAQ {
  question: string;
  answer: string;
  category:
    | "formation"
    | "costs"
    | "timelines"
    | "501c3"
    | "state-specific"
    | "platform"
    | "pricing"
    | "compliance"
    | "young-founders"
    | "comparison";
}

export const faqs: FAQ[] = [
  // ── Formation Process ──────────────────────────────────────
  {
    question: "What are the basic steps to start a nonprofit organization?",
    answer:
      "Starting a nonprofit involves five core steps: (1) choose a mission and name, (2) recruit an initial board of directors (most states require at least three), (3) file Articles of Incorporation with your state, (4) draft bylaws that govern how your organization operates, and (5) apply for federal tax-exempt status by submitting IRS Form 1023 or 1023-EZ. TurboCharity automates steps 3-5, generating all required documents with AI and guiding you through filing so you can focus on your mission.",
    category: "formation",
  },
  {
    question: "Do I need a lawyer to start a nonprofit?",
    answer:
      "No. While many people hire attorneys (often costing $2,000-$5,000+), it is not legally required. TurboCharity was built specifically to eliminate the need for expensive legal counsel during formation. Our AI generates state-compliant Articles of Incorporation, bylaws tailored to your mission, and pre-filled IRS forms. Thousands of nonprofits have been successfully formed without attorneys, and our platform makes the process even more accessible.",
    category: "formation",
  },

  // ── Costs ──────────────────────────────────────────────────
  {
    question: "How much does it cost to start a nonprofit?",
    answer:
      "Government filing fees vary by state but typically range from $30-$300 for Articles of Incorporation. The IRS charges $275 for Form 1023-EZ and $600 for the full Form 1023. You may also need to register for state charitable solicitation ($0-$300 depending on your state). TurboCharity's platform starts free for document generation, with paid plans that cover filing assistance and compliance monitoring. In total, you can launch a fully recognized 501(c)(3) for under $600 in many states.",
    category: "costs",
  },

  // ── Timelines ──────────────────────────────────────────────
  {
    question: "How long does it take to get 501(c)(3) status?",
    answer:
      "With TurboCharity, you can generate all formation documents in under 30 minutes. State incorporation typically takes 1-7 business days (varies by state; expedited processing is available in many states for an extra fee). IRS processing for Form 1023-EZ averages 2-4 weeks, while the full Form 1023 can take 3-6 months. Overall, most TurboCharity users go from idea to tax-exempt status in 3-8 weeks, compared to 6-12 months using traditional methods.",
    category: "timelines",
  },

  // ── 501(c)(3) Requirements ─────────────────────────────────
  {
    question: "What is 501(c)(3) status and why do I need it?",
    answer:
      "Section 501(c)(3) of the Internal Revenue Code grants federal tax-exempt status to organizations operated exclusively for charitable, educational, religious, scientific, or literary purposes. This status means your nonprofit doesn't pay federal income tax on mission-related revenue, and donors can deduct contributions on their tax returns. It also unlocks eligibility for most grants, government contracts, and corporate sponsorships. Without it, donors cannot claim deductions and your fundraising capacity is significantly limited.",
    category: "501c3",
  },
  {
    question: "What is the difference between Form 1023 and Form 1023-EZ?",
    answer:
      "Form 1023-EZ is a streamlined, 3-page application for smaller organizations. You qualify if your projected annual gross receipts are under $50,000 for the next three years and total assets are under $250,000. The filing fee is $275 and processing takes 2-4 weeks. Form 1023 is the full application (26+ pages), required for larger organizations, private foundations, and certain specialized nonprofits. It costs $600 and can take 3-6 months to process. TurboCharity auto-fills both forms based on your answers.",
    category: "501c3",
  },

  // ── State-Specific ─────────────────────────────────────────
  {
    question: "Does TurboCharity support nonprofit formation in all 50 states?",
    answer:
      "Yes. TurboCharity supports nonprofit formation in all 50 U.S. states and the District of Columbia. Our AI is trained on each state's specific requirements, including unique provisions for Articles of Incorporation, registered agent rules, publication requirements (like New York's newspaper publication rule), and state-specific charitable solicitation registration. When you select your state during onboarding, all generated documents automatically comply with local statutes.",
    category: "state-specific",
  },
  {
    question: "Why do some states have additional requirements beyond incorporation?",
    answer:
      "States regulate charities independently of the IRS. Many states require you to register before soliciting donations (charitable solicitation registration), file annual reports with the Secretary of State, and comply with state-specific governance rules. For example, California requires an additional state tax-exemption application (FTB 3500), New York requires newspaper publication of incorporation within 120 days, and Pennsylvania requires registration before any fundraising. TurboCharity alerts you to all state-specific requirements and provides step-by-step checklists.",
    category: "state-specific",
  },

  // ── Platform Features ──────────────────────────────────────
  {
    question: "What documents does TurboCharity generate?",
    answer:
      "TurboCharity generates all essential formation documents: (1) Articles of Incorporation customized for your state, (2) comprehensive bylaws including conflict-of-interest and whistleblower policies, (3) organizational meeting minutes, (4) IRS Form 1023-EZ or Form 1023 (pre-filled with your information), (5) EIN application (SS-4), (6) state-specific charitable solicitation registration forms, and (7) an initial board resolution. All documents are available for download as both PDF and editable Word files.",
    category: "platform",
  },
  {
    question: "How does the AI document generation work?",
    answer:
      "Our AI-powered system asks you a series of plain-language questions about your organization's mission, activities, board members, and structure. Based on your answers, it cross-references IRS guidelines, state statutes, and nonprofit best practices to generate legally compliant documents. The AI tailors language to your specific charitable purpose, incorporates required statutory provisions for your state, and ensures consistency across all documents. You can review, edit, and regenerate any section before finalizing.",
    category: "platform",
  },

  // ── Pricing ────────────────────────────────────────────────
  {
    question: "What is included in TurboCharity's free plan?",
    answer:
      "The free Starter plan includes AI-generated Articles of Incorporation, bylaws, and organizational minutes for one nonprofit. You can preview all documents and export them as PDFs. Paid plans (starting at $49) add IRS form preparation, EIN filing assistance, state-specific charitable solicitation registration, ongoing compliance monitoring, annual report reminders, and priority support. All plans include unlimited document revisions and access to our nonprofit formation guides.",
    category: "pricing",
  },

  // ── Legal Compliance ───────────────────────────────────────
  {
    question: "What ongoing compliance obligations does a nonprofit have?",
    answer:
      "After formation, nonprofits must: (1) file IRS Form 990, 990-EZ, or 990-N annually (due by the 15th day of the 5th month after your fiscal year ends), (2) maintain records of board meetings and financial transactions, (3) renew state charitable solicitation registration annually in most states, (4) file state annual/biennial reports with the Secretary of State, and (5) avoid private inurement (no profits distributed to insiders). Failure to file Form 990 for three consecutive years results in automatic revocation of tax-exempt status. TurboCharity's compliance dashboard tracks all deadlines.",
    category: "compliance",
  },

  // ── Young Founders ─────────────────────────────────────────
  {
    question: "Can a college student or minor start a nonprofit?",
    answer:
      "Absolutely. There is no minimum age to incorporate a nonprofit in most states, though board members (including incorporators) typically must be at least 18. College students are among TurboCharity's most active users — many start nonprofits for campus initiatives, community service projects, or social enterprises. If you're under 18, you can still found the organization with an adult serving as the incorporator and registered agent. TurboCharity offers a student discount and resources specifically designed for young founders.",
    category: "young-founders",
  },

  // ── Comparison with Alternatives ───────────────────────────
  {
    question: "How does TurboCharity compare to hiring a lawyer or using LegalZoom?",
    answer:
      "Lawyers typically charge $2,000-$5,000+ for nonprofit formation with turnaround times of 4-8 weeks. LegalZoom and similar services charge $500-$1,500 and use template-based documents with limited customization. TurboCharity starts free, uses AI to generate fully customized documents (not rigid templates), and completes formation paperwork in under 30 minutes. Unlike generic legal services, TurboCharity is purpose-built for nonprofits, understanding the nuances of 501(c)(3) requirements, state-specific rules, and IRS expectations.",
    category: "comparison",
  },
  {
    question: "Can I use a fiscal sponsor instead of forming my own nonprofit?",
    answer:
      "Fiscal sponsorship lets you operate under an existing 501(c)(3)'s tax exemption, which is useful for short-term projects or testing an idea. However, sponsors typically take 5-15% of all donations as administrative fees, you don't own your own brand identity or EIN, and you're subject to the sponsor's policies. For ongoing organizations, forming your own nonprofit is usually more cost-effective within 1-2 years. TurboCharity makes formation so affordable and fast that most founders choose to incorporate rather than rely on a fiscal sponsor.",
    category: "comparison",
  },
];

/**
 * Returns FAQs filtered by one or more categories.
 */
export function getFaqsByCategory(
  ...categories: FAQ["category"][]
): FAQ[] {
  if (categories.length === 0) return faqs;
  return faqs.filter((faq) => categories.includes(faq.category));
}

/**
 * Generates JSON-LD FAQPage structured data for SEO.
 */
export function getFaqJsonLd(items: FAQ[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

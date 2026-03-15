export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // --- Nonprofit Formation Process ---
  {
    question: "What are the basic steps to start a nonprofit organization?",
    answer:
      "Starting a nonprofit typically involves five key steps: (1) choose a name and mission statement, (2) recruit your initial board of directors (most states require at least three), (3) file Articles of Incorporation with your state, (4) draft bylaws that govern how your organization operates, and (5) apply for federal 501(c)(3) tax-exempt status with the IRS. TurboCharity automates each of these steps using AI, so you can complete the entire process in days instead of the weeks or months it normally takes.",
    category: "Formation Process",
  },
  {
    question: "How long does it take to form a nonprofit with TurboCharity?",
    answer:
      "With TurboCharity, your state incorporation documents can be generated in minutes and filed within 1-2 business days in most states. The IRS 501(c)(3) application (Form 1023-EZ) is auto-filled and ready for submission the same day. IRS processing typically takes 2-4 weeks for Form 1023-EZ. End-to-end, most founders go from idea to tax-exempt status in 3-6 weeks, compared to 3-12 months using traditional methods.",
    category: "Timelines",
  },
  {
    question: "How much does it cost to start a nonprofit?",
    answer:
      "Government filing fees vary by state but typically include: state incorporation fees ($30-$300 depending on your state), IRS Form 1023-EZ filing fee ($275), and an optional state tax-exemption application ($0-$75). TurboCharity's platform fee starts at $49 for basic document generation, with premium packages that include state filing, EIN procurement, and 501(c)(3) preparation. Traditional attorneys charge $2,000-$5,000+ for the same services.",
    category: "Costs",
  },
  {
    question: "What is 501(c)(3) status and why do I need it?",
    answer:
      "501(c)(3) is a designation from the IRS that recognizes your organization as tax-exempt. This means your nonprofit does not pay federal income tax on revenue related to its mission, and donors can deduct their contributions on their personal taxes. This status is essential for receiving most grants, building donor confidence, and qualifying for discounts on services, postage, and more. Without 501(c)(3) status, your organization is treated as a taxable entity.",
    category: "501(c)(3) Requirements",
  },
  {
    question: "What is the difference between Form 1023 and Form 1023-EZ?",
    answer:
      "Form 1023 is the full IRS application for 501(c)(3) status. It is lengthy (26+ pages), requires detailed financial projections, and costs $600 to file. Form 1023-EZ is a streamlined version available to smaller organizations that project gross receipts of $50,000 or less for the next three years and have total assets under $250,000. It costs $275 and is filed online with much faster processing times (2-4 weeks vs. 3-6 months). TurboCharity determines your eligibility and auto-fills the appropriate form.",
    category: "501(c)(3) Requirements",
  },
  {
    question: "Do nonprofit formation requirements differ by state?",
    answer:
      "Yes, every state has its own incorporation requirements, fees, and ongoing compliance obligations. For example, California requires an additional filing with the Franchise Tax Board, New York requires attorney approval on your certificate of incorporation, and many states require registration before soliciting donations. TurboCharity's platform automatically tailors your documents to meet your specific state's requirements and alerts you to any additional compliance steps.",
    category: "State-Specific",
  },
  {
    question: "Which states have the easiest nonprofit incorporation process?",
    answer:
      "States like Delaware, Wyoming, and New Mexico are known for straightforward nonprofit incorporation with lower fees and minimal requirements. Delaware offers a well-established legal framework, Wyoming has no state income tax and low filing fees, and New Mexico has one of the fastest processing times. However, you generally should incorporate in the state where your nonprofit will primarily operate, as you would otherwise need to register as a foreign entity in your home state.",
    category: "State-Specific",
  },
  {
    question: "What features does TurboCharity offer?",
    answer:
      "TurboCharity provides an end-to-end nonprofit creation experience: AI-generated Articles of Incorporation tailored to your state, custom bylaws and conflict of interest policies, automatic IRS Form 1023-EZ preparation, EIN (Employer Identification Number) application assistance, board resolution templates, a compliance calendar with deadline reminders, and an organizational dashboard to track your progress. Premium plans also include registered agent service and annual report filing.",
    category: "Platform Features",
  },
  {
    question: "How does TurboCharity's pricing work?",
    answer:
      "TurboCharity offers three transparent tiers: Starter ($49) includes AI document generation for Articles of Incorporation, bylaws, and conflict of interest policy. Formation ($149) adds state filing, EIN application, and 501(c)(3) preparation. Complete ($299) includes everything plus registered agent service for one year, a compliance calendar, and priority support. All government filing fees are separate and clearly disclosed before checkout. There are no recurring fees unless you opt into annual compliance services.",
    category: "Pricing",
  },
  {
    question: "Do I need a lawyer to start a nonprofit?",
    answer:
      "No, you are not legally required to hire a lawyer to form a nonprofit. Many successful organizations are started by founders using self-service tools. TurboCharity's AI generates documents that meet legal standards in all 50 states, drawing from a database of approved formations. However, if your organization has complex structures (multiple entities, international operations, or unusual tax situations), we recommend consulting an attorney. TurboCharity can connect you with nonprofit attorneys at discounted rates if needed.",
    category: "Legal Compliance",
  },
  {
    question: "What ongoing compliance is required after forming a nonprofit?",
    answer:
      "After formation, nonprofits must maintain compliance at both state and federal levels. Federal requirements include filing an annual information return (Form 990, 990-EZ, or 990-N depending on revenue), maintaining proper records, and operating consistently with your stated exempt purpose. State requirements vary but often include annual reports, charitable solicitation registration renewals, and state tax filings. Failure to file Form 990 for three consecutive years results in automatic revocation of 501(c)(3) status.",
    category: "Legal Compliance",
  },
  {
    question: "Can a minor or college student start a nonprofit?",
    answer:
      "Yes! There is no minimum age to found a nonprofit in most states, though board members who sign legal documents typically need to be 18 or older. Many of TurboCharity's users are college students and young adults. If you are under 18, you can serve as the founder and executive director while having adults serve on your board of directors. Several highly successful national nonprofits were started by teenagers, and TurboCharity's guided process makes it especially accessible for young founders.",
    category: "Young Founders",
  },
  {
    question: "Can I pay myself a salary as a nonprofit founder?",
    answer:
      "Yes, nonprofit founders and employees can receive reasonable compensation for their work. The key legal standard is that compensation must be 'reasonable' — meaning it is comparable to what similar organizations pay for similar roles in your geographic area. Excessive compensation can trigger IRS penalties called intermediate sanctions. Your nonprofit's board of directors (excluding you, if you are the one being compensated) should formally approve your salary and document the decision in meeting minutes.",
    category: "Formation Process",
  },
  {
    question: "How is TurboCharity different from LegalZoom or Incfile?",
    answer:
      "While services like LegalZoom and Incfile offer general business formation, TurboCharity is purpose-built exclusively for nonprofits. Key differences: (1) our AI understands nonprofit-specific language and IRS requirements, (2) we generate all required nonprofit governance documents, not just Articles of Incorporation, (3) we auto-fill Form 1023-EZ rather than just pointing you to the IRS website, (4) our compliance calendar is tailored to nonprofit obligations, and (5) our pricing is significantly lower because we specialize in one thing.",
    category: "Comparison",
  },
  {
    question: "What if my 501(c)(3) application is denied?",
    answer:
      "IRS denial of 501(c)(3) applications is relatively uncommon when documents are properly prepared — approval rates for Form 1023-EZ exceed 90%. If your application receives a follow-up question or adverse determination, TurboCharity's Complete plan includes support to help you respond. Common reasons for denial include purposes that are too vague, private benefit concerns, or prohibited political activities. Our AI reviews your application for these issues before submission to maximize your chances of approval on the first try.",
    category: "501(c)(3) Requirements",
  },
];

export default faqs;

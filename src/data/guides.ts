export interface GuideStep {
  title: string;
  content: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  steps: GuideStep[];
  relatedStates: string[];
  relatedPosts: string[];
}

export const guides: Guide[] = [
  // ── Guide 1 ────────────────────────────────────────────────
  {
    slug: "complete-guide-starting-nonprofit",
    title: "The Complete Guide to Starting a Nonprofit Organization",
    description:
      "Everything you need to know to take your charitable idea from concept to a legally recognized, tax-exempt nonprofit organization. Covers naming, board formation, incorporation, bylaws, and IRS filing.",
    steps: [
      {
        title: "Define Your Mission and Conduct a Needs Assessment",
        content:
          "Before filing any paperwork, clearly articulate the problem you want to solve and the population you intend to serve. Research existing organizations to avoid duplicating efforts. Write a concise mission statement (1-2 sentences) that communicates your purpose — the IRS will evaluate whether your stated mission qualifies for tax-exempt status. Conduct surveys, community meetings, or interviews to validate demand. Document your findings; this research will strengthen both your IRS application and future grant proposals.",
      },
      {
        title: "Choose a Name and Verify Availability",
        content:
          "Your nonprofit name must be distinguishable from any existing entity registered in your state. Search your Secretary of State's business database, the U.S. Patent and Trademark Office (USPTO), and domain registrars to ensure availability. Most states require the name to include a corporate designator like 'Inc.', 'Corp.', or 'Foundation.' Avoid names that imply government affiliation or are misleading. Reserve the name with your state if available (typically $10-$25 for 60-120 days) while you prepare formation documents.",
      },
      {
        title: "Recruit Your Initial Board of Directors",
        content:
          "Most states require a minimum of one to three directors (three is the recommended best practice). Choose individuals who bring diverse skills — legal, financial, programmatic, and community connections. Board members must be at least 18, cannot be the same person filling all officer roles in many states, and should not have conflicts of interest. Draft a brief board member agreement outlining expectations for meeting attendance, fiduciary duties, and term lengths. TurboCharity generates a customizable board agreement template.",
      },
      {
        title: "File Articles of Incorporation With Your State",
        content:
          "Articles of Incorporation (called a Certificate of Formation in some states) legally create your nonprofit as a corporation. The filing must include: your organization's name, registered agent and office address, incorporator name(s), statement of purpose, dissolution clause directing assets to another 501(c)(3), and any state-specific provisions. Filing fees range from $30 to $300 depending on the state. TurboCharity auto-generates articles compliant with your state's requirements and includes IRS-required language for tax-exempt eligibility.",
      },
      {
        title: "Obtain an Employer Identification Number (EIN)",
        content:
          "An EIN (also called a Federal Tax ID) is required to open bank accounts, hire employees, and file your 501(c)(3) application. Apply online at IRS.gov using Form SS-4 — it's free and you receive your EIN immediately. You'll need the name and SSN of a responsible party (typically the board president or incorporator). The responsible party must be an individual, not an entity. Keep your EIN confirmation letter (CP 575) in a safe place; you'll reference this number on virtually every government filing.",
      },
      {
        title: "Draft Bylaws and Hold an Organizational Meeting",
        content:
          "Bylaws are your nonprofit's internal operating manual. They should cover: board size and term limits, officer positions and duties, meeting frequency and quorum requirements, voting procedures, committee structure, conflict-of-interest policy, fiscal year, and amendment procedures. While not filed with the state, bylaws are required by the IRS and reviewed during audits. Hold an initial organizational meeting to adopt bylaws, elect officers, approve a fiscal year, and authorize bank accounts. TurboCharity generates comprehensive bylaws and meeting minutes simultaneously.",
      },
      {
        title: "Apply for Federal Tax-Exempt Status (501(c)(3))",
        content:
          "File IRS Form 1023-EZ ($275, for organizations expecting under $50,000/year in revenue and under $250,000 in assets) or the full Form 1023 ($600, required for larger organizations). Key sections include your organizational narrative, description of past/present/planned activities, financial projections, and compensation details. The IRS reviews whether your organization meets the organizational and operational tests for exemption. TurboCharity pre-fills either form using your onboarding answers and flags common errors that cause IRS rejections.",
      },
      {
        title: "Complete State Registrations and Launch Operations",
        content:
          "After receiving your IRS determination letter, register for state tax exemptions (income, sales, and/or property tax depending on your state), file for charitable solicitation registration if your state requires it before fundraising, and apply for any necessary licenses or permits. Open a dedicated bank account, implement an accounting system (accrual basis recommended), and set up compliance tracking for annual filings (Form 990, state annual reports, solicitation renewals). TurboCharity's compliance dashboard automates deadline reminders for all 50 states.",
      },
    ],
    relatedStates: [
      "California",
      "Texas",
      "New York",
      "Florida",
      "Illinois",
      "Pennsylvania",
    ],
    relatedPosts: [
      "understanding-501c3-status",
      "writing-nonprofit-bylaws",
      "filing-articles-of-incorporation",
    ],
  },

  // ── Guide 2 ────────────────────────────────────────────────
  {
    slug: "understanding-501c3-status",
    title: "Understanding 501(c)(3) Tax-Exempt Status: What It Is and How to Get It",
    description:
      "A deep dive into IRS 501(c)(3) status — eligibility requirements, the application process, public charity vs. private foundation classification, and tips to avoid common mistakes that delay approval.",
    steps: [
      {
        title: "Understand What 501(c)(3) Status Means",
        content:
          "Section 501(c)(3) of the Internal Revenue Code exempts qualifying organizations from federal income tax and makes donations to them tax-deductible for donors. To qualify, your organization must be organized and operated exclusively for exempt purposes: charitable, religious, educational, scientific, literary, testing for public safety, fostering national or international amateur sports competition, or preventing cruelty to children or animals. 'Exclusively' means substantially all activities must further your exempt purpose — the IRS uses an 'operational test' to verify this.",
      },
      {
        title: "Determine Your Classification: Public Charity vs. Private Foundation",
        content:
          "The IRS classifies every 501(c)(3) as either a public charity or a private foundation. Public charities receive broad public support (at least one-third of revenue from public sources) or operate programs that directly serve the public. Private foundations are typically funded by a single source (individual, family, or corporation) and make grants to other organizations. Public charity status is almost always preferable: fewer restrictions, lower excise taxes, higher donor deduction limits, and less IRS scrutiny. Most organizations formed through TurboCharity qualify as public charities under sections 509(a)(1) or 509(a)(2).",
      },
      {
        title: "Meet the Organizational Test",
        content:
          "Your Articles of Incorporation must contain specific language that the IRS requires: (1) a purpose clause limiting activities to one or more exempt purposes listed in section 501(c)(3), (2) a dissolution clause ensuring assets are distributed to another 501(c)(3) or government entity upon dissolution, and (3) a prohibition against private inurement — no part of net earnings may benefit any private individual. Many states have additional required language. TurboCharity automatically includes all required provisions based on your selected state.",
      },
      {
        title: "Meet the Operational Test",
        content:
          "Beyond formation documents, the IRS evaluates how you actually operate. Your organization must engage primarily in activities that accomplish one or more exempt purposes. You cannot devote more than an insubstantial part of activities to non-exempt purposes. Specifically, 501(c)(3) organizations cannot participate or intervene in political campaigns, and lobbying must be 'insubstantial' (generally under 5% of total activities unless you file the 501(h) election, which allows up to 20% of the first $500,000 in exempt-purpose expenditures). Plan your programs accordingly before applying.",
      },
      {
        title: "Choose the Right Application Form",
        content:
          "Form 1023-EZ is a streamlined, online-only application available to organizations with projected annual gross receipts under $50,000 and total assets under $250,000. It costs $275 and is typically processed in 2-4 weeks. Form 1023 is the full application required for all other organizations, including private foundations, schools, hospitals, and supporting organizations. It costs $600 and takes 3-6 months. Before filing, complete the IRS Form 1023-EZ Eligibility Worksheet to confirm you qualify for the streamlined version. TurboCharity runs this check automatically.",
      },
      {
        title: "Prepare and Submit Your Application",
        content:
          "For Form 1023-EZ, create an account at Pay.gov and complete the online form. For the full Form 1023, compile: your formation documents, bylaws, EIN, a narrative description of all activities (past, current, and planned), three years of financial data or projections, compensation information for officers and key employees, and any contracts or agreements. Submit electronically through Pay.gov. TurboCharity pre-fills all applicable fields and generates the narrative descriptions based on your answers, reducing common errors that trigger IRS follow-up letters.",
      },
      {
        title: "Respond to IRS Follow-Up and Receive Your Determination Letter",
        content:
          "The IRS may request additional information via a development letter. Respond promptly and thoroughly — incomplete responses are the number-one cause of extended processing times. Common areas of inquiry include: insufficient detail about planned activities, unclear fundraising methods, compensation that appears unreasonable, and close relationships between founders and the organization. Once approved, you'll receive a determination letter (sometimes called a favorable ruling letter) confirming your 501(c)(3) status. Keep this letter permanently — you'll need it for grant applications, state registrations, and donor verification.",
      },
    ],
    relatedStates: [
      "California",
      "New York",
      "Texas",
      "Florida",
      "Ohio",
      "Georgia",
    ],
    relatedPosts: [
      "complete-guide-starting-nonprofit",
      "nonprofit-compliance-checklist",
      "filing-articles-of-incorporation",
    ],
  },

  // ── Guide 3 ────────────────────────────────────────────────
  {
    slug: "writing-nonprofit-bylaws",
    title: "Writing Nonprofit Bylaws: Essential Provisions and Best Practices",
    description:
      "Learn what must be included in your nonprofit bylaws, from board governance and officer duties to conflict-of-interest policies. Includes explanations of each required section and expert tips.",
    steps: [
      {
        title: "Understand the Purpose of Bylaws",
        content:
          "Bylaws are the internal governance document that define how your nonprofit operates. Unlike Articles of Incorporation (filed with the state), bylaws are a private document adopted by your board. However, the IRS requires bylaws as part of your 501(c)(3) application, and grant-making foundations routinely request them. Well-drafted bylaws prevent internal disputes, establish clear decision-making processes, and demonstrate organizational maturity to funders. They should be comprehensive yet flexible enough to accommodate growth.",
      },
      {
        title: "Define Board Structure and Composition",
        content:
          "Specify the number of directors (a range like '5 to 15' offers flexibility), how directors are selected (elected by existing board, appointed, or nominated by members), term lengths (2-3 years with staggered terms prevents complete turnover), term limits (2-3 consecutive terms is common), and removal procedures (with or without cause, and the required vote threshold). Address vacancies — can the remaining board fill them, or must they wait for the next election? Best practice: require an odd number of directors to avoid tie votes.",
      },
      {
        title: "Establish Officer Positions and Duties",
        content:
          "At minimum, define the roles of President/Chair, Secretary, and Treasurer. The President presides over meetings and provides organizational leadership. The Secretary maintains records, takes minutes, and handles notices. The Treasurer oversees financial management, ensures proper accounting, and presents financial reports. Many organizations add a Vice President to serve in the President's absence. Specify how officers are elected (typically by the board), their term lengths, and the process for removal. Clarify whether one person can hold multiple offices (some states restrict this).",
      },
      {
        title: "Set Meeting Requirements and Voting Procedures",
        content:
          "Specify the frequency of regular board meetings (quarterly is standard; at least annually is the legal minimum in most states), notice requirements for meetings (7-14 days is typical), and quorum requirements (usually a majority of board members). Define voting thresholds for ordinary business (simple majority) versus major decisions like bylaw amendments, mergers, or dissolution (two-thirds or three-fourths supermajority). Address whether meetings can be held electronically (virtually all states now permit this) and whether voting by proxy or written consent is allowed.",
      },
      {
        title: "Include Required Governance Policies",
        content:
          "The IRS Form 990 asks whether your organization has adopted specific governance policies. Include at minimum: (1) Conflict-of-Interest Policy — requires disclosure of financial interests and recusal from related votes; (2) Whistleblower Policy — protects individuals who report suspected fraud or misconduct; (3) Document Retention and Destruction Policy — specifies how long records are kept (7 years for financial records is standard). While not all are legally mandated, having them in your bylaws demonstrates good governance and is expected by most grant makers.",
      },
      {
        title: "Address Committees, Amendments, and Special Provisions",
        content:
          "Outline how committees are created — standing committees (e.g., finance, governance, fundraising) versus ad hoc committees for specific projects. Clarify whether committees have decision-making authority or are advisory only. Define the process for amending bylaws (who can propose amendments, the required vote, and any notice periods). Include an indemnification clause protecting directors and officers from personal liability for good-faith actions. Specify your fiscal year and state the parliamentary authority for meetings (Robert's Rules of Order is standard).",
      },
      {
        title: "Draft the Dissolution Clause and Membership Provisions",
        content:
          "Even if dissolution seems unlikely, your bylaws must address it — and the IRS requires a dissolution clause in your Articles of Incorporation that directs remaining assets to another 501(c)(3). Your bylaws should supplement this by specifying the board vote required for dissolution (typically unanimous or supermajority) and the process for winding down operations. If your nonprofit will have a formal membership (distinct from the board), define membership classes, dues, voting rights, and meeting requirements. Most small nonprofits operate without a formal membership structure to simplify governance.",
      },
      {
        title: "Review, Adopt, and Maintain Your Bylaws",
        content:
          "Before adoption, have at least two people review the bylaws for consistency, completeness, and compliance with state law. Formally adopt bylaws at the initial organizational meeting by board resolution (TurboCharity generates this resolution automatically). Date and sign the adopted bylaws, distribute copies to all board members, and store the original in your corporate records book. Review bylaws annually — as your organization grows, you may need to adjust board size, add committees, or update policies. Any amendments should be documented in board meeting minutes.",
      },
    ],
    relatedStates: [
      "California",
      "New York",
      "Texas",
      "Delaware",
      "Illinois",
      "Washington",
    ],
    relatedPosts: [
      "complete-guide-starting-nonprofit",
      "understanding-501c3-status",
      "nonprofit-compliance-checklist",
    ],
  },

  // ── Guide 4 ────────────────────────────────────────────────
  {
    slug: "filing-articles-of-incorporation",
    title: "Filing Articles of Incorporation for a Nonprofit: State-by-State Guide",
    description:
      "Step-by-step instructions for filing your nonprofit Articles of Incorporation, including required provisions for IRS compliance, state-specific rules, fees, and common mistakes to avoid.",
    steps: [
      {
        title: "Understand What Articles of Incorporation Are",
        content:
          "Articles of Incorporation (also called a Certificate of Formation, Certificate of Incorporation, or Charter depending on the state) is the legal document that creates your nonprofit corporation under state law. It is filed with the Secretary of State (or equivalent agency) and becomes a matter of public record. This document establishes your organization's legal existence, and its contents must satisfy both state corporate law requirements and IRS requirements for 501(c)(3) eligibility. Getting this document right the first time saves significant time and money.",
      },
      {
        title: "Include Required IRS Language",
        content:
          "The IRS requires three specific provisions in your Articles for 501(c)(3) eligibility: (1) An exempt purpose clause stating the organization is organized exclusively for purposes described in section 501(c)(3) — list your specific purposes (charitable, educational, etc.) rather than using broad language. (2) A dissolution clause directing that upon dissolution, remaining assets will be distributed to one or more organizations qualified under section 501(c)(3) or to a government entity. (3) A prohibition against private inurement. Without these exact provisions, the IRS will reject your application. TurboCharity includes IRS-compliant language automatically.",
      },
      {
        title: "Fulfill State-Specific Requirements",
        content:
          "Each state has its own additional requirements: California requires a specific statement about irrevocable dedication of assets; New York requires a statement of lawful purpose and may require Supreme Court approval for certain charitable purposes; Texas requires naming three or more initial directors in the Certificate; Florida requires listing the initial registered agent and office address. Some states have mandatory forms, while others accept any format that includes required information. Research your specific state's requirements at the Secretary of State website, or let TurboCharity handle state compliance automatically.",
      },
      {
        title: "Appoint a Registered Agent",
        content:
          "Every state requires a registered agent — an individual or company designated to receive legal documents, government notices, and official correspondence on behalf of your organization. The registered agent must have a physical street address (not a P.O. Box) in the state of incorporation and must be available during business hours. You can serve as your own registered agent, designate another person, or hire a commercial registered agent service ($50-$300/year). If you incorporate in a state where you don't have a physical presence, a commercial agent is required.",
      },
      {
        title: "Prepare and File Your Articles",
        content:
          "Prepare your articles using your state's prescribed form (if one exists) or draft a custom document including all required provisions. Most states now accept online filing through the Secretary of State's website. Filing fees range from $30 (Kentucky) to $300 (Massachusetts), with most states charging $50-$125. Many states offer expedited processing for an additional fee ($50-$500) to receive approval within 1-3 business days instead of the standard 1-4 weeks. Keep certified copies of your filed articles — you'll need them for your IRS application, bank account opening, and state registrations.",
      },
      {
        title: "Verify Approval and Obtain Certified Copies",
        content:
          "After filing, your state will review the articles for compliance. If there are issues, you'll receive a rejection letter with specific deficiencies to correct. Common reasons for rejection: name conflict with an existing entity, missing required provisions, incorrect registered agent information, or missing signatures. Once approved, request at least two certified copies (most states charge $5-$20 per copy). Some states automatically return a stamped/certified copy; others require a separate request. Store one certified copy with your permanent records and use the other for your IRS application.",
      },
      {
        title: "Handle Post-Filing Requirements",
        content:
          "Several states have additional requirements after incorporation: New York requires publication of a notice of incorporation in two newspapers within 120 days; Arizona requires publication in a newspaper within 60 days; Pennsylvania requires advertisement for certain counties; Nebraska requires publication in a legal newspaper. Some states require an initial report or statement of information within 30-90 days of incorporation (California's Statement of Information, for example, is due within 90 days). Failure to complete post-filing requirements can result in administrative dissolution.",
      },
    ],
    relatedStates: [
      "New York",
      "California",
      "Texas",
      "Florida",
      "Pennsylvania",
      "Arizona",
      "Illinois",
      "Ohio",
    ],
    relatedPosts: [
      "complete-guide-starting-nonprofit",
      "writing-nonprofit-bylaws",
      "understanding-501c3-status",
    ],
  },

  // ── Guide 5 ────────────────────────────────────────────────
  {
    slug: "nonprofit-compliance-checklist",
    title: "Nonprofit Compliance Checklist: Annual Requirements to Stay in Good Standing",
    description:
      "A comprehensive checklist of federal, state, and organizational compliance obligations every nonprofit must meet to maintain tax-exempt status and avoid penalties or revocation.",
    steps: [
      {
        title: "File Your Annual IRS Form 990",
        content:
          "Every 501(c)(3) must file an annual information return with the IRS. Form 990-N (e-Postcard) is for organizations with annual gross receipts of $50,000 or less — it's a brief online submission. Form 990-EZ is for organizations with gross receipts under $200,000 and total assets under $500,000. Form 990 is required for larger organizations. The deadline is the 15th day of the 5th month after your fiscal year ends (May 15 for calendar-year filers). You can request a 6-month extension using Form 8868. Critical: failure to file for three consecutive years results in automatic revocation of tax-exempt status with no appeal.",
      },
      {
        title: "Maintain State Good Standing",
        content:
          "Most states require annual or biennial reports filed with the Secretary of State to maintain your corporate good standing. Fees range from $0 (some states) to $150, and deadlines vary by state — some use the anniversary of incorporation, others have a fixed date. These reports typically update your registered agent, principal office address, and officer/director information. Falling out of good standing can result in administrative dissolution, inability to transact business, and loss of your organization's name. TurboCharity tracks all 50 states' deadlines and sends automated reminders.",
      },
      {
        title: "Renew Charitable Solicitation Registration",
        content:
          "Approximately 40 states and the District of Columbia require nonprofits to register before soliciting donations from residents. Most require annual renewal, with deadlines and fees varying by state. Common filing requirements include: a copy of your most recent Form 990, your current financial statements (audited financials may be required above certain revenue thresholds), and the registration fee ($0-$300). If you fundraise nationally (including online), you may need to register in every state where donors reside. The Unified Registration Statement (URS) simplifies multi-state registration for most states that accept it.",
      },
      {
        title: "Conduct Proper Board Governance",
        content:
          "Hold at least the minimum number of board meetings required by your bylaws (quarterly is recommended). Keep detailed minutes of every meeting including attendees, motions, votes, and discussions. Ensure your conflict-of-interest policy is followed — collect annual disclosure statements from all board members and officers. Review and approve the annual budget, audit financial statements, and ensure the Form 990 is reviewed by the full board before filing (this is an IRS Form 990 question). Maintain a board roster with current contact information and term expiration dates. Store all governance records in an organized corporate book.",
      },
      {
        title: "Manage Financial Compliance and Reporting",
        content:
          "Maintain accurate books using accrual-basis accounting (recommended by GAAP for nonprofits). Segregate restricted funds from unrestricted funds. Issue donation receipts (written acknowledgment required for contributions of $250 or more) and ensure they include: organization name, date of contribution, amount, statement of whether goods or services were provided, and a description and good-faith estimate of value of any goods/services. If your organization has unrelated business income (UBI), file Form 990-T. Obtain an independent audit if required by your state (thresholds vary, typically $500,000-$2 million in annual revenue).",
      },
      {
        title: "Stay Current on Tax Obligations and Exemptions",
        content:
          "While 501(c)(3) organizations are exempt from federal income tax, other tax obligations may apply: payroll taxes (FICA, FUTA) for employees, state unemployment insurance, sales tax (exemptions must be applied for separately in each state — federal exemption does not automatically provide state exemption), property tax exemptions (if applicable, apply with your county assessor), and unrelated business income tax on activities not substantially related to your exempt purpose. Review state-specific exemptions annually, as some require periodic renewal. TurboCharity's compliance dashboard tracks all applicable tax obligations.",
      },
      {
        title: "Review Insurance, Policies, and Legal Compliance",
        content:
          "Annually review your organization's insurance coverage: general liability, directors & officers (D&O) liability, workers' compensation (required if you have employees), and any activity-specific coverage. Update your conflict-of-interest, whistleblower, and document retention policies as needed. Ensure compliance with employment laws if you have staff (anti-discrimination, wage and hour, ACA requirements for organizations with 50+ full-time employees). Verify that your activities remain consistent with your stated exempt purpose — mission creep can jeopardize tax-exempt status. Conduct an annual compliance self-audit using TurboCharity's built-in checklist tool.",
      },
      {
        title: "Plan Ahead and Document Everything",
        content:
          "Create an annual compliance calendar with all federal, state, and organizational deadlines. Set reminders at least 30 days before each deadline. Maintain organized digital and physical records: formation documents, IRS determination letter, all filed Form 990s, board minutes, financial statements, donor records, and contracts. The IRS can audit nonprofits, and well-organized records make the process smooth. Review your strategic plan annually and update your programs, budget, and governance documents to reflect organizational growth. Consider joining a state nonprofit association for access to training, legal updates, and peer networking.",
      },
    ],
    relatedStates: [
      "California",
      "New York",
      "Texas",
      "Florida",
      "Illinois",
      "Pennsylvania",
      "Ohio",
      "Georgia",
    ],
    relatedPosts: [
      "complete-guide-starting-nonprofit",
      "understanding-501c3-status",
      "writing-nonprofit-bylaws",
      "filing-articles-of-incorporation",
    ],
  },
];

/**
 * Find a guide by its slug.
 */
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/**
 * Generates JSON-LD HowTo structured data for a guide.
 */
export function getGuideJsonLd(guide: Guide) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com";

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.description,
    url: `${baseUrl}/guides/${guide.slug}`,
    step: guide.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.content,
    })),
  };
}

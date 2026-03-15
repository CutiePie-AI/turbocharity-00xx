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

const guides: Guide[] = [
  {
    slug: "complete-guide-starting-nonprofit",
    title: "The Complete Guide to Starting a Nonprofit Organization",
    description:
      "Everything you need to know about launching a nonprofit from scratch — from defining your mission to receiving 501(c)(3) tax-exempt status. A step-by-step walkthrough for first-time founders.",
    steps: [
      {
        title: "Define Your Mission and Vision",
        content:
          "Every successful nonprofit begins with a clear, compelling mission statement. Your mission should articulate the specific problem you aim to solve, who you serve, and how you plan to create impact. Keep it concise — ideally one to two sentences that anyone can understand. For example, instead of 'helping people,' write 'providing free after-school tutoring to low-income middle school students in Detroit.' Your vision statement is broader and describes the long-term change you hope to achieve. Spend time researching existing organizations in your space to ensure your mission fills a genuine gap. The IRS will evaluate whether your stated purpose qualifies for tax-exempt status, so your mission must align with one of the recognized exempt categories: charitable, religious, educational, scientific, literary, public safety testing, fostering national or international amateur sports, or preventing cruelty to children or animals.",
      },
      {
        title: "Conduct Research and Create a Strategic Plan",
        content:
          "Before filing any paperwork, research the landscape thoroughly. Identify similar nonprofits in your area and assess whether you should start a new organization or partner with an existing one. Develop a basic strategic plan that includes: your target population, the programs or services you will offer, your geographic focus area, a preliminary budget for year one, and potential funding sources (grants, donations, events, earned revenue). You do not need a 50-page business plan, but the IRS will ask about your planned activities and expected revenue on your tax-exempt application, so having these answers ready will speed up the process considerably.",
      },
      {
        title: "Assemble Your Board of Directors",
        content:
          "Most states require a minimum of three board members to incorporate a nonprofit, and the IRS expects a functioning, independent board. Your board members should bring a mix of skills — consider recruiting people with backgrounds in finance, law, marketing, fundraising, and the subject area of your mission. Board members have fiduciary duties including the duty of care, duty of loyalty, and duty of obedience. Avoid having all board members be from the same family, as this can raise red flags with the IRS. Each board member should be willing to actively govern the organization, attend regular meetings, and potentially contribute financially or help with fundraising.",
      },
      {
        title: "Choose a Name and Secure Your Domain",
        content:
          "Select a name that reflects your mission and is not already in use by another nonprofit in your state. Check your state's Secretary of State business name database, the IRS Exempt Organizations database (Tax Exempt Organization Search), and the U.S. Patent and Trademark Office database. Secure a matching domain name and social media handles early, even before you file — they are often taken quickly. Many states require the word 'Inc.,' 'Incorporated,' 'Corporation,' or an abbreviation in your official name. Your operating name (DBA) can be different from your legal incorporated name if needed.",
      },
      {
        title: "File Articles of Incorporation",
        content:
          "Articles of Incorporation (sometimes called a Certificate of Incorporation or Charter) is the document that legally creates your nonprofit corporation at the state level. You file this with your state's Secretary of State office. Required information typically includes: organization name, registered agent name and address, incorporator name, purpose statement (use IRS-approved language for 501(c)(3)), dissolution clause (stating assets will go to another 501(c)(3) upon dissolution), and the names of initial directors. Filing fees range from $30 to $300 depending on your state. TurboCharity generates state-specific Articles of Incorporation that include all required IRS language automatically.",
      },
      {
        title: "Obtain Your EIN and Open a Bank Account",
        content:
          "After incorporation, apply for an Employer Identification Number (EIN) from the IRS. This is your organization's tax ID, similar to a Social Security number for individuals. You can apply online at IRS.gov and receive your EIN immediately, or TurboCharity can handle this step for you. Once you have your EIN and Articles of Incorporation, open a dedicated business bank account in the nonprofit's name. Never co-mingle personal and organizational funds — this is one of the most common compliance mistakes new founders make.",
      },
      {
        title: "Draft Bylaws and Governance Policies",
        content:
          "Bylaws are the internal operating rules of your nonprofit. They cover: membership structure (if applicable), board composition and term lengths, officer roles and responsibilities, meeting frequency and quorum requirements, voting procedures, conflict of interest policies, and amendment procedures. While bylaws are not filed with the state or IRS, they are required for your tax-exempt application and are essential for good governance. You should also adopt a conflict of interest policy (required by the IRS on Form 1023/1023-EZ), a document retention policy, and a whistleblower policy.",
      },
      {
        title: "Apply for 501(c)(3) Tax-Exempt Status",
        content:
          "The final major step is filing your federal tax-exempt application with the IRS. If your organization qualifies (projected gross receipts of $50,000 or less annually for three years and assets under $250,000), you can file Form 1023-EZ online for $275. Larger organizations must file the full Form 1023 for $600. The application asks about your organizational structure, planned activities, compensation, financial data, and specific operational details. Once approved, your tax-exempt status is retroactive to your incorporation date (if you file within 27 months). TurboCharity auto-fills either form based on the information you provided during setup.",
      },
    ],
    relatedStates: [
      "California",
      "Texas",
      "New York",
      "Florida",
      "Delaware",
      "Illinois",
    ],
    relatedPosts: [
      "understanding-501c3-status",
      "writing-nonprofit-bylaws",
      "filing-articles-of-incorporation",
    ],
  },

  {
    slug: "understanding-501c3-status",
    title: "Understanding 501(c)(3) Tax-Exempt Status: A Complete Breakdown",
    description:
      "Learn what 501(c)(3) status means, who qualifies, how to apply, and what ongoing obligations come with tax-exempt recognition from the IRS.",
    steps: [
      {
        title: "What 501(c)(3) Status Actually Means",
        content:
          "Section 501(c)(3) of the Internal Revenue Code grants tax-exempt status to organizations that are organized and operated exclusively for exempt purposes. This means the IRS recognizes that your organization serves a public benefit and therefore should not pay federal income tax on mission-related revenue. There are two types of 501(c)(3) organizations: public charities (which receive broad public support) and private foundations (which are typically funded by a single source like a family or corporation). Most new nonprofits are classified as public charities, which face fewer restrictions and have more favorable tax rules for donors.",
      },
      {
        title: "Eligibility Requirements for 501(c)(3)",
        content:
          "To qualify for 501(c)(3) status, your organization must meet three tests. The Organizational Test requires that your governing documents (Articles of Incorporation) limit your purposes to exempt activities and include a dissolution clause directing remaining assets to another 501(c)(3). The Operational Test requires that you actually operate primarily for exempt purposes — no more than an insubstantial part of your activities can serve non-exempt purposes. The Political Test prohibits 501(c)(3) organizations from participating in political campaigns for or against candidates, and substantially limits lobbying activities. Your organization must serve public interests rather than private ones.",
      },
      {
        title: "Form 1023-EZ vs. Form 1023: Which to File",
        content:
          "The IRS offers two application paths. Form 1023-EZ is a streamlined, online-only application available to organizations projecting annual gross receipts of $50,000 or less for each of the next three years and total assets of $250,000 or less. It costs $275, is typically processed in 2-4 weeks, and has an approval rate exceeding 90%. Form 1023 is the full application required for larger organizations or those that do not qualify for the EZ version. It costs $600, involves substantially more documentation, and can take 3-6 months or longer to process. Certain organizations — including churches, schools, hospitals, and supporting organizations — cannot use Form 1023-EZ regardless of size.",
      },
      {
        title: "Preparing Your Application",
        content:
          "Before filing, gather these materials: your approved Articles of Incorporation with the IRS-required purpose and dissolution clauses, your EIN confirmation letter, adopted bylaws, a conflict of interest policy, a narrative description of your planned activities (be specific about programs, beneficiaries, and geographic scope), financial projections for your first three years (including expected revenue sources and expenses), and information about compensation for officers and directors. TurboCharity collects all of this information during the setup process and pre-fills your application automatically, flagging any responses that commonly trigger IRS follow-up questions.",
      },
      {
        title: "The IRS Review Process",
        content:
          "After you submit your application, the IRS assigns it to an Exempt Organizations specialist. For Form 1023-EZ, most applications are processed within 2-4 weeks without additional questions. For Form 1023, an agent may contact you with follow-up questions — this is normal and does not mean you will be denied. Respond promptly and thoroughly. If approved, you will receive a Determination Letter, which is your official proof of tax-exempt status. Keep this letter safe; donors, grantmakers, and state agencies will request copies. Your exempt status is typically retroactive to your date of incorporation if you applied within 27 months.",
      },
      {
        title: "Understanding Public Charity vs. Private Foundation Classification",
        content:
          "When the IRS approves your 501(c)(3) application, they also classify you as either a public charity or a private foundation. Public charities must demonstrate broad public support — typically by receiving at least one-third of their revenue from public sources (donations, grants, program fees) or by passing the facts-and-circumstances test. Private foundations face more restrictions, including required minimum annual distributions (5% of assets), excise taxes on investment income, and stricter self-dealing rules. Most organizations formed through TurboCharity are classified as public charities under Section 509(a)(1) or 509(a)(2).",
      },
      {
        title: "Maintaining Your Tax-Exempt Status",
        content:
          "Receiving 501(c)(3) status is not a one-time event — you must actively maintain it. File your annual Form 990 (990-N for organizations under $50,000 revenue, 990-EZ for those under $200,000, or full 990 for larger organizations) by the 15th day of the 5th month after your fiscal year ends. Failing to file for three consecutive years results in automatic revocation. Avoid prohibited activities: no political campaign intervention, limited lobbying, no private inurement (excessive benefits to insiders), and no substantial non-exempt activities. Keep thorough records of board meetings, financial transactions, and program activities.",
      },
    ],
    relatedStates: ["All States"],
    relatedPosts: [
      "complete-guide-starting-nonprofit",
      "nonprofit-compliance-checklist",
    ],
  },

  {
    slug: "writing-nonprofit-bylaws",
    title: "Writing Effective Nonprofit Bylaws: A Practical Guide",
    description:
      "Your bylaws are the operating manual for your nonprofit. This guide covers every section you need, with explanations of why each provision matters and tips for getting them right.",
    steps: [
      {
        title: "Understanding the Role of Bylaws",
        content:
          "Bylaws are the internal governance document that dictates how your nonprofit operates on a day-to-day basis. Unlike Articles of Incorporation, bylaws are not filed with the state but are required by the IRS as part of your tax-exempt application. They serve as a contract between the organization and its board members, establishing expectations, authority, and procedures. Well-drafted bylaws prevent internal disputes, ensure legal compliance, and give donors and grantmakers confidence in your governance. Courts often refer to bylaws when resolving nonprofit disputes, so treat them as a legally binding document.",
      },
      {
        title: "Organization Name, Purpose, and Office",
        content:
          "Begin your bylaws with the basics: the legal name of your organization (matching your Articles of Incorporation exactly), the state of incorporation, the address of your principal office, and your organization's purpose statement. The purpose should mirror the language in your Articles of Incorporation. You may also include a statement that the organization is organized exclusively for 501(c)(3) purposes and that no part of the net earnings shall inure to the benefit of any private individual. This reinforcement of your exempt purpose strengthens your governance framework and aligns with IRS expectations.",
      },
      {
        title: "Board of Directors Structure and Composition",
        content:
          "Define the composition of your board: the minimum and maximum number of directors (a range like 3-15 provides flexibility), the length of terms (typically 2-3 years), term limits (many organizations cap service at 2-3 consecutive terms), and how directors are elected or appointed. Specify qualifications for board service if any. Address how vacancies are filled — whether by board appointment until the next regular election or by an immediate special election. Include provisions for removing a director for cause (e.g., missing a certain number of consecutive meetings without excuse, conflict of interest, or breach of fiduciary duty) and the process required, including notice and opportunity to be heard.",
      },
      {
        title: "Officers, Roles, and Responsibilities",
        content:
          "Most states require at minimum a President (or Chair), Secretary, and Treasurer. Define the duties of each officer clearly. The President typically presides over board meetings, serves as the chief volunteer officer, and acts as spokesperson. The Secretary maintains official records, takes meeting minutes, and ensures proper notice of meetings. The Treasurer oversees financial management, ensures accurate bookkeeping, and presents financial reports at board meetings. Many organizations also include a Vice President who acts in the President's absence. Specify how officers are elected, their term lengths, and the process for removal. Note whether the same person can hold multiple offices (many states prohibit the same person serving as both President and Secretary).",
      },
      {
        title: "Meetings, Quorum, and Voting Procedures",
        content:
          "Establish clear rules for meetings. Specify the minimum number of regular board meetings per year (quarterly is common), how meetings are called (by the President, by a certain number of directors, etc.), and the notice required (typically 7-14 days for regular meetings, 2-5 days for special meetings). Define your quorum — the minimum number of directors that must be present to conduct business (typically a simple majority). Specify voting requirements: most decisions should require a simple majority of those present at a properly called meeting, but certain actions (like amending bylaws or dissolving the organization) may require a supermajority (two-thirds). Address whether meetings can be held electronically (video or phone conference) and whether action can be taken by written consent without a meeting.",
      },
      {
        title: "Committees and Advisory Boards",
        content:
          "Outline how the board can create standing or ad hoc committees. Common standing committees include Executive (acts on behalf of the full board between meetings), Finance/Audit, Governance/Nominating, Fundraising, and Program. Define each committee's authority — can it act on behalf of the board, or only make recommendations? Specify committee composition requirements (e.g., the Finance committee must include the Treasurer). If your organization plans to have an advisory board, clarify that advisory members are not voting directors and do not have fiduciary responsibilities. This distinction is important for liability purposes.",
      },
      {
        title: "Conflict of Interest and Ethics Policies",
        content:
          "Include a robust conflict of interest policy — the IRS specifically asks about this on Form 1023 and 1023-EZ. The policy should require board members and officers to disclose any financial or personal interests that could create a conflict with the organization's interests. Define the process for handling conflicts: disclosure, recusal from discussion and voting on the related matter, and documentation in meeting minutes. Many organizations require annual disclosure statements from all board members. You may also include provisions addressing whistleblower protections, document retention and destruction, and a code of ethics for board members and staff.",
      },
      {
        title: "Amendment, Dissolution, and Indemnification Provisions",
        content:
          "Include a clear process for amending the bylaws — typically requiring a supermajority vote (two-thirds) at a meeting where notice of the proposed amendment was provided in advance. Add a dissolution clause stating that upon dissolution, remaining assets will be distributed to one or more organizations qualifying as tax-exempt under Section 501(c)(3) — this mirrors the requirement in your Articles of Incorporation. Finally, include an indemnification provision protecting board members and officers from personal liability for actions taken in good faith on behalf of the organization, to the fullest extent permitted by your state's nonprofit corporation act. This provision helps recruit quality board members who might otherwise be concerned about personal risk.",
      },
    ],
    relatedStates: [
      "California",
      "New York",
      "Texas",
      "Pennsylvania",
      "Ohio",
    ],
    relatedPosts: [
      "complete-guide-starting-nonprofit",
      "filing-articles-of-incorporation",
      "nonprofit-compliance-checklist",
    ],
  },

  {
    slug: "filing-articles-of-incorporation",
    title: "Filing Articles of Incorporation for Your Nonprofit: State-by-State Guide",
    description:
      "Articles of Incorporation officially create your nonprofit as a legal entity. Learn what to include, how to file, and state-specific requirements you must meet.",
    steps: [
      {
        title: "What Are Articles of Incorporation?",
        content:
          "Articles of Incorporation (also called a Certificate of Incorporation, Certificate of Formation, or Charter in some states) is the legal document filed with your state's Secretary of State that formally creates your nonprofit corporation. This document establishes your organization as a separate legal entity with the ability to enter contracts, open bank accounts, hire employees, and limit personal liability of directors and officers. Think of it as your organization's birth certificate. Without properly filed Articles of Incorporation, your nonprofit does not legally exist as a corporation, and you cannot apply for 501(c)(3) tax-exempt status.",
      },
      {
        title: "Required Elements for IRS Compliance",
        content:
          "To qualify for 501(c)(3) status, the IRS requires that your Articles of Incorporation contain specific language. First, a purpose clause stating your organization is organized exclusively for one or more exempt purposes under Section 501(c)(3). You can use broad language like 'organized exclusively for charitable and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code.' Second, a dissolution clause stating that upon dissolution, assets will be distributed to another 501(c)(3) organization or to a state or local government for a public purpose. Third, a clause prohibiting private inurement and stating that no part of net earnings shall benefit any private individual. TurboCharity automatically includes all IRS-required language in your generated documents.",
      },
      {
        title: "State-Specific Requirements and Variations",
        content:
          "Each state has its own form, fees, and additional requirements. California requires a specific purpose statement referencing California Corporations Code and an additional filing with the Attorney General. New York requires that a Supreme Court justice approve your Certificate of Incorporation (and the attorney approval adds time and cost). Texas has a simple online filing through SOSDirect. Florida requires a registered agent with a physical address in the state. Delaware is popular for its business-friendly laws but remember — if you operate in another state, you will need to register as a foreign nonprofit there. Filing fees range from about $30 (Kentucky, Mississippi) to $300+ (Massachusetts). Processing times vary from same-day (online filings in many states) to 4-6 weeks (New York with court approval).",
      },
      {
        title: "Choosing a Registered Agent",
        content:
          "Every state requires you to designate a registered agent — a person or company authorized to receive legal and government correspondence on behalf of your nonprofit. The registered agent must have a physical street address (not a P.O. box) in the state of incorporation and must be available during normal business hours. You can serve as your own registered agent, appoint a board member, or use a commercial registered agent service ($50-$300/year). Using a commercial service is recommended because it ensures you never miss important legal notices, provides privacy (the agent's address is public record, not yours), and handles documents professionally. TurboCharity's Complete plan includes one year of registered agent service.",
      },
      {
        title: "Preparing and Filing Your Documents",
        content:
          "Once your Articles are drafted, you file them with the appropriate state agency (usually the Secretary of State or Department of Commerce). Most states now accept online filings, which are faster and sometimes cheaper than mail filings. You will need to pay the filing fee by credit card (online) or check (mail). Some states offer expedited processing for an additional fee — this can reduce processing time from weeks to 1-2 business days. After your filing is approved, you will receive a stamped or certified copy of your Articles (or a Certificate of Good Standing). Keep multiple copies — you will need them to open a bank account, apply for your EIN, and file your 501(c)(3) application.",
      },
      {
        title: "Common Mistakes to Avoid",
        content:
          "The most frequent mistakes in nonprofit Articles of Incorporation include: omitting the IRS-required purpose clause (resulting in 501(c)(3) application issues later), using a name already taken in your state, listing a P.O. box instead of a street address for the registered agent, failing to include the dissolution clause, not specifying that the organization is a nonprofit corporation (as opposed to a for-profit entity), and including provisions that conflict with state nonprofit corporation law. Another common error is naming specific individuals as beneficiaries in the purpose statement, which can be construed as private benefit. TurboCharity's AI reviews your information against all state-specific rules and IRS requirements before generating your documents, catching these issues before they cause problems.",
      },
      {
        title: "After Filing: Next Steps",
        content:
          "Once your Articles of Incorporation are approved, take these immediate steps: (1) Hold your first organizational board meeting to adopt bylaws, elect officers, and authorize the opening of a bank account. (2) Apply for your EIN through the IRS — you can do this online and receive it immediately. (3) Open a dedicated bank account in the nonprofit's name using your Articles and EIN. (4) Apply for any required state-level registrations, such as charitable solicitation registration or state tax-exemption applications. (5) Begin preparing your federal 501(c)(3) application. The clock is ticking — you have 27 months from the date of incorporation to file your federal application and have your tax-exempt status be retroactive to day one.",
      },
    ],
    relatedStates: [
      "California",
      "New York",
      "Texas",
      "Florida",
      "Delaware",
      "Illinois",
      "Pennsylvania",
      "Ohio",
    ],
    relatedPosts: [
      "complete-guide-starting-nonprofit",
      "writing-nonprofit-bylaws",
      "understanding-501c3-status",
    ],
  },

  {
    slug: "nonprofit-compliance-checklist",
    title: "The Nonprofit Compliance Checklist: Annual and Ongoing Requirements",
    description:
      "Stay in good standing with this comprehensive compliance checklist. Covers federal IRS filings, state requirements, financial oversight, and governance best practices for 501(c)(3) organizations.",
    steps: [
      {
        title: "Annual IRS Filing Requirements (Form 990 Series)",
        content:
          "Every 501(c)(3) organization must file an annual information return with the IRS, regardless of revenue. Form 990-N (e-Postcard) is for organizations with gross receipts normally $50,000 or less — it is filed online and takes only a few minutes. Form 990-EZ is for organizations with gross receipts under $200,000 and total assets under $500,000. The full Form 990 is required for larger organizations. The filing deadline is the 15th day of the 5th month after your fiscal year ends (May 15 for calendar-year organizations). You can request a 6-month extension by filing Form 8868 before the deadline. Critically, failure to file for three consecutive years results in automatic revocation of your 501(c)(3) status, and reinstatement requires a new application and fee.",
      },
      {
        title: "State Annual Report and Registration Renewals",
        content:
          "Most states require nonprofits to file an annual or biennial report with the Secretary of State to maintain good standing. Fees range from $0 to $70. Some states also require separate filings with the Attorney General's office, particularly for organizations that solicit donations. Approximately 40 states and the District of Columbia require charitable solicitation registration, which must be renewed annually. If you solicit donations in multiple states (including online solicitations that reach donors in other states), you may need to register in each of those states. Missing these filings can result in penalties, loss of good standing, and even administrative dissolution of your corporation.",
      },
      {
        title: "Financial Oversight and Internal Controls",
        content:
          "Good financial practices are not just legally required — they build donor confidence and protect your organization. At minimum: maintain accurate books and records of all income and expenses, separate duties so no single person controls all financial functions (the person who writes checks should not be the same person who reconciles the bank statement), require board approval for expenditures above a set threshold, conduct an annual financial review or audit (some states and many grantmakers require audits above certain revenue thresholds), file required state and federal tax returns on time, and maintain records for at least seven years. If your nonprofit has employees, ensure compliance with payroll tax requirements, workers' compensation insurance, and employment laws.",
      },
      {
        title: "Board Governance and Meeting Documentation",
        content:
          "Maintaining proper governance records is both a legal requirement and an organizational best practice. Hold at least the number of board meetings specified in your bylaws (quarterly is recommended). Document each meeting with formal minutes that include: date, time, and location; attendees and confirmation of quorum; all motions made, who made and seconded them, and the vote outcome; and any conflict of interest disclosures. Board members should annually sign updated conflict of interest disclosure forms. Review and update your bylaws periodically (every 2-3 years is good practice). Maintain an organized corporate records book containing your Articles of Incorporation, bylaws, IRS determination letter, meeting minutes, financial statements, and filed tax returns.",
      },
      {
        title: "Employment and Compensation Compliance",
        content:
          "If your nonprofit has paid staff, you must comply with federal and state employment laws. This includes: properly classifying workers as employees or independent contractors (misclassification is a common and costly mistake), paying at least the applicable minimum wage and overtime, withholding and remitting payroll taxes, maintaining required employment records, providing workers' compensation insurance, complying with anti-discrimination laws, and displaying required workplace posters. For executive compensation, the IRS requires that compensation be 'reasonable' — documented by the board through a comparability process that reviews salaries at similar organizations. Form 990 requires disclosure of compensation for the highest-paid employees and contractors, which is available to the public.",
      },
      {
        title: "Charitable Solicitation and Fundraising Compliance",
        content:
          "Before soliciting donations, check whether your state requires charitable solicitation registration. Most states require registration before any solicitation begins, including online fundraising campaigns, social media donation requests, and crowdfunding. Provide donors with proper acknowledgment letters for contributions of $250 or more — the letter must state the amount, whether any goods or services were provided in exchange, and the fair market value of those goods or services. For non-cash donations exceeding $5,000, the donor must obtain a qualified appraisal. Keep accurate records of all donations for audit purposes. If you use a professional fundraiser or fundraising counsel, most states require separate registration and disclosure of the professional's involvement.",
      },
      {
        title: "Avoiding Activities That Risk Tax-Exempt Status",
        content:
          "Certain activities can jeopardize your 501(c)(3) status. Absolute prohibitions include: participating in or intervening in any political campaign for or against a candidate for public office (including publishing or distributing statements), allowing any part of net earnings to benefit a private individual (private inurement), and operating primarily for non-exempt purposes. Limited but permissible activities include: lobbying, as long as it is not a 'substantial part' of your activities (consider making the 501(h) election for clearer expenditure-based limits), unrelated business activities (subject to Unrelated Business Income Tax if not substantially related to your exempt purpose), and joint ventures with for-profit entities (if properly structured with adequate safeguards). When in doubt, document your reasoning for how an activity furthers your exempt purpose.",
      },
      {
        title: "Annual Compliance Calendar and Deadline Tracking",
        content:
          "Create a compliance calendar at the start of each fiscal year with all key deadlines. Critical dates to track include: Form 990 filing deadline (and the extension deadline if applicable), state annual report due date, charitable solicitation registration renewal dates for each state where you are registered, payroll tax deposit deadlines (monthly or semi-weekly depending on size), Form W-2 and 1099 deadlines (January 31), state and local tax filing deadlines, board meeting dates per your bylaws, annual conflict of interest disclosure deadline, insurance policy renewal dates, and any grant reporting deadlines. TurboCharity's compliance calendar automatically tracks all applicable federal and state deadlines for your organization and sends email reminders 30, 14, and 3 days before each deadline.",
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
      "understanding-501c3-status",
      "complete-guide-starting-nonprofit",
      "writing-nonprofit-bylaws",
    ],
  },
];

export default guides;

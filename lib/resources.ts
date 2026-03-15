export interface Resource {
  slug: string;
  title: string;
  description: string;
}

export const resources: Resource[] = [
  {
    slug: "what-is-a-501c3",
    title: "What Is a 501(c)(3)?",
    description:
      "Learn what 501(c)(3) tax-exempt status means, who qualifies, and why it matters for your nonprofit.",
  },
  {
    slug: "how-to-start-a-nonprofit",
    title: "How to Start a Nonprofit",
    description:
      "A step-by-step guide to starting a nonprofit organization from scratch.",
  },
  {
    slug: "articles-of-incorporation",
    title: "Articles of Incorporation",
    description:
      "Everything you need to know about drafting and filing articles of incorporation for your nonprofit.",
  },
  {
    slug: "irs-form-1023",
    title: "IRS Form 1023 Guide",
    description:
      "A comprehensive walkthrough of IRS Form 1023 for 501(c)(3) tax-exempt status application.",
  },
  {
    slug: "irs-form-1023-ez",
    title: "IRS Form 1023-EZ Guide",
    description:
      "When and how to use the streamlined Form 1023-EZ for your nonprofit application.",
  },
  {
    slug: "nonprofit-bylaws",
    title: "Nonprofit Bylaws Template & Guide",
    description:
      "How to write effective bylaws that govern your nonprofit organization.",
  },
  {
    slug: "board-of-directors",
    title: "Building a Board of Directors",
    description:
      "Best practices for recruiting and managing your nonprofit board of directors.",
  },
  {
    slug: "ein-application",
    title: "How to Get an EIN",
    description:
      "Step-by-step instructions for obtaining an Employer Identification Number for your nonprofit.",
  },
  {
    slug: "nonprofit-fundraising",
    title: "Nonprofit Fundraising Strategies",
    description:
      "Proven fundraising strategies and techniques for new nonprofit organizations.",
  },
  {
    slug: "state-registration",
    title: "State Registration Requirements",
    description:
      "Understand the state-level registration and compliance requirements for nonprofits.",
  },
  {
    slug: "nonprofit-compliance",
    title: "Nonprofit Compliance Checklist",
    description:
      "Annual compliance requirements every 501(c)(3) organization must follow.",
  },
  {
    slug: "conflict-of-interest-policy",
    title: "Conflict of Interest Policy",
    description:
      "Why your nonprofit needs a conflict of interest policy and how to create one.",
  },
  {
    slug: "nonprofit-mission-statement",
    title: "Writing a Mission Statement",
    description:
      "How to craft a compelling mission statement that drives your nonprofit forward.",
  },
  {
    slug: "tax-exempt-status",
    title: "Maintaining Tax-Exempt Status",
    description:
      "How to maintain your 501(c)(3) tax-exempt status and avoid common pitfalls.",
  },
  {
    slug: "nonprofit-vs-llc",
    title: "Nonprofit vs LLC",
    description:
      "Understanding the key differences between nonprofits and LLCs to choose the right structure.",
  },
];

export const resourceSlugs = resources.map((r) => r.slug);

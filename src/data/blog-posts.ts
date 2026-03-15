export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  featured?: boolean;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-start-a-nonprofit",
    title: "How to Start a Nonprofit in 2025: The Complete Guide",
    excerpt:
      "Everything you need to know about starting a nonprofit, from choosing a mission to filing with the IRS.",
    content:
      "Starting a nonprofit can feel overwhelming, but it doesn't have to be. This comprehensive guide walks you through every step of the process, from defining your mission statement to obtaining 501(c)(3) tax-exempt status.",
    author: "Sarah Johnson",
    date: "2025-01-15",
    featured: true,
    tags: ["getting-started", "guide"],
  },
  {
    slug: "501c3-vs-501c4",
    title: "501(c)(3) vs 501(c)(4): Which Is Right for Your Organization?",
    excerpt:
      "Understanding the key differences between 501(c)(3) and 501(c)(4) tax-exempt organizations.",
    content:
      "When forming a nonprofit, one of the most important decisions you'll make is choosing the right tax-exempt classification. The two most common are 501(c)(3) and 501(c)(4), each with distinct advantages and limitations.",
    author: "Michael Chen",
    date: "2025-02-01",
    featured: false,
    tags: ["tax-exempt", "legal"],
  },
  {
    slug: "nonprofit-bylaws-guide",
    title: "Writing Nonprofit Bylaws: A Step-by-Step Guide",
    excerpt:
      "Learn how to draft comprehensive bylaws that protect your nonprofit and satisfy state requirements.",
    content:
      "Bylaws are the internal rules that govern how your nonprofit operates. They cover everything from board structure and meeting procedures to conflict-of-interest policies and amendment processes.",
    author: "Emily Rodriguez",
    date: "2025-02-15",
    featured: false,
    tags: ["bylaws", "governance"],
  },
  {
    slug: "state-incorporation-tips",
    title: "State Incorporation: Tips for Filing in Any State",
    excerpt:
      "Navigate state-specific requirements with confidence using our expert tips.",
    content:
      "Each state has unique requirements for incorporating a nonprofit. From filing fees to required documents, understanding your state's specific rules is crucial for a smooth incorporation process.",
    author: "David Park",
    date: "2025-03-01",
    featured: false,
    tags: ["incorporation", "state-filing"],
  },
  {
    slug: "fundraising-strategies-new-nonprofits",
    title: "Top 10 Fundraising Strategies for New Nonprofits",
    excerpt:
      "Proven fundraising strategies to help your new nonprofit build a sustainable funding base.",
    content:
      "Fundraising is the lifeblood of any nonprofit organization. Whether you're just starting out or looking to diversify your revenue streams, these ten strategies will help you build a solid financial foundation.",
    author: "Sarah Johnson",
    date: "2025-03-15",
    featured: true,
    tags: ["fundraising", "strategy"],
  },
  {
    slug: "board-of-directors-best-practices",
    title: "Building an Effective Board of Directors",
    excerpt:
      "Best practices for recruiting, managing, and empowering your nonprofit board.",
    content:
      "Your board of directors is the backbone of your nonprofit's governance. A well-composed and engaged board provides strategic direction, fiduciary oversight, and community connections.",
    author: "Michael Chen",
    date: "2025-04-01",
    featured: false,
    tags: ["governance", "board"],
  },
  {
    slug: "irs-form-1023-ez-guide",
    title: "IRS Form 1023-EZ: The Streamlined Path to Tax-Exempt Status",
    excerpt:
      "A complete walkthrough of IRS Form 1023-EZ for qualifying nonprofits.",
    content:
      "Form 1023-EZ is a streamlined application for tax-exempt status under section 501(c)(3). If your nonprofit meets certain criteria, this simplified form can save you significant time and effort compared to the full Form 1023.",
    author: "Emily Rodriguez",
    date: "2025-04-15",
    featured: false,
    tags: ["irs", "tax-exempt"],
  },
  {
    slug: "nonprofit-compliance-checklist",
    title: "Annual Nonprofit Compliance Checklist",
    excerpt:
      "Stay on top of your nonprofit's annual filing and compliance obligations.",
    content:
      "Running a nonprofit means staying compliant with federal, state, and local regulations. Missing a filing deadline can result in penalties or even loss of your tax-exempt status. Use this checklist to stay organized.",
    author: "David Park",
    date: "2025-05-01",
    featured: false,
    tags: ["compliance", "annual-filing"],
  },
  {
    slug: "college-students-starting-nonprofits",
    title: "A College Student's Guide to Starting a Nonprofit",
    excerpt:
      "How college students can turn their passion projects into registered nonprofits.",
    content:
      "More college students than ever are launching nonprofits to address social issues they care about. From campus food banks to tutoring programs, student-led organizations are making a real impact.",
    author: "Sarah Johnson",
    date: "2025-05-15",
    featured: false,
    tags: ["students", "getting-started"],
  },
];

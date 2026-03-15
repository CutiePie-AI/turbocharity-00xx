export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maya Rodriguez",
    role: "Founder & Executive Director",
    organization: "Brighter Futures Mentorship",
    quote:
      "As a first-generation college student, I had no idea how to start a nonprofit. TurboCharity walked me through every step — I had my articles of incorporation and bylaws generated in 20 minutes. Three weeks later we received our 501(c)(3) determination letter. This platform is a game-changer for young people who want to make a difference but can't afford a lawyer.",
    rating: 5,
    avatar: "/images/avatars/maya-rodriguez.jpg",
    featured: true,
  },
  {
    name: "David Okonkwo",
    role: "Community Organizer & Co-Founder",
    organization: "Southside Community Gardens",
    quote:
      "We'd been running our community garden informally for two years and losing grant opportunities because we weren't incorporated. A friend told me about TurboCharity and I figured, why not try? The AI understood exactly what we needed for an environmental education nonprofit. We were incorporated in Illinois within four days and had our EIN the same week.",
    rating: 5,
    avatar: "/images/avatars/david-okonkwo.jpg",
    featured: true,
  },
  {
    name: "Sarah Kim",
    role: "High School Teacher & Founder",
    organization: "Code For Tomorrow",
    quote:
      "I teach computer science in an underserved school district and wanted to create a nonprofit to fund coding workshops and laptops for students. TurboCharity made the legal paperwork painless. The bylaws it generated even included a conflict-of-interest policy, which impressed the first foundation we applied to for a grant. We received $15,000 within our first quarter.",
    rating: 5,
    avatar: "/images/avatars/sarah-kim.jpg",
    featured: true,
  },
  {
    name: "James Whitfield",
    role: "Retired Veteran & President",
    organization: "Veterans Transition Alliance",
    quote:
      "After retiring from the military, I wanted to help fellow veterans navigate civilian life. I looked into lawyers and was quoted $3,500 just for incorporation and 1023-EZ filing. TurboCharity did it for a fraction of the cost. The state-specific guidance for Texas was spot-on, and the compliance dashboard keeps me on track with annual filings.",
    rating: 5,
    avatar: "/images/avatars/james-whitfield.jpg",
    featured: false,
  },
  {
    name: "Priya Sharma",
    role: "Graduate Student & Board Chair",
    organization: "South Asian Mental Health Collective",
    quote:
      "Mental health stigma in our community is something I'm passionate about addressing. I started the formation process during finals week — honestly expected it to take months. TurboCharity's AI asked smart questions about our programs and generated documents that actually reflected our unique mission. We were a registered 501(c)(3) before the semester ended.",
    rating: 4,
    avatar: "/images/avatars/priya-sharma.jpg",
    featured: false,
  },
  {
    name: "Marcus Thompson",
    role: "Youth Pastor & Executive Director",
    organization: "Rise Above Youth Programs",
    quote:
      "Our church wanted to spin off our youth programs into a separate nonprofit for grant eligibility. I was nervous about the IRS paperwork, but TurboCharity pre-filled the 1023-EZ using our answers. I just reviewed it, signed, and submitted. The whole thing from start to IRS approval took five weeks. I've since recommended it to three other churches in our network.",
    rating: 5,
    avatar: "/images/avatars/marcus-thompson.jpg",
    featured: true,
  },
  {
    name: "Elena Vasquez",
    role: "Social Worker & Co-Founder",
    organization: "Familias Unidas Housing Support",
    quote:
      "Navigating nonprofit formation as a non-native English speaker felt overwhelming until I found TurboCharity. The platform's clear, simple language made every step understandable. The generated documents were professional and comprehensive — our attorney reviewed them and said they were better than what most law firms produce. And we saved over $4,000.",
    rating: 5,
    avatar: "/images/avatars/elena-vasquez.jpg",
    featured: false,
  },
  {
    name: "Tyler Brooks",
    role: "College Junior & Founder",
    organization: "Campus Sustainability Coalition",
    quote:
      "I started an environmental nonprofit my sophomore year to coordinate sustainability efforts across universities. TurboCharity's student resources were incredibly helpful, and the free tier let me generate all the formation documents without spending a dime. The compliance reminders are a lifesaver — as a full-time student, I'd definitely forget filing deadlines otherwise.",
    rating: 4,
    avatar: "/images/avatars/tyler-brooks.jpg",
    featured: false,
  },
];

/**
 * Returns only featured testimonials (for homepage display).
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}

/**
 * Generates JSON-LD Review structured data for SEO.
 */
export function getTestimonialJsonLd(items: Testimonial[] = testimonials) {
  const avgRating =
    items.reduce((sum, t) => sum + t.rating, 0) / items.length;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "TurboCharity",
    description: "AI-powered nonprofit creation platform",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      ratingCount: items.length.toString(),
    },
    review: items.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
      },
      reviewBody: t.quote,
    })),
  };
}

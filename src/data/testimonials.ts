export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar: string;
  featured: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Jasmine Carter",
    role: "Founder & Executive Director",
    organization: "Youth Code Academy",
    quote:
      "I was a junior in college when I decided to teach coding to underserved high schoolers. Everyone told me I'd need a lawyer and thousands of dollars. TurboCharity walked me through the entire process for under $200. We had our 501(c)(3) status in three weeks and our first grant a month later. This platform literally made my dream possible.",
    rating: 5,
    avatar: "/images/avatars/jasmine-carter.jpg",
    featured: true,
  },
  {
    name: "Marcus Williams",
    role: "Community Organizer & Co-Founder",
    organization: "Eastside Food Collective",
    quote:
      "After years of running informal food drives, we needed to become official to apply for grants. I expected months of paperwork. TurboCharity generated our articles of incorporation and bylaws in about 20 minutes. The state filing was handled for us, and the IRS form was pre-filled. We went from an idea on a whiteboard to a registered 501(c)(3) in under a month.",
    rating: 5,
    avatar: "/images/avatars/marcus-williams.jpg",
    featured: true,
  },
  {
    name: "Sarah Chen",
    role: "Middle School Teacher & Founder",
    organization: "STEM Sisters Initiative",
    quote:
      "As a teacher with zero legal background, the thought of incorporating a nonprofit was terrifying. TurboCharity's step-by-step process made it feel like filling out a regular online form. The AI even suggested better language for our mission statement. I finished the whole thing during my lunch breaks over three days.",
    rating: 5,
    avatar: "/images/avatars/sarah-chen.jpg",
    featured: true,
  },
  {
    name: "David Okonkwo",
    role: "Graduate Student & President",
    organization: "African Diaspora Health Alliance",
    quote:
      "We needed to set up a nonprofit to channel funding for community health projects in three states. TurboCharity handled the state-specific requirements for each one and even alerted us about charitable solicitation registration. The compliance calendar is a lifesaver — I get reminders for every filing deadline.",
    rating: 5,
    avatar: "/images/avatars/david-okonkwo.jpg",
    featured: false,
  },
  {
    name: "Emily Russo",
    role: "Retired Nurse & Founder",
    organization: "Comfort Care Companions",
    quote:
      "I spent 30 years in nursing and wanted to start a nonprofit to provide companion visits to homebound seniors. I'm not tech-savvy at all, but TurboCharity was intuitive enough that I did everything myself. The document quality was impressive — our attorney reviewed the bylaws and said they were better than what she usually sees from DIY services.",
    rating: 4,
    avatar: "/images/avatars/emily-russo.jpg",
    featured: false,
  },
  {
    name: "Jordan Reeves",
    role: "College Senior & Executive Director",
    organization: "Campus Climate Coalition",
    quote:
      "We started as a student club, but we needed nonprofit status to accept donations for our sustainability projects. I compared TurboCharity to three other platforms and it was the only one built specifically for nonprofits. The price was half of what LegalZoom quoted, and we got our EIN and 501(c)(3) filing done the same day.",
    rating: 5,
    avatar: "/images/avatars/jordan-reeves.jpg",
    featured: true,
  },
  {
    name: "Maria Gonzalez",
    role: "Small Business Owner & Board Chair",
    organization: "Familias Adelante",
    quote:
      "I formed Familias Adelante to provide financial literacy workshops in our predominantly Latino community. TurboCharity made the process so straightforward that I was able to do it alongside running my bakery. The auto-generated conflict of interest policy and board resolutions saved me from having to figure out governance documents on my own.",
    rating: 4,
    avatar: "/images/avatars/maria-gonzalez.jpg",
    featured: false,
  },
  {
    name: "Tyler Brennan",
    role: "Veteran & Co-Founder",
    organization: "Vets Rebuilding Together",
    quote:
      "After leaving the military, I wanted to help fellow veterans transition to civilian life through skilled trades training. TurboCharity got us incorporated in Delaware in two days. The 1023-EZ prep was especially helpful — it flagged a couple of answers that might have caused an IRS follow-up and suggested better phrasing. We were approved on the first try.",
    rating: 5,
    avatar: "/images/avatars/tyler-brennan.jpg",
    featured: false,
  },
];

export default testimonials;

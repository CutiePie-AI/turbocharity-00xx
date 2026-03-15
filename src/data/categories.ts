export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'education',
    name: 'Education',
    description:
      'Nonprofits focused on learning, scholarships, tutoring, literacy programs, and educational access for underserved communities.',
    icon: '\uD83C\uDF93',
  },
  {
    slug: 'health',
    name: 'Health',
    description:
      'Organizations dedicated to healthcare access, medical research, mental health services, disease prevention, and wellness programs.',
    icon: '\u2764\uFE0F',
  },
  {
    slug: 'environment',
    name: 'Environment',
    description:
      'Nonprofits working on conservation, climate action, wildlife protection, sustainability initiatives, and environmental education.',
    icon: '\uD83C\uDF0D',
  },
  {
    slug: 'arts-culture',
    name: 'Arts & Culture',
    description:
      'Organizations supporting visual arts, performing arts, cultural preservation, museums, public media, and creative expression.',
    icon: '\uD83C\uDFA8',
  },
  {
    slug: 'social-services',
    name: 'Social Services',
    description:
      'Nonprofits providing food assistance, housing support, job training, disaster relief, and other direct services to those in need.',
    icon: '\uD83E\uDD1D',
  },
  {
    slug: 'animal-welfare',
    name: 'Animal Welfare',
    description:
      'Organizations focused on animal rescue, shelter operations, wildlife rehabilitation, humane education, and animal rights advocacy.',
    icon: '\uD83D\uDC3E',
  },
  {
    slug: 'youth-development',
    name: 'Youth Development',
    description:
      'Nonprofits supporting mentorship, after-school programs, youth sports, leadership development, and child welfare services.',
    icon: '\u2B50',
  },
  {
    slug: 'community-development',
    name: 'Community Development',
    description:
      'Organizations building stronger neighborhoods through economic development, civic engagement, affordable housing, and local infrastructure.',
    icon: '\uD83C\uDFD8\uFE0F',
  },
  {
    slug: 'religious',
    name: 'Religious',
    description:
      'Faith-based organizations including churches, mosques, synagogues, temples, and religious educational and charitable ministries.',
    icon: '\uD83D\uDD4A\uFE0F',
  },
  {
    slug: 'international',
    name: 'International',
    description:
      'Nonprofits working on global development, humanitarian aid, international education, cross-cultural exchange, and overseas relief efforts.',
    icon: '\u2708\uFE0F',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

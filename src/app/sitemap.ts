import type { MetadataRoute } from "next";

const BASE_URL = "https://turbocharity.com";

const directoryCategories = [
  "education",
  "health",
  "arts-culture",
  "environment",
  "animal-welfare",
  "community-development",
  "youth-development",
  "religious",
  "social-services",
  "science-research",
  "international",
  "veterans",
] as const;

const states = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new-hampshire",
  "new-jersey",
  "new-mexico",
  "new-york",
  "north-carolina",
  "north-dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode-island",
  "south-carolina",
  "south-dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west-virginia",
  "wisconsin",
  "wyoming",
] as const;

const guides = [
  "how-to-start-a-nonprofit",
  "501c3-application-guide",
  "nonprofit-bylaws-template",
  "choosing-a-board-of-directors",
  "form-1023-ez-guide",
  "state-registration-guide",
  "nonprofit-fundraising-101",
  "tax-exempt-status-guide",
  "nonprofit-compliance-checklist",
  "starting-a-charity-for-beginners",
] as const;

const blogPosts = [
  "why-start-a-nonprofit-in-2025",
  "501c3-vs-501c4-differences",
  "nonprofit-startup-costs-breakdown",
  "how-long-does-501c3-approval-take",
  "best-states-to-start-a-nonprofit",
  "nonprofit-board-requirements-explained",
  "form-1023-ez-eligibility-requirements",
  "common-nonprofit-mistakes-to-avoid",
] as const;

const tools = [
  "ein-lookup",
  "nonprofit-name-checker",
  "501c3-eligibility-quiz",
  "nonprofit-budget-calculator",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/directory`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/signup`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = directoryCategories.map(
    (category) => ({
      url: `${BASE_URL}/directory/${category}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${BASE_URL}/directory/state/${state}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${BASE_URL}/guides/${guide}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE_URL}/tools/${tool}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...statePages,
    ...guidePages,
    ...blogPages,
    ...toolPages,
  ];
}

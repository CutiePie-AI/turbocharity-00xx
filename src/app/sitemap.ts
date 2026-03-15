import type { MetadataRoute } from "next";

const BASE_URL = "https://turbocharity.com";

const DIRECTORY_CATEGORIES = [
  "education",
  "health",
  "environment",
  "arts-culture",
  "animal-welfare",
  "community-development",
  "human-services",
  "international",
  "religion",
  "science-research",
  "youth-development",
  "disaster-relief",
] as const;

const STATES = [
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

const GUIDES = [
  "how-to-start-a-nonprofit",
  "501c3-application-guide",
  "nonprofit-bylaws-template",
  "board-of-directors-guide",
  "nonprofit-fundraising-basics",
  "tax-exempt-status-explained",
  "nonprofit-compliance-checklist",
  "choosing-a-nonprofit-name",
  "writing-a-mission-statement",
  "nonprofit-budgeting-101",
] as const;

const BLOG_POSTS = [
  "why-start-a-nonprofit-in-2026",
  "form-1023-ez-vs-form-1023",
  "nonprofit-vs-llc-comparison",
  "top-mistakes-new-nonprofits-make",
  "how-to-recruit-board-members",
  "nonprofit-marketing-strategies",
  "grant-writing-tips-for-beginners",
  "annual-reporting-requirements",
] as const;

const TOOLS = [
  "ein-lookup",
  "nonprofit-name-checker",
  "tax-exempt-status-checker",
  "budget-calculator",
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
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/signup`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const directoryPages: MetadataRoute.Sitemap = DIRECTORY_CATEGORIES.map(
    (category) => ({
      url: `${BASE_URL}/directory/${category}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  const statePages: MetadataRoute.Sitemap = STATES.map((state) => ({
    url: `${BASE_URL}/directory/states/${state}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${BASE_URL}/guides/${guide}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${BASE_URL}/tools/${tool}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...directoryPages,
    ...statePages,
    ...guidePages,
    ...blogPages,
    ...toolPages,
  ];
}

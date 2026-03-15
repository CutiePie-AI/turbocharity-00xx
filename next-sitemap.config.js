/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://turbocharity.com",
  generateRobotsTxt: false, // We maintain a custom public/robots.txt
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*"],
  additionalPaths: async () => [
    { loc: "/", changefreq: "daily", priority: 1.0 },
    { loc: "/get-started", changefreq: "weekly", priority: 0.9 },
    { loc: "/pricing", changefreq: "weekly", priority: 0.8 },
    { loc: "/directory", changefreq: "daily", priority: 0.8 },
    { loc: "/blog", changefreq: "daily", priority: 0.7 },
    { loc: "/about", changefreq: "monthly", priority: 0.6 },
    { loc: "/contact", changefreq: "monthly", priority: 0.5 },
    { loc: "/legal/privacy", changefreq: "yearly", priority: 0.3 },
    { loc: "/legal/terms", changefreq: "yearly", priority: 0.3 },
    { loc: "/guides/complete-guide-starting-nonprofit", changefreq: "monthly", priority: 0.8 },
    { loc: "/guides/understanding-501c3-status", changefreq: "monthly", priority: 0.8 },
    { loc: "/guides/writing-nonprofit-bylaws", changefreq: "monthly", priority: 0.7 },
    { loc: "/guides/filing-articles-of-incorporation", changefreq: "monthly", priority: 0.7 },
    { loc: "/guides/nonprofit-compliance-checklist", changefreq: "monthly", priority: 0.7 },
  ],
};

module.exports = config;

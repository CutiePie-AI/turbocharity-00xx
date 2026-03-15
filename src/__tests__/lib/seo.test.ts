import { SITE_CONFIG, generatePageMeta } from '@/lib/seo';

describe('SITE_CONFIG', () => {
  it('has all required fields', () => {
    expect(SITE_CONFIG.siteName).toBeDefined();
    expect(typeof SITE_CONFIG.siteName).toBe('string');
    expect(SITE_CONFIG.siteName.length).toBeGreaterThan(0);

    expect(SITE_CONFIG.siteUrl).toBeDefined();
    expect(typeof SITE_CONFIG.siteUrl).toBe('string');
    expect(SITE_CONFIG.siteUrl.length).toBeGreaterThan(0);

    expect(SITE_CONFIG.description).toBeDefined();
    expect(typeof SITE_CONFIG.description).toBe('string');
    expect(SITE_CONFIG.description.length).toBeGreaterThan(0);

    expect(SITE_CONFIG.twitterHandle).toBeDefined();
    expect(typeof SITE_CONFIG.twitterHandle).toBe('string');
    expect(SITE_CONFIG.twitterHandle).toMatch(/^@/);
  });
});

describe('generatePageMeta', () => {
  it('returns an object with title and description', () => {
    const meta = generatePageMeta('home');
    expect(meta).toHaveProperty('title');
    expect(meta).toHaveProperty('description');
    expect(typeof meta.title).toBe('string');
    expect((meta.title as string).length).toBeGreaterThan(0);
    expect(typeof meta.description).toBe('string');
    expect((meta.description as string).length).toBeGreaterThan(0);
  });

  it('returns metadata for the pricing page', () => {
    const meta = generatePageMeta('pricing');
    expect(meta.title).toContain('Pricing');
    expect((meta.description as string).length).toBeGreaterThan(0);
  });

  it('returns metadata for the about page', () => {
    const meta = generatePageMeta('about');
    expect(meta.title).toContain('About');
    expect((meta.description as string).length).toBeGreaterThan(0);
  });

  it('returns metadata for the states page', () => {
    const meta = generatePageMeta('states');
    expect(meta.title).toContain('State');
    expect((meta.description as string).length).toBeGreaterThan(0);
  });

  it('different page keys return different metadata', () => {
    const homeMeta = generatePageMeta('home');
    const pricingMeta = generatePageMeta('pricing');
    const aboutMeta = generatePageMeta('about');
    const resourcesMeta = generatePageMeta('resources');

    const titles = [
      homeMeta.title,
      pricingMeta.title,
      aboutMeta.title,
      resourcesMeta.title,
    ];
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);

    const descriptions = [
      homeMeta.description,
      pricingMeta.description,
      aboutMeta.description,
      resourcesMeta.description,
    ];
    const uniqueDescriptions = new Set(descriptions);
    expect(uniqueDescriptions.size).toBe(descriptions.length);
  });

  it('falls back gracefully for unknown page keys', () => {
    const meta = generatePageMeta('nonexistent-page');
    expect(meta).toHaveProperty('title');
    expect(meta).toHaveProperty('description');
    expect((meta.title as string).length).toBeGreaterThan(0);
    expect((meta.description as string).length).toBeGreaterThan(0);
  });

  it('includes openGraph data', () => {
    const meta = generatePageMeta('home');
    expect(meta.openGraph).toBeDefined();
    expect(meta.openGraph?.title).toBeDefined();
    expect(meta.openGraph?.description).toBeDefined();
    expect(meta.openGraph?.url).toBeDefined();
    expect(meta.openGraph?.siteName).toBe(SITE_CONFIG.siteName);
  });

  it('includes twitter card data', () => {
    const meta = generatePageMeta('home');
    expect(meta.twitter).toBeDefined();
    expect(meta.twitter?.card).toBe('summary_large_image');
    expect(meta.twitter?.title).toBeDefined();
    expect(meta.twitter?.description).toBeDefined();
  });

  it('includes canonical URL in alternates', () => {
    const meta = generatePageMeta('home');
    expect(meta.alternates).toBeDefined();
    expect(meta.alternates?.canonical).toBeDefined();
    expect(typeof meta.alternates?.canonical).toBe('string');
  });
});

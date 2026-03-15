import { SITE_CONFIG, generatePageMeta, generateMetadata } from '@/lib/seo';

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

describe('generateMetadata', () => {
  it('returns correct structure with title and description', () => {
    const meta = generateMetadata('Test Page', 'A test description', '/test');
    expect(meta.title).toBe('Test Page');
    expect(meta.description).toBe('A test description');
  });

  it('generates correct canonical URL from path', () => {
    const meta = generateMetadata('State Page', 'Description', '/states/california');
    expect(meta.alternates?.canonical).toBe('https://turbocharity.com/states/california');
  });

  it('generates canonical URL with empty path default', () => {
    const meta = generateMetadata('Home', 'Home description');
    expect(meta.alternates?.canonical).toBe('https://turbocharity.com');
  });

  it('includes OpenGraph properties', () => {
    const meta = generateMetadata('OG Test', 'OG description', '/og-page');
    expect(meta.openGraph).toBeDefined();
    expect(meta.openGraph?.title).toBe('OG Test');
    expect(meta.openGraph?.description).toBe('OG description');
    expect(meta.openGraph?.url).toBe('https://turbocharity.com/og-page');
    expect(meta.openGraph?.siteName).toBe('TurboCharity');
    expect(meta.openGraph?.type).toBe('website');
  });

  it('includes twitter card data', () => {
    const meta = generateMetadata('Twitter Test', 'Twitter desc', '/tw');
    expect(meta.twitter).toBeDefined();
    expect(meta.twitter?.card).toBe('summary_large_image');
    expect(meta.twitter?.title).toBe('Twitter Test');
    expect(meta.twitter?.description).toBe('Twitter desc');
  });

  it('works for blog post metadata', () => {
    const meta = generateMetadata(
      'How to Start a Nonprofit',
      'Complete guide to starting a nonprofit.',
      '/blog/how-to-start-a-nonprofit',
    );
    expect(meta.title).toBe('How to Start a Nonprofit');
    expect(meta.alternates?.canonical).toBe(
      'https://turbocharity.com/blog/how-to-start-a-nonprofit',
    );
    expect(meta.openGraph?.url).toBe(
      'https://turbocharity.com/blog/how-to-start-a-nonprofit',
    );
  });
});

import { generateMetadata } from '@/lib/seo';

describe('generateMetadata', () => {
  it('returns an object with title and description', () => {
    const meta = generateMetadata('home');
    expect(meta).toHaveProperty('title');
    expect(meta).toHaveProperty('description');

    expect(typeof meta.title).toBe('string');
    expect(meta.title.length).toBeGreaterThan(0);

    expect(typeof meta.description).toBe('string');
    expect(meta.description.length).toBeGreaterThan(0);
  });

  it('returns metadata for the pricing page', () => {
    const meta = generateMetadata('pricing');
    expect(meta.title).toContain('Pricing');
    expect(meta.description.length).toBeGreaterThan(0);
  });

  it('returns metadata for the about page', () => {
    const meta = generateMetadata('about');
    expect(meta.title).toContain('About');
    expect(meta.description.length).toBeGreaterThan(0);
  });

  it('different page keys return different metadata', () => {
    const homeMeta = generateMetadata('home');
    const pricingMeta = generateMetadata('pricing');
    const aboutMeta = generateMetadata('about');
    const resourcesMeta = generateMetadata('resources');

    // Titles should all be unique
    const titles = [homeMeta.title, pricingMeta.title, aboutMeta.title, resourcesMeta.title];
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);

    // Descriptions should all be unique
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
    const meta = generateMetadata('nonexistent-page');
    expect(meta).toHaveProperty('title');
    expect(meta).toHaveProperty('description');
    expect(meta.title.length).toBeGreaterThan(0);
    expect(meta.description.length).toBeGreaterThan(0);
  });

  it('includes openGraph data when available', () => {
    const meta = generateMetadata('home');
    expect(meta.openGraph).toBeDefined();
    expect(meta.openGraph?.title).toBeDefined();
    expect(meta.openGraph?.description).toBeDefined();
    expect(meta.openGraph?.url).toBeDefined();
  });
});

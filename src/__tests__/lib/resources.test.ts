import { RESOURCES } from '@/lib/resources';

const VALID_CATEGORIES = ['Getting Started', 'Legal', 'Financial', 'Growth'] as const;

describe('RESOURCES data', () => {
  it('has at least 10 items', () => {
    expect(RESOURCES.length).toBeGreaterThanOrEqual(10);
  });

  it('each resource has title, slug, excerpt, category, readTime, and content', () => {
    for (const resource of RESOURCES) {
      expect(resource).toHaveProperty('title');
      expect(resource).toHaveProperty('slug');
      expect(resource).toHaveProperty('excerpt');
      expect(resource).toHaveProperty('category');
      expect(resource).toHaveProperty('readTime');
      expect(resource).toHaveProperty('content');

      expect(typeof resource.title).toBe('string');
      expect(resource.title.length).toBeGreaterThan(0);

      expect(typeof resource.slug).toBe('string');
      expect(resource.slug.length).toBeGreaterThan(0);

      expect(typeof resource.excerpt).toBe('string');
      expect(resource.excerpt.length).toBeGreaterThan(0);

      expect(typeof resource.category).toBe('string');
      expect(resource.category.length).toBeGreaterThan(0);

      expect(typeof resource.readTime).toBe('string');
      expect(resource.readTime.length).toBeGreaterThan(0);

      expect(typeof resource.content).toBe('string');
      expect(resource.content.length).toBeGreaterThan(0);
    }
  });

  it('categories are valid values', () => {
    for (const resource of RESOURCES) {
      expect(VALID_CATEGORIES).toContain(resource.category);
    }
  });

  it('has no duplicate slugs', () => {
    const slugs = RESOURCES.map((r) => r.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('slugs are URL-safe (lowercase letters, numbers, and hyphens only)', () => {
    const urlSafePattern = /^[a-z0-9][a-z0-9-]*$/;
    for (const resource of RESOURCES) {
      expect(resource.slug).toMatch(urlSafePattern);
    }
  });

  it('covers at least 3 different categories', () => {
    const categories = new Set(RESOURCES.map((r) => r.category));
    expect(categories.size).toBeGreaterThanOrEqual(3);
  });
});

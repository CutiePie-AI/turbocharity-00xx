import sitemap from '@/app/sitemap';

/* ─── Tests ───────────────────────────────────────────────────────────── */

describe('Sitemap', () => {
  const entries = sitemap();

  it('returns an array', () => {
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });

  it('contains the root URL', () => {
    const root = entries.find((e) => e.url === 'https://turbocharity.com');
    expect(root).toBeDefined();
  });

  it('contains /blog route', () => {
    const blog = entries.find(
      (e) => e.url === 'https://turbocharity.com/blog'
    );
    expect(blog).toBeDefined();
  });

  it('contains /faq route', () => {
    const faq = entries.find((e) => e.url === 'https://turbocharity.com/faq');
    expect(faq).toBeDefined();
  });

  it('contains /resources route', () => {
    const resources = entries.find(
      (e) => e.url === 'https://turbocharity.com/resources'
    );
    expect(resources).toBeDefined();
  });

  it('contains /states route', () => {
    const states = entries.find(
      (e) => e.url === 'https://turbocharity.com/states'
    );
    expect(states).toBeDefined();
  });

  it('contains individual blog post routes (at least one /blog/[slug])', () => {
    const blogPostEntries = entries.filter(
      (e) =>
        e.url.startsWith('https://turbocharity.com/blog/') &&
        e.url !== 'https://turbocharity.com/blog'
    );
    expect(blogPostEntries.length).toBeGreaterThanOrEqual(1);
    // Verify a blog slug URL pattern
    for (const entry of blogPostEntries) {
      expect(entry.url).toMatch(
        /^https:\/\/turbocharity\.com\/blog\/[a-z0-9-]+$/
      );
    }
  });

  it('all entries have url, lastModified, changeFrequency, and priority', () => {
    for (const entry of entries) {
      expect(entry.url).toBeDefined();
      expect(typeof entry.url).toBe('string');
      expect(entry.url.length).toBeGreaterThan(0);

      expect(entry.lastModified).toBeDefined();

      expect(entry.changeFrequency).toBeDefined();
      expect(
        ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']
      ).toContain(entry.changeFrequency);

      expect(entry.priority).toBeDefined();
      expect(typeof entry.priority).toBe('number');
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    }
  });

  it('contains individual state routes', () => {
    const stateEntries = entries.filter(
      (e) =>
        e.url.startsWith('https://turbocharity.com/states/') &&
        e.url !== 'https://turbocharity.com/states'
    );
    expect(stateEntries.length).toBeGreaterThanOrEqual(1);
  });
});

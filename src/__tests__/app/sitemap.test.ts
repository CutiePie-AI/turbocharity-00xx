import sitemap from '@/app/sitemap';

describe('Sitemap', () => {
  const entries = sitemap();

  it('returns an array', () => {
    expect(Array.isArray(entries)).toBe(true);
  });

  it('contains the root URL', () => {
    const rootEntry = entries.find(
      (entry) => entry.url === 'https://turbocharity.com'
    );
    expect(rootEntry).toBeDefined();
  });

  it('contains the /blog route', () => {
    const blogEntry = entries.find(
      (entry) => entry.url === 'https://turbocharity.com/blog'
    );
    expect(blogEntry).toBeDefined();
  });

  it('contains the /faq route', () => {
    const faqEntry = entries.find(
      (entry) => entry.url === 'https://turbocharity.com/faq'
    );
    expect(faqEntry).toBeDefined();
  });

  it('contains the /resources route', () => {
    const resourcesEntry = entries.find(
      (entry) => entry.url === 'https://turbocharity.com/resources'
    );
    expect(resourcesEntry).toBeDefined();
  });

  it('contains the /states route', () => {
    const statesEntry = entries.find(
      (entry) => entry.url === 'https://turbocharity.com/states'
    );
    expect(statesEntry).toBeDefined();
  });

  it('contains at least one individual blog post route (/blog/[slug])', () => {
    const blogPostEntries = entries.filter(
      (entry) =>
        entry.url.startsWith('https://turbocharity.com/blog/') &&
        entry.url !== 'https://turbocharity.com/blog'
    );
    expect(blogPostEntries.length).toBeGreaterThan(0);

    // Verify the URL matches the /blog/[slug] pattern
    blogPostEntries.forEach((entry) => {
      expect(entry.url).toMatch(
        /^https:\/\/turbocharity\.com\/blog\/[a-z0-9-]+$/
      );
    });
  });

  it('all entries have url property', () => {
    entries.forEach((entry) => {
      expect(entry.url).toBeDefined();
      expect(typeof entry.url).toBe('string');
      expect(entry.url.length).toBeGreaterThan(0);
    });
  });

  it('all entries have lastModified property', () => {
    entries.forEach((entry) => {
      expect(entry.lastModified).toBeDefined();
    });
  });

  it('all entries have changeFrequency property', () => {
    const validFrequencies = [
      'always',
      'hourly',
      'daily',
      'weekly',
      'monthly',
      'yearly',
      'never',
    ];
    entries.forEach((entry) => {
      expect(entry.changeFrequency).toBeDefined();
      expect(validFrequencies).toContain(entry.changeFrequency);
    });
  });

  it('all entries have priority property', () => {
    entries.forEach((entry) => {
      expect(entry.priority).toBeDefined();
      expect(typeof entry.priority).toBe('number');
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    });
  });

  it('contains individual state routes', () => {
    const stateRoutes = entries.filter(
      (entry) =>
        entry.url.startsWith('https://turbocharity.com/states/') &&
        entry.url !== 'https://turbocharity.com/states'
    );
    expect(stateRoutes.length).toBeGreaterThan(0);
  });
});

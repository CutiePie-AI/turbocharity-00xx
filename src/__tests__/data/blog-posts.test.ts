import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog-posts';

describe('Blog Posts Data', () => {
  test('blogPosts has at least 10 entries', () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(10);
  });

  test('each post has required fields', () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(typeof post.slug).toBe('string');

      expect(post.title).toBeTruthy();
      expect(typeof post.title).toBe('string');

      expect(post.excerpt).toBeTruthy();
      expect(typeof post.excerpt).toBe('string');

      expect(post.content).toBeTruthy();
      expect(typeof post.content).toBe('string');

      expect(post.author).toBeTruthy();
      expect(typeof post.author).toBe('string');

      expect(post.publishedAt).toBeTruthy();
      expect(typeof post.publishedAt).toBe('string');

      expect(post.category).toBeTruthy();
      expect(typeof post.category).toBe('string');
    });
  });

  test('all slugs are unique', () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test('slugs are URL-safe', () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  test('getBlogPostBySlug returns the correct post', () => {
    const firstPost = blogPosts[0];
    const found = getBlogPostBySlug(firstPost.slug);
    expect(found).toBeDefined();
    expect(found!.title).toBe(firstPost.title);
    expect(found!.slug).toBe(firstPost.slug);
  });

  test('getBlogPostBySlug returns undefined for invalid slug', () => {
    expect(getBlogPostBySlug('this-slug-does-not-exist')).toBeUndefined();
  });

  test('getAllBlogSlugs returns all slugs', () => {
    const slugs = getAllBlogSlugs();
    expect(slugs.length).toBe(blogPosts.length);
    blogPosts.forEach((post) => {
      expect(slugs).toContain(post.slug);
    });
  });

  test('publishedAt is a valid ISO date string', () => {
    blogPosts.forEach((post) => {
      const date = new Date(post.publishedAt);
      expect(date.toString()).not.toBe('Invalid Date');
      // Verify it round-trips as ISO
      expect(date.toISOString()).toBe(post.publishedAt);
    });
  });

  test('metaDescription does not exceed 160 characters', () => {
    blogPosts.forEach((post) => {
      expect(post.metaDescription.length).toBeLessThanOrEqual(160);
    });
  });

  test('each post has a positive reading time', () => {
    blogPosts.forEach((post) => {
      expect(post.readingTime).toBeGreaterThan(0);
    });
  });
});

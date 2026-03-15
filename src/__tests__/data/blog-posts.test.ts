import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog-posts';

describe('Blog Posts Data', () => {
  test('should have exactly 5 blog posts', () => {
    expect(blogPosts).toHaveLength(5);
  });

  test('each post should have required fields', () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.metaDescription).toBeTruthy();
      expect(post.metaDescription.length).toBeLessThanOrEqual(160);
      expect(post.excerpt).toBeTruthy();
      expect(post.content).toBeTruthy();
      expect(post.author).toBeTruthy();
      expect(post.publishedAt).toBeTruthy();
      expect(post.tags.length).toBeGreaterThan(0);
      expect(post.readingTime).toBeGreaterThan(0);
    });
  });

  test('all slugs should be unique', () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test('slugs should be URL-safe', () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/);
    });
  });

  test('getBlogPostBySlug returns correct post', () => {
    const post = getBlogPostBySlug(blogPosts[0].slug);
    expect(post).toBeDefined();
    expect(post?.title).toBe(blogPosts[0].title);
  });

  test('getBlogPostBySlug returns undefined for invalid slug', () => {
    expect(getBlogPostBySlug('nonexistent-slug')).toBeUndefined();
  });

  test('getAllBlogSlugs returns all slugs', () => {
    const slugs = getAllBlogSlugs();
    expect(slugs).toHaveLength(5);
    expect(slugs).toContain(blogPosts[0].slug);
  });

  test('publishedAt dates are valid ISO strings', () => {
    blogPosts.forEach((post) => {
      const date = new Date(post.publishedAt);
      expect(date.toString()).not.toBe('Invalid Date');
    });
  });
});

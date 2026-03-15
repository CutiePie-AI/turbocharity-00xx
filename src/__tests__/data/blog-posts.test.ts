import { blogPosts, BlogPost } from '@/data/blog-posts'

describe('blog posts data', () => {
  it('has at least 8 entries', () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(8)
  })

  it('each post has required fields', () => {
    blogPosts.forEach((post: BlogPost) => {
      expect(post).toHaveProperty('slug')
      expect(post).toHaveProperty('title')
      expect(post).toHaveProperty('excerpt')
      expect(post).toHaveProperty('content')
      expect(post).toHaveProperty('author')

      expect(typeof post.slug).toBe('string')
      expect(typeof post.title).toBe('string')
      expect(typeof post.excerpt).toBe('string')
      expect(typeof post.content).toBe('string')
      expect(typeof post.author).toBe('string')

      expect(post.slug.length).toBeGreaterThan(0)
      expect(post.title.length).toBeGreaterThan(0)
      expect(post.excerpt.length).toBeGreaterThan(0)
      expect(post.content.length).toBeGreaterThan(0)
      expect(post.author.length).toBeGreaterThan(0)
    })
  })

  it('has no duplicate slugs', () => {
    const slugs = blogPosts.map((post) => post.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('has at least one featured post', () => {
    const featuredPosts = blogPosts.filter((post) => post.featured === true)
    expect(featuredPosts.length).toBeGreaterThanOrEqual(1)
  })

  it('each post has a valid date string', () => {
    blogPosts.forEach((post) => {
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })
  })
})

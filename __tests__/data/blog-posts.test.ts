import { blogPosts, BlogPost } from '@/data/blog-posts'

describe('blog posts data', () => {
  it('has at least 8 entries', () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(8)
  })

  it('each post has required fields', () => {
    const requiredFields: (keyof BlogPost)[] = [
      'slug',
      'title',
      'excerpt',
      'content',
      'author',
    ]

    for (const post of blogPosts) {
      for (const field of requiredFields) {
        expect(post[field]).toBeDefined()
        expect((post[field] as string).length).toBeGreaterThan(0)
      }
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = blogPosts.map((p) => p.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('has at least one featured post', () => {
    const featuredPosts = blogPosts.filter((p) => p.featured === true)
    expect(featuredPosts.length).toBeGreaterThanOrEqual(1)
  })
})

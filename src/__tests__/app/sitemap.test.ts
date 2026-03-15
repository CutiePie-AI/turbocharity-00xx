import sitemap from '@/app/sitemap'
import { blogPosts } from '@/data/blog-posts'

describe('sitemap()', () => {
  const entries = sitemap()

  it('returns an array', () => {
    expect(Array.isArray(entries)).toBe(true)
    expect(entries.length).toBeGreaterThan(0)
  })

  it('contains the root URL', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://turbocharity.com')
  })

  it('contains the /blog route', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://turbocharity.com/blog')
  })

  it('contains the /faq route', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://turbocharity.com/faq')
  })

  it('contains the /resources route', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://turbocharity.com/resources')
  })

  it('contains the /states route', () => {
    const urls = entries.map((e) => e.url)
    expect(urls).toContain('https://turbocharity.com/states')
  })

  it('contains individual blog post routes', () => {
    const urls = entries.map((e) => e.url)
    // Check that at least one blog slug is present
    expect(blogPosts.length).toBeGreaterThan(0)
    const firstBlogUrl = `https://turbocharity.com/blog/${blogPosts[0].slug}`
    expect(urls).toContain(firstBlogUrl)

    // Verify all blog posts are included
    for (const post of blogPosts) {
      expect(urls).toContain(`https://turbocharity.com/blog/${post.slug}`)
    }
  })

  it('all entries have url, lastModified, changeFrequency, and priority', () => {
    for (const entry of entries) {
      expect(entry).toHaveProperty('url')
      expect(typeof entry.url).toBe('string')
      expect(entry.url.length).toBeGreaterThan(0)

      expect(entry).toHaveProperty('lastModified')
      expect(entry.lastModified).toBeDefined()

      expect(entry).toHaveProperty('changeFrequency')
      expect(typeof entry.changeFrequency).toBe('string')
      expect(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).toContain(
        entry.changeFrequency
      )

      expect(entry).toHaveProperty('priority')
      expect(typeof entry.priority).toBe('number')
      expect(entry.priority).toBeGreaterThanOrEqual(0)
      expect(entry.priority).toBeLessThanOrEqual(1)
    }
  })

  it('has correct priority for the root URL', () => {
    const root = entries.find((e) => e.url === 'https://turbocharity.com')
    expect(root).toBeDefined()
    expect(root!.priority).toBe(1.0)
  })

  it('contains state routes', () => {
    const urls = entries.map((e) => e.url)
    const stateUrls = urls.filter((u) => u.match(/\/states\/[a-z-]+$/))
    expect(stateUrls.length).toBeGreaterThan(0)
  })
})

import { render, screen } from '@testing-library/react'
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts'
import BlogPostPage, {
  generateStaticParams,
  generateMetadata,
} from '@/app/blog/[slug]/page'

// Mock next/navigation
const mockNotFound = jest.fn()
jest.mock('next/navigation', () => ({
  notFound: () => {
    mockNotFound()
    // Throw to mimic Next.js notFound() behavior and halt rendering
    throw new Error('NEXT_NOT_FOUND')
  },
}))

// Mock next/link to render a plain anchor tag
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }
})

// Mock next/image to render a plain img tag
jest.mock('next/image', () => {
  return function MockImage(props: Record<string, unknown>) {
    // next/image uses fill as a boolean prop; convert to standard img attributes
    const { fill, ...rest } = props
    return <img {...rest} />
  }
})

beforeEach(() => {
  mockNotFound.mockClear()
})

// ─── generateStaticParams ───────────────────────────────────────────────────

describe('generateStaticParams', () => {
  it('returns an array of slug objects for every blog post', () => {
    const params = generateStaticParams()
    expect(params).toHaveLength(blogPosts.length)
  })

  it('each item contains the correct slug string', () => {
    const params = generateStaticParams()
    const slugs = params.map((p) => p.slug)
    for (const post of blogPosts) {
      expect(slugs).toContain(post.slug)
    }
  })

  it('returns objects matching { slug: string } shape', () => {
    const params = generateStaticParams()
    for (const param of params) {
      expect(param).toHaveProperty('slug')
      expect(typeof param.slug).toBe('string')
    }
  })
})

// ─── generateMetadata ───────────────────────────────────────────────────────

describe('generateMetadata', () => {
  it('returns proper metadata for a valid slug', () => {
    const firstPost = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: firstPost.slug } })

    expect(metadata.title).toContain(firstPost.title)
    expect(metadata.description).toBe(firstPost.metaDescription)
  })

  it('includes openGraph data for a valid slug', () => {
    const firstPost = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: firstPost.slug } })

    expect(metadata.openGraph).toBeDefined()
    const og = metadata.openGraph as Record<string, unknown>
    expect(og.title).toBe(firstPost.title)
    expect(og.type).toBe('article')
  })

  it('includes twitter card metadata for a valid slug', () => {
    const firstPost = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: firstPost.slug } })

    expect(metadata.twitter).toBeDefined()
    const tw = metadata.twitter as Record<string, unknown>
    expect(tw.card).toBe('summary_large_image')
    expect(tw.title).toBe(firstPost.title)
  })

  it('includes canonical URL in alternates', () => {
    const firstPost = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: firstPost.slug } })

    expect(metadata.alternates).toBeDefined()
    const alts = metadata.alternates as Record<string, unknown>
    expect(alts.canonical).toContain(`/blog/${firstPost.slug}`)
  })

  it('returns fallback metadata for an invalid slug', () => {
    const metadata = generateMetadata({
      params: { slug: 'this-slug-does-not-exist' },
    })

    expect(metadata.title).toContain('Post Not Found')
  })

  it('returns distinct metadata for different posts', () => {
    const meta1 = generateMetadata({ params: { slug: blogPosts[0].slug } })
    const meta2 = generateMetadata({ params: { slug: blogPosts[1].slug } })

    expect(meta1.title).not.toBe(meta2.title)
    expect(meta1.description).not.toBe(meta2.description)
  })
})

// ─── BlogPostPage component rendering ──────────────────────────────────────

describe('BlogPostPage component', () => {
  const validPost = blogPosts[0]

  it('renders the article heading for a valid slug', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(validPost.title)
  })

  it('renders the article element', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    expect(document.querySelector('article')).toBeInTheDocument()
  })

  it('displays the post category badge', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    expect(screen.getByText(validPost.category)).toBeInTheDocument()
  })

  it('displays the post excerpt', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    expect(screen.getByText(validPost.excerpt)).toBeInTheDocument()
  })

  it('displays the post author', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    expect(screen.getByText(validPost.author)).toBeInTheDocument()
  })

  it('displays reading time', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    expect(
      screen.getByText(`${validPost.readingTime} min read`)
    ).toBeInTheDocument()
  })

  it('renders post tags', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    for (const tag of validPost.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
  })

  it('renders a "Back to all articles" link pointing to /blog', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    const backLink = screen.getByText('Back to all articles')
    expect(backLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('renders breadcrumb navigation with Home, Blog, and post title', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    const nav = screen.getByRole('navigation', { name: /breadcrumb/i })
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    // Blog breadcrumb link
    const blogLink = screen.getByText('Blog')
    expect(blogLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('renders the related articles section', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    expect(
      screen.getByRole('heading', { name: /Related Articles/i })
    ).toBeInTheDocument()
  })

  it('calls notFound for a slug that does not exist', () => {
    expect(() => {
      render(<BlogPostPage params={{ slug: 'nonexistent-slug-xyz' }} />)
    }).toThrow('NEXT_NOT_FOUND')

    expect(mockNotFound).toHaveBeenCalled()
  })

  it('renders HTML content from the post', () => {
    render(<BlogPostPage params={{ slug: validPost.slug }} />)
    // The blog content container should exist with dangerouslySetInnerHTML
    const contentDiv = document.querySelector('.blog-content')
    expect(contentDiv).toBeInTheDocument()
    // Verify some content from the first post is rendered
    expect(contentDiv?.innerHTML).toBeTruthy()
  })
})

// ─── Cross-post rendering ───────────────────────────────────────────────────

describe('BlogPostPage renders multiple posts correctly', () => {
  it('renders the second blog post correctly', () => {
    const secondPost = blogPosts[1]
    render(<BlogPostPage params={{ slug: secondPost.slug }} />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(secondPost.title)
    expect(screen.getByText(secondPost.excerpt)).toBeInTheDocument()
  })

  it('renders the last blog post correctly', () => {
    const lastPost = blogPosts[blogPosts.length - 1]
    render(<BlogPostPage params={{ slug: lastPost.slug }} />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(lastPost.title)
  })
})

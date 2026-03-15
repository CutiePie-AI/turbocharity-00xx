import { render, screen } from '@testing-library/react'
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts'

const mockNotFound = jest.fn()
jest.mock('next/navigation', () => ({
  notFound: (...args: unknown[]) => {
    mockNotFound(...args)
    // Throw to stop execution, mimicking Next.js notFound behavior
    throw new Error('NEXT_NOT_FOUND')
  },
}))

jest.mock('@/components/StructuredData', () => {
  return function MockStructuredData() {
    return <script data-testid="structured-data" />
  }
})

jest.mock('@/components/Breadcrumb', () => {
  return function MockBreadcrumb({ items }: { items: { label: string; href?: string }[] }) {
    return (
      <nav data-testid="breadcrumb">
        {items.map((item) => (
          <span key={item.label}>{item.label}</span>
        ))}
      </nav>
    )
  }
})

jest.mock('@/components/Container', () => {
  return function MockContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={className}>{children}</div>
  }
})

jest.mock('@/components/ShareButtons', () => {
  return function MockShareButtons({ url, title }: { url: string; title: string }) {
    return (
      <div data-testid="share-buttons" data-url={url} data-title={title}>
        Share
      </div>
    )
  }
})

import { generateStaticParams, generateMetadata } from '@/app/blog/[slug]/page'
import BlogPostPage from '@/app/blog/[slug]/page'

describe('Blog detail page – generateStaticParams', () => {
  it('returns an array of slug objects for every blog post', () => {
    const params = generateStaticParams()
    expect(params).toHaveLength(blogPosts.length)
  })

  it('each entry contains a slug string', () => {
    const params = generateStaticParams()
    for (const param of params) {
      expect(typeof param.slug).toBe('string')
      expect(param.slug.length).toBeGreaterThan(0)
    }
  })

  it('includes every known blog slug', () => {
    const params = generateStaticParams()
    const slugs = params.map((p: { slug: string }) => p.slug)
    for (const post of blogPosts) {
      expect(slugs).toContain(post.slug)
    }
  })
})

describe('Blog detail page – generateMetadata', () => {
  it('returns correct metadata for a valid slug', () => {
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
    expect(og.description).toBe(firstPost.metaDescription)
    expect(og.type).toBe('article')
  })

  it('includes twitter card data for a valid slug', () => {
    const firstPost = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: firstPost.slug } })

    expect(metadata.twitter).toBeDefined()
    const tw = metadata.twitter as Record<string, unknown>
    expect(tw.card).toBe('summary_large_image')
    expect(tw.title).toBe(firstPost.title)
  })

  it('includes canonical URL for a valid slug', () => {
    const firstPost = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: firstPost.slug } })

    const alternates = metadata.alternates as Record<string, unknown>
    expect(alternates.canonical).toContain(`/blog/${firstPost.slug}`)
  })

  it('returns fallback metadata for an invalid slug', () => {
    const metadata = generateMetadata({ params: { slug: 'non-existent-post-slug' } })

    expect(metadata.title).toContain('Post Not Found')
    expect(metadata.description).toBe('The requested blog post could not be found.')
  })
})

describe('Blog detail page – component rendering', () => {
  beforeEach(() => {
    mockNotFound.mockClear()
  })

  it('renders article content for a valid slug', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    // Title should be present as H1
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(firstPost.title)
  })

  it('displays the post author', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    expect(screen.getByText(firstPost.author)).toBeInTheDocument()
  })

  it('displays the post category', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    expect(screen.getByText(firstPost.category)).toBeInTheDocument()
  })

  it('displays reading time', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    expect(screen.getByText(`${firstPost.readingTime} min read`)).toBeInTheDocument()
  })

  it('renders the post excerpt', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    expect(screen.getByText(firstPost.excerpt)).toBeInTheDocument()
  })

  it('renders tags', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    for (const tag of firstPost.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
  })

  it('renders breadcrumb with post title', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders share buttons', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    expect(screen.getByTestId('share-buttons')).toBeInTheDocument()
  })

  it('renders a "Back to all articles" link to /blog', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    const backLink = screen.getByText('Back to all articles')
    expect(backLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('renders related articles section', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    expect(
      screen.getByRole('heading', { name: /Related Articles/i })
    ).toBeInTheDocument()
  })

  it('calls notFound for an invalid slug', () => {
    expect(() => {
      render(<BlogPostPage params={{ slug: 'this-slug-does-not-exist' }} />)
    }).toThrow('NEXT_NOT_FOUND')

    expect(mockNotFound).toHaveBeenCalled()
  })

  it('renders structured data scripts', () => {
    const firstPost = blogPosts[0]
    render(<BlogPostPage params={{ slug: firstPost.slug }} />)

    // Two StructuredData components are rendered: article + breadcrumb
    const scripts = screen.getAllByTestId('structured-data')
    expect(scripts.length).toBe(2)
  })

  it('renders different posts correctly', () => {
    // Test with a different post to ensure it's not hard-coded
    const secondPost = blogPosts[1]
    render(<BlogPostPage params={{ slug: secondPost.slug }} />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(secondPost.title)
    expect(screen.getByText(secondPost.excerpt)).toBeInTheDocument()
  })
})

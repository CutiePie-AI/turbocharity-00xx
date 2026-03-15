import { render, screen } from '@testing-library/react'
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts'

const mockNotFound = jest.fn()

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: (...args: unknown[]) => mockNotFound(...args),
  useRouter: jest.fn(() => ({ push: jest.fn(), back: jest.fn() })),
  usePathname: jest.fn(() => '/blog/test'),
}))

// Mock next/link
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

// Mock next/image
jest.mock('next/image', () => {
  return function MockImage(props: Record<string, unknown>) {
    return <img alt={props.alt as string} src={props.src as string} />
  }
})

// Mock StructuredData
jest.mock('@/components/StructuredData', () => {
  return function MockStructuredData() {
    return <script data-testid="structured-data" />
  }
})

// Mock Breadcrumb
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

// Mock Container
jest.mock('@/components/Container', () => {
  return function MockContainer({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) {
    return <div className={className}>{children}</div>
  }
})

// Mock ShareButtons
jest.mock('@/components/ShareButtons', () => {
  return function MockShareButtons({ url, title }: { url: string; title: string }) {
    return (
      <div data-testid="share-buttons" data-url={url} data-title={title}>
        Share buttons
      </div>
    )
  }
})

import BlogPostPage, {
  generateStaticParams,
  generateMetadata,
} from '@/app/blog/[slug]/page'

describe('Blog Detail Page — generateStaticParams', () => {
  it('returns all blog post slugs', () => {
    const params = generateStaticParams()
    expect(params).toHaveLength(blogPosts.length)

    for (const post of blogPosts) {
      expect(params).toContainEqual({ slug: post.slug })
    }
  })

  it('returns objects with a slug property', () => {
    const params = generateStaticParams()
    for (const param of params) {
      expect(param).toHaveProperty('slug')
      expect(typeof param.slug).toBe('string')
    }
  })
})

describe('Blog Detail Page — generateMetadata', () => {
  it('returns proper metadata for a valid slug', () => {
    const post = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: post.slug } })

    expect(metadata.title).toContain(post.title)
    expect(metadata.description).toBe(post.metaDescription)
  })

  it('includes open graph metadata for a valid slug', () => {
    const post = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: post.slug } })

    expect(metadata.openGraph).toBeDefined()
    if (metadata.openGraph) {
      expect(metadata.openGraph.title).toBe(post.title)
      expect(metadata.openGraph.description).toBe(post.metaDescription)
    }
  })

  it('includes twitter metadata for a valid slug', () => {
    const post = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: post.slug } })

    expect(metadata.twitter).toBeDefined()
    if (metadata.twitter) {
      expect(metadata.twitter.title).toBe(post.title)
    }
  })

  it('returns fallback metadata for an invalid slug', () => {
    const metadata = generateMetadata({ params: { slug: 'nonexistent-slug-xyz' } })

    expect(metadata.title).toContain('Post Not Found')
    expect(metadata.description).toContain('could not be found')
  })

  it('includes canonical URL for a valid slug', () => {
    const post = blogPosts[0]
    const metadata = generateMetadata({ params: { slug: post.slug } })

    expect(metadata.alternates?.canonical).toContain(`/blog/${post.slug}`)
  })
})

describe('Blog Detail Page — Component Rendering', () => {
  beforeEach(() => {
    mockNotFound.mockClear()
  })

  it('renders the article with valid slug', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(post.title)
  })

  it('renders the post excerpt', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    expect(screen.getByText(post.excerpt)).toBeInTheDocument()
  })

  it('renders the post category badge', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    expect(screen.getByText(post.category)).toBeInTheDocument()
  })

  it('renders the author name', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    expect(screen.getByText(post.author)).toBeInTheDocument()
  })

  it('renders tags for the post', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    for (const tag of post.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
  })

  it('renders breadcrumb navigation', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders share buttons', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    expect(screen.getByTestId('share-buttons')).toBeInTheDocument()
  })

  it('renders the back-to-blog link', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    const backLink = screen.getByText('Back to all articles')
    expect(backLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('renders structured data scripts', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    const scripts = screen.getAllByTestId('structured-data')
    expect(scripts.length).toBeGreaterThanOrEqual(1)
  })

  it('calls notFound for an invalid slug', () => {
    render(<BlogPostPage params={{ slug: 'totally-nonexistent-slug' }} />)

    expect(mockNotFound).toHaveBeenCalled()
  })

  it('renders related articles section', () => {
    const post = blogPosts[0]
    render(<BlogPostPage params={{ slug: post.slug }} />)

    expect(screen.getByText('Related Articles')).toBeInTheDocument()
  })
})

describe('Blog Data — getBlogPostBySlug', () => {
  it('returns the correct post for a valid slug', () => {
    const post = getBlogPostBySlug(blogPosts[0].slug)
    expect(post).toBeDefined()
    expect(post?.title).toBe(blogPosts[0].title)
  })

  it('returns undefined for an invalid slug', () => {
    const post = getBlogPostBySlug('this-slug-does-not-exist')
    expect(post).toBeUndefined()
  })

  it('each blog post has required fields', () => {
    for (const post of blogPosts) {
      expect(post.slug).toBeTruthy()
      expect(post.title).toBeTruthy()
      expect(post.metaDescription).toBeTruthy()
      expect(post.excerpt).toBeTruthy()
      expect(post.content).toBeTruthy()
      expect(post.author).toBeTruthy()
      expect(post.publishedAt).toBeTruthy()
      expect(post.updatedAt).toBeTruthy()
      expect(post.category).toBeTruthy()
      expect(Array.isArray(post.tags)).toBe(true)
      expect(typeof post.readingTime).toBe('number')
    }
  })
})

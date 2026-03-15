import { render, screen } from '@testing-library/react'
import { blogPosts } from '@/data/blog-posts'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
  useRouter: jest.fn(() => ({ push: jest.fn(), back: jest.fn() })),
  usePathname: jest.fn(() => '/blog'),
}))

// Mock next/link to render a plain anchor
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

// Mock StructuredData — server component, renders a script tag
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

// Mock BlogListClient — it's a client component; render post titles for assertions
jest.mock('@/components/BlogListClient', () => {
  return function MockBlogListClient({
    posts,
  }: {
    posts: { slug: string; title: string }[]
  }) {
    return (
      <div data-testid="blog-list-client">
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        ))}
      </div>
    )
  }
})

import BlogPage from '@/app/blog/page'

describe('Blog Listing Page', () => {
  it('renders without crashing', () => {
    render(<BlogPage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the H1 heading', () => {
    render(<BlogPage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('TurboCharity Blog')
  })

  it('renders blog post titles on the page', () => {
    render(<BlogPage />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders blog post links pointing to /blog/[slug]', () => {
    render(<BlogPage />)
    for (const post of blogPosts) {
      const link = screen.getByText(post.title).closest('a')
      expect(link).toHaveAttribute('href', `/blog/${post.slug}`)
    }
  })

  it('has proper page structure with breadcrumb', () => {
    render(<BlogPage />)
    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders the BlogListClient component', () => {
    render(<BlogPage />)
    expect(screen.getByTestId('blog-list-client')).toBeInTheDocument()
  })

  it('displays the article count', () => {
    render(<BlogPage />)
    expect(screen.getByText(String(blogPosts.length))).toBeInTheDocument()
  })

  it('renders the bottom CTA section', () => {
    render(<BlogPage />)
    const ctaHeading = screen.getByRole('heading', {
      level: 2,
      name: /Ready to Start Your Nonprofit/i,
    })
    expect(ctaHeading).toBeInTheDocument()
    expect(screen.getByText('Get Started Free')).toBeInTheDocument()
  })

  it('renders the "Insights & Guides" badge', () => {
    render(<BlogPage />)
    expect(screen.getByText(/Insights/)).toBeInTheDocument()
  })
})

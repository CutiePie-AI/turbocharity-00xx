import { render, screen } from '@testing-library/react'
import { blogPosts } from '@/data/blog-posts'

// Mock child components that have complex dependencies
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

jest.mock('@/components/BlogListClient', () => {
  return function MockBlogListClient({ posts }: { posts: { slug: string; title: string }[] }) {
    return (
      <div data-testid="blog-list">
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        ))}
      </div>
    )
  }
})

jest.mock('@/lib/seo', () => ({
  SITE_CONFIG: {
    siteUrl: 'https://turbocharity.com',
    siteName: 'TurboCharity',
    twitterHandle: '@turbocharity',
  },
}))

import BlogPage from '@/app/blog/page'

describe('Blog listing page', () => {
  it('renders without crashing', () => {
    render(<BlogPage />)
  })

  it('renders the H1 heading', () => {
    render(<BlogPage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('TurboCharity Blog')
  })

  it('displays blog post titles on the page', () => {
    render(<BlogPage />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('has blog post links that point to /blog/[slug]', () => {
    render(<BlogPage />)
    for (const post of blogPosts) {
      const link = screen.getByText(post.title).closest('a')
      expect(link).toHaveAttribute('href', `/blog/${post.slug}`)
    }
  })

  it('has proper page structure with main element', () => {
    render(<BlogPage />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  it('renders breadcrumb navigation', () => {
    render(<BlogPage />)
    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders the blog list component', () => {
    render(<BlogPage />)
    expect(screen.getByTestId('blog-list')).toBeInTheDocument()
  })

  it('shows the article count stat', () => {
    render(<BlogPage />)
    expect(screen.getByText(String(blogPosts.length))).toBeInTheDocument()
  })

  it('renders the bottom CTA section', () => {
    render(<BlogPage />)
    expect(
      screen.getByRole('heading', { name: /Ready to Start Your Nonprofit/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Get Started Free')).toBeInTheDocument()
  })

  it('links the CTA to the get-started page', () => {
    render(<BlogPage />)
    const ctaLink = screen.getByText('Get Started Free').closest('a')
    expect(ctaLink).toHaveAttribute('href', '/get-started')
  })

  it('renders structured data', () => {
    render(<BlogPage />)
    expect(screen.getByTestId('structured-data')).toBeInTheDocument()
  })
})

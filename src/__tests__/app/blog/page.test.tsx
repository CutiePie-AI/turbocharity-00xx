import { render, screen } from '@testing-library/react'
import { blogPosts } from '@/data/blog-posts'
import BlogPage from '@/app/blog/page'

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

describe('Blog Listing Page', () => {
  it('renders without crashing', () => {
    render(<BlogPage />)
    expect(document.querySelector('main')).toBeInTheDocument()
  })

  it('displays the H1 heading', () => {
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

  it('displays the correct number of articles count', () => {
    render(<BlogPage />)
    const countText = screen.getByText(
      new RegExp(`Showing ${blogPosts.length} of ${blogPosts.length} article`)
    )
    expect(countText).toBeInTheDocument()
  })

  it('has proper page structure with main and sections', () => {
    render(<BlogPage />)
    const main = document.querySelector('main')
    expect(main).toBeInTheDocument()
    // The page contains section elements for hero, blog list, and bottom CTA
    const sections = main?.querySelectorAll('section')
    expect(sections?.length).toBeGreaterThanOrEqual(2)
  })

  it('displays the Insights & Guides badge', () => {
    render(<BlogPage />)
    expect(screen.getByText('Insights & Guides')).toBeInTheDocument()
  })

  it('displays the bottom CTA section', () => {
    render(<BlogPage />)
    expect(
      screen.getByRole('heading', { name: /Ready to Start Your Nonprofit/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Get Started Free')).toBeInTheDocument()
  })

  it('renders breadcrumb navigation', () => {
    render(<BlogPage />)
    const nav = screen.getByRole('navigation', { name: /breadcrumb/i })
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('displays article categories for each post', () => {
    render(<BlogPage />)
    const uniqueCategories = Array.from(new Set(blogPosts.map((p) => p.category)))
    for (const category of uniqueCategories) {
      expect(screen.getAllByText(category).length).toBeGreaterThanOrEqual(1)
    }
  })
})

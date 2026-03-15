import { render, screen } from '@testing-library/react'
import { RESOURCES } from '@/lib/resources'
import ResourcesPage from '@/app/resources/page'

// Mock next/link to render a plain anchor
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Resources Page', () => {
  it('renders without crashing', () => {
    render(<ResourcesPage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the h1 heading', () => {
    render(<ResourcesPage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toContain('Nonprofit Resources')
  })

  it('renders resource titles from the data', () => {
    render(<ResourcesPage />)
    for (const resource of RESOURCES) {
      expect(screen.getByText(resource.title)).toBeInTheDocument()
    }
  })

  it('renders resource excerpts from the data', () => {
    render(<ResourcesPage />)
    for (const resource of RESOURCES) {
      expect(screen.getByText(resource.excerpt)).toBeInTheDocument()
    }
  })

  it('renders resource read times', () => {
    render(<ResourcesPage />)
    for (const resource of RESOURCES) {
      expect(screen.getByText(resource.readTime)).toBeInTheDocument()
    }
  })

  it('contains structured data script tag with CollectionPage type', () => {
    const { container } = render(<ResourcesPage />)
    const scriptTag = container.querySelector('script[type="application/ld+json"]')
    expect(scriptTag).toBeInTheDocument()

    const jsonLd = JSON.parse(scriptTag!.textContent || '{}')
    expect(jsonLd['@type']).toBe('CollectionPage')
    expect(jsonLd['@context']).toBe('https://schema.org')
  })

  it('structured data contains all resources as list items', () => {
    const { container } = render(<ResourcesPage />)
    const scriptTag = container.querySelector('script[type="application/ld+json"]')
    const jsonLd = JSON.parse(scriptTag!.textContent || '{}')

    expect(jsonLd.mainEntity['@type']).toBe('ItemList')
    expect(jsonLd.mainEntity.numberOfItems).toBe(RESOURCES.length)
    expect(jsonLd.mainEntity.itemListElement).toHaveLength(RESOURCES.length)
  })

  it('renders breadcrumb navigation', () => {
    render(<ResourcesPage />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
  })

  it('renders category sections', () => {
    render(<ResourcesPage />)
    const categories = ['Getting Started', 'Legal', 'Financial', 'Growth']
    for (const category of categories) {
      expect(screen.getByRole('heading', { name: category })).toBeInTheDocument()
    }
  })

  it('renders "Read guide" links for each resource', () => {
    render(<ResourcesPage />)
    const readGuideLinks = screen.getAllByText('Read guide')
    expect(readGuideLinks.length).toBe(RESOURCES.length)
  })
})

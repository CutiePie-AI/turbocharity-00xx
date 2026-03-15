import { render, screen } from '@testing-library/react'
import { FAQ_ITEMS } from '@/data/faqs'
import FAQPage from '@/app/faq/page'

// Mock next/link to render a plain anchor
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('FAQ Page', () => {
  it('renders without crashing', () => {
    render(<FAQPage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the h1 heading "Frequently Asked Questions"', () => {
    render(<FAQPage />)
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /frequently asked questions/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders all FAQ questions from the data', () => {
    render(<FAQPage />)
    for (const faq of FAQ_ITEMS) {
      expect(screen.getByText(faq.question)).toBeInTheDocument()
    }
  })

  it('renders at least one FAQ item', () => {
    render(<FAQPage />)
    expect(FAQ_ITEMS.length).toBeGreaterThan(0)
    expect(screen.getByText(FAQ_ITEMS[0].question)).toBeInTheDocument()
  })

  it('contains structured data script tag with FAQPage type', () => {
    const { container } = render(<FAQPage />)
    const scriptTag = container.querySelector('script[type="application/ld+json"]')
    expect(scriptTag).toBeInTheDocument()

    const jsonLd = JSON.parse(scriptTag!.textContent || '{}')
    expect(jsonLd['@type']).toBe('FAQPage')
    expect(jsonLd['@context']).toBe('https://schema.org')
  })

  it('structured data contains all FAQ items as Question entries', () => {
    const { container } = render(<FAQPage />)
    const scriptTag = container.querySelector('script[type="application/ld+json"]')
    const jsonLd = JSON.parse(scriptTag!.textContent || '{}')

    expect(jsonLd.mainEntity).toHaveLength(FAQ_ITEMS.length)
    for (let i = 0; i < FAQ_ITEMS.length; i++) {
      expect(jsonLd.mainEntity[i]['@type']).toBe('Question')
      expect(jsonLd.mainEntity[i].name).toBe(FAQ_ITEMS[i].question)
      expect(jsonLd.mainEntity[i].acceptedAnswer['@type']).toBe('Answer')
      expect(jsonLd.mainEntity[i].acceptedAnswer.text).toBe(FAQ_ITEMS[i].answer)
    }
  })

  it('renders breadcrumb navigation', () => {
    render(<FAQPage />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })
})

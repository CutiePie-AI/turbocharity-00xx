import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders logo text TurboCharity', () => {
    render(<Header />)
    expect(screen.getByText('Turbo')).toBeInTheDocument()
    expect(screen.getByText('Charity')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Header />)
    const expectedLinks = ['How It Works', 'Features', 'Pricing', 'FAQ']
    expectedLinks.forEach((linkText) => {
      const links = screen.getAllByText(linkText)
      expect(links.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders CTA button Start Free', () => {
    render(<Header />)
    const ctaButtons = screen.getAllByText('Start Free')
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Log In button', () => {
    render(<Header />)
    expect(screen.getByText('Log In')).toBeInTheDocument()
  })

  it('renders mobile menu toggle button', () => {
    render(<Header />)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })
})

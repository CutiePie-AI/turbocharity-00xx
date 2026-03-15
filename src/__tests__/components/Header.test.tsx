import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders logo text TurboCharity', () => {
    render(<Header />)
    expect(screen.getByText(/Turbo/)).toBeInTheDocument()
    expect(screen.getByText('Charity')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Header />)
    const expectedLinks = ['How It Works', 'States', 'Resources', 'Pricing']
    for (const linkText of expectedLinks) {
      expect(screen.getAllByText(linkText).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders CTA button Start Free', () => {
    render(<Header />)
    const startButtons = screen.getAllByText('Start Free')
    expect(startButtons.length).toBeGreaterThanOrEqual(1)
  })
})

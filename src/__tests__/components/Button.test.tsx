import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant styles', () => {
    render(<Button variant="primary">Primary</Button>)
    const button = screen.getByText('Primary')
    expect(button.className).toContain('bg-primary')
  })

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByText('Secondary')
    expect(button.className).toContain('border-primary')
  })

  it('renders as link when href provided', () => {
    render(<Button href="/test">Link Button</Button>)
    const link = screen.getByText('Link Button')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders as button element when no href provided', () => {
    render(<Button>Regular Button</Button>)
    const button = screen.getByText('Regular Button')
    expect(button.tagName).toBe('BUTTON')
  })
})

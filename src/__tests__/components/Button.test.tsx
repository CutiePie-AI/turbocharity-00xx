import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    render(<Button>Primary</Button>)
    const button = screen.getByText('Primary')
    expect(button.className).toContain('bg-primary')
    expect(button.className).toContain('text-white')
  })

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByText('Secondary')
    expect(button.className).toContain('bg-secondary')
    expect(button.className).toContain('text-white')
  })

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByText('Outline')
    expect(button.className).toContain('border-2')
    expect(button.className).toContain('border-primary')
  })

  it('applies ghost variant styles', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByText('Ghost')
    expect(button.className).toContain('text-gray-600')
  })

  it('renders as a link when href is provided', () => {
    render(<Button href="/test">Link Button</Button>)
    const link = screen.getByText('Link Button')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders as a button element when no href is provided', () => {
    render(<Button>Regular Button</Button>)
    const button = screen.getByText('Regular Button')
    expect(button.tagName).toBe('BUTTON')
  })

  it('applies size styles', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByText('Large')
    expect(button.className).toContain('px-8')
    expect(button.className).toContain('py-4')
  })
})

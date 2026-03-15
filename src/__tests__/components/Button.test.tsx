import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button', () => {
  it('renders with text content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant classes by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button.className).toContain('bg-primary');
  });

  it('applies primary variant classes when explicit', () => {
    render(<Button variant="primary">Primary Explicit</Button>);
    const button = screen.getByText('Primary Explicit');
    expect(button.className).toContain('bg-primary');
  });

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button.className).toContain('bg-secondary');
  });

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText('Outline');
    expect(button.className).toContain('border-primary');
  });

  it('applies ghost variant styles', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByText('Ghost');
    expect(button.className).toContain('text-gray-600');
  });

  it('renders as anchor element when href is provided', () => {
    render(<Button href="/test">Link Button</Button>);
    const link = screen.getByText('Link Button');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders as button element when no href provided', () => {
    render(<Button>Regular Button</Button>);
    const button = screen.getByText('Regular Button');
    expect(button.tagName).toBe('BUTTON');
  });

  it('passes disabled state to button element', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const button = screen.getByText('Clickable');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>No Click</Button>);
    const button = screen.getByText('No Click');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies size classes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByText('Small').className).toContain('px-4');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByText('Large').className).toContain('px-8');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByText('Custom');
    expect(button.className).toContain('custom-class');
  });
});

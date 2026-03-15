import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

// Mock next/link to render as a plain anchor tag
jest.mock('next/link', () => {
  const MockLink = ({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return { __esModule: true, default: MockLink };
});

describe('Header', () => {
  it('renders logo text TurboCharity', () => {
    render(<Header />);
    expect(screen.getByText(/Turbo/)).toBeInTheDocument();
    expect(screen.getByText('Charity')).toBeInTheDocument();
  });

  it('renders all desktop nav links', () => {
    render(<Header />);
    const expectedLinks = ['States', 'Blog', 'Resources', 'About'];
    for (const linkText of expectedLinks) {
      expect(screen.getAllByText(linkText).length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders CTA buttons', () => {
    render(<Header />);
    const startButtons = screen.getAllByText('Start Free');
    expect(startButtons.length).toBeGreaterThanOrEqual(1);

    const loginButtons = screen.getAllByText('Log In');
    expect(loginButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the logo as a link to homepage', () => {
    render(<Header />);
    const logoLink = screen.getByText(/Turbo/).closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('nav links point to correct paths', () => {
    render(<Header />);
    const statesLinks = screen.getAllByText('States');
    const statesAnchor = statesLinks[0].closest('a');
    expect(statesAnchor).toHaveAttribute('href', '/states');

    const blogLinks = screen.getAllByText('Blog');
    const blogAnchor = blogLinks[0].closest('a');
    expect(blogAnchor).toHaveAttribute('href', '/blog');
  });

  it('renders the mobile menu toggle button', () => {
    render(<Header />);
    const toggleButton = screen.getByLabelText('Toggle menu');
    expect(toggleButton).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { RESOURCES } from '@/lib/resources';

/* ─── Mocks ───────────────────────────────────────────────────────────── */

// Mock next/link to render a plain anchor
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

// Dynamically import the page component (must come after mocks)
import ResourcesPage from '@/app/resources/page';

/* ─── Tests ───────────────────────────────────────────────────────────── */

describe('Resources Page', () => {
  it('renders without crashing', () => {
    render(<ResourcesPage />);
  });

  it('has an h1 heading present', () => {
    render(<ResourcesPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch(/nonprofit resources/i);
  });

  it('renders all resource titles from the data', () => {
    render(<ResourcesPage />);
    for (const resource of RESOURCES) {
      const matches = screen.getAllByText(resource.title);
      expect(matches.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders resource excerpts from the data', () => {
    render(<ResourcesPage />);
    for (const resource of RESOURCES) {
      expect(screen.getByText(resource.excerpt)).toBeInTheDocument();
    }
  });

  it('renders resource categories as headings', () => {
    render(<ResourcesPage />);
    const categoryNames = ['Getting Started', 'Legal', 'Financial', 'Growth'];
    for (const category of categoryNames) {
      const headings = screen.getAllByText(category);
      expect(headings.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders links pointing to individual resource pages', () => {
    render(<ResourcesPage />);
    for (const resource of RESOURCES) {
      const links = screen.getAllByRole('link');
      const resourceLink = links.find(
        (link) => link.getAttribute('href') === `/resources/${resource.slug}`
      );
      expect(resourceLink).toBeDefined();
    }
  });

  it('displays the read time for each resource', () => {
    render(<ResourcesPage />);
    for (const resource of RESOURCES) {
      expect(screen.getByText(resource.readTime)).toBeInTheDocument();
    }
  });

  it('contains a structured data script tag with CollectionPage type', () => {
    const { container } = render(<ResourcesPage />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    expect(scripts.length).toBeGreaterThanOrEqual(1);

    let foundCollectionPage = false;
    scripts.forEach((script) => {
      const json = JSON.parse(script.textContent || '{}');
      if (json['@type'] === 'CollectionPage') {
        foundCollectionPage = true;
        expect(json.mainEntity).toBeDefined();
        expect(json.mainEntity.numberOfItems).toBe(RESOURCES.length);
      }
    });
    expect(foundCollectionPage).toBe(true);
  });
});

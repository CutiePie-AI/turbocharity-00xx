import { render, screen } from '@testing-library/react';
import { RESOURCES } from '@/lib/resources';
import ResourcesPage from '@/app/resources/page';

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

describe('Resources Page', () => {
  it('renders without crashing', () => {
    render(<ResourcesPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has an H1 heading', () => {
    render(<ResourcesPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('H1 contains "Nonprofit Resources"', () => {
    render(<ResourcesPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Nonprofit Resources');
  });

  it('displays all resource titles from the data', () => {
    render(<ResourcesPage />);

    RESOURCES.forEach((resource) => {
      expect(screen.getByText(resource.title)).toBeInTheDocument();
    });
  });

  it('displays all resource excerpts from the data', () => {
    render(<ResourcesPage />);

    RESOURCES.forEach((resource) => {
      expect(screen.getByText(resource.excerpt)).toBeInTheDocument();
    });
  });

  it('displays resource read times', () => {
    render(<ResourcesPage />);

    RESOURCES.forEach((resource) => {
      expect(screen.getByText(resource.readTime)).toBeInTheDocument();
    });
  });

  it('contains a structured data script tag with CollectionPage type', () => {
    const { container } = render(<ResourcesPage />);
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(scriptTag).toBeInTheDocument();

    const jsonLd = JSON.parse(scriptTag!.textContent || '');
    expect(jsonLd['@type']).toBe('CollectionPage');
    expect(jsonLd['@context']).toBe('https://schema.org');
  });

  it('structured data includes all resource items in ItemList', () => {
    const { container } = render(<ResourcesPage />);
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]'
    );
    const jsonLd = JSON.parse(scriptTag!.textContent || '');

    expect(jsonLd.mainEntity['@type']).toBe('ItemList');
    expect(jsonLd.mainEntity.numberOfItems).toBe(RESOURCES.length);
    expect(jsonLd.mainEntity.itemListElement).toHaveLength(RESOURCES.length);
  });

  it('renders links to individual resource pages', () => {
    render(<ResourcesPage />);

    RESOURCES.forEach((resource) => {
      const link = screen.getByText(resource.title).closest('a');
      expect(link).toHaveAttribute('href', `/resources/${resource.slug}`);
    });
  });

  it('renders a breadcrumb navigation', () => {
    render(<ResourcesPage />);
    expect(screen.getByLabelText('breadcrumb')).toBeInTheDocument();
  });

  it('renders category section headings', () => {
    render(<ResourcesPage />);

    const categories = ['Getting Started', 'Legal', 'Financial', 'Growth'];
    categories.forEach((category) => {
      expect(
        screen.getByRole('heading', { level: 2, name: category })
      ).toBeInTheDocument();
    });
  });
});

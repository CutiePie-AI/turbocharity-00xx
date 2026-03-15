import { render, screen } from '@testing-library/react';
import { FAQ_ITEMS } from '@/data/faqs';
import FaqPage from '@/app/faq/page';

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

describe('FAQ Page', () => {
  it('renders without crashing', () => {
    render(<FaqPage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has an H1 with "Frequently Asked Questions"', () => {
    render(<FaqPage />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /frequently asked questions/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('displays all FAQ questions from the data', () => {
    render(<FaqPage />);

    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('displays all FAQ answers from the data', () => {
    render(<FaqPage />);

    FAQ_ITEMS.forEach((item) => {
      expect(screen.getByText(item.answer)).toBeInTheDocument();
    });
  });

  it('contains a structured data script tag with FAQPage type', () => {
    const { container } = render(<FaqPage />);
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(scriptTag).toBeInTheDocument();

    const jsonLd = JSON.parse(scriptTag!.textContent || '');
    expect(jsonLd['@type']).toBe('FAQPage');
    expect(jsonLd['@context']).toBe('https://schema.org');
  });

  it('structured data includes all FAQ items as Question entities', () => {
    const { container } = render(<FaqPage />);
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]'
    );
    const jsonLd = JSON.parse(scriptTag!.textContent || '');

    expect(jsonLd.mainEntity).toHaveLength(FAQ_ITEMS.length);

    jsonLd.mainEntity.forEach(
      (entity: { '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }, index: number) => {
        expect(entity['@type']).toBe('Question');
        expect(entity.name).toBe(FAQ_ITEMS[index].question);
        expect(entity.acceptedAnswer['@type']).toBe('Answer');
        expect(entity.acceptedAnswer.text).toBe(FAQ_ITEMS[index].answer);
      }
    );
  });

  it('renders a breadcrumb navigation', () => {
    render(<FaqPage />);
    expect(screen.getByLabelText('breadcrumb')).toBeInTheDocument();
  });
});

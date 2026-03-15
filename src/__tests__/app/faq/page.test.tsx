import { render, screen } from '@testing-library/react';
import { FAQ_ITEMS } from '@/data/faqs';

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
import FaqPage from '@/app/faq/page';

/* ─── Tests ───────────────────────────────────────────────────────────── */

describe('FAQ Page', () => {
  it('renders without crashing', () => {
    render(<FaqPage />);
  });

  it('has an h1 with "Frequently Asked Questions"', () => {
    render(<FaqPage />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /frequently asked questions/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all FAQ questions from the data', () => {
    render(<FaqPage />);
    for (const faq of FAQ_ITEMS) {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    }
  });

  it('renders all FAQ answers from the data', () => {
    render(<FaqPage />);
    for (const faq of FAQ_ITEMS) {
      expect(screen.getByText(faq.answer)).toBeInTheDocument();
    }
  });

  it('contains a structured data script tag with FAQPage type', () => {
    const { container } = render(<FaqPage />);
    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    expect(scripts.length).toBeGreaterThanOrEqual(1);

    let foundFaqPage = false;
    scripts.forEach((script) => {
      const json = JSON.parse(script.textContent || '{}');
      if (json['@type'] === 'FAQPage') {
        foundFaqPage = true;
        expect(json['@context']).toBe('https://schema.org');
        expect(json.mainEntity).toBeDefined();
        expect(Array.isArray(json.mainEntity)).toBe(true);
        expect(json.mainEntity.length).toBe(FAQ_ITEMS.length);
      }
    });
    expect(foundFaqPage).toBe(true);
  });

  it('structured data includes all questions and answers', () => {
    const { container } = render(<FaqPage />);
    const script = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(script).not.toBeNull();

    const json = JSON.parse(script!.textContent || '{}');
    const questions = json.mainEntity as Array<{
      '@type': string;
      name: string;
      acceptedAnswer: { '@type': string; text: string };
    }>;

    for (const faq of FAQ_ITEMS) {
      const match = questions.find((q) => q.name === faq.question);
      expect(match).toBeDefined();
      expect(match!['@type']).toBe('Question');
      expect(match!.acceptedAnswer.text).toBe(faq.answer);
      expect(match!.acceptedAnswer['@type']).toBe('Answer');
    }
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '@/components/Accordion';
import type { AccordionItem } from '@/components/Accordion';

const mockItems: AccordionItem[] = [
  {
    question: 'What is TurboCharity?',
    answer: 'TurboCharity is an AI-powered nonprofit creation platform.',
  },
  {
    question: 'How long does it take?',
    answer: 'Most users complete the process in under 30 minutes.',
  },
  {
    question: 'Do I need a lawyer?',
    answer: 'No, our platform generates all required legal documents automatically.',
  },
];

describe('Accordion', () => {
  it('renders all items', () => {
    render(<Accordion items={mockItems} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('answers are hidden by default', () => {
    render(<Accordion items={mockItems} />);

    mockItems.forEach((item) => {
      const answer = screen.getByText(item.answer);
      expect(answer.closest('[role="region"]')).toHaveAttribute('hidden');
    });
  });

  it('clicking a question expands the item and reveals its answer', () => {
    render(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);
    fireEvent.click(firstQuestion);

    const firstAnswer = screen.getByText(mockItems[0].answer);
    expect(firstAnswer.closest('[role="region"]')).not.toHaveAttribute('hidden');
  });

  it('clicking an open question collapses it', () => {
    render(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);

    // Open the accordion
    fireEvent.click(firstQuestion);
    const answerPanel = screen.getByText(mockItems[0].answer).closest('[role="region"]');
    expect(answerPanel).not.toHaveAttribute('hidden');

    // Close it again
    fireEvent.click(firstQuestion);
    expect(answerPanel).toHaveAttribute('hidden');
  });

  it('only one item is open at a time — opening one closes the other', () => {
    render(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);
    const secondQuestion = screen.getByText(mockItems[1].question);

    // Open first
    fireEvent.click(firstQuestion);
    const firstPanel = screen.getByText(mockItems[0].answer).closest('[role="region"]');
    expect(firstPanel).not.toHaveAttribute('hidden');

    // Open second - first should close
    fireEvent.click(secondQuestion);
    const secondPanel = screen.getByText(mockItems[1].answer).closest('[role="region"]');
    expect(secondPanel).not.toHaveAttribute('hidden');
    expect(firstPanel).toHaveAttribute('hidden');
  });

  it('sets aria-expanded correctly on buttons', () => {
    render(<Accordion items={mockItems} />);

    const buttons = screen.getAllByRole('button');
    // All should start as not expanded
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    // Click first button
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders with empty items array without crashing', () => {
    render(<Accordion items={[]} />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });
});

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
  it('renders all questions', () => {
    render(<Accordion items={mockItems} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('answers are hidden by default', () => {
    render(<Accordion items={mockItems} />);

    mockItems.forEach((item) => {
      const answer = screen.getByText(item.answer);
      // The answer's parent panel should be aria-hidden
      expect(answer.closest('[role="region"]')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('clicking a question reveals its answer', () => {
    render(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);
    fireEvent.click(firstQuestion);

    const firstAnswer = screen.getByText(mockItems[0].answer);
    expect(firstAnswer.closest('[role="region"]')).toHaveAttribute('aria-hidden', 'false');
  });

  it('clicking an open question hides its answer', () => {
    render(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);

    // Open the accordion
    fireEvent.click(firstQuestion);
    const answerPanel = screen.getByText(mockItems[0].answer).closest('[role="region"]');
    expect(answerPanel).toHaveAttribute('aria-hidden', 'false');

    // Close it again
    fireEvent.click(firstQuestion);
    expect(answerPanel).toHaveAttribute('aria-hidden', 'true');
  });

  it('opening one question closes the previously open one', () => {
    render(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);
    const secondQuestion = screen.getByText(mockItems[1].question);

    // Open first
    fireEvent.click(firstQuestion);
    const firstPanel = screen.getByText(mockItems[0].answer).closest('[role="region"]');
    expect(firstPanel).toHaveAttribute('aria-hidden', 'false');

    // Open second - first should close
    fireEvent.click(secondQuestion);
    const secondPanel = screen.getByText(mockItems[1].answer).closest('[role="region"]');
    expect(secondPanel).toHaveAttribute('aria-hidden', 'false');
    expect(firstPanel).toHaveAttribute('aria-hidden', 'true');
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
});

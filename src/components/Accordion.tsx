'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

function AccordionPanel({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${index}`}
        id={`accordion-header-${index}`}
      >
        <span className="text-base font-semibold text-dark sm:text-lg">
          {item.question}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <div
        id={`accordion-panel-${index}`}
        role="region"
        aria-labelledby={`accordion-header-${index}`}
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="pb-5 leading-relaxed text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
}

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndices((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          if (!allowMultiple) {
            next.clear();
          }
          next.add(index);
        }
        return next;
      });
    },
    [allowMultiple]
  );

  return (
    <div className="divide-y-0">
      {items.map((item, index) => (
        <AccordionPanel
          key={index}
          item={item}
          isOpen={openIndices.has(index)}
          onToggle={() => handleToggle(index)}
          index={index}
        />
      ))}
    </div>
  );
}

'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
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
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${index}`}
      >
        <span className="text-lg font-semibold text-gray-900">
          {item.question}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
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
        aria-hidden={!isOpen}
        style={{ maxHeight: `${maxHeight}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pb-5">
          <p className="leading-relaxed text-gray-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <div className="divide-y-0 rounded-xl border border-gray-200 bg-white px-6">
      {items.map((item, idx) => (
        <AccordionPanel
          key={idx}
          item={item}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
          index={idx}
        />
      ))}
    </div>
  );
}

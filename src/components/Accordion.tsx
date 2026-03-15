"use client";

import { useState } from "react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="text-lg font-semibold text-dark">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
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
              id={`accordion-panel-${idx}`}
              role="region"
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "mt-3 max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="leading-relaxed text-gray-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

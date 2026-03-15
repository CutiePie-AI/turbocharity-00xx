"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/faqs";

const TOP_FAQS = FAQ_ITEMS.slice(0, 5);

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need to know about starting a nonprofit with
            TurboCharity.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-gray-200">
          {TOP_FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
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
                  id={`faq-panel-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "mt-3 max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/faq"
            className="inline-flex items-center gap-1 font-semibold text-[#2563EB] transition-colors hover:text-blue-700"
          >
            View All FAQs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

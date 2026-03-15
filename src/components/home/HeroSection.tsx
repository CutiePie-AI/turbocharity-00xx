"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

const TRUST_ITEMS = [
  "50-state coverage",
  "IRS-compliant documents",
  "No legal fees required",
] as const;

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#10B981]/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        {/* Badge */}
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <span className="mb-6 inline-block rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-4 py-1.5 text-sm font-medium text-[#2563EB]">
            AI-Powered Nonprofit Creation
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-dark sm:text-5xl lg:text-6xl transition-all duration-700 delay-150 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          From Idea to 501(c)(3) in{" "}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
            Days, Not Months
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl transition-all duration-700 delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          AI-powered nonprofit creation that walks you through state-specific
          incorporation, generates compliant bylaws, and auto-fills IRS Form
          1023-EZ — saving you $2,000–$5,000 in legal fees.
        </p>

        {/* CTA buttons */}
        <div
          className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-[450ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <Button
            size="lg"
            variant="primary"
            href="/get-started"
            className="text-base font-bold shadow-xl shadow-blue-500/25"
          >
            Start Free &rarr;
          </Button>
          <Button
            size="lg"
            variant="outline"
            href="#how-it-works"
          >
            See How It Works
          </Button>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 transition-all duration-700 delay-[600ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-gray-600"
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-[#10B981]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle, Mail } from 'lucide-react';

interface NewsletterFormProps {
  /** Override heading text */
  heading?: string;
  /** Override description text */
  description?: string;
  /** Additional CSS classes for the wrapper */
  className?: string;
}

export default function NewsletterForm({
  heading = 'Get Your Free Nonprofit Startup Checklist',
  description = 'Join thousands of founders who used our step-by-step checklist to launch their nonprofit. We\u2019ll send it straight to your inbox.',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // In production, this would call an API endpoint
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-2xl bg-[#10B981]/10 p-8 text-center ${className}`.trim()}
        role="status"
      >
        <CheckCircle className="mx-auto h-12 w-12 text-[#10B981]" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">
          You&apos;re all set!
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Check your inbox for the nonprofit startup checklist. Welcome to the TurboCharity
          community!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-gray-50 p-8 ${className}`.trim()}
    >
      <div className="mx-auto max-w-xl text-center">
        <Mail className="mx-auto h-10 w-10 text-[#2563EB]" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold text-[#0F172A]">{heading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder-gray-400 transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            aria-describedby={error ? 'newsletter-error' : undefined}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#059669] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
          >
            Subscribe
          </button>
        </form>

        {error && (
          <p id="newsletter-error" className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <p className="mt-3 text-xs text-gray-500">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle, Mail } from 'lucide-react';

interface NewsletterFormProps {
  /** Override the default heading */
  heading?: string;
  /** Override the default description */
  description?: string;
  /** Additional CSS classes for the wrapper */
  className?: string;
}

export default function NewsletterForm({
  heading = 'Get Your Free Nonprofit Startup Checklist',
  description = 'Join thousands of founders who used our step-by-step checklist to launch their nonprofit the right way. We\u2019ll also send you the latest guides and resources.',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // In production this would call an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`rounded-2xl bg-[#10B981]/10 p-8 text-center ${className}`.trim()}
      >
        <CheckCircle className="mx-auto h-12 w-12 text-[#10B981]" />
        <h3 className="mt-4 text-xl font-semibold text-[#0F172A]">
          You&rsquo;re on the list!
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Check your inbox for the nonprofit startup checklist.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl bg-gray-50 p-8 ${className}`.trim()}
    >
      <div className="mx-auto max-w-lg text-center">
        <Mail className="mx-auto h-10 w-10 text-[#2563EB]" />
        <h3 className="mt-4 text-xl font-semibold text-[#0F172A] sm:text-2xl">
          {heading}
        </h3>
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
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-gray-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#059669] hover:shadow-md active:scale-[0.98]"
          >
            Get the Checklist
          </button>
        </form>

        {error && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

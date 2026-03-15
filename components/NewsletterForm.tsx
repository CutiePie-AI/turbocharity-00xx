'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle, Mail } from 'lucide-react';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm = ({ className = '' }: NewsletterFormProps) => {
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

    // Simulate submission
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section
      className={`rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1e293b] px-6 py-12 text-center sm:px-12 ${className}`.trim()}
    >
      {submitted ? (
        <div className="flex flex-col items-center gap-4">
          <CheckCircle className="h-12 w-12 text-[#10B981]" />
          <h3 className="text-2xl font-bold text-white">You&apos;re on the list!</h3>
          <p className="max-w-md text-gray-300">
            Check your inbox for the free Nonprofit Startup Checklist. We&apos;ll also send you
            tips and guides to help launch your nonprofit.
          </p>
          <button
            type="button"
            className="mt-2 text-sm text-[#10B981] underline underline-offset-2 hover:text-[#34d399]"
            onClick={() => setSubmitted(false)}
          >
            Submit another email
          </button>
        </div>
      ) : (
        <>
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/20">
            <Mail className="h-7 w-7 text-[#10B981]" />
          </div>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Get Your Free Nonprofit Startup Checklist
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-gray-400">
            Join thousands of founders who used our step-by-step checklist to launch their
            nonprofit. No spam, unsubscribe anytime.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
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
              className="flex-1 rounded-lg border border-gray-700 bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669] active:bg-[#047857]"
            >
              Get the Checklist
            </button>
          </form>

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </>
      )}
    </section>
  );
};

export default NewsletterForm;

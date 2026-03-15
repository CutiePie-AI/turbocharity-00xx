'use client';

import { useState, useCallback, FormEvent } from 'react';
import Button from '@/components/Button';
import { submitNewsletterLead } from '@/app/actions/leads';
import { isValidEmail, sanitizeField } from '@/lib/validation';

// ─── Constants ───────────────────────────────────────────────────────────────

const INTEREST_CATEGORIES = [
  'Formation & Compliance',
  'Fundraising',
  'Board Governance',
  'Tax & Finance',
  'Marketing & Outreach',
] as const;

// ─── Types ───────────────────────────────────────────────────────────────────

interface NewsletterSignupProps {
  className?: string;
  dark?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function NewsletterSignup({
  className = '',
  dark = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const toggleCategory = useCallback((cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }
    if (!isValidEmail(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const result = await submitNewsletterLead({
        email: sanitizeField(trimmed, 254),
        source: 'newsletter_signup',
        categories: categories.length > 0 ? categories : undefined,
      });

      if (result.success) {
        setSuccessMessage(result.message);
        setSubmitted(true);
      } else {
        setError(result.message);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // ─── Conditional styles ────────────────────────────────────────────────

  const wrapperCls = dark
    ? 'border-gray-700 bg-gray-800/80'
    : 'border-blue-100 bg-gradient-to-br from-blue-50 to-white';

  const headingCls = dark ? 'text-white' : 'text-dark';
  const subCls = dark ? 'text-gray-300' : 'text-gray-500';

  const emailInputCls = [
    'flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary',
    error
      ? 'border-red-400 ring-1 ring-red-400'
      : dark
        ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'
        : 'border-gray-300 bg-white text-dark placeholder-gray-400',
  ].join(' ');

  // ─── Success state ─────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border p-8 text-center ${wrapperCls} ${className}`}
      >
        <p className="text-4xl" role="img" aria-label="celebration">
          🎉
        </p>
        <p className={`mt-3 text-xl font-bold ${headingCls}`}>
          {successMessage || "You're subscribed!"}
        </p>
        <p className={`mt-2 text-sm ${subCls}`}>
          Get Weekly Nonprofit Tips delivered to your inbox.
        </p>
      </div>
    );
  }

  // ─── Form ──────────────────────────────────────────────────────────────

  return (
    <div
      id="newsletter"
      className={`rounded-2xl border p-8 ${wrapperCls} ${className}`}
    >
      <h3 className={`text-2xl font-bold tracking-tight ${headingCls}`}>
        Get Weekly Nonprofit Tips
      </h3>
      <p className={`mt-2 text-sm leading-relaxed ${subCls}`}>
        Step-by-step advice, compliance updates, and fundraising strategies
        delivered every Thursday.
      </p>

      {/* Email row */}
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex w-full flex-col gap-3 sm:flex-row"
        noValidate
      >
        <input
          type="email"
          placeholder="Enter your email"
          maxLength={254}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          className={emailInputCls}
          aria-label="Email address"
        />
        <Button type="submit" size="md" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>

      {error && (
        <p className="mt-2 text-sm font-medium text-red-500" role="alert">
          {error}
        </p>
      )}

      {/* Category interest checkboxes (optional) */}
      <fieldset className="mt-5">
        <legend
          className={`text-xs font-semibold uppercase tracking-wider ${subCls}`}
        >
          Topics you&apos;re interested in{' '}
          <span className="font-normal">(optional)</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {INTEREST_CATEGORIES.map((cat) => {
            const isChecked = categories.includes(cat);
            return (
              <label
                key={cat}
                className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  isChecked
                    ? 'border-primary bg-primary/10 text-primary'
                    : dark
                      ? 'border-gray-600 text-gray-300 hover:border-gray-400'
                      : 'border-gray-200 text-gray-500 hover:border-gray-400'
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={() => toggleCategory(cat)}
                />
                {cat}
              </label>
            );
          })}
        </div>
      </fieldset>

      <p className={`mt-4 text-xs ${subCls}`}>
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}

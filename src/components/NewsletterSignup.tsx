'use client';

import { useState, FormEvent, useEffect } from 'react';

const STORAGE_KEY = 'tc_newsletter_email';

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSubmitted(true);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, trimmed);
    } catch {
      // localStorage unavailable
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-xl border border-green-200 bg-green-50 px-6 py-4 text-center ${className}`}
      >
        <p className="font-semibold text-green-800">
          You&apos;re subscribed! Check your inbox for updates.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
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
          className={`flex-1 rounded-lg border px-4 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary-500 ${
            error
              ? 'border-red-400 ring-1 ring-red-400'
              : 'border-gray-300 bg-white text-gray-900 placeholder-gray-400'
          }`}
          aria-label="Email address"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </form>

      {error && (
        <p className="mt-2 text-sm font-medium text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

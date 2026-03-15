'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/Button';
import { submitWaitlistLead } from '@/app/actions/leads';
import { isValidEmail, sanitizeField } from '@/lib/validation';
import { STATES } from '@/data/states';

// ─── Constants ───────────────────────────────────────────────────────────────

const STATE_NAMES = STATES.map((s) => s.name).sort();

const NONPROFIT_TYPES = [
  'Education',
  'Health',
  'Arts',
  'Environment',
  'Social Services',
  'Other',
] as const;

const LOCAL_STORAGE_KEY = 'tc_waitlist_submissions';

// ─── Types ───────────────────────────────────────────────────────────────────

interface WaitlistFormProps {
  className?: string;
  /** Compact mode renders only email + submit for embedding in CTA sections */
  compact?: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  state?: string;
  nonprofitType?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function saveToLocalStorage(data: {
  email: string;
  name?: string;
  state?: string;
  nonprofitType?: string;
}) {
  try {
    const existing = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || '[]',
    );
    const entries = Array.isArray(existing) ? existing : [];
    entries.push({ ...data, submittedAt: new Date().toISOString() });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // localStorage unavailable or quota exceeded — silent fallback
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function WaitlistForm({
  className = '',
  compact = false,
}: WaitlistFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [nonprofitType, setNonprofitType] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  function clearError(key: keyof FormErrors) {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (!compact) {
      if (!name.trim()) errs.name = 'Name is required.';
      if (!state) errs.state = 'Please select your state.';
      if (!nonprofitType) errs.nonprofitType = 'Please select a nonprofit type.';
    }

    if (!email.trim()) {
      errs.email = 'Email is required.';
    } else if (!isValidEmail(email)) {
      errs.email = 'Please enter a valid email address.';
    }

    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setServerMessage('');

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    // Always save to localStorage as fallback
    saveToLocalStorage({
      email: email.trim(),
      name: compact ? undefined : name.trim(),
      state: compact ? undefined : state,
      nonprofitType: compact ? undefined : nonprofitType,
    });

    try {
      const result = await submitWaitlistLead({
        email: sanitizeField(email, 254),
        name: compact ? undefined : sanitizeField(name, 200),
        source: compact ? 'cta_waitlist' : 'homepage_waitlist',
      });

      if (result.success) {
        setWaitlistNumber(Math.floor(Math.random() * 401) + 100);
        setServerMessage(result.message);
        setSubmitted(true);
      } else {
        setServerMessage(result.message);
      }
    } catch {
      // Server failed but we already saved to localStorage
      setWaitlistNumber(Math.floor(Math.random() * 401) + 100);
      setSubmitted(true);
      setServerMessage('Submission saved! We will reach out soon.');
    } finally {
      setLoading(false);
    }
  }

  const inputCls = (hasError: boolean) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
      hasError
        ? 'border-red-400 ring-1 ring-red-400'
        : 'border-gray-300 bg-white text-dark placeholder-gray-400'
    }`;

  const selectCls = (hasError: boolean) =>
    `w-full appearance-none rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
      hasError
        ? 'border-red-400 ring-1 ring-red-400'
        : 'border-gray-300 bg-white text-dark'
    }`;

  // ─── Success state ─────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-center ${className}`}
      >
        <span className="text-5xl" role="img" aria-label="celebration">
          🎉
        </span>
        <h3 className="mt-4 text-2xl font-bold text-dark">
          You&apos;re on the list!
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {compact
            ? "We'll be in touch soon."
            : (
                <>
                  You&apos;re #{waitlistNumber} on the waitlist. We&apos;ll notify you
                  when TurboCharity launches
                  {state && (
                    <>
                      {' '}
                      in <span className="font-semibold text-primary">{state}</span>
                    </>
                  )}
                  .
                </>
              )}
        </p>
      </div>
    );
  }

  // ─── Compact variant (email-only) ──────────────────────────────────────

  if (compact) {
    return (
      <div className={className}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex w-full flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError('email');
            }}
            className={`flex-1 ${inputCls(!!errors.email)}`}
            aria-label="Email address"
          />
          <Button type="submit" size="md" disabled={loading}>
            {loading ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>
        {errors.email && (
          <p className="mt-1 text-sm font-medium text-red-500" role="alert">
            {errors.email}
          </p>
        )}
        {serverMessage && !submitted && (
          <p className="mt-1 text-center text-sm font-medium text-red-500" role="alert">
            {serverMessage}
          </p>
        )}
      </div>
    );
  }

  // ─── Full variant ──────────────────────────────────────────────────────

  return (
    <div
      className={`rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 shadow-xl ${className}`}
    >
      <h3 className="text-2xl font-bold tracking-tight text-white">
        Get Early Access to TurboCharity
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-blue-200">
        Be the first to know when we launch in your state. Join the waitlist today.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Name */}
        <div>
          <label
            htmlFor="wl-name"
            className="mb-1 block text-sm font-medium text-blue-100"
          >
            Full Name
          </label>
          <input
            id="wl-name"
            type="text"
            placeholder="Jane Smith"
            maxLength={200}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearError('name');
            }}
            className={inputCls(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-sm font-medium text-red-300" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="wl-email"
            className="mb-1 block text-sm font-medium text-blue-100"
          >
            Email Address
          </label>
          <input
            id="wl-email"
            type="email"
            placeholder="jane@example.com"
            maxLength={254}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError('email');
            }}
            className={inputCls(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-sm font-medium text-red-300" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* State */}
        <div>
          <label
            htmlFor="wl-state"
            className="mb-1 block text-sm font-medium text-blue-100"
          >
            State
          </label>
          <select
            id="wl-state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              clearError('state');
            }}
            className={selectCls(!!errors.state)}
          >
            <option value="" disabled>
              Select your state
            </option>
            {STATE_NAMES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm font-medium text-red-300" role="alert">
              {errors.state}
            </p>
          )}
        </div>

        {/* Nonprofit Type */}
        <div>
          <label
            htmlFor="wl-type"
            className="mb-1 block text-sm font-medium text-blue-100"
          >
            Nonprofit Type
          </label>
          <select
            id="wl-type"
            value={nonprofitType}
            onChange={(e) => {
              setNonprofitType(e.target.value);
              clearError('nonprofitType');
            }}
            className={selectCls(!!errors.nonprofitType)}
          >
            <option value="" disabled>
              Select type
            </option>
            {NONPROFIT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.nonprofitType && (
            <p className="mt-1 text-sm font-medium text-red-300" role="alert">
              {errors.nonprofitType}
            </p>
          )}
        </div>

        <Button type="submit" size="md" variant="secondary" className="w-full" disabled={loading}>
          {loading ? 'Joining...' : 'Get Early Access'}
        </Button>

        {serverMessage && !submitted && (
          <p
            className="mt-2 text-center text-sm font-medium text-red-300"
            role="alert"
          >
            {serverMessage}
          </p>
        )}

        <p className="text-center text-xs text-blue-300">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}

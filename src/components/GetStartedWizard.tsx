'use client';

import { useState, useCallback, useEffect, FormEvent } from 'react';
import Button from '@/components/Button';
import { STATES } from '@/data/states';
import { isValidEmail, sanitizeField } from '@/lib/validation';
import { submitGetStarted } from '@/app/actions/leads';

// ─── Constants ───────────────────────────────────────────────────────────────

const STEP_LABELS = [
  "What's Your Mission?",
  'Which State?',
  'Your Email',
] as const;

const TOTAL_STEPS = STEP_LABELS.length;

const CATEGORIES = [
  'Education',
  'Health',
  'Environment',
  'Social Services',
  'Arts',
  'Religion',
  'Other',
] as const;

/** 50 states + DC, derived from the canonical STATES array + DC entry. */
const STATE_OPTIONS: Array<{ label: string; value: string }> = [
  ...STATES.map((s) => ({ label: s.name, value: s.name })),
  { label: 'District of Columbia', value: 'District of Columbia' },
].sort((a, b) => a.label.localeCompare(b.label));

const STORAGE_KEY = 'tc_wizard_responses';

// ─── Types ───────────────────────────────────────────────────────────────────

interface WizardData {
  mission: string;
  category: string;
  nonprofitName: string;
  state: string;
  fullName: string;
  email: string;
}

type FieldErrors = Partial<Record<keyof WizardData, string>>;

// ─── Shared style helpers ────────────────────────────────────────────────────

function inputCls(hasError: boolean): string {
  return [
    'w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary',
    hasError
      ? 'border-red-400 ring-1 ring-red-400'
      : 'border-gray-300 bg-white text-dark placeholder-gray-400',
  ].join(' ');
}

function selectCls(hasError: boolean): string {
  return [
    'w-full appearance-none rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary',
    hasError
      ? 'border-red-400 ring-1 ring-red-400'
      : 'border-gray-300 bg-white text-dark',
  ].join(' ');
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1 text-sm font-medium text-red-500" role="alert">
      {msg}
    </p>
  );
}

// ─── localStorage persistence ────────────────────────────────────────────────

function loadWizardData(): Partial<WizardData> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function saveWizardData(data: WizardData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // silent
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function GetStartedWizard() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState<WizardData>({
    mission: '',
    category: '',
    nonprofitName: '',
    state: '',
    fullName: '',
    email: '',
  });

  // Load saved data on mount
  useEffect(() => {
    const saved = loadWizardData();
    if (Object.keys(saved).length > 0) {
      setData((prev) => ({ ...prev, ...saved }));
    }
  }, []);

  /** Update a single field, clear its error, and persist to localStorage. */
  const update = useCallback(
    <K extends keyof WizardData>(key: K, value: WizardData[K]) => {
      setData((prev) => {
        const next = { ...prev, [key]: value };
        saveWizardData(next);
        return next;
      });
      setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    },
    [],
  );

  // ─── Validation per step ─────────────────────────────────────────────────

  const validateStep = useCallback(
    (s: number): FieldErrors => {
      const errs: FieldErrors = {};
      switch (s) {
        case 0:
          if (!data.mission.trim())
            errs.mission = 'Please describe your mission.';
          if (!data.category) errs.category = 'Please select a category.';
          if (!data.nonprofitName.trim())
            errs.nonprofitName = 'Organization name is required.';
          break;
        case 1:
          if (!data.state) errs.state = 'Please select your state.';
          break;
        case 2:
          if (!data.fullName.trim()) errs.fullName = 'Full name is required.';
          if (!data.email.trim()) {
            errs.email = 'Email is required.';
          } else if (!isValidEmail(data.email)) {
            errs.email = 'Please enter a valid email address.';
          }
          break;
      }
      return errs;
    },
    [data],
  );

  // ─── Navigation ──────────────────────────────────────────────────────────

  const goNext = useCallback(() => {
    const errs = validateStep(step);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }, [step, validateStep]);

  const goBack = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  // ─── Submit ──────────────────────────────────────────────────────────────

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      // Validate current step first
      const errs = validateStep(step);
      setErrors(errs);
      if (Object.keys(errs).length > 0) return;

      setServerError('');
      setSubmitting(true);

      // Save final state to localStorage
      saveWizardData(data);

      try {
        const result = await submitGetStarted({
          state: sanitizeField(data.state),
          nonprofitName: sanitizeField(data.nonprofitName, 300),
          mission: sanitizeField(data.mission, 2000),
          category: sanitizeField(data.category),
          fullName: sanitizeField(data.fullName, 200),
          email: sanitizeField(data.email, 254),
          role: 'Founder',
        });

        if (result.success) {
          setSubmitted(true);
        } else {
          setServerError(result.message);
        }
      } catch {
        // Server failed — data is in localStorage
        setSubmitted(true);
      } finally {
        setSubmitting(false);
      }
    },
    [data, step, validateStep],
  );

  // ─── Success state ──────────────────────────────────────────────────────

  if (submitted) {
    const stateSlug = STATES.find((s) => s.name === data.state)?.slug;
    const stateInfo = STATES.find((s) => s.name === data.state);

    return (
      <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 text-center sm:p-12">
        <span className="text-5xl" role="img" aria-label="celebration">
          🎉
        </span>
        <h2 className="mt-4 text-2xl font-bold text-dark sm:text-3xl">
          You&apos;re on your way!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-600">
          Great news! Based on your mission in{' '}
          <span className="font-semibold text-primary">{data.category}</span>,
          we recommend starting your nonprofit in{' '}
          <span className="font-semibold text-primary">{data.state}</span>.
        </p>

        {stateInfo && (
          <div className="mx-auto mt-6 max-w-sm rounded-xl border border-gray-200 bg-white p-5 text-left">
            <h3 className="font-bold text-dark">{stateInfo.name} Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex justify-between">
                <span>Filing Fee</span>
                <span className="font-semibold text-dark">${stateInfo.filingFee}</span>
              </li>
              <li className="flex justify-between">
                <span>Processing Time</span>
                <span className="font-semibold text-dark">{stateInfo.processingTime}</span>
              </li>
              <li className="flex justify-between">
                <span>Online Filing</span>
                <span className="font-semibold text-dark">
                  {stateInfo.onlineFilingAvailable ? 'Yes' : 'No'}
                </span>
              </li>
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {stateSlug && (
            <Button href={`/states/${stateSlug}`} variant="primary" size="md">
              View {data.state} Guide
            </Button>
          )}
          <Button href="/blog" variant="outline" size="md">
            Read Our Guides
          </Button>
        </div>
      </div>
    );
  }

  // ─── Progress bar ────────────────────────────────────────────────────────

  const progressPercent = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8"
    >
      {/* Progress bar */}
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-gray-500">
        <span>
          Step {step + 1} of {TOTAL_STEPS}
        </span>
        <span>{STEP_LABELS[step]}</span>
      </div>
      <div className="mb-8 h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-teal-400 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={step + 1}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
        />
      </div>

      {/* ── Step 0: What's Your Mission? ─────────────────────────────── */}
      {step === 0 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">
            What&apos;s Your Mission?
          </legend>
          <p className="text-sm text-gray-500">
            Tell us about the organization you&apos;re creating.
          </p>

          <div>
            <label
              htmlFor="gs-name"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Organization Name
            </label>
            <input
              id="gs-name"
              type="text"
              placeholder="e.g. Green Future Alliance"
              maxLength={300}
              value={data.nonprofitName}
              onChange={(e) => update('nonprofitName', e.target.value)}
              className={inputCls(!!errors.nonprofitName)}
            />
            <FieldError msg={errors.nonprofitName} />
          </div>

          <div>
            <label
              htmlFor="gs-mission"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Mission Statement
            </label>
            <textarea
              id="gs-mission"
              rows={4}
              placeholder="Describe your nonprofit's purpose and the communities it will serve..."
              maxLength={2000}
              value={data.mission}
              onChange={(e) => update('mission', e.target.value)}
              className={inputCls(!!errors.mission)}
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <FieldError msg={errors.mission} />
              <span>{data.mission.length}/2000</span>
            </div>
          </div>

          <div>
            <label
              htmlFor="gs-category"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Category
            </label>
            <select
              id="gs-category"
              value={data.category}
              onChange={(e) => update('category', e.target.value)}
              className={selectCls(!!errors.category)}
            >
              <option value="" disabled>
                Select a category...
              </option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <FieldError msg={errors.category} />
          </div>
        </fieldset>
      )}

      {/* ── Step 1: Which State? ─────────────────────────────────────── */}
      {step === 1 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">
            Which State?
          </legend>
          <p className="text-sm text-gray-500">
            We&apos;ll tailor your documents to your state&apos;s requirements.
          </p>

          <div>
            <label
              htmlFor="gs-state"
              className="mb-1 block text-sm font-medium text-dark"
            >
              State
            </label>
            <select
              id="gs-state"
              value={data.state}
              onChange={(e) => update('state', e.target.value)}
              className={selectCls(!!errors.state)}
            >
              <option value="" disabled>
                Choose a state...
              </option>
              {STATE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <FieldError msg={errors.state} />
          </div>
        </fieldset>
      )}

      {/* ── Step 2: Your Email ───────────────────────────────────────── */}
      {step === 2 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">
            Your Information
          </legend>
          <p className="text-sm text-gray-500">
            We&apos;ll use this to prepare your filing documents and send your personalized guide.
          </p>

          <div>
            <label
              htmlFor="gs-fullname"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Full Name
            </label>
            <input
              id="gs-fullname"
              type="text"
              placeholder="Jane Smith"
              maxLength={200}
              value={data.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              className={inputCls(!!errors.fullName)}
            />
            <FieldError msg={errors.fullName} />
          </div>

          <div>
            <label
              htmlFor="gs-email"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Email Address
            </label>
            <input
              id="gs-email"
              type="email"
              placeholder="jane@example.com"
              maxLength={254}
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              className={inputCls(!!errors.email)}
            />
            <FieldError msg={errors.email} />
          </div>

          {serverError && (
            <p
              className="text-center text-sm font-medium text-red-500"
              role="alert"
            >
              {serverError}
            </p>
          )}
        </fieldset>
      )}

      {/* ── Navigation buttons ─────────────────────────────────────────── */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-1 rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS - 1 ? (
          <Button type="button" size="md" onClick={goNext}>
            Next
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        ) : (
          <Button type="submit" size="md" variant="secondary" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Get My Personalized Guide'}
          </Button>
        )}
      </div>
    </form>
  );
}

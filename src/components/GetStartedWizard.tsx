'use client';

import { useState, useCallback, FormEvent } from 'react';
import Button from '@/components/Button';
import { STATES } from '@/data/states';
import { isValidEmail, isValidPhone, sanitizeField } from '@/lib/validation';
import { submitGetStarted } from '@/app/actions/leads';

// ─── Constants ───────────────────────────────────────────────────────────────

const STEP_LABELS = [
  'Select Your State',
  'About Your Nonprofit',
  'Your Information',
  'Review & Submit',
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

const ROLES = ['Founder', 'Board Member', 'Volunteer'] as const;

/** 50 states + DC, derived from the canonical STATES array + DC entry. */
const STATE_OPTIONS: Array<{ label: string; value: string }> = [
  ...STATES.map((s) => ({ label: s.name, value: s.name })),
  { label: 'District of Columbia', value: 'District of Columbia' },
].sort((a, b) => a.label.localeCompare(b.label));

// ─── Types ───────────────────────────────────────────────────────────────────

interface WizardData {
  state: string;
  nonprofitName: string;
  mission: string;
  category: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
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

// ─── Component ───────────────────────────────────────────────────────────────

export default function GetStartedWizard() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState<WizardData>({
    state: '',
    nonprofitName: '',
    mission: '',
    category: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
  });

  /** Update a single field and clear its error. */
  const update = useCallback(
    <K extends keyof WizardData>(key: K, value: WizardData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
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
          if (!data.state) errs.state = 'Please select your state.';
          break;
        case 1:
          if (!data.nonprofitName.trim())
            errs.nonprofitName = 'Organization name is required.';
          if (!data.mission.trim())
            errs.mission = 'Please describe your mission.';
          if (!data.category) errs.category = 'Please select a category.';
          break;
        case 2:
          if (!data.fullName.trim()) errs.fullName = 'Full name is required.';
          if (!data.email.trim()) {
            errs.email = 'Email is required.';
          } else if (!isValidEmail(data.email)) {
            errs.email = 'Please enter a valid email address.';
          }
          if (data.phone.trim() && !isValidPhone(data.phone)) {
            errs.phone = 'Please enter a valid US phone number.';
          }
          if (!data.role) errs.role = 'Please select your role.';
          break;
        // Step 3 (review) has no new fields to validate
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
      setServerError('');
      setSubmitting(true);

      try {
        const result = await submitGetStarted({
          state: sanitizeField(data.state),
          nonprofitName: sanitizeField(data.nonprofitName, 300),
          mission: sanitizeField(data.mission, 2000),
          category: sanitizeField(data.category),
          fullName: sanitizeField(data.fullName, 200),
          email: sanitizeField(data.email, 254),
          phone: data.phone ? sanitizeField(data.phone, 30) : undefined,
          role: sanitizeField(data.role),
        });

        if (result.success) {
          setSubmitted(true);
        } else {
          setServerError(result.message);
        }
      } catch {
        setServerError('Something went wrong. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
    [data],
  );

  // ─── Success state ──────────────────────────────────────────────────────

  if (submitted) {
    const stateSlug = STATES.find((s) => s.name === data.state)?.slug;

    return (
      <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 text-center sm:p-12">
        <span className="text-5xl" role="img" aria-label="celebration">
          🎉
        </span>
        <h2 className="mt-4 text-2xl font-bold text-dark sm:text-3xl">
          You&apos;re on your way!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-600">
          We&apos;ve received your information for{' '}
          <span className="font-semibold text-primary">
            {sanitizeField(data.nonprofitName)}
          </span>{' '}
          in{' '}
          <span className="font-semibold text-primary">
            {sanitizeField(data.state)}
          </span>
          . Here&apos;s what happens next:
        </p>

        <ol className="mx-auto mt-6 max-w-sm space-y-3 text-left text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              1
            </span>
            Check your email for a confirmation message.
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              2
            </span>
            Review your state-specific filing requirements.
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              3
            </span>
            We&apos;ll begin generating your documents.
          </li>
        </ol>

        {stateSlug && (
          <div className="mt-8">
            <Button href={`/states/${stateSlug}`} variant="primary" size="md">
              View {data.state} Guide
            </Button>
          </div>
        )}
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

      {/* ── Step 0: State ──────────────────────────────────────────────── */}
      {step === 0 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">
            Select Your State
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

      {/* ── Step 1: Nonprofit info ─────────────────────────────────────── */}
      {step === 1 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">
            About Your Nonprofit
          </legend>
          <p className="text-sm text-gray-500">
            Tell us about the organisation you&apos;re creating.
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

      {/* ── Step 2: Personal info ──────────────────────────────────────── */}
      {step === 2 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">
            Your Information
          </legend>
          <p className="text-sm text-gray-500">
            We&apos;ll use this to prepare your filing documents.
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

          <div>
            <label
              htmlFor="gs-phone"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Phone{' '}
              <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              id="gs-phone"
              type="tel"
              placeholder="(555) 123-4567"
              maxLength={30}
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={inputCls(!!errors.phone)}
            />
            <FieldError msg={errors.phone} />
          </div>

          <div>
            <label
              htmlFor="gs-role"
              className="mb-1 block text-sm font-medium text-dark"
            >
              Your Role
            </label>
            <select
              id="gs-role"
              value={data.role}
              onChange={(e) => update('role', e.target.value)}
              className={selectCls(!!errors.role)}
            >
              <option value="" disabled>
                Select your role...
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <FieldError msg={errors.role} />
          </div>
        </fieldset>
      )}

      {/* ── Step 3: Review ─────────────────────────────────────────────── */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-dark">Review & Submit</h3>
            <p className="text-sm text-gray-500">
              Please confirm your information is correct.
            </p>
          </div>

          <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white">
            <ReviewRow label="State" value={data.state} />
            <ReviewRow label="Organization" value={data.nonprofitName} />
            <ReviewRow
              label="Mission"
              value={
                data.mission.length > 200
                  ? data.mission.slice(0, 200) + '...'
                  : data.mission
              }
            />
            <ReviewRow label="Category" value={data.category} />
            <ReviewRow label="Full Name" value={data.fullName} />
            <ReviewRow label="Email" value={data.email} />
            {data.phone && <ReviewRow label="Phone" value={data.phone} />}
            <ReviewRow label="Role" value={data.role} />
          </div>

          {serverError && (
            <p
              className="text-center text-sm font-medium text-red-500"
              role="alert"
            >
              {serverError}
            </p>
          )}
        </div>
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
            {submitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        )}
      </div>
    </form>
  );
}

// ─── Sub-component ───────────────────────────────────────────────────────────

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-start sm:gap-4">
      <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400">
        {label}
      </span>
      <span className="text-sm text-dark">{value}</span>
    </div>
  );
}

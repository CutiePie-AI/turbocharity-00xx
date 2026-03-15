"use client";

import { useState, FormEvent, useCallback } from "react";
import Button from "@/components/Button";
import { STATES } from "@/data/states";

/* ─── Constants ────────────────────────────────────────────────────────────── */

const STEPS = [
  "Select Your State",
  "About Your Nonprofit",
  "Your Information",
  "Review & Submit",
] as const;

const CATEGORIES = [
  "Education",
  "Health",
  "Environment",
  "Social Services",
  "Arts",
  "Religion",
  "Other",
] as const;

const ROLES = ["Founder", "Board Member", "Volunteer"] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const US_STATES_WITH_DC = [
  ...STATES.map((s) => ({ name: s.name, abbreviation: s.abbreviation, slug: s.slug })),
  ...(STATES.find((s) => s.name === "District of Columbia")
    ? []
    : [{ name: "District of Columbia", abbreviation: "DC", slug: "district-of-columbia" }]),
].sort((a, b) => a.name.localeCompare(b.name));

/* ─── Form Data Type ───────────────────────────────────────────────────────── */

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

interface FieldErrors {
  [key: string]: string | undefined;
}

/* ─── Wizard Component ─────────────────────────────────────────────────────── */

export default function GetStartedWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const [data, setData] = useState<WizardData>({
    state: "",
    nonprofitName: "",
    mission: "",
    category: "",
    fullName: "",
    email: "",
    phone: "",
    role: "",
  });

  const update = useCallback(
    (field: keyof WizardData, value: string) => {
      setData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors],
  );

  /* ── Validation per step ───────────────────────────────────────────────── */

  function validateStep(s: number): FieldErrors {
    const errs: FieldErrors = {};

    if (s === 0) {
      if (!data.state) errs.state = "Please select your state.";
    }

    if (s === 1) {
      if (!data.nonprofitName.trim()) errs.nonprofitName = "Nonprofit name is required.";
      if (!data.mission.trim()) errs.mission = "Mission statement is required.";
      if (!data.category) errs.category = "Please select a category.";
    }

    if (s === 2) {
      if (!data.fullName.trim()) errs.fullName = "Full name is required.";
      if (!data.email.trim()) {
        errs.email = "Email is required.";
      } else if (!EMAIL_REGEX.test(data.email)) {
        errs.email = "Please enter a valid email address.";
      }
      if (!data.role) errs.role = "Please select your role.";
    }

    return errs;
  }

  function handleNext() {
    const errs = validateStep(step);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  }

  function handleBack() {
    setStep((prev) => Math.max(prev - 1, 0));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Validate all steps just in case
    for (let s = 0; s < STEPS.length - 1; s++) {
      const errs = validateStep(s);
      if (Object.keys(errs).length > 0) {
        setStep(s);
        setErrors(errs);
        return;
      }
    }

    // Placeholder: log data (will be replaced with API call)
    console.log("Get Started form submitted:", data);

    // Store in localStorage as simple persistence
    try {
      const existing = JSON.parse(localStorage.getItem("tc_get_started") || "[]");
      existing.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem("tc_get_started", JSON.stringify(existing));
    } catch {
      // silently handle storage errors
    }

    setSubmitted(true);
  }

  /* ── Styling helpers ───────────────────────────────────────────────────── */

  const inputCls = (field: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
      errors[field]
        ? "border-red-400 ring-1 ring-red-400"
        : "border-gray-300 bg-white text-dark placeholder-gray-400"
    }`;

  const selectCls = (field: string) =>
    `w-full appearance-none rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
      errors[field]
        ? "border-red-400 ring-1 ring-red-400"
        : "border-gray-300 bg-white text-dark"
    }`;

  const labelCls = "mb-1 block text-sm font-medium text-dark";

  /* ── Success State ─────────────────────────────────────────────────────── */

  if (submitted) {
    const stateObj = US_STATES_WITH_DC.find((s) => s.name === data.state);
    const stateSlug = stateObj?.slug || "";

    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-10 text-center shadow-sm">
        <p className="text-5xl">&#x1F389;</p>
        <h2 className="mt-4 text-3xl font-bold text-dark">
          You&apos;re on your way!
        </h2>
        <p className="mt-3 text-gray-600">
          We&apos;ve received your information. Here&apos;s what happens next:
        </p>

        <ol className="mx-auto mt-6 max-w-sm space-y-3 text-left text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              1
            </span>
            <span>Check your email for a confirmation and next steps.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              2
            </span>
            <span>Review your state&apos;s specific requirements.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              3
            </span>
            <span>We&apos;ll generate your documents within 24 hours.</span>
          </li>
        </ol>

        {stateSlug && (
          <a
            href={`/states/${stateSlug}`}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-blue-700"
          >
            View {data.state} Nonprofit Guide
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        )}
      </div>
    );
  }

  /* ── Progress Bar ──────────────────────────────────────────────────────── */

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-xl rounded-2xl border border-gray-100 bg-white p-8 shadow-lg"
    >
      {/* Progress */}
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-gray-500">
        <span>
          Step {step + 1} of {STEPS.length}
        </span>
        <span>{STEPS[step]}</span>
      </div>
      <div className="mb-8 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Step 1: Select Your State ──────────────────────────────────────── */}
      {step === 0 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">Select Your State</legend>
          <p className="text-sm text-gray-500">
            We&apos;ll tailor your documents to your state&apos;s specific requirements.
          </p>
          <div>
            <label htmlFor="gs-state" className={labelCls}>
              State
            </label>
            <select
              id="gs-state"
              value={data.state}
              onChange={(e) => update("state", e.target.value)}
              className={selectCls("state")}
            >
              <option value="" disabled>
                Choose your state...
              </option>
              {US_STATES_WITH_DC.map((s) => (
                <option key={s.abbreviation} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="mt-1 text-sm font-medium text-red-500" role="alert">
                {errors.state}
              </p>
            )}
          </div>
        </fieldset>
      )}

      {/* ── Step 2: About Your Nonprofit ───────────────────────────────────── */}
      {step === 1 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">About Your Nonprofit</legend>
          <p className="text-sm text-gray-500">
            Tell us about the organization you&apos;re creating.
          </p>

          <div>
            <label htmlFor="gs-name" className={labelCls}>
              Nonprofit Name
            </label>
            <input
              id="gs-name"
              type="text"
              placeholder="e.g. Sunshine Community Foundation"
              value={data.nonprofitName}
              onChange={(e) => update("nonprofitName", e.target.value)}
              className={inputCls("nonprofitName")}
            />
            {errors.nonprofitName && (
              <p className="mt-1 text-sm font-medium text-red-500" role="alert">
                {errors.nonprofitName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="gs-mission" className={labelCls}>
              Mission Statement
            </label>
            <textarea
              id="gs-mission"
              rows={4}
              placeholder="Describe your nonprofit's mission and goals..."
              value={data.mission}
              onChange={(e) => update("mission", e.target.value)}
              className={inputCls("mission")}
            />
            {errors.mission && (
              <p className="mt-1 text-sm font-medium text-red-500" role="alert">
                {errors.mission}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="gs-category" className={labelCls}>
              Category
            </label>
            <select
              id="gs-category"
              value={data.category}
              onChange={(e) => update("category", e.target.value)}
              className={selectCls("category")}
            >
              <option value="" disabled>
                Select a category...
              </option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm font-medium text-red-500" role="alert">
                {errors.category}
              </p>
            )}
          </div>
        </fieldset>
      )}

      {/* ── Step 3: Your Information ───────────────────────────────────────── */}
      {step === 2 && (
        <fieldset className="space-y-4">
          <legend className="text-xl font-bold text-dark">Your Information</legend>
          <p className="text-sm text-gray-500">
            Tell us about yourself so we can personalize your experience.
          </p>

          <div>
            <label htmlFor="gs-fullname" className={labelCls}>
              Full Name
            </label>
            <input
              id="gs-fullname"
              type="text"
              placeholder="Jane Smith"
              value={data.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className={inputCls("fullName")}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm font-medium text-red-500" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="gs-email" className={labelCls}>
              Email Address
            </label>
            <input
              id="gs-email"
              type="email"
              placeholder="jane@example.com"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputCls("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm font-medium text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="gs-phone" className={labelCls}>
              Phone Number{" "}
              <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              id="gs-phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputCls("phone")}
            />
          </div>

          <div>
            <label htmlFor="gs-role" className={labelCls}>
              Your Role
            </label>
            <select
              id="gs-role"
              value={data.role}
              onChange={(e) => update("role", e.target.value)}
              className={selectCls("role")}
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
            {errors.role && (
              <p className="mt-1 text-sm font-medium text-red-500" role="alert">
                {errors.role}
              </p>
            )}
          </div>
        </fieldset>
      )}

      {/* ── Step 4: Review & Submit ────────────────────────────────────────── */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-dark">Review &amp; Submit</h3>
            <p className="mt-1 text-sm text-gray-500">
              Please review your information before submitting.
            </p>
          </div>

          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-gray-50">
            {/* State */}
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-medium text-gray-500">State</span>
              <span className="text-sm font-semibold text-dark">{data.state}</span>
            </div>
            {/* Org */}
            <div className="px-5 py-3">
              <span className="text-sm font-medium text-gray-500">Nonprofit Name</span>
              <p className="mt-0.5 text-sm font-semibold text-dark">{data.nonprofitName}</p>
            </div>
            <div className="px-5 py-3">
              <span className="text-sm font-medium text-gray-500">Mission</span>
              <p className="mt-0.5 text-sm text-dark">{data.mission}</p>
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-medium text-gray-500">Category</span>
              <span className="text-sm font-semibold text-dark">{data.category}</span>
            </div>
            {/* Contact */}
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-medium text-gray-500">Name</span>
              <span className="text-sm font-semibold text-dark">{data.fullName}</span>
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-medium text-gray-500">Email</span>
              <span className="text-sm font-semibold text-dark">{data.email}</span>
            </div>
            {data.phone && (
              <div className="flex items-center justify-between px-5 py-3">
                <span className="text-sm font-medium text-gray-500">Phone</span>
                <span className="text-sm font-semibold text-dark">{data.phone}</span>
              </div>
            )}
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-sm font-medium text-gray-500">Role</span>
              <span className="text-sm font-semibold text-dark">{data.role}</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Navigation Buttons ─────────────────────────────────────────────── */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={handleNext} size="md">
            Next
            <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        ) : (
          <Button type="submit" variant="secondary" size="md">
            Submit Application
            <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </Button>
        )}
      </div>
    </form>
  );
}

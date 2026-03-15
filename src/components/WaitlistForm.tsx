"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const NONPROFIT_TYPES = [
  "Education",
  "Health",
  "Arts",
  "Environment",
  "Social Services",
  "Other",
];

interface WaitlistEntry {
  name: string;
  email: string;
  state: string;
  nonprofitType: string;
  timestamp: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  state?: string;
  nonprofitType?: string;
}

export default function WaitlistForm({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [nonprofitType, setNonprofitType] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (!name.trim()) {
      errs.name = "Name is required.";
    }

    if (!email.trim()) {
      errs.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!state) {
      errs.state = "Please select your state.";
    }

    if (!nonprofitType) {
      errs.nonprofitType = "Please select a nonprofit type.";
    }

    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const entry: WaitlistEntry = {
      name: name.trim(),
      email: email.trim(),
      state,
      nonprofitType,
      timestamp: new Date().toISOString(),
    };

    try {
      const existing: WaitlistEntry[] = JSON.parse(
        localStorage.getItem("tc_waitlist") || "[]"
      );
      existing.push(entry);
      localStorage.setItem("tc_waitlist", JSON.stringify(existing));
    } catch {
      // Silently handle storage errors
    }

    // Random waitlist position between 100 and 500
    setWaitlistNumber(Math.floor(Math.random() * 401) + 100);
    setSubmitted(true);
  }

  const selectClasses = (hasError: boolean) =>
    `w-full appearance-none rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
      hasError
        ? "border-red-400 ring-1 ring-red-400"
        : "border-gray-300 bg-white text-dark"
    }`;

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
      hasError
        ? "border-red-400 ring-1 ring-red-400"
        : "border-gray-300 bg-white text-dark placeholder-gray-400"
    }`;

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-center ${className}`}
      >
        <span className="text-5xl">🎉</span>
        <h3 className="mt-4 text-2xl font-bold text-dark">
          You&apos;re #{waitlistNumber} on the waitlist!
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          We&apos;ll notify you as soon as TurboCharity launches in{" "}
          <span className="font-semibold text-primary">{state}</span>.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 ${className}`}
    >
      <h3 className="text-2xl font-bold tracking-tight text-dark">
        Join the TurboCharity Waitlist
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        Be the first to know when we launch in your state.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="wl-name" className="mb-1 block text-sm font-medium text-dark">
            Full Name
          </label>
          <input
            id="wl-name"
            type="text"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            className={inputClasses(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-sm font-medium text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="wl-email" className="mb-1 block text-sm font-medium text-dark">
            Email Address
          </label>
          <input
            id="wl-email"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            className={inputClasses(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-sm font-medium text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* State */}
        <div>
          <label htmlFor="wl-state" className="mb-1 block text-sm font-medium text-dark">
            State
          </label>
          <select
            id="wl-state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              if (errors.state) setErrors((prev) => ({ ...prev, state: undefined }));
            }}
            className={selectClasses(!!errors.state)}
          >
            <option value="" disabled>
              Select your state
            </option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm font-medium text-red-500" role="alert">
              {errors.state}
            </p>
          )}
        </div>

        {/* Nonprofit Type */}
        <div>
          <label
            htmlFor="wl-type"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Nonprofit Type
          </label>
          <select
            id="wl-type"
            value={nonprofitType}
            onChange={(e) => {
              setNonprofitType(e.target.value);
              if (errors.nonprofitType)
                setErrors((prev) => ({ ...prev, nonprofitType: undefined }));
            }}
            className={selectClasses(!!errors.nonprofitType)}
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
            <p className="mt-1 text-sm font-medium text-red-500" role="alert">
              {errors.nonprofitType}
            </p>
          )}
        </div>

        <Button type="submit" size="md" className="w-full">
          Join the Waitlist
        </Button>
      </form>
    </div>
  );
}

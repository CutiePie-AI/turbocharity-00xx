"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

interface NewsletterSignupProps {
  className?: string;
  dark?: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INTEREST_CATEGORIES = [
  "Formation & Filing",
  "IRS Compliance",
  "Fundraising",
  "Board Governance",
  "Grant Writing",
] as const;

export default function NewsletterSignup({
  className = "",
  dark = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(category: string) {
    setInterests((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Store locally as persistence
      const trimmed = email.trim().toLowerCase();
      const entry = {
        email: trimmed,
        interests,
        timestamp: new Date().toISOString(),
      };
      const existing = JSON.parse(
        localStorage.getItem("tc_newsletter_emails") || "[]",
      );
      const alreadyExists = existing.some(
        (item: { email: string }) => item.email === trimmed,
      );
      if (!alreadyExists) {
        existing.push(entry);
        localStorage.setItem("tc_newsletter_emails", JSON.stringify(existing));
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border p-8 text-center ${
          dark
            ? "border-gray-700 bg-gray-800/80"
            : "border-blue-100 bg-gradient-to-br from-blue-50 to-white"
        } ${className}`}
      >
        <p className="text-4xl">&#x1F389;</p>
        <p
          className={`mt-3 text-xl font-bold ${
            dark ? "text-white" : "text-dark"
          }`}
        >
          You&apos;re subscribed! &#x1F389;
        </p>
        <p
          className={`mt-2 text-sm ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Weekly nonprofit tips are on the way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border p-8 ${
        dark
          ? "border-gray-700 bg-gray-800/80"
          : "border-blue-100 bg-gradient-to-br from-blue-50 to-white"
      } ${className}`}
    >
      <h3
        className={`text-2xl font-bold tracking-tight ${
          dark ? "text-white" : "text-dark"
        }`}
      >
        Get Weekly Nonprofit Tips
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          dark ? "text-gray-300" : "text-gray-500"
        }`}
      >
        Practical advice on formation, compliance, fundraising, and growth
        &mdash; delivered every week.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
        {/* Email row */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className={`flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
              error
                ? "border-red-400 ring-1 ring-red-400"
                : dark
                  ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-dark placeholder-gray-400"
            }`}
            aria-label="Email address"
          />
          <Button type="submit" size="md" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>

        {error && (
          <p className="text-sm font-medium text-red-500" role="alert">
            {error}
          </p>
        )}

        {/* Interest checkboxes (optional) */}
        <fieldset>
          <legend
            className={`text-xs font-medium ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Interests (optional)
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {INTEREST_CATEGORIES.map((cat) => {
              const isChecked = interests.includes(cat);
              return (
                <label
                  key={cat}
                  className={`cursor-pointer select-none rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isChecked
                      ? "border-primary bg-primary/10 text-primary"
                      : dark
                        ? "border-gray-600 text-gray-400 hover:border-gray-500"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleInterest(cat)}
                    className="sr-only"
                  />
                  {cat}
                </label>
              );
            })}
          </div>
        </fieldset>
      </form>
    </div>
  );
}

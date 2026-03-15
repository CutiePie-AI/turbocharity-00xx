"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface WaitlistFormProps {
  className?: string;
  /** Compact mode for embedding in CTA sections — single row layout */
  compact?: boolean;
}

export default function WaitlistForm({
  className = "",
  compact = false,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Store in localStorage as simple persistence
      const existing: string[] = JSON.parse(
        localStorage.getItem("tc_waitlist") || "[]",
      );
      const trimmed = email.trim().toLowerCase();
      if (!existing.includes(trimmed)) {
        existing.push(trimmed);
        localStorage.setItem("tc_waitlist", JSON.stringify(existing));
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Success state ─────────────────────────────────────────────────────── */

  if (submitted) {
    return (
      <div
        className={`${
          compact
            ? "flex items-center justify-center gap-2 rounded-xl bg-secondary/10 px-4 py-3"
            : "rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 text-center"
        } ${className}`}
      >
        {!compact && <p className="text-4xl">&#x1F389;</p>}
        <p
          className={
            compact
              ? "text-sm font-semibold text-secondary"
              : "mt-3 text-xl font-bold text-dark"
          }
        >
          You&apos;re on the list! &#x1F389;
        </p>
        {!compact && (
          <p className="mt-2 text-sm text-gray-500">
            We&apos;ll notify you as soon as TurboCharity launches.
          </p>
        )}
      </div>
    );
  }

  /* ── Compact variant ───────────────────────────────────────────────────── */

  if (compact) {
    return (
      <div className={className}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex w-full flex-col gap-2 sm:flex-row"
        >
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
                : "border-gray-300 bg-white text-dark placeholder-gray-400"
            }`}
            aria-label="Email address"
          />
          <Button type="submit" size="md" disabled={loading}>
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
        {error && (
          <p className="mt-1.5 text-sm font-medium text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  /* ── Default (full) variant ────────────────────────────────────────────── */

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

      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-3">
        <div>
          <label
            htmlFor="wl-email"
            className="mb-1 block text-sm font-medium text-dark"
          >
            Email Address
          </label>
          <input
            id="wl-email"
            type="email"
            required
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
              error
                ? "border-red-400 ring-1 ring-red-400"
                : "border-gray-300 bg-white text-dark placeholder-gray-400"
            }`}
          />
          {error && (
            <p className="mt-1 text-sm font-medium text-red-500" role="alert">
              {error}
            </p>
          )}
        </div>

        <Button type="submit" size="md" className="w-full" disabled={loading}>
          {loading ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
}

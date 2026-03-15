"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";
import { submitNewsletterLead } from "@/app/actions/leads";

interface NewsletterSignupProps {
  className?: string;
  dark?: boolean;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSignup({
  className = "",
  dark = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
      const result = await submitNewsletterLead({
        email: email.trim(),
        source: "newsletter_signup",
      });

      if (result.success) {
        // Also store locally as a fallback
        try {
          const existing = JSON.parse(localStorage.getItem("tc_newsletter_emails") || "[]");
          if (!existing.includes(email)) {
            existing.push(email);
            localStorage.setItem("tc_newsletter_emails", JSON.stringify(existing));
          }
        } catch {
          // Silently handle storage errors
        }

        setSuccessMessage(result.message);
        setSubmitted(true);
      } else {
        setError(result.message);
      }
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
        <p className="text-4xl">🎉</p>
        <p
          className={`mt-3 text-xl font-bold ${
            dark ? "text-white" : "text-dark"
          }`}
        >
          {successMessage || "Check your inbox!"} 🎉
        </p>
        <p
          className={`mt-2 text-sm ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Your free Nonprofit Starter Kit is on its way.
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
        Get Your Free Nonprofit Starter Kit
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          dark ? "text-gray-300" : "text-gray-500"
        }`}
      >
        Step-by-step checklist, document templates, and state-specific guides
        delivered to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 flex w-full flex-col gap-3 sm:flex-row"
        noValidate
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
              : dark
              ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              : "border-gray-300 bg-white text-dark placeholder-gray-400"
          }`}
          aria-label="Email address"
        />
        <Button type="submit" size="md" disabled={loading}>
          {loading ? "Submitting..." : "Get Started"}
        </Button>
      </form>

      {error && (
        <p className="mt-2 text-sm font-medium text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

interface NewsletterSignupProps {
  className?: string;
  dark?: boolean;
}

export default function NewsletterSignup({
  className = "",
  dark = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // In production this would call an API endpoint
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`text-center ${className}`}>
        <p className={`text-lg font-semibold ${dark ? "text-white" : "text-dark"}`}>
          You&apos;re on the list!
        </p>
        <p className={`mt-1 text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-md flex-col gap-3 sm:flex-row ${className}`}
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
          dark
            ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
            : "border-gray-300 bg-white text-dark placeholder-gray-400"
        }`}
      />
      <Button type="submit" size="md">
        Get Started
      </Button>
    </form>
  );
}

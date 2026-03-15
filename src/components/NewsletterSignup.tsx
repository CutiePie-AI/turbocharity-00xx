"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

export interface NewsletterSignupProps {
  className?: string;
}

export function NewsletterSignup({ className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to actual newsletter API
    setSubmitted(true);
  }

  return (
    <section
      className={`bg-primary/5 rounded-2xl px-6 py-10 sm:px-10 sm:py-14 ${className}`}
    >
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-dark">
          Get Your Free Nonprofit Starter Guide
        </h3>
        <p className="mt-3 text-gray-600">
          Join 5,000+ changemakers. We&apos;ll send you a step-by-step guide to
          launching your 501(c)(3)&nbsp;&mdash;&nbsp;no spam, ever.
        </p>

        {submitted ? (
          <p className="mt-6 text-secondary font-semibold text-lg">
            Thanks for subscribing! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            action=""
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
            />
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-gray-400">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

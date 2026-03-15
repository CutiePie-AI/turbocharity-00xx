"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/Button";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section
      aria-label="Call to action"
      className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-blue-800 py-20 text-white sm:py-28"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#10B981]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to Start Your Nonprofit?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-200">
          Join 500+ nonprofit founders who turned their vision into a legally
          recognized 501(c)(3) — in days, not months.
        </p>

        {/* Email capture form */}
        <div className="mx-auto mt-10 max-w-md">
          {submitted ? (
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <svg
                className="mx-auto h-10 w-10 text-[#10B981]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="mt-3 text-lg font-semibold">
                You&apos;re on the list!
              </p>
              <p className="mt-1 text-sm text-blue-200">
                We&apos;ll send you early access details soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-blue-200 outline-none backdrop-blur-sm transition-all focus:border-white/40 focus:ring-2 focus:ring-white/25"
              />
              <Button
                type="submit"
                variant="secondary"
                size="md"
                disabled={loading}
                className="font-bold shadow-lg shadow-emerald-600/30"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          )}
        </div>

        {/* Social proof */}
        <p className="mt-6 text-sm text-blue-300">
          Join 500+ nonprofit founders &middot; No credit card required &middot;
          Free plan available
        </p>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback, useRef, FormEvent } from "react";
import Button from "@/components/Button";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POPUP_DELAY_MS = 30_000;
const SCROLL_THRESHOLD = 0.5;
const SESSION_KEY = "tc_lead_popup_shown";

export default function LeadMagnetPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggeredRef = useRef(false);

  const showPopup = useCallback(() => {
    if (triggeredRef.current) return;
    // Only show once per session
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;
    triggeredRef.current = true;
    setVisible(true);
  }, []);

  const closePopup = useCallback(() => {
    setVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_KEY, "true");
    }
  }, []);

  // Timer trigger: 30 seconds
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(showPopup, POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [showPopup]);

  // Scroll trigger: 50% of page
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;

    function handleScroll() {
      const scrolled =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_THRESHOLD) {
        showPopup();
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  // Click outside to close
  useEffect(() => {
    if (!visible) return;

    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closePopup();
      }
    }

    // Delay listener to prevent immediate close
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClick);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [visible, closePopup]);

  // Escape key to close
  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closePopup();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, closePopup]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem("tc_lead_emails") || "[]");
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem("tc_lead_emails", JSON.stringify(existing));
      }
    } catch {
      // Silently handle storage errors
    }

    closePopup();
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  }

  return (
    <>
      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[60] animate-fade-in rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg">
          Your free checklist is on the way! 🎉
        </div>
      )}

      {/* Modal overlay */}
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark/40" />

          {/* Modal */}
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-heading"
            className="relative z-10 w-full max-w-md animate-fade-in rounded-2xl border border-blue-100 bg-white p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close popup"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <span className="text-4xl">📋</span>
              <h2
                id="lead-popup-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-dark"
              >
                Free: Complete Nonprofit Startup Checklist
              </h2>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-secondary">✓</span> State-specific
                requirements
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">✓</span> Document templates
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">✓</span> IRS filing timeline
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">✓</span> Budget worksheet
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3" noValidate>
              <input
                type="email"
                required
                placeholder="Enter your email"
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
                aria-label="Email address"
              />
              {error && (
                <p className="text-sm font-medium text-red-500" role="alert">
                  {error}
                </p>
              )}
              <Button type="submit" size="md" className="w-full">
                Get Free Checklist
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-400">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

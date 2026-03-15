"use client";

import { useState, useEffect, useCallback, useRef, FormEvent } from "react";

const STORAGE_KEY = "tc_exit_banner_dismissed";
const MOBILE_DELAY_MS = 60_000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ExitIntentBanner() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const triggeredRef = useRef(false);

  /** Persisted dismiss check via localStorage */
  const wasDismissed = useCallback(() => {
    try {
      return typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  }, []);

  const showBanner = useCallback(() => {
    if (triggeredRef.current) return;
    if (wasDismissed()) return;
    triggeredRef.current = true;
    setVisible(true);
  }, [wasDismissed]);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // silently handle storage errors
    }
  }, []);

  // Desktop: mouse leaving viewport (mouseleave on document)
  useEffect(() => {
    if (wasDismissed()) return;

    function handleMouseLeave(e: MouseEvent) {
      // Only trigger when mouse leaves from the top of the viewport
      if (e.clientY <= 0) {
        showBanner();
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [showBanner, wasDismissed]);

  // Mobile: after 60 seconds
  useEffect(() => {
    if (wasDismissed()) return;

    // Simple touch device check
    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (!isMobile) return;

    const timer = setTimeout(showBanner, MOBILE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [showBanner, wasDismissed]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      const existing: string[] = JSON.parse(
        localStorage.getItem("tc_exit_emails") || "[]",
      );
      const trimmed = email.trim().toLowerCase();
      if (!existing.includes(trimmed)) {
        existing.push(trimmed);
        localStorage.setItem("tc_exit_emails", JSON.stringify(existing));
      }
    } catch {
      // silently handle storage errors
    }

    setSubmitted(true);
    setTimeout(dismiss, 3000);
  }

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-primary to-blue-700 px-4 py-3 shadow-lg shadow-blue-900/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          {submitted ? (
            <p className="text-center text-sm font-semibold text-white">
              Check your inbox for the checklist! &#x1F389;
            </p>
          ) : (
            <>
              <p className="text-center text-sm font-medium text-white sm:text-left">
                Wait! Download our free 501(c)(3) checklist before you go
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className={`w-48 rounded-lg border px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-white/50 sm:w-56 ${
                    error
                      ? "border-red-300 bg-white text-dark"
                      : "border-white/30 bg-white/10 text-white placeholder-white/60"
                  }`}
                  aria-label="Email for checklist download"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-blue-50"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12M12 16.5V3" />
                  </svg>
                  Download
                </button>
              </form>
            </>
          )}

          <button
            onClick={dismiss}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Dismiss banner"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {error && (
          <p className="mx-auto mt-1 max-w-7xl text-center text-xs font-medium text-red-200">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

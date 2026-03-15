'use client';

import { useEffect, useState, useCallback } from 'react';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const COOKIE_CONSENT_KEY = 'tc_cookie_consent';

export type ConsentStatus = 'accepted' | 'declined' | null;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Read the stored consent preference from localStorage. */
export function getConsentStatus(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === 'accepted' || value === 'declined') return value;
    return null;
  } catch {
    return null;
  }
}

/** Grant GA consent via the gtag consent API. */
function grantAnalyticsConsent(): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Bottom banner that asks for cookie / analytics consent.
 *
 * - Shows on first visit only (no stored preference).
 * - Stores the user's choice in `localStorage`.
 * - If accepted, sends a `consent update` to gtag so GA cookies are enabled.
 * - Smooth slide-up animation on mount; slides back down on dismiss.
 * - Links to the privacy policy page.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const stored = getConsentStatus();

    if (stored === null) {
      // First visit – show the banner after a short delay so it slides in.
      setVisible(true);
      // Trigger the CSS transition on the next frame.
      const timer = setTimeout(() => setAnimateIn(true), 50);
      return () => clearTimeout(timer);
    }

    if (stored === 'accepted') {
      grantAnalyticsConsent();
    }
  }, []);

  const dismiss = useCallback(() => {
    setAnimateIn(false);
    // Wait for the slide-out animation before unmounting.
    const timer = setTimeout(() => setVisible(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    } catch {
      // localStorage unavailable
    }
    grantAnalyticsConsent();
    dismiss();
  }, [dismiss]);

  const handleDecline = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    } catch {
      // localStorage unavailable
    }
    dismiss();
  }, [dismiss]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        transform: animateIn ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div className="border-t border-gray-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-5 sm:flex-row sm:justify-between">
          {/* Message */}
          <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-left">
            We use cookies and similar technologies to analyse traffic and
            improve your experience.{' '}
            <a
              href="/privacy"
              className="font-medium text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-800"
            >
              Privacy Policy
            </a>
          </p>

          {/* Actions */}
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={handleDecline}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

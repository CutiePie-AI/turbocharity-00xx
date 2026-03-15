'use client';

import { useState, useEffect, useCallback } from 'react';

interface LeadMagnetPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadMagnetPopup({ isOpen, onClose }: LeadMagnetPopupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  /* Close on Escape */
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKey]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('--- Lead Magnet Download ---');
    console.log('Email:', email);
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative z-10 mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label="Close popup"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-dark">Check your inbox!</h3>
            <p className="mt-2 text-sm text-gray-600">
              We&apos;ve sent the Nonprofit Starter Checklist to <strong>{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h3 className="text-center text-xl font-bold text-dark">
              Free Nonprofit Starter Checklist
            </h3>
            <p className="mt-2 text-center text-sm text-gray-600">
              Everything you need to know before launching your 501(c)(3). Get the step-by-step checklist delivered straight to your&nbsp;inbox.
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Download Free Checklist
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-400">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Auto-trigger hook ─────────────────────────────────────── */
/**
 * Use this hook on the homepage to auto-show the popup
 * after 10 seconds or when the user scrolls past 50%.
 *
 * Usage:
 *   const { showPopup, setShowPopup } = useLeadMagnetTrigger();
 */
export function useLeadMagnetTrigger() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    /* Timer: 10 seconds */
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10_000);

    /* Scroll: past 50% */
    function onScroll() {
      const scrollPct =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct > 0.5) {
        setShowPopup(true);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [dismissed]);

  function closePopup() {
    setShowPopup(false);
    setDismissed(true);
  }

  return { showPopup, closePopup };
}

'use client';

import { useState, useEffect, useCallback, useRef, FormEvent } from 'react';
import Button from '@/components/Button';
import { isValidEmail, sanitizeField } from '@/lib/validation';
import { submitLeadMagnet } from '@/app/actions/leads';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const POPUP_DELAY_MS = 30_000;
const SCROLL_THRESHOLD = 0.5;
const STORAGE_KEY = 'tc_lead_popup_dismissed';

export default function LeadMagnetPopup() {
  const [dismissed, setDismissed] = useLocalStorage(STORAGE_KEY, false);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggeredRef = useRef(false);

  const showPopup = useCallback(() => {
    if (triggeredRef.current || dismissed) return;
    triggeredRef.current = true;
    setVisible(true);
  }, [dismissed]);

  const closePopup = useCallback(() => {
    setVisible(false);
    setDismissed(true);
  }, [setDismissed]);

  // Timer trigger: 30 seconds
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(showPopup, POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [showPopup, dismissed]);

  // Scroll trigger: 50% of page
  useEffect(() => {
    if (dismissed) return;

    function handleScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      if (window.scrollY / total >= SCROLL_THRESHOLD) {
        showPopup();
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPopup, dismissed]);

  // Exit intent trigger: mouse leaving viewport top
  useEffect(() => {
    if (dismissed) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        showPopup();
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showPopup, dismissed]);

  // Click outside to close
  useEffect(() => {
    if (!visible) return;

    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closePopup();
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClick);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [visible, closePopup]);

  // Escape key to close
  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closePopup();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, closePopup]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed || !isValidEmail(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // localStorage fallback
    try {
      const leads = JSON.parse(localStorage.getItem('tc_lead_magnet_submissions') || '[]');
      const entries = Array.isArray(leads) ? leads : [];
      entries.push({ email: trimmed, source: 'lead_magnet_popup', submittedAt: new Date().toISOString() });
      localStorage.setItem('tc_lead_magnet_submissions', JSON.stringify(entries));
    } catch {
      // silent
    }

    try {
      const result = await submitLeadMagnet({
        email: sanitizeField(trimmed, 254),
        source: 'lead_magnet_popup',
      });

      if (result.success) {
        closePopup();
        setToast(true);
        setTimeout(() => setToast(false), 4000);
      } else {
        setError(result.message);
      }
    } catch {
      // Server failed but localStorage succeeded
      closePopup();
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[60] animate-fade-in rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg">
          Your free Nonprofit Starter Checklist is on the way!
        </div>
      )}

      {/* Modal overlay + backdrop */}
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-dark/40" aria-hidden="true" />

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
              <span
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl"
                role="img"
                aria-label="checklist"
              >
                📋
              </span>
              <h2
                id="lead-popup-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-dark"
              >
                Free Nonprofit Starter Checklist
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Download our comprehensive PDF guide to launching your 501(c)(3).
              </p>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-xs text-secondary">
                  ✓
                </span>
                State-specific requirements
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-xs text-secondary">
                  ✓
                </span>
                Document templates &amp; checklists
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-xs text-secondary">
                  ✓
                </span>
                IRS filing timeline &amp; deadlines
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-xs text-secondary">
                  ✓
                </span>
                Budget worksheet &amp; cost breakdown
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3" noValidate>
              <input
                type="email"
                placeholder="Enter your email"
                maxLength={254}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary ${
                  error
                    ? 'border-red-400 ring-1 ring-red-400'
                    : 'border-gray-300 bg-white text-dark placeholder-gray-400'
                }`}
                aria-label="Email address"
              />
              {error && (
                <p className="text-sm font-medium text-red-500" role="alert">
                  {error}
                </p>
              )}
              <Button type="submit" size="md" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Get Free Checklist'}
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

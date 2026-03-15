'use client';

import { useState, useEffect, useCallback, useRef, FormEvent } from 'react';
import Button from '@/components/Button';
import { isValidEmail, sanitizeField } from '@/lib/validation';
import { submitExitIntent } from '@/app/actions/leads';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const STORAGE_KEY = 'tc_exit_banner_dismissed';
const MOBILE_DELAY_MS = 60_000;

export default function ExitIntentBanner() {
  const [dismissed, setDismissed] = useLocalStorage(STORAGE_KEY, false);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const triggeredRef = useRef(false);

  const showBanner = useCallback(() => {
    if (triggeredRef.current || dismissed) return;
    triggeredRef.current = true;
    setVisible(true);
  }, [dismissed]);

  const dismiss = useCallback(() => {
    setVisible(false);
    setDismissed(true);
  }, [setDismissed]);

  // Desktop: mouse leaving viewport (mouseleave on document)
  useEffect(() => {
    if (dismissed) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        showBanner();
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showBanner, dismissed]);

  // Mobile: after 60 seconds
  useEffect(() => {
    if (dismissed) return;

    const isMobile =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    if (!isMobile) return;

    const timer = setTimeout(showBanner, MOBILE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [showBanner, dismissed]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed || !isValidEmail(trimmed)) {
      setError('Please enter a valid email.');
      return;
    }

    setLoading(true);
    try {
      const result = await submitExitIntent({
        email: sanitizeField(trimmed, 254),
      });

      if (result.success) {
        setSuccess(true);
        setTimeout(() => dismiss(), 3000);
      } else {
        setError(result.message);
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed left-0 right-0 top-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-primary to-blue-700 px-4 py-3 shadow-lg shadow-blue-900/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          {success ? (
            <p className="text-center text-sm font-semibold text-white">
              Check your inbox for the free 501(c)(3) checklist!
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
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    maxLength={254}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className={`w-48 rounded-lg border px-3 py-1.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-white/50 sm:w-56 ${
                      error
                        ? 'border-red-300 bg-red-50 text-red-800'
                        : 'border-white/30 bg-white/10 text-white placeholder-white/60'
                    }`}
                    aria-label="Email address"
                  />
                  {error && (
                    <p className="absolute -bottom-5 left-0 whitespace-nowrap text-xs font-medium text-red-200">
                      {error}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="sm"
                  disabled={loading}
                >
                  {loading ? '...' : 'Download'}
                </Button>
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
      </div>
    </div>
  );
}

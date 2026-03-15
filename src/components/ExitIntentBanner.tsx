'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExitIntentBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-30 bg-gradient-to-r from-amber-400 to-yellow-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-3">
          {/* Icon */}
          <span className="hidden shrink-0 rounded-lg bg-amber-600/20 p-1.5 sm:inline-flex">
            <svg className="h-5 w-5 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </span>

          <p className="text-sm font-semibold text-amber-900">
            <span className="md:hidden">Free consultation for new nonprofits!</span>
            <span className="hidden md:inline">
              Limited time: Get a free 30-minute consultation when you sign up today!
            </span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/get-started"
            className="rounded-lg bg-amber-900 px-4 py-1.5 text-xs font-bold text-white transition-colors hover:bg-amber-950"
          >
            Claim Offer
          </Link>

          <button
            onClick={() => setVisible(false)}
            className="flex items-center justify-center rounded-full p-1 text-amber-800 transition-colors hover:bg-amber-500/30"
            aria-label="Dismiss banner"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

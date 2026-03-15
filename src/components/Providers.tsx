'use client';

import { useEffect, useState } from 'react';
import Analytics from '@/components/Analytics';
import CookieConsent, { getConsentStatus } from '@/components/CookieConsent';
import { TrackingProvider } from '@/lib/tracking';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Global providers wrapper.
 *
 * - Wraps children in the `TrackingProvider` for offline-resilient event tracking.
 * - Conditionally loads `<Analytics />` based on the user's cookie consent preference.
 * - Renders the `<CookieConsent />` banner so users can accept or decline analytics.
 */
export default function Providers({ children }: ProvidersProps) {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check stored consent on mount.
    const status = getConsentStatus();
    setConsentGiven(status === 'accepted');

    // Listen for changes to localStorage (e.g. from the CookieConsent banner).
    function handleStorage(e: StorageEvent) {
      if (e.key === 'tc_cookie_consent') {
        setConsentGiven(e.newValue === 'accepted');
      }
    }

    // Also poll briefly after mount to catch same-tab localStorage writes
    // from the CookieConsent component (StorageEvent only fires cross-tab).
    const interval = setInterval(() => {
      const current = getConsentStatus();
      setConsentGiven(current === 'accepted');
    }, 1000);

    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <TrackingProvider>
      {consentGiven && <Analytics />}
      {children}
      <CookieConsent />
    </TrackingProvider>
  );
}

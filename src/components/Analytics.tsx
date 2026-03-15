'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, initAnalytics, trackPageView } from '@/lib/analytics';

/**
 * Google Analytics script injection and page-view tracking.
 *
 * Reads the GA ID from `NEXT_PUBLIC_GA_ID` (or `NEXT_PUBLIC_GA_MEASUREMENT_ID`).
 * Only renders script tags when an ID is present.
 * Automatically tracks page views on every Next.js route change.
 */
export default function Analytics() {
  const pathname = usePathname();

  // Initialise analytics listeners once on mount.
  useEffect(() => {
    initAnalytics();
  }, []);

  // Track page views whenever the pathname changes.
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  // Don't inject any scripts when no GA ID is configured.
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Google Analytics 4 – async script loader */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* GA4 configuration */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
          });
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}

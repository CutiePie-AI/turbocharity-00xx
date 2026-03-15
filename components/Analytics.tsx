'use client';

import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Track a custom event via Google Analytics.
 * Safe to call server-side or when gtag is not loaded — it simply no-ops.
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number,
) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as Record<string, Function>).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

/**
 * Conditionally renders Google Analytics script tags when a
 * NEXT_PUBLIC_GA_ID environment variable is present.
 */
export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

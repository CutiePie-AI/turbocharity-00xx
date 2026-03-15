/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void;
      identify: (distinctId: string, properties?: Record<string, any>) => void;
    };
  }
}

const isDev =
  typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

/**
 * Check if we are running in the browser (SSR safe).
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Track a custom event across all configured analytics providers.
 */
export function trackEvent(
  name: string,
  properties?: Record<string, any>,
): void {
  if (!isBrowser()) return;

  if (isDev) {
    console.log('[Analytics] trackEvent', name, properties);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, properties);
  }

  if (window.posthog) {
    window.posthog.capture(name, properties);
  }
}

/**
 * Track a page view.
 */
export function trackPageView(url: string): void {
  if (!isBrowser()) return;

  if (isDev) {
    console.log('[Analytics] trackPageView', url);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: url });
  }

  if (window.posthog) {
    window.posthog.capture('$pageview', { page_path: url });
  }
}

/**
 * Track a signup event.
 */
export function trackSignup(email: string, source: string): void {
  if (!isBrowser()) return;

  const properties = {
    email,
    source,
    event_category: 'engagement',
  };

  if (isDev) {
    console.log('[Analytics] trackSignup', properties);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'signup', properties);
  }

  if (window.posthog) {
    window.posthog.capture('signup', properties);
  }
}

/**
 * Track a CTA click.
 */
export function trackCTAClick(ctaName: string, page: string): void {
  if (!isBrowser()) return;

  const properties = {
    cta_name: ctaName,
    page,
    event_category: 'engagement',
  };

  if (isDev) {
    console.log('[Analytics] trackCTAClick', properties);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', properties);
  }

  if (window.posthog) {
    window.posthog.capture('cta_click', properties);
  }
}

/**
 * Initialize analytics listeners (e.g. global click tracking).
 * Should be called once on the client side.
 */
export function initAnalytics(): void {
  if (!isBrowser()) return;

  if (isDev) {
    console.log('[Analytics] Initialized');
  }
}

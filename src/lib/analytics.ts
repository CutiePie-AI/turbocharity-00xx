/**
 * Analytics utilities for TurboCharity.
 *
 * Sends events and page views to Google Analytics (gtag) and PostHog when
 * available. Guards against missing window / gtag so callers never need to
 * worry about SSR or blocked scripts.
 */

// ---------------------------------------------------------------------------
// GA Measurement ID
// ---------------------------------------------------------------------------
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ??
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ??
  '';

// ---------------------------------------------------------------------------
// Event name constants
// ---------------------------------------------------------------------------
export const EVENTS = {
  WAITLIST_SIGNUP: 'waitlist_signup',
  GET_STARTED_BEGIN: 'get_started_begin',
  GET_STARTED_COMPLETE: 'get_started_complete',
  STATE_GUIDE_VIEW: 'state_guide_view',
  BLOG_VIEW: 'blog_view',
  RESOURCE_CLICK: 'resource_click',
  CTA_CLICK: 'cta_click',
  LEAD_MAGNET_SUBMIT: 'lead_magnet_submit',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

type AnalyticsProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag: (...args: [string, ...unknown[]]) => void;
    dataLayer: unknown[];
    posthog?: {
      capture: (event: string, properties?: AnalyticsProperties) => void;
      identify: (distinctId: string, properties?: AnalyticsProperties) => void;
    };
  }
}

const isDev =
  typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Check whether we are running in a browser context. */
function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/** Safely check for the gtag function. */
function hasGtag(): boolean {
  return isBrowser() && typeof window.gtag === 'function';
}

// ---------------------------------------------------------------------------
// Core public API
// ---------------------------------------------------------------------------

/**
 * Track a custom event across all configured analytics providers.
 *
 * @param name - The name of the event (use EVENTS constants where possible).
 * @param properties - Optional key/value properties attached to the event.
 */
export function trackEvent(
  name: string,
  properties?: Record<string, string | number | boolean | undefined>,
): void {
  if (!isBrowser()) return;

  if (isDev) {
    console.log('[Analytics] trackEvent', name, properties);
  }

  if (hasGtag()) {
    window.gtag('event', name, properties);
  }

  if (window.posthog) {
    window.posthog.capture(name, properties);
  }
}

/**
 * Track a page view.
 *
 * @param url - The pathname / URL of the page being viewed.
 */
export function trackPageView(url: string): void {
  trackEvent('page_view', { page_path: url });
}

// ---------------------------------------------------------------------------
// Structured GA event helpers (category / action / label / value)
// ---------------------------------------------------------------------------

/**
 * Track a structured GA event with category/action/label/value.
 */
export function trackGTagEvent({ action, category, label, value }: GTagEvent) {
  if (!hasGtag()) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// ---------------------------------------------------------------------------
// Convenience helpers
// ---------------------------------------------------------------------------

/** Track a waitlist signup event. */
export function trackWaitlistSignup(source: string): void {
  trackEvent(EVENTS.WAITLIST_SIGNUP, {
    source,
    event_category: 'conversion',
  });
}

/** Track a newsletter signup event. */
export function trackNewsletterSignup(source: string): void {
  trackEvent(EVENTS.NEWSLETTER_SIGNUP, {
    source,
    event_category: 'conversion',
  });
}

/** Track a blog view event. */
export function trackBlogView(slug: string): void {
  trackEvent(EVENTS.BLOG_VIEW, {
    slug,
    event_category: 'content',
  });
}

/** Track a signup event. */
export function trackSignup(source: string): void {
  trackEvent('sign_up', {
    method: source,
    event_category: 'engagement',
  });
}

/** Track a search event. */
export function trackSearch(query: string): void {
  trackEvent('search', { search_term: query });
}

/** Track a CTA click. */
export function trackCTAClick(ctaName: string, page: string): void {
  trackEvent(EVENTS.CTA_CLICK, {
    cta_name: ctaName,
    page,
    event_category: 'engagement',
  });
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

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

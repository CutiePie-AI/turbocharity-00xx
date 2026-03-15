export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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

/**
 * Check if we are running in the browser (SSR safe).
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Track a structured GA event with category/action/label/value.
 */
export function trackGTagEvent({ action, category, label, value }: GTagEvent) {
  if (!isBrowser() || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

/**
 * Track a custom event across all configured analytics providers.
 */
export function trackEvent(
  name: string,
  properties?: AnalyticsProperties,
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
 * Track a waitlist signup event.
 */
export function trackWaitlistSignup(source: string): void {
  trackGTagEvent({
    action: 'waitlist_signup',
    category: 'engagement',
    label: source,
  });

  if (isBrowser() && window.posthog) {
    window.posthog.capture('waitlist_signup', {
      source,
      event_category: 'engagement',
    });
  }
}

/**
 * Track a newsletter signup event.
 */
export function trackNewsletterSignup(source: string): void {
  trackGTagEvent({
    action: 'newsletter_signup',
    category: 'engagement',
    label: source,
  });

  if (isBrowser() && window.posthog) {
    window.posthog.capture('newsletter_signup', {
      source,
      event_category: 'engagement',
    });
  }
}

/**
 * Track a blog view event.
 */
export function trackBlogView(slug: string): void {
  trackGTagEvent({
    action: 'blog_view',
    category: 'content',
    label: slug,
  });

  if (isBrowser() && window.posthog) {
    window.posthog.capture('blog_view', {
      slug,
      event_category: 'content',
    });
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

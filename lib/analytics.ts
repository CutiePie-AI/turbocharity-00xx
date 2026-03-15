/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function isGtagAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * Track a custom event via Google Analytics 4.
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number,
): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

/**
 * Track a signup funnel step.
 */
export function trackSignup(step: string): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'signup', {
    event_category: 'engagement',
    event_label: step,
  });
}

/**
 * Track a page view.
 */
export function trackPageView(url: string): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'page_view', {
    page_path: url,
  });
}

/**
 * Track a CTA click.
 */
export function trackCTA(ctaName: string, location: string): void {
  if (!isGtagAvailable()) return;

  window.gtag!('event', 'cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    cta_location: location,
  });
}

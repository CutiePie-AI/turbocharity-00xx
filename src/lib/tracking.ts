import { trackEvent } from '@/lib/analytics';

/**
 * Track a waitlist signup conversion.
 */
export function trackWaitlistSignup(data: {
  email: string;
  state: string;
}): void {
  trackEvent('waitlist_signup', {
    email: data.email,
    state: data.state,
    event_category: 'conversion',
  });
}

/**
 * Track a newsletter signup conversion.
 */
export function trackNewsletterSignup(email: string): void {
  trackEvent('newsletter_signup', {
    email,
    event_category: 'conversion',
  });
}

/**
 * Track when a user views a pricing tier.
 */
export function trackPricingView(tier: string): void {
  trackEvent('pricing_view', {
    tier,
    event_category: 'engagement',
  });
}

/**
 * Track when a user views a state-specific page.
 */
export function trackStatePageView(state: string): void {
  trackEvent('state_page_view', {
    state,
    event_category: 'navigation',
  });
}

/**
 * Track when a user views a resource (blog post, guide, etc.).
 */
export function trackResourceView(slug: string): void {
  trackEvent('resource_view', {
    slug,
    event_category: 'content',
  });
}

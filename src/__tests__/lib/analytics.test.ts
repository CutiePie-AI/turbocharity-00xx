import { trackEvent, trackWaitlistSignup, trackNewsletterSignup, trackBlogView, EVENTS } from '@/lib/analytics';

describe('Analytics', () => {
  beforeEach(() => {
    // Mock window.gtag
    window.gtag = jest.fn();
    window.dataLayer = [];
  });

  test('trackEvent calls gtag with correct params', () => {
    trackEvent('test_action', { event_category: 'test_category', event_label: 'test_label' });
    expect(window.gtag).toHaveBeenCalledWith('event', 'test_action', {
      event_category: 'test_category',
      event_label: 'test_label',
    });
  });

  test('trackWaitlistSignup fires correct event', () => {
    trackWaitlistSignup('homepage');
    expect(window.gtag).toHaveBeenCalledWith('event', EVENTS.WAITLIST_SIGNUP, expect.objectContaining({
      event_category: 'conversion',
      source: 'homepage',
    }));
  });

  test('trackNewsletterSignup fires correct event', () => {
    trackNewsletterSignup('blog');
    expect(window.gtag).toHaveBeenCalledWith('event', EVENTS.NEWSLETTER_SIGNUP, expect.objectContaining({
      event_category: 'conversion',
      source: 'blog',
    }));
  });

  test('trackBlogView fires correct event', () => {
    trackBlogView('test-slug');
    expect(window.gtag).toHaveBeenCalledWith('event', EVENTS.BLOG_VIEW, expect.objectContaining({
      event_category: 'content',
      slug: 'test-slug',
    }));
  });

  test('EVENTS contains all expected event names', () => {
    expect(EVENTS.WAITLIST_SIGNUP).toBe('waitlist_signup');
    expect(EVENTS.GET_STARTED_BEGIN).toBe('get_started_begin');
    expect(EVENTS.GET_STARTED_COMPLETE).toBe('get_started_complete');
    expect(EVENTS.STATE_GUIDE_VIEW).toBe('state_guide_view');
    expect(EVENTS.BLOG_VIEW).toBe('blog_view');
    expect(EVENTS.RESOURCE_CLICK).toBe('resource_click');
    expect(EVENTS.CTA_CLICK).toBe('cta_click');
    expect(EVENTS.LEAD_MAGNET_SUBMIT).toBe('lead_magnet_submit');
    expect(EVENTS.NEWSLETTER_SIGNUP).toBe('newsletter_signup');
  });
});

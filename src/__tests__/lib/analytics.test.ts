import { trackEvent, EVENTS } from '@/lib/analytics';

describe('Analytics', () => {
  const originalGtag = global.window?.gtag;

  afterEach(() => {
    // Restore original state after each test
    if (typeof window !== 'undefined') {
      if (originalGtag) {
        window.gtag = originalGtag;
      } else {
        delete (window as Record<string, unknown>).gtag;
      }
    }
  });

  describe('trackEvent', () => {
    it('does not throw when window.gtag is undefined', () => {
      // Ensure gtag is not defined
      delete (window as Record<string, unknown>).gtag;

      expect(() => {
        trackEvent('test_event');
      }).not.toThrow();

      expect(() => {
        trackEvent('test_event', { event_category: 'test' });
      }).not.toThrow();
    });

    it('calls gtag when available', () => {
      const mockGtag = jest.fn();
      window.gtag = mockGtag;

      trackEvent('test_action', { event_category: 'test_category', event_label: 'test_label' });

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'test_category',
        event_label: 'test_label',
      });
    });

    it('passes properties to gtag correctly', () => {
      const mockGtag = jest.fn();
      window.gtag = mockGtag;

      trackEvent(EVENTS.CTA_CLICK, { cta_name: 'hero', page: '/home' });

      expect(mockGtag).toHaveBeenCalledWith('event', 'cta_click', {
        cta_name: 'hero',
        page: '/home',
      });
    });
  });

  describe('EVENTS', () => {
    it('has expected keys', () => {
      expect(EVENTS).toHaveProperty('WAITLIST_SIGNUP');
      expect(EVENTS).toHaveProperty('GET_STARTED_BEGIN');
      expect(EVENTS).toHaveProperty('GET_STARTED_COMPLETE');
      expect(EVENTS).toHaveProperty('STATE_GUIDE_VIEW');
      expect(EVENTS).toHaveProperty('BLOG_VIEW');
      expect(EVENTS).toHaveProperty('RESOURCE_CLICK');
      expect(EVENTS).toHaveProperty('CTA_CLICK');
      expect(EVENTS).toHaveProperty('LEAD_MAGNET_SUBMIT');
      expect(EVENTS).toHaveProperty('NEWSLETTER_SIGNUP');
    });

    it('has string values for all event names', () => {
      const eventKeys = Object.keys(EVENTS) as (keyof typeof EVENTS)[];
      for (const key of eventKeys) {
        expect(typeof EVENTS[key]).toBe('string');
        expect(EVENTS[key].length).toBeGreaterThan(0);
      }
    });

    it('maps to correct event name strings', () => {
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
});

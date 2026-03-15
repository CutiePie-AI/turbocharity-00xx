import { trackEvent, trackSignup, trackPageView, trackCTAClick } from '@/lib/analytics';

describe('analytics helpers', () => {
  beforeEach(() => {
    // Reset gtag and posthog on window before each test
    delete (window as Record<string, unknown>).gtag;
    delete (window as Record<string, unknown>).posthog;
  });

  it('trackEvent does not throw when window.gtag is undefined', () => {
    expect(() => {
      trackEvent('test_action', { category: 'test' });
    }).not.toThrow();
  });

  it('trackEvent calls gtag with correct params when gtag exists', () => {
    const mockGtag = jest.fn();
    window.gtag = mockGtag;

    trackEvent('click', { event_category: 'navigation', label: 'header_link' });

    expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
      event_category: 'navigation',
      label: 'header_link',
    });
  });

  it('trackEvent calls posthog.capture when posthog exists', () => {
    const mockCapture = jest.fn();
    (window as Record<string, unknown>).posthog = {
      capture: mockCapture,
      identify: jest.fn(),
    };

    trackEvent('click', { label: 'hero_cta' });

    expect(mockCapture).toHaveBeenCalledWith('click', { label: 'hero_cta' });
  });

  it('trackSignup calls gtag with correct params when gtag exists', () => {
    const mockGtag = jest.fn();
    window.gtag = mockGtag;

    trackSignup('test@example.com', 'homepage');

    expect(mockGtag).toHaveBeenCalledWith('event', 'signup', {
      email: 'test@example.com',
      source: 'homepage',
      event_category: 'engagement',
    });
  });

  it('trackSignup does not throw when window.gtag is undefined', () => {
    expect(() => {
      trackSignup('test@example.com', 'homepage');
    }).not.toThrow();
  });

  it('trackPageView calls gtag with page_path', () => {
    const mockGtag = jest.fn();
    window.gtag = mockGtag;

    trackPageView('/about');

    expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
      page_path: '/about',
    });
  });

  it('trackPageView calls posthog with $pageview', () => {
    const mockCapture = jest.fn();
    (window as Record<string, unknown>).posthog = {
      capture: mockCapture,
      identify: jest.fn(),
    };

    trackPageView('/pricing');

    expect(mockCapture).toHaveBeenCalledWith('$pageview', {
      page_path: '/pricing',
    });
  });

  it('trackCTAClick calls gtag with correct params', () => {
    const mockGtag = jest.fn();
    window.gtag = mockGtag;

    trackCTAClick('get_started', '/homepage');

    expect(mockGtag).toHaveBeenCalledWith('event', 'cta_click', {
      cta_name: 'get_started',
      page: '/homepage',
      event_category: 'engagement',
    });
  });

  it('trackCTAClick calls posthog with correct params', () => {
    const mockCapture = jest.fn();
    (window as Record<string, unknown>).posthog = {
      capture: mockCapture,
      identify: jest.fn(),
    };

    trackCTAClick('signup_button', '/pricing');

    expect(mockCapture).toHaveBeenCalledWith('cta_click', {
      cta_name: 'signup_button',
      page: '/pricing',
      event_category: 'engagement',
    });
  });
});

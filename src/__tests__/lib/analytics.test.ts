import { trackEvent, trackWaitlistSignup, trackNewsletterSignup, trackBlogView } from '@/lib/analytics';

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
    expect(window.gtag).toHaveBeenCalledWith('event', 'waitlist_signup', expect.objectContaining({
      event_category: 'engagement',
      event_label: 'homepage',
    }));
  });

  test('trackNewsletterSignup fires correct event', () => {
    trackNewsletterSignup('blog');
    expect(window.gtag).toHaveBeenCalledWith('event', 'newsletter_signup', expect.objectContaining({
      event_category: 'engagement',
      event_label: 'blog',
    }));
  });

  test('trackBlogView fires correct event', () => {
    trackBlogView('test-slug');
    expect(window.gtag).toHaveBeenCalledWith('event', 'blog_view', expect.objectContaining({
      event_category: 'content',
      event_label: 'test-slug',
    }));
  });
});

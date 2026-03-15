import { trackEvent, trackSignup, trackPageView, trackCTA } from '@/lib/analytics'

describe('analytics helpers', () => {
  beforeEach(() => {
    // Reset window.gtag before each test
    delete (window as any).gtag
  })

  describe('trackEvent', () => {
    it('does not throw when window.gtag is undefined', () => {
      expect(() => {
        trackEvent('test_action', 'test_category', 'test_label', 1)
      }).not.toThrow()
    })

    it('calls window.gtag with correct params when gtag exists', () => {
      const mockGtag = jest.fn()
      window.gtag = mockGtag

      trackEvent('click', 'engagement', 'hero_button', 5)

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'engagement',
        event_label: 'hero_button',
        value: 5,
      })
    })

    it('calls window.gtag without optional params', () => {
      const mockGtag = jest.fn()
      window.gtag = mockGtag

      trackEvent('click', 'engagement')

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'engagement',
        event_label: undefined,
        value: undefined,
      })
    })
  })

  describe('trackSignup', () => {
    it('does not throw when window.gtag is undefined', () => {
      expect(() => {
        trackSignup('step_1')
      }).not.toThrow()
    })

    it('calls gtag with correct signup params when gtag exists', () => {
      const mockGtag = jest.fn()
      window.gtag = mockGtag

      trackSignup('completed')

      expect(mockGtag).toHaveBeenCalledWith('event', 'signup', {
        event_category: 'engagement',
        event_label: 'completed',
      })
    })
  })

  describe('trackPageView', () => {
    it('does not throw when window.gtag is undefined', () => {
      expect(() => {
        trackPageView('/about')
      }).not.toThrow()
    })

    it('calls gtag with correct page_view params when gtag exists', () => {
      const mockGtag = jest.fn()
      window.gtag = mockGtag

      trackPageView('/pricing')

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        page_path: '/pricing',
      })
    })
  })

  describe('trackCTA', () => {
    it('does not throw when window.gtag is undefined', () => {
      expect(() => {
        trackCTA('start_free', 'hero')
      }).not.toThrow()
    })

    it('calls gtag with correct CTA params when gtag exists', () => {
      const mockGtag = jest.fn()
      window.gtag = mockGtag

      trackCTA('start_free', 'hero')

      expect(mockGtag).toHaveBeenCalledWith('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'start_free',
        cta_location: 'hero',
      })
    })
  })
})

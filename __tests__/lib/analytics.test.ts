import { trackEvent, trackSignup } from '@/lib/analytics'

describe('analytics helpers', () => {
  beforeEach(() => {
    // Reset gtag on window before each test
    delete (window as Record<string, unknown>).gtag
  })

  it('trackEvent does not throw when window.gtag is undefined', () => {
    expect(() => {
      trackEvent('test_action', 'test_category', 'test_label')
    }).not.toThrow()
  })

  it('trackSignup calls gtag with correct params when gtag exists', () => {
    const mockGtag = jest.fn()
    window.gtag = mockGtag

    trackSignup('step_1')

    expect(mockGtag).toHaveBeenCalledWith('event', 'signup', {
      event_category: 'engagement',
      event_label: 'step_1',
    })
  })

  it('trackEvent calls gtag with correct params when gtag exists', () => {
    const mockGtag = jest.fn()
    window.gtag = mockGtag

    trackEvent('click', 'navigation', 'header_link', 1)

    expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
      event_category: 'navigation',
      event_label: 'header_link',
      value: 1,
    })
  })

  it('trackSignup does not throw when window.gtag is undefined', () => {
    expect(() => {
      trackSignup('step_1')
    }).not.toThrow()
  })
})

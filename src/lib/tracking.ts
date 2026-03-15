'use client';

import { useCallback, useEffect, useRef, createContext, useContext, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type EventProperties = Record<string, string | number | boolean | undefined>;

interface QueuedEvent {
  eventName: string;
  properties?: EventProperties;
  timestamp: number;
}

// ---------------------------------------------------------------------------
// localStorage-based offline event queue
// ---------------------------------------------------------------------------
const EVENT_QUEUE_KEY = 'tc_event_queue';

function getQueue(): QueuedEvent[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(EVENT_QUEUE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as QueuedEvent[];
  } catch {
    return [];
  }
}

function saveQueue(queue: QueuedEvent[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(EVENT_QUEUE_KEY, JSON.stringify(queue));
  } catch {
    // localStorage full or unavailable – silently ignore
  }
}

function clearQueue(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(EVENT_QUEUE_KEY);
  } catch {
    // ignore
  }
}

function enqueueEvent(eventName: string, properties?: EventProperties): void {
  const queue = getQueue();
  queue.push({ eventName, properties, timestamp: Date.now() });
  saveQueue(queue);
}

/** Checks whether gtag is available (i.e. GA scripts loaded). */
function isOnline(): boolean {
  if (typeof window === 'undefined') return false;
  return typeof window.gtag === 'function';
}

/**
 * Attempt to flush queued events. Events older than 24 hours are discarded.
 */
function flushQueue(): void {
  const queue = getQueue();
  if (queue.length === 0) return;
  if (!isOnline()) return;

  const MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours
  const now = Date.now();

  for (const event of queue) {
    if (now - event.timestamp < MAX_AGE_MS) {
      trackEvent(event.eventName, event.properties);
    }
  }

  clearQueue();
}

/**
 * Send an analytics event, falling back to the offline queue when gtag
 * is not available (e.g. consent not yet given or script still loading).
 */
function sendOrQueue(eventName: string, properties?: EventProperties): void {
  if (isOnline()) {
    trackEvent(eventName, properties);
  } else {
    enqueueEvent(eventName, properties);
  }
}

// ---------------------------------------------------------------------------
// Tracking context
// ---------------------------------------------------------------------------

interface TrackingContextValue {
  track: (eventName: string, properties?: EventProperties) => void;
}

const TrackingContext = createContext<TrackingContextValue>({
  track: sendOrQueue,
});

// ---------------------------------------------------------------------------
// TrackingProvider
// ---------------------------------------------------------------------------

interface TrackingProviderProps {
  children: ReactNode;
}

/**
 * Provides a `track` function through context and automatically flushes
 * any events that were queued while the user was offline or before consent.
 */
export function TrackingProvider({ children }: TrackingProviderProps) {
  const flushed = useRef(false);
  const [contextValue] = useState<TrackingContextValue>(() => ({
    track: sendOrQueue,
  }));

  // Flush the offline queue once GA becomes available.
  useEffect(() => {
    if (flushed.current) return;

    // Try immediately, then retry a few times in case scripts are still loading.
    const tryFlush = () => {
      if (isOnline()) {
        flushQueue();
        flushed.current = true;
        return true;
      }
      return false;
    };

    if (tryFlush()) return;

    // Retry at 2s, 5s, 10s
    const timers = [2000, 5000, 10000].map((delay) =>
      setTimeout(() => {
        tryFlush();
      }, delay),
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <TrackingContext.Provider value={contextValue}>
      {children}
    </TrackingContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// useTrackEvent hook
// ---------------------------------------------------------------------------

/**
 * Custom hook that returns a stable `track` function.
 * Events are sent immediately if gtag is loaded, otherwise queued in
 * localStorage for offline resilience.
 *
 * @example
 * ```tsx
 * const track = useTrackEvent();
 * track(EVENTS.CTA_CLICK, { cta_name: 'hero_signup' });
 * ```
 */
export function useTrackEvent() {
  const { track } = useContext(TrackingContext);

  return useCallback(
    (eventName: string, properties?: EventProperties) => {
      track(eventName, properties);
    },
    [track],
  );
}

// ---------------------------------------------------------------------------
// Convenience tracking helpers (kept for backwards compatibility)
// ---------------------------------------------------------------------------

/** Track a waitlist signup conversion. */
export function trackWaitlistSignup(data: { email: string; state: string }): void {
  sendOrQueue('waitlist_signup', {
    email: data.email,
    state: data.state,
    event_category: 'conversion',
  });
}

/** Track a newsletter signup conversion. */
export function trackNewsletterSignup(email: string): void {
  sendOrQueue('newsletter_signup', {
    email,
    event_category: 'conversion',
  });
}

/** Track when a user views a pricing tier. */
export function trackPricingView(tier: string): void {
  sendOrQueue('pricing_view', {
    tier,
    event_category: 'engagement',
  });
}

/** Track when a user views a state-specific page. */
export function trackStatePageView(state: string): void {
  sendOrQueue('state_page_view', {
    state,
    event_category: 'navigation',
  });
}

/** Track when a user views a resource (blog post, guide, etc.). */
export function trackResourceView(slug: string): void {
  sendOrQueue('resource_view', {
    slug,
    event_category: 'content',
  });
}

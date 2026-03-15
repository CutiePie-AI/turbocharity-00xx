'use client';

import { useState, useCallback } from 'react';

/**
 * Type-safe localStorage hook with JSON serialisation.
 *
 * - Handles SSR (returns `initialValue` when `window` is unavailable).
 * - Wraps reads/writes in try-catch so quota errors or corrupt data
 *   never crash the component.
 * - Validates the parsed value through an optional `validate` predicate
 *   so tampered data is safely discarded.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  validate?: (v: unknown) => v is T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return initialValue;
      const parsed: unknown = JSON.parse(raw);
      if (validate && !validate(parsed)) return initialValue;
      return parsed as T;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const next = typeof value === 'function' ? (value as (p: T) => T)(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
        } catch {
          // Quota exceeded or private browsing — value still lives in React state
        }
        return next;
      });
    },
    [key],
  );

  return [storedValue, setValue];
}

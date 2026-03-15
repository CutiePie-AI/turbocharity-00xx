'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { StateInfo } from '@/lib/states';
import StateCard from '@/components/StateCard';

interface StateSearchProps {
  states: StateInfo[];
}

export default function StateSearch({ states }: StateSearchProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDebouncedQuery(value);
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
  }, []);

  const filteredStates = states.filter((state) => {
    if (!debouncedQuery.trim()) return true;
    const q = debouncedQuery.toLowerCase().trim();
    return (
      state.name.toLowerCase().includes(q) ||
      state.abbreviation.toLowerCase().includes(q) ||
      state.slug.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      {/* Search input */}
      <div className="relative mx-auto mb-6 max-w-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search states (e.g., California, TX, New York...)"
          className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-12 pr-10 text-base text-dark shadow-sm transition-all placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          aria-label="Search states by name or abbreviation"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="mb-6 text-center text-sm text-gray-500">
        {debouncedQuery.trim()
          ? `Showing ${filteredStates.length} of ${states.length} states`
          : `${states.length} states available`}
      </p>

      {/* Grid of state cards */}
      {filteredStates.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStates.map((state) => (
            <StateCard key={state.slug} state={state} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 py-16">
          <svg
            className="mb-4 h-12 w-12 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-600">No states found</h3>
          <p className="mt-1 text-sm text-gray-400">
            Try searching with a different state name or abbreviation.
          </p>
          <button
            onClick={clearSearch}
            className="mt-4 text-sm font-semibold text-primary hover:text-blue-700 transition-colors"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}

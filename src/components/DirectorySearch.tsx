'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { StateInfo } from '@/lib/states';
import StateCard from '@/components/StateCard';

type FeeRange = 'all' | 'under50' | '50to100' | 'over100';

interface DirectorySearchProps {
  states: StateInfo[];
}

export default function DirectorySearch({ states }: DirectorySearchProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [feeRange, setFeeRange] = useState<FeeRange>('all');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDebouncedQuery(value);
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const clearSearch = useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
  }, []);

  const clearAllFilters = useCallback(() => {
    clearSearch();
    setOnlineOnly(false);
    setFeeRange('all');
  }, [clearSearch]);

  const filteredStates = states.filter((state) => {
    // Text search
    if (debouncedQuery.trim()) {
      const q = debouncedQuery.toLowerCase().trim();
      const matchesText =
        state.name.toLowerCase().includes(q) ||
        state.abbreviation.toLowerCase().includes(q) ||
        state.slug.toLowerCase().includes(q);
      if (!matchesText) return false;
    }

    // Online filing filter
    if (onlineOnly && !state.onlineFilingAvailable) return false;

    // Fee range filter
    if (feeRange === 'under50' && state.filingFee >= 50) return false;
    if (feeRange === '50to100' && (state.filingFee < 50 || state.filingFee > 100)) return false;
    if (feeRange === 'over100' && state.filingFee <= 100) return false;

    return true;
  });

  const hasActiveFilters = debouncedQuery.trim() || onlineOnly || feeRange !== 'all';

  return (
    <div>
      {/* Search & Filters */}
      <div className="mb-8 space-y-4">
        {/* Search input */}
        <div className="relative mx-auto max-w-2xl">
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
            onChange={handleQueryChange}
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

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Online filing toggle */}
          <button
            onClick={() => setOnlineOnly(!onlineOnly)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              onlineOnly
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
            }`}
            aria-pressed={onlineOnly}
          >
            <svg
              className={`h-4 w-4 ${onlineOnly ? 'text-primary' : 'text-gray-400'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
              />
            </svg>
            Online Filing
            {onlineOnly && (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          {/* Fee range buttons */}
          <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white p-1">
            {[
              { value: 'all' as FeeRange, label: 'All Fees' },
              { value: 'under50' as FeeRange, label: 'Under $50' },
              { value: '50to100' as FeeRange, label: '$50 - $100' },
              { value: 'over100' as FeeRange, label: '$100+' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFeeRange(option.value)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  feeRange === option.value
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Clear all */}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-600"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      {hasActiveFilters && (
        <p className="mb-6 text-center text-sm text-gray-500">
          Showing {filteredStates.length} of {states.length} states
        </p>
      )}

      {/* Grid */}
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
            Try adjusting your search or filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 text-sm font-semibold text-primary transition-colors hover:text-blue-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

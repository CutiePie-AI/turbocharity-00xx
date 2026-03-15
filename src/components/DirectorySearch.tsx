'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { State } from '@/data/states';

interface DirectorySearchProps {
  states: State[];
}

export default function DirectorySearch({ states }: DirectorySearchProps) {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'fee-asc' | 'fee-desc'>('name');

  const filteredStates = useMemo(() => {
    let result = states.filter(
      (state) =>
        state.name.toLowerCase().includes(query.toLowerCase()) ||
        state.abbreviation.toLowerCase().includes(query.toLowerCase())
    );

    switch (sortBy) {
      case 'fee-asc':
        result = [...result].sort((a, b) => a.filingFee - b.filingFee);
        break;
      case 'fee-desc':
        result = [...result].sort((a, b) => b.filingFee - a.filingFee);
        break;
      case 'name':
      default:
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [states, query, sortBy]);

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search states by name or abbreviation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'fee-asc' | 'fee-desc')}
          className="rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="name">Sort: A-Z</option>
          <option value="fee-asc">Sort: Lowest Fee</option>
          <option value="fee-desc">Sort: Highest Fee</option>
        </select>
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm text-gray-500">
        Showing {filteredStates.length} of {states.length} states
      </p>

      {/* State Cards Grid */}
      {filteredStates.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-gray-300 py-12 text-center">
          <p className="text-gray-500">No states match your search. Try a different term.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStates.map((state) => (
            <Link
              key={state.slug}
              href={`/directory/${state.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                    {state.name}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    {state.abbreviation}
                  </span>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-primary">
                  ${state.filingFee}
                </span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {state.processingTime}
                </span>
                {state.hasStateTaxExemption && (
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    State Tax Exempt
                  </span>
                )}
                {state.requiresPublicationNotice && (
                  <span className="inline-flex items-center rounded-md bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                    Publication Required
                  </span>
                )}
              </div>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                View Guide
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

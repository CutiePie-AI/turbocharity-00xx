'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { STATES } from '@/data/states';

export default function DirectorySearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const matchingStates = query.trim()
    ? STATES.filter((state) => {
        const q = query.toLowerCase().trim();
        return (
          state.name.toLowerCase().includes(q) ||
          state.abbreviation.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : [];

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      setIsOpen(true);
      setHighlightedIndex(-1);
    },
    [],
  );

  const handleSelect = useCallback(
    (slug: string) => {
      setQuery('');
      setIsOpen(false);
      router.push(`/states/${slug}`);
    },
    [router],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || matchingStates.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < matchingStates.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : matchingStates.length - 1,
        );
      } else if (e.key === 'Enter' && highlightedIndex >= 0) {
        e.preventDefault();
        handleSelect(matchingStates[highlightedIndex].slug);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    },
    [isOpen, matchingStates, highlightedIndex, handleSelect],
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative mx-auto w-full max-w-2xl">
      {/* Search input */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-6 w-6 text-gray-400"
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
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search your state (e.g., California, TX...)"
          className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-14 pr-4 text-lg text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          aria-label="Search states by name or abbreviation"
          aria-expanded={isOpen && matchingStates.length > 0}
          aria-haspopup="listbox"
          aria-controls="directory-search-listbox"
          role="combobox"
          autoComplete="off"
        />
      </div>

      {/* Autocomplete dropdown */}
      {isOpen && matchingStates.length > 0 && (
        <ul
          id="directory-search-listbox"
          role="listbox"
          className="absolute left-0 right-0 z-20 mt-2 max-h-80 overflow-auto rounded-xl border border-gray-200 bg-white py-2 shadow-lg"
        >
          {matchingStates.map((state, idx) => (
            <li
              key={state.slug}
              role="option"
              aria-selected={highlightedIndex === idx}
              className={`flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors ${
                highlightedIndex === idx
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onMouseEnter={() => setHighlightedIndex(idx)}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(state.slug);
              }}
            >
              <span className="text-sm font-medium text-gray-400">
                {state.abbreviation}
              </span>
              <span className="font-medium">{state.name}</span>
              <svg
                className="ml-auto h-4 w-4 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
          ))}
        </ul>
      )}

      {/* No results message */}
      {isOpen && query.trim() && matchingStates.length === 0 && (
        <div className="absolute left-0 right-0 z-20 mt-2 rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-lg">
          <p className="text-sm text-gray-500">
            No states found matching &ldquo;{query.trim()}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}

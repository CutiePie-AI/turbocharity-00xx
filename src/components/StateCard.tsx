import Link from 'next/link';
import type { StateInfo } from '@/lib/states';

interface StateCardProps {
  state: StateInfo;
}

export default function StateCard({ state }: StateCardProps) {
  return (
    <Link
      href={`/states/${state.slug}`}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
    >
      {/* Header row */}
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
          {state.name}
        </h3>
        <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
          {state.abbreviation}
        </span>
      </div>

      {/* Key info */}
      <div className="mt-4 space-y-3">
        {/* Filing fee */}
        <div className="flex items-center gap-2 text-sm">
          <svg
            className="h-4 w-4 flex-shrink-0 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
          <span className="text-gray-600">Filing Fee:</span>
          <span className="font-semibold text-dark">${state.filingFee}</span>
        </div>

        {/* Processing time */}
        <div className="flex items-center gap-2 text-sm">
          <svg
            className="h-4 w-4 flex-shrink-0 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-gray-600">Processing:</span>
          <span className="font-medium text-dark">{state.processingTime}</span>
        </div>

        {/* Online filing */}
        <div className="flex items-center gap-2 text-sm">
          {state.onlineFilingAvailable ? (
            <>
              <svg
                className="h-4 w-4 flex-shrink-0 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-secondary font-medium">Online Filing Available</span>
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4 flex-shrink-0 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-400">Mail-In Filing Only</span>
            </>
          )}
        </div>
      </div>

      {/* View details arrow */}
      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
        View Details
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

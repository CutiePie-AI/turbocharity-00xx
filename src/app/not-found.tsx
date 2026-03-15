import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — TurboCharity',
  description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Branding */}
      <Link
        href="/"
        className="mb-8 text-2xl font-extrabold tracking-tight text-primary"
      >
        TurboCharity
      </Link>

      {/* 404 badge */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
        <span className="text-4xl font-extrabold text-primary">404</span>
      </div>

      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
        Page not found
      </h1>

      <p className="mx-auto mt-4 max-w-md text-lg text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>

      {/* Helpful links card */}
      <div className="mx-auto mt-8 w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="mb-4 text-sm font-medium text-gray-700">
          Here are some helpful links to get you back on track:
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary hover:bg-blue-50"
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-900">Homepage</span>
          </Link>
          <Link
            href="/states"
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary hover:bg-blue-50"
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-900">State Guides</span>
          </Link>
          <Link
            href="/blog"
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary hover:bg-blue-50"
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-900">Blog</span>
          </Link>
        </div>
      </div>

      {/* Search suggestion */}
      <div className="mx-auto mt-6 w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="mb-3 text-sm font-medium text-gray-700">
          Or try searching for what you need:
        </p>
        <form action="/states" method="get" className="flex gap-2">
          <input
            type="text"
            name="q"
            placeholder="e.g. California nonprofit filing"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm text-dark placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-blue-700"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to homepage
        </Link>
      </div>
    </main>
  );
}

import type { StateInfo } from '@/lib/states';

interface StateSidebarProps {
  state: StateInfo;
}

export default function StateSidebar({ state }: StateSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      {/* Key Facts Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-dark">Key Facts</h2>
        <dl className="mt-4 space-y-4">
          {/* Filing Fee */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                className="h-4 w-4 text-gray-400"
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
              Filing Fee
            </dt>
            <dd className="text-sm font-bold text-primary">${state.filingFee}</dd>
          </div>

          {/* Processing Time */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                className="h-4 w-4 text-gray-400"
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
              Processing Time
            </dt>
            <dd className="text-sm font-semibold text-dark">{state.processingTime}</dd>
          </div>

          {/* Online Filing */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                className="h-4 w-4 text-gray-400"
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
            </dt>
            <dd className="text-sm font-semibold">
              {state.onlineFilingAvailable ? (
                <span className="inline-flex items-center gap-1 text-secondary">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Available
                </span>
              ) : (
                <span className="text-gray-400">Not available</span>
              )}
            </dd>
          </div>

          {/* Publication Notice */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              Publication Notice
            </dt>
            <dd className="text-sm font-semibold">
              {state.requiresPublicationNotice ? (
                <span className="text-amber-600">Required</span>
              ) : (
                <span className="text-secondary">Not required</span>
              )}
            </dd>
          </div>
        </dl>

        {/* SOS Link */}
        <a
          href={state.secretaryOfStateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
        >
          <svg
            className="h-4 w-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          {state.name} Secretary of State
          <svg
            className="ml-auto h-3.5 w-3.5 flex-shrink-0 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* CTA Card */}
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-50 p-6">
        <h3 className="text-lg font-extrabold text-dark">
          Start Your {state.name} Nonprofit with TurboCharity
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Skip the paperwork headaches. Our AI-powered platform handles your{' '}
          {state.name} nonprofit filing from start to finish.
        </p>
        <ul className="mt-4 space-y-2">
          {[
            `${state.name} Articles of Incorporation`,
            'Custom Bylaws & Policies',
            '501(c)(3) Application',
            'Registered Agent Service',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <svg
                className="h-4 w-4 flex-shrink-0 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <a
          href="/#pricing"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
        >
          Start Filing
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

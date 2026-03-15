import type { StateInfo } from '@/lib/states';

interface StateSidebarProps {
  state: StateInfo;
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function StateSidebar({ state }: StateSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      {/* Key Facts Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-dark">Key Facts</h2>

        {/* Filing fee prominently displayed */}
        <div className="mt-4 rounded-xl bg-primary/5 p-4 text-center">
          <p className="text-3xl font-extrabold text-primary">${state.filingFee}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">State Filing Fee</p>
        </div>

        <dl className="mt-5 space-y-4">
          {/* Processing Time */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Processing Time
            </dt>
            <dd className="text-sm font-semibold text-dark">{state.processingTime}</dd>
          </div>

          {/* Online Filing */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
              </svg>
              Online Filing
            </dt>
            <dd className="text-sm font-semibold">
              {state.onlineFilingAvailable ? (
                <span className="inline-flex items-center gap-1 text-secondary">
                  <CheckIcon /> Available
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-gray-400">
                  <XIcon /> Not available
                </span>
              )}
            </dd>
          </div>

          {/* Minimum Board Members */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              Board Members
            </dt>
            <dd className="text-sm font-semibold text-dark">{state.minimumBoardMembers} minimum</dd>
          </div>

          {/* Annual Report */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Annual Report
            </dt>
            <dd className="text-right text-sm font-semibold text-dark">
              {state.annualReportFee > 0 ? `$${state.annualReportFee}` : 'Free'}
              <span className="block text-xs font-normal text-gray-400">{state.annualReportFrequency}</span>
            </dd>
          </div>

          {/* State Tax Exemption */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Tax Exemption
            </dt>
            <dd className="text-sm font-semibold">
              {state.stateTaxExemption ? (
                <span className="inline-flex items-center gap-1 text-secondary">
                  <CheckIcon /> Available
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-gray-400">
                  <XIcon /> N/A
                </span>
              )}
            </dd>
          </div>

          {/* Registered Agent */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Registered Agent
            </dt>
            <dd className="text-sm font-semibold">
              {state.requiresRegisteredAgent ? (
                <span className="text-amber-600">Required</span>
              ) : (
                <span className="text-secondary">Not required</span>
              )}
            </dd>
          </div>

          {/* Publication Notice */}
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
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
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {state.name} Secretary of State
          <svg className="ml-auto h-3.5 w-3.5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
              <svg className="h-4 w-4 flex-shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

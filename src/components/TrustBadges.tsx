interface TrustBadgesProps {
  className?: string;
}

// ─── SVG icon components ─────────────────────────────────────────────────────

function MapIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

const BADGES: ReadonlyArray<{
  icon: React.ReactNode;
  label: string;
  stat: string;
}> = [
  {
    icon: <MapIcon />,
    label: '50-State Coverage',
    stat: 'All US states + DC',
  },
  {
    icon: <ShieldIcon />,
    label: 'IRS Compliant',
    stat: 'Up-to-date with regulations',
  },
  {
    icon: <LockIcon />,
    label: '256-bit Encryption',
    stat: 'Your data is secure',
  },
  {
    icon: <UsersIcon />,
    label: '10,000+ Nonprofits Helped',
    stat: 'Trusted nationwide',
  },
];

export default function TrustBadges({ className = '' }: TrustBadgesProps) {
  return (
    <div className={className}>
      {/* 4 cols desktop, 2 cols mobile */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {BADGES.map((badge) => (
          <div
            key={badge.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary">
              {badge.icon}
            </span>
            <span className="text-sm font-semibold text-dark">
              {badge.label}
            </span>
            <span className="text-xs text-gray-400">{badge.stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

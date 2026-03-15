interface TrustBadgesProps {
  className?: string;
}

const BADGES: ReadonlyArray<{
  emoji: string;
  label: string;
}> = [
  { emoji: '\uD83D\uDD12', label: 'Secure' },
  { emoji: '\u26A1', label: 'Fast' },
  { emoji: '\uD83D\uDCB0', label: 'Free Guides' },
  { emoji: '\uD83D\uDCCB', label: '50 States' },
];

export default function TrustBadges({ className = '' }: TrustBadgesProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 ${className}`}
    >
      {BADGES.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 text-sm font-medium text-gray-600"
        >
          <span className="text-lg" role="img" aria-hidden="true">
            {badge.emoji}
          </span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

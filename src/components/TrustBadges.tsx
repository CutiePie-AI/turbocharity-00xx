interface TrustBadgesProps {
  className?: string;
}

const badges = [
  { icon: "🔒", label: "Bank-Level Security" },
  { icon: "📋", label: "IRS Compliant" },
  { icon: "⭐", label: "4.9/5 Rating" },
  { icon: "🏛️", label: "All 50 States" },
  { icon: "💰", label: "Money-Back Guarantee" },
];

export default function TrustBadges({ className = "" }: TrustBadgesProps) {
  return (
    <div className={className}>
      {/* Mobile: horizontally scrollable */}
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide md:hidden">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex shrink-0 items-center gap-2 text-gray-500"
          >
            <span className="text-lg" role="img" aria-label={badge.label}>
              {badge.icon}
            </span>
            <span className="whitespace-nowrap text-xs font-medium">
              {badge.label}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop: centered grid */}
      <div className="hidden flex-wrap items-center justify-center gap-x-8 gap-y-3 md:flex">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 text-gray-500"
          >
            <span className="text-lg" role="img" aria-label={badge.label}>
              {badge.icon}
            </span>
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ReactNode } from 'react';

type BadgeColor = 'green' | 'blue' | 'yellow' | 'red' | 'gray';

interface BadgeProps {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorStyles: Record<BadgeColor, string> = {
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800',
  gray: 'bg-gray-100 text-gray-700',
};

export default function Badge({
  children,
  color = 'gray',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}

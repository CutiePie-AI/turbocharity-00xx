import { type ReactNode } from 'react';

type BadgeVariant = 'blue' | 'green' | 'yellow' | 'gray' | 'red';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  gray: 'bg-gray-100 text-gray-700',
  red: 'bg-red-100 text-red-700',
};

/**
 * Small pill badge component for categories, tags, and status indicators.
 */
export default function Badge({
  children,
  variant = 'gray',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

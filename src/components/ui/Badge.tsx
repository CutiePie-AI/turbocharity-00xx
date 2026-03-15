type BadgeVariant = 'success' | 'warning' | 'info' | 'default';

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  warning: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  info: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  default: 'bg-gray-50 text-gray-700 ring-gray-600/20',
};

export default function Badge({ text, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${variantStyles[variant]}`}
    >
      {text}
    </span>
  );
}

import Link from 'next/link';
import { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Button content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** If provided, renders as a Next.js Link */
  href?: string;
  /** Click handler (ignored when href is provided) */
  onClick?: () => void;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Disabled state */
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#2563EB] text-white hover:bg-[#1d4ed8] focus-visible:outline-[#2563EB] shadow-sm hover:shadow-md',
  secondary:
    'bg-[#7C3AED] text-white hover:bg-[#6d28d9] focus-visible:outline-[#7C3AED] shadow-sm hover:shadow-md',
  outline:
    'border-2 border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB] hover:text-white focus-visible:outline-[#2563EB]',
  accent:
    'bg-[#10B981] text-white hover:bg-[#059669] focus-visible:outline-[#10B981] shadow-sm hover:shadow-md',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

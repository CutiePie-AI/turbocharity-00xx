import Link from 'next/link';
import { type ReactNode, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Button contents */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  /** When provided the component renders as a Next.js Link */
  href: string;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  /** Click handler (only for non-link buttons) */
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#2563EB] text-white shadow-sm hover:bg-[#1d4ed8] hover:shadow-md',
  secondary:
    'bg-[#7C3AED] text-white shadow-sm hover:bg-[#6d28d9] hover:shadow-md',
  outline:
    'border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white',
  accent:
    'bg-[#10B981] text-white shadow-sm hover:bg-[#059669] hover:shadow-md',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2';

  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

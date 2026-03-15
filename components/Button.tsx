import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-[#2563EB] text-white hover:bg-[#1d4ed8] active:bg-[#1e40af]',
  secondary:
    'bg-[#7C3AED] text-white hover:bg-[#6d28d9] active:bg-[#5b21b6]',
  outline:
    'border-2 border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB] hover:text-white',
  accent:
    'bg-[#10B981] text-white hover:bg-[#059669] active:bg-[#047857]',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

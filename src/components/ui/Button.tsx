'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-blue-700 active:bg-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
  secondary:
    'bg-secondary text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-blue-700',
  ghost:
    'text-gray-600 hover:text-primary hover:bg-gray-50 active:bg-gray-100',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2';

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

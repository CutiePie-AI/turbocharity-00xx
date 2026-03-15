import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-blue-700',
  secondary: 'bg-secondary text-white hover:bg-emerald-600',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return <button className={combinedStyles}>{children}</button>;
}

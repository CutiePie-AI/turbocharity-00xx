import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    'bg-primary text-white hover:bg-blue-700 focus-visible:ring-primary shadow-lg shadow-primary/25',
  secondary:
    'bg-secondary text-white hover:bg-emerald-600 focus-visible:ring-secondary shadow-lg shadow-secondary/25',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
};

const sizes = {
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
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

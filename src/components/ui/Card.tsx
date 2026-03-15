import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  href,
  className = '',
}: CardProps) {
  const cardContent = (
    <div
      className={`group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 ${
        href ? 'cursor-pointer hover:border-primary/30' : ''
      } ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
}

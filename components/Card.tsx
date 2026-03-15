import Link from 'next/link';
import { type ReactNode } from 'react';

interface CardProps {
  /** Card heading */
  title: string;
  /** Card body text */
  description: string;
  /** Icon or graphic rendered above the title */
  icon?: ReactNode;
  /** If provided, wraps the card in a link */
  href?: string;
  /** Additional CSS classes */
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  href,
  className = '',
}: CardProps) {
  const content = (
    <div
      className={`rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${className}`.trim()}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[#0F172A]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}

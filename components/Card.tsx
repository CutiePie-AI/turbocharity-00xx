import { type ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

const Card = ({ title, description, icon, href, className = '' }: CardProps) => {
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
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;

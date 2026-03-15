import Link from 'next/link';

interface BreadcrumbItem {
  /** Display text */
  label: string;
  /** URL for the breadcrumb link. The last item's href is ignored (rendered as plain text). */
  href: string;
}

interface BreadcrumbsProps {
  /** Ordered list of breadcrumb items */
  items: BreadcrumbItem[];
  /** Additional CSS classes */
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm ${className}`.trim()}
    >
      <ol className="flex flex-wrap items-center gap-1" role="list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${index}`} className="flex items-center gap-1">
              {/* Separator */}
              {index > 0 && (
                <span className="text-gray-400 select-none" aria-hidden="true">
                  /
                </span>
              )}

              {isLast ? (
                <span className="font-medium text-[#0F172A]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 transition-colors hover:text-[#2563EB]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

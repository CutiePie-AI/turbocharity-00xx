import Link from 'next/link';

interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** URL for the breadcrumb segment (omit for the current/last page) */
  href: string;
}

interface BreadcrumbsProps {
  /** Ordered list of breadcrumb items — the last item renders as plain text */
  items: BreadcrumbItem[];
  /** Additional CSS classes */
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-1">
              {index > 0 && (
                <span className="select-none text-gray-400" aria-hidden="true">
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
                  className="transition-colors hover:text-[#2563EB]"
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

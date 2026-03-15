import Link from 'next/link';
import type { BlogPost } from '@/data/blog-posts';

interface BlogCardProps {
  post: BlogPost;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Getting Started': 'bg-blue-50 text-blue-700',
  'Legal Guide': 'bg-purple-50 text-purple-700',
  'Fundraising': 'bg-emerald-50 text-emerald-700',
  'Tax Compliance': 'bg-amber-50 text-amber-700',
  'State Guides': 'bg-rose-50 text-rose-700',
};

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  const categoryColor =
    CATEGORY_COLORS[post.category] ?? 'bg-gray-50 text-gray-700';

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Category badge + meta */}
      <div className="flex items-center gap-3">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColor}`}
        >
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-bold leading-snug text-dark transition-colors group-hover:text-primary">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
        {post.excerpt}
      </p>

      {/* Footer: date + read time */}
      <div className="mt-4 flex items-center gap-4 border-t border-gray-50 pt-4 text-xs text-gray-400">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span className="flex items-center gap-1">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {post.readingTime} min read
        </span>
      </div>
    </Link>
  );
}

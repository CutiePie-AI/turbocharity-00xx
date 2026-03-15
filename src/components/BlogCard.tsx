import Link from 'next/link';
import type { BlogPost } from '@/data/blog-posts';

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Category & reading time header */}
      <div className="flex items-center justify-between border-b border-gray-50 px-6 py-3">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          {post.category}
        </span>
        <span className="text-xs font-medium text-gray-400">
          {post.readingTime} min read
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 py-5">
        <time
          dateTime={post.publishedAt}
          className="text-xs font-medium text-gray-400"
        >
          {formatDate(post.publishedAt)}
        </time>

        <h2 className="mt-2 text-lg font-bold leading-snug text-dark transition-colors group-hover:text-primary">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-50 px-6 py-3">
        <span className="text-xs font-medium text-gray-500">{post.author}</span>
        <span className="text-xs font-semibold text-primary transition-colors group-hover:text-blue-700">
          Read more &rarr;
        </span>
      </div>
    </article>
  );
}

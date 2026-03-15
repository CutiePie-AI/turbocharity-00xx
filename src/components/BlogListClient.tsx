'use client';

import { useState, useMemo } from 'react';
import type { BlogPost } from '@/data/blog-posts';
import BlogCard from '@/components/BlogCard';
import BlogCategoryFilter from '@/components/BlogCategoryFilter';

interface BlogListClientProps {
  posts: BlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)));
    unique.sort();
    return unique;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <BlogCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm font-medium text-gray-500">
        Showing {filteredPosts.length} of {posts.length} article
        {posts.length !== 1 ? 's' : ''}
        {activeCategory !== 'All' && (
          <span>
            {' '}
            in <span className="font-semibold text-primary">{activeCategory}</span>
          </span>
        )}
      </p>

      {/* Post grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="relative">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <p className="mt-4 text-lg font-semibold text-gray-400">
            No articles found in this category.
          </p>
          <button
            onClick={() => setActiveCategory('All')}
            className="mt-3 text-sm font-medium text-primary hover:underline"
          >
            View all articles
          </button>
        </div>
      )}
    </div>
  );
}

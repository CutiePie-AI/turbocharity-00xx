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
      <div className="mb-10">
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
          <p className="text-lg font-semibold text-gray-400">
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

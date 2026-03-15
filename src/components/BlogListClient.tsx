'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import BlogCategoryFilter from '@/components/BlogCategoryFilter';
import type { BlogPost } from '@/data/blog-posts';

interface BlogListClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogListClient({
  posts,
  categories,
}: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <div className="mb-10">
        <BlogCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg text-gray-500">
            No posts found in this category yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

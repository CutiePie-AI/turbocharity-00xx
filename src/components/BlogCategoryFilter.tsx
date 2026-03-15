'use client';

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PILL_BASE =
  'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2';

export default function BlogCategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogCategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter blog posts by category"
    >
      <button
        role="tab"
        aria-selected={activeCategory === 'All'}
        onClick={() => onCategoryChange('All')}
        className={`${PILL_BASE} ${
          activeCategory === 'All'
            ? 'bg-primary text-white shadow-sm shadow-blue-500/25'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={activeCategory === category}
          onClick={() => onCategoryChange(category)}
          className={`${PILL_BASE} ${
            activeCategory === category
              ? 'bg-primary text-white shadow-sm shadow-blue-500/25'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

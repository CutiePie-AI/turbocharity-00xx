'use client';

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onCategoryChange('All')}
        className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
          activeCategory === 'All'
            ? 'bg-primary text-white shadow-md shadow-blue-500/25'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
            activeCategory === category
              ? 'bg-primary text-white shadow-md shadow-blue-500/25'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

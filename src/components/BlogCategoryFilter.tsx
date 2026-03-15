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
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('All')}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          activeCategory === 'All'
            ? 'bg-primary text-white shadow-sm'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            activeCategory === category
              ? 'bg-primary text-white shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

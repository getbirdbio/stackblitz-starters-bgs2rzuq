import { categories } from '@/utils/categories';

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function FilterBar({ selectedCategory, onSelectCategory }: FilterBarProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      <button
        onClick={() => onSelectCategory('')}
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          !selectedCategory 
            ? 'bg-green-500 text-white' 
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        All Products
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === category 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
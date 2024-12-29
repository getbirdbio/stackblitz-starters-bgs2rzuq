import Link from 'next/link';
import { categories } from '@/utils/categories';

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/shop/category/${category.toLowerCase()}`}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-2">
                {category === 'Flower' ? '🌿' :
                 category === 'Vapes' ? '💨' :
                 category === 'Edibles' ? '🍬' :
                 category === 'Pre-rolls' ? '🚬' :
                 category === 'Concentrates' ? '💎' :
                 '📦'}
              </span>
              <h3 className="text-lg font-medium">{category}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
import { categories } from '@/utils/categories';
import { products } from '@/utils/products';
import ProductGrid from '@/components/shop/ProductGrid';
import { useCart } from '@/hooks/useCart';

// This needs to be a server component export
export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.toLowerCase(),
  }));
}

// Mark this as a client component
'use client';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { addItem } = useCart();
  const categoryProducts = products.filter(
    p => p.category.toLowerCase() === params.slug.toLowerCase()
  );

  if (categoryProducts.length === 0) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-4 capitalize">{params.slug}</h1>
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">{params.slug}</h1>
        <ProductGrid products={categoryProducts} onAddToCart={addItem} />
      </div>
    </div>
  );
}
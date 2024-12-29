'use client';

import { useParams } from 'next/navigation';
import { products } from '@/utils/products';
import ProductDetails from '@/components/shop/ProductDetails';
import { useCart } from '@/hooks/useCart';
import RelatedProducts from '@/components/shop/RelatedProducts';

export default function ProductPage() {
  const params = useParams();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return <div className="min-h-screen pt-16 text-center">Product not found</div>;
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetails product={product} onAddToCart={addItem} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
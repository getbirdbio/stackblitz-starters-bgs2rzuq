import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/shop/${product.id}`} className="block p-4">
        <div className="text-center text-4xl mb-4">{product.image}</div>
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-gray-600">{product.brand}</p>
        {product.thc && (
          <p className="text-sm text-gray-500">THC: {product.thc}%</p>
        )}
        <p className="mt-2 text-lg font-bold">${product.price}</p>
      </Link>
      <div className="px-4 pb-4">
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
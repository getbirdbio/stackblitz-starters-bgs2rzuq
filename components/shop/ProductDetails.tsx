import { Product } from '@/types';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetails({ product, onAddToCart }: ProductDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center text-8xl">
          {product.image}
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
          
          <div className="mb-6">
            <p className="text-2xl font-bold">${product.price}</p>
          </div>
          
          {(product.thc || product.cbd) && (
            <div className="mb-6 space-y-2">
              {product.thc && (
                <p className="text-sm">THC: {product.thc}%</p>
              )}
              {product.cbd && (
                <p className="text-sm">CBD: {product.cbd}%</p>
              )}
            </div>
          )}
          
          <p className="mb-6 text-gray-600">{product.description}</p>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full md:w-auto btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cart, removeItem } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cart.items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button
              onClick={() => router.push('/shop')}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {cart.items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{item.product.image}</span>
                  <div>
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-gray-500">{item.product.brand}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <p className="text-lg">${item.product.price}</p>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center pt-4">
              <p className="text-xl font-bold">Total: ${cart.total.toFixed(2)}</p>
              <button
                onClick={handleCheckout}
                className="btn-primary"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
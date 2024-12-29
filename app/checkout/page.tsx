'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import PaystackCheckout from '@/components/payment/PaystackCheckout';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart } = useCart();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSuccess = (reference: string) => {
    console.log('Payment successful:', reference);
    // Handle successful payment (clear cart, show confirmation, etc.)
  };

  const handleError = (error: Error) => {
    setError(error.message);
  };

  if (cart.items.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.items.map((item) => (
            <div key={item.product.id} className="flex justify-between py-2">
              <span>{item.product.name} × {item.quantity}</span>
              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${cart.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          
          <PaystackCheckout
            cart={cart}
            email={email}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </div>
      </div>
    </div>
  );
}
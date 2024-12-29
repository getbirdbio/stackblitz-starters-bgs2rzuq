'use client';

import { useState } from 'react';
import { usePaystackPayment } from '@/hooks/usePaystackPayment';
import type { CartState } from '@/types';

interface PaystackCheckoutProps {
  cart: CartState;
  email: string;
  onSuccess: (reference: string) => void;
  onError: (error: Error) => void;
}

export default function PaystackCheckout({
  cart,
  email,
  onSuccess,
  onError
}: PaystackCheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { initializePayment } = usePaystackPayment();

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await initializePayment({
        amount: cart.total * 100, // Convert to kobo
        email,
        metadata: {
          cart_items: cart.items.map(item => ({
            id: item.product.id,
            quantity: item.quantity
          }))
        }
      });
      
      // Redirect to Paystack checkout
      window.location.href = response.data.authorization_url;
      onSuccess(response.data.reference);
    } catch (error) {
      onError(error as Error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isProcessing}
      className="w-full btn-primary disabled:opacity-50"
    >
      {isProcessing ? 'Processing...' : 'Pay with Paystack'}
    </button>
  );
}
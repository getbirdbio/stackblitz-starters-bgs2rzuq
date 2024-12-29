import { useState } from 'react';
import { createPayment } from '@/lib/payment';
import type { PaymentRequest } from '@/lib/payment';

interface BitPayButtonProps {
  amount: number;
  orderId: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export default function BitPayButton({ 
  amount, 
  orderId, 
  onSuccess, 
  onError 
}: BitPayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const request: PaymentRequest = {
        price: amount,
        currency: 'USD',
        orderId
      };

      const payment = await createPayment(request);
      window.location.href = payment.url;
      onSuccess?.();
    } catch (error) {
      console.error('Payment failed:', error);
      onError?.(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full btn-primary disabled:opacity-50"
    >
      {loading ? 'Processing...' : 'Pay with BitPay'}
    </button>
  );
}
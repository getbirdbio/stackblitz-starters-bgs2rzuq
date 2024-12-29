import { useState } from 'react';
import { PaystackButton as Button } from '@paystack/inline-js';
import { PAYSTACK_CONFIG } from '@/lib/payment/config';
import type { PaymentRequest } from '@/lib/payment/types';

interface PaystackButtonProps {
  amount: number;
  email: string;
  metadata?: Record<string, unknown>;
  currency?: string;
  onSuccess?: (reference: string) => void;
  onError?: (error: Error) => void;
}

export default function PaystackButton({
  amount,
  email,
  metadata,
  currency = 'NGN',
  onSuccess,
  onError,
}: PaystackButtonProps) {
  const [loading, setLoading] = useState(false);

  const config: PaymentRequest = {
    amount,
    email,
    metadata,
    currency,
    callback_url: PAYSTACK_CONFIG.callbackUrl,
  };

  const handlePayment = () => {
    setLoading(true);
    const handler = Button({
      ...config,
      publicKey: PAYSTACK_CONFIG.publicKey,
      onSuccess: (transaction) => {
        setLoading(false);
        onSuccess?.(transaction.reference);
      },
      onError: (error) => {
        setLoading(false);
        onError?.(error);
      },
    });
    handler.openIframe();
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full btn-primary disabled:opacity-50"
    >
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  );
}
import { useState } from 'react';
import type { PaystackVerification } from '@/lib/paystack/types';

export function usePaystackVerification() {
  const [isVerifying, setIsVerifying] = useState(false);

  const verifyPayment = async (reference: string): Promise<PaystackVerification> => {
    setIsVerifying(true);
    try {
      const response = await fetch(`/api/payments/verify?reference=${reference}`);
      if (!response.ok) {
        throw new Error('Payment verification failed');
      }
      return response.json();
    } finally {
      setIsVerifying(false);
    }
  };

  return { verifyPayment, isVerifying };
}
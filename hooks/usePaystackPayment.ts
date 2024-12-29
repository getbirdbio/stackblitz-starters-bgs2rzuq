import { PAYSTACK_CONFIG } from '@/lib/paystack/config';
import type { PaystackTransaction, PaystackResponse } from '@/lib/paystack/types';

export function usePaystackPayment() {
  const initializePayment = async (transaction: PaystackTransaction): Promise<PaystackResponse> => {
    const response = await fetch('/api/payments/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });

    if (!response.ok) {
      throw new Error('Payment initialization failed');
    }

    return response.json();
  };

  return { initializePayment };
}
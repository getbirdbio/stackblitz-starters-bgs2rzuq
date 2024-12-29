import { PAYSTACK_CONFIG } from './config';
import type { PaymentRequest, PaymentResponse, PaymentVerification } from './types';

export async function initializePayment(request: PaymentRequest): Promise<PaymentResponse> {
  try {
    const response = await fetch(`${PAYSTACK_CONFIG.baseUrl}/transaction/initialize`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_CONFIG.secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...request,
        amount: request.amount * 100, // Convert to kobo/cents
        callback_url: request.callback_url || PAYSTACK_CONFIG.callbackUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Payment initialization failed');
    }

    return response.json();
  } catch (error) {
    console.error('Paystack payment initialization failed:', error);
    throw new Error('Failed to initialize payment');
  }
}

export async function verifyPayment(reference: string): Promise<PaymentVerification> {
  try {
    const response = await fetch(
      `${PAYSTACK_CONFIG.baseUrl}/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_CONFIG.secretKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Payment verification failed');
    }

    return response.json();
  } catch (error) {
    console.error('Paystack payment verification failed:', error);
    throw new Error('Failed to verify payment');
  }
}
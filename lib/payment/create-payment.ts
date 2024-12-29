import { getBitPayClient } from './client';
import { BITPAY_CONFIG } from './config';
import type { PaymentRequest, PaymentResponse } from './types';

export async function createPayment(request: PaymentRequest): Promise<PaymentResponse> {
  try {
    const client = getBitPayClient();
    
    const invoice = await client.createInvoice({
      price: request.price,
      currency: request.currency,
      orderId: request.orderId,
      buyerEmail: request.buyerEmail,
      notificationURL: BITPAY_CONFIG.notificationURL,
      redirectURL: BITPAY_CONFIG.redirectURL,
      extendedNotifications: true
    });

    return {
      id: invoice.id,
      url: invoice.url,
      status: invoice.status,
      price: invoice.price,
      currency: invoice.currency
    };
  } catch (error) {
    console.error('BitPay payment creation failed:', error);
    throw new Error('Failed to create payment');
  }
}
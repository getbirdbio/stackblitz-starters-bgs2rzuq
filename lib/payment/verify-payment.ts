import { getBitPayClient } from './client';
import type { PaymentVerification } from './types';

export async function verifyPayment(invoiceId: string): Promise<PaymentVerification> {
  try {
    const client = getBitPayClient();
    const invoice = await client.getInvoice(invoiceId);

    return {
      id: invoice.id,
      status: invoice.status,
      price: invoice.price,
      currency: invoice.currency,
      paymentDate: invoice.paymentDate ? new Date(invoice.paymentDate) : undefined
    };
  } catch (error) {
    console.error('BitPay payment verification failed:', error);
    throw new Error('Failed to verify payment');
  }
}
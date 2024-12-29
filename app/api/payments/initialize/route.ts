import { NextResponse } from 'next/server';
import { PAYSTACK_CONFIG } from '@/lib/paystack/config';
import type { PaystackTransaction } from '@/lib/paystack/types';

export async function POST(request: Request) {
  try {
    const transaction: PaystackTransaction = await request.json();

    const response = await fetch(`${PAYSTACK_CONFIG.baseUrl}/transaction/initialize`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...transaction,
        callback_url: PAYSTACK_CONFIG.callbackUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Payment initialization failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Payment initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize payment' },
      { status: 500 }
    );
  }
}
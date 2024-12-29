import { NextResponse } from 'next/server';
import { verifyPayment } from '@/lib/payment/api';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    // Verify webhook signature
    const signature = request.headers.get('x-paystack-signature');
    const payload = await request.text();
    
    const hash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
      .update(payload)
      .digest('hex');
    
    if (hash !== signature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event = JSON.parse(payload);
    
    // Handle different event types
    switch (event.event) {
      case 'charge.success':
        const verification = await verifyPayment(event.data.reference);
        // Handle successful payment
        // Update order status, send confirmation email, etc.
        break;
        
      // Handle other event types as needed
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Payment webhook error:', error);
    return NextResponse.json(
      { error: 'Failed to process payment notification' },
      { status: 500 }
    );
  }
}
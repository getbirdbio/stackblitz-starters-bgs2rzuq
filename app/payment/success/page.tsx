'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePaystackVerification } from '@/hooks/usePaystackVerification';

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { verifyPayment, isVerifying } = usePaystackVerification();
  const [error, setError] = useState('');

  useEffect(() => {
    const reference = searchParams.get('reference');
    if (!reference) {
      router.push('/cart');
      return;
    }

    verifyPayment(reference)
      .then((verification) => {
        if (verification.data.status === 'success') {
          // Handle successful payment (clear cart, update order status, etc.)
          setTimeout(() => router.push('/shop'), 3000);
        } else {
          setError('Payment verification failed');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Payment Failed</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/cart')}
            className="btn-primary"
          >
            Return to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          {isVerifying ? 'Verifying Payment...' : 'Payment Successful!'}
        </h1>
        <p className="text-gray-600">
          {isVerifying 
            ? 'Please wait while we verify your payment...'
            : 'Thank you for your purchase. You will be redirected shortly.'}
        </p>
      </div>
    </div>
  );
}
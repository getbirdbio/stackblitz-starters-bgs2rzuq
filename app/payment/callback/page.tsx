import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { verifyPayment } from '@/lib/payment/api';

export default function PaymentCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference');

  useEffect(() => {
    if (reference) {
      verifyPayment(reference)
        .then((verification) => {
          if (verification.data.status === 'success') {
            // Handle successful payment
            router.push('/order/success');
          } else {
            // Handle failed payment
            router.push('/order/failed');
          }
        })
        .catch((error) => {
          console.error('Payment verification failed:', error);
          router.push('/order/failed');
        });
    }
  }, [reference, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Verifying Payment</h1>
        <p className="text-gray-600">Please wait while we verify your payment...</p>
      </div>
    </div>
  );
}
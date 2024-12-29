'use client';

import AgeVerification from '@/components/AgeVerification';
import { useAgeVerification } from '@/hooks/useAgeVerification';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isVerified, verifyAge } = useAgeVerification();

  return (
    <>
      {!isVerified && <AgeVerification onVerified={verifyAge} />}
      {children}
    </>
  );
}
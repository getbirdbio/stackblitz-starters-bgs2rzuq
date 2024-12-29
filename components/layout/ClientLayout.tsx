'use client';

import { AgeVerification } from '@/components/verification';
import { useAgeVerification } from '@/hooks/useAgeVerification';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isVerified, verifyAge } = useAgeVerification();

  return (
    <>
      {!isVerified && <AgeVerification onVerified={verifyAge} />}
      {children}
    </>
  );
}
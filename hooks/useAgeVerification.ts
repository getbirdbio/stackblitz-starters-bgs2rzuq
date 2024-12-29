'use client';

import { useState, useEffect } from 'react';

export function useAgeVerification() {
  const [isVerified, setIsVerified] = useState(true); // Default to true to prevent flash
  
  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    setIsVerified(!!verified);
  }, []);

  const verifyAge = () => {
    localStorage.setItem('age-verified', 'true');
    setIsVerified(true);
  };

  return {
    isVerified,
    verifyAge
  };
}
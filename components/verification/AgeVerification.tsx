'use client';

import { useState } from 'react';

interface AgeVerificationProps {
  onVerified: () => void;
}

export default function AgeVerification({ onVerified }: AgeVerificationProps) {
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    
    if (age < 21) {
      setError('You must be 21 or older to access this site');
      return;
    }
    
    onVerified();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Age Verification</h2>
        <p className="mb-6 text-center text-gray-600">
          You must be 21 or older to enter this site
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          <button
            onClick={handleVerify}
            disabled={!birthDate}
            className="w-full btn-primary disabled:opacity-50"
          >
            Verify Age
          </button>
        </div>
      </div>
    </div>
  );
}
export const PAYSTACK_CONFIG = {
  publicKey: 'pk_test_1adf1ec46a2b677d56fc31cefb05119cde3a9bcf',
  baseUrl: 'https://api.paystack.co',
  callbackUrl: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/payment/callback`,
} as const;
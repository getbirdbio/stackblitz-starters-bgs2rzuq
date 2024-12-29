export const PAYSTACK_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
  secretKey: process.env.PAYSTACK_SECRET_KEY || '',
  merchantEmail: process.env.PAYSTACK_MERCHANT_EMAIL || '',
  baseUrl: 'https://api.paystack.co',
  callbackUrl: `${process.env.NEXT_PUBLIC_URL}/payment/callback`,
} as const;

export const SUPPORTED_CURRENCIES = ['NGN', 'USD', 'GHS'] as const;
export type SupportedCurrency = typeof SUPPORTED_CURRENCIES[number];
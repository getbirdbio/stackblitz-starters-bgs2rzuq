import { Client, Invoice } from 'bitpay-sdk';
import { BITPAY_CONFIG } from './config';

// Singleton BitPay client instance
let client: Client | null = null;

export function getBitPayClient(): Client {
  if (!client) {
    if (!BITPAY_CONFIG.apiKey) {
      throw new Error('BitPay API key is not configured');
    }

    client = new Client(BITPAY_CONFIG.apiKey, {
      env: BITPAY_CONFIG.environment
    });
  }

  return client;
}
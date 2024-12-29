import BitPay from 'bitpay';

// Initialize BitPay client
const client = new BitPay({
  apiKey: process.env.BITPAY_API_KEY,
  env: process.env.NODE_ENV === 'production' ? 'prod' : 'test'
});

export default client;
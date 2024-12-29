export interface PaystackConfig {
  publicKey: string;
  secretKey: string;
  merchantEmail: string;
}

export interface PaymentRequest {
  amount: number;
  email: string;
  reference?: string;
  metadata?: Record<string, unknown>;
  currency?: string;
  callback_url?: string;
}

export interface PaymentResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface PaymentVerification {
  status: boolean;
  message: string;
  data: {
    status: string;
    reference: string;
    amount: number;
    paid_at: string;
    channel: string;
    currency: string;
    transaction_date: string;
    metadata: Record<string, unknown>;
  };
}
export interface PaystackTransaction {
  amount: number;
  email: string;
  reference?: string;
  metadata?: Record<string, unknown>;
  currency?: string;
  callback_url?: string;
}

export interface PaystackResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface PaystackVerification {
  status: boolean;
  message: string;
  data: {
    status: string;
    reference: string;
    amount: number;
    paid_at: string;
    channel: string;
    currency: string;
    metadata: Record<string, unknown>;
  };
}
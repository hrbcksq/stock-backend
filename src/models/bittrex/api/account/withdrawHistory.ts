import { Currency } from '../static';

export interface WithdrawHistory {
  PaymentUuid: string;
  Currency: Currency;
  Amount: number;
  Address: string;
  Opened: Date;
  Authorized: boolean;
  PendingPayment: boolean;
  TxCost: number;
  TxId: null;
  Canceled: boolean;
  InvalidAddress: boolean;
}
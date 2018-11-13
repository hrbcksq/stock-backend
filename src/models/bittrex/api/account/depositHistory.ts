import { Currency } from '../static';

export interface DepositHistory {
  PaymentUuid: string;
  Currency: Currency;
  Amount: number;
  Address: string;
  Opened: Date;
  Authorized: boolean;
  PendingPayment: boolean;
  TxCost: number;
  TxId: string;
  Canceled: boolean;
  InvalidAddress: boolean;
}
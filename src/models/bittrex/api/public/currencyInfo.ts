import { Currency } from 'models';

export interface CurrencyInfo {
  Currency: Currency;
  CurrencyLong: string;
  MinConfirmation: number;
  TxFee: number;
  IsActive: boolean;
  CoinType: string;
  BaseAddress: string;
}
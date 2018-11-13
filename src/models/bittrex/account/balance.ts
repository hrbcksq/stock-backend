import { Currency } from '../static';

export interface Balance {
  Currency: Currency;
  Balance: number;
  Available: number;
  Pending: number;
  CryptoAddress: string;
  Requested: boolean;
  Uuid: null;
}
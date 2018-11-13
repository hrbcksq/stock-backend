import { Currency } from 'models';

export interface MarketSummary {
  MarketName: Currency;
  High: number;
  Low: number;
  Volume: number;
  Last: number;
  BaseVolume: number;
  TimeStamp: Date;
  Bid: number;
  Ask: number;
  OpenBuyOrders: number;
  OpenSellOrders: number;
  PrevDay: number;
  Created: Date;
  DisplayMarketName: string;
}
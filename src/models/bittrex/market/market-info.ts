import { Currency, Market } from 'models';

export interface MarketInfo {
    MarketCurrency: Currency;
    BaseCurrency: Currency;
    MarketCurrencyLong: string;
    BaseCurrencyLong: string;
    MinTradeSize: number;
    MarketName: Market;
    IsActive: boolean;
    Created: Date;
}
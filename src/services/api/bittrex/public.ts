import { ReturnAction } from './index';
import {
  MarketInfo,
  CurrencyInfo,
  Market,
  Ticker,
  MarketSummary,
  OrderBookRecordType,
  OrderBook,
  MarketHistory,
  EndpointApiGroup
} from 'models';

export const getPublicEndpoint = (action: ReturnAction) => {
  const get = <T>(method: string, methodParams?) => action<T>(EndpointApiGroup.Public, method, methodParams);

  return {
    getMarkets: () => get<MarketInfo[]>('getmarkets'),
    getCurrencies: () => get<CurrencyInfo[]>('getcurrencies'),
    getTicker: (market: Market) => get<Ticker>('getticker', { market }),
    getMarketSummaries: () => get<MarketSummary[]>('getmarketsummaries'),
    getMarketSummary: (market: Market) => get<MarketSummary>('getmarketsummary', { market }),
    getOrderBook: (market: Market, type: OrderBookRecordType) => get<OrderBook[]>('getorderbook', { market, type }),
    getMarketHistory: (market: Market) => get<MarketHistory[]>('getmarkethistory', { market }),
  };
};

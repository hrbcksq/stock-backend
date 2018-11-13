import { MarketInfo, CurrencyInfo, Market, Ticker, MarketSummary, OrderBookRecordType, OrderBook, MarketHistory } from 'models';
import { bittrex } from './abstract';

const get = bittrex.public;

export const bittrexPublicEndpoints = {
  getMarkets: () => get<MarketInfo[]>('getmarkets'),
  getCurrencies: () => get<CurrencyInfo[]>('getcurrencies'),
  getTicker: (market: Market) => get<Ticker>('getticker', { market }),
  getMarketSummaries: () => get<MarketSummary[]>('getmarketsummaries'),
  getMarketSummary: (market: Market) => get<MarketSummary>('getmarketsummary', { market }),
  getOrderBook: (market: Market, type: OrderBookRecordType) => get<OrderBook[]>('getorderbook', { market, type }),
  getMarketHistory: (market: Market) => get<MarketHistory[]>('getmarkethistory', { market }),
};
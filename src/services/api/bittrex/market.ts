import { Market, Operation } from 'models';
import { bittrex } from './abstract';

const get = bittrex.market;

export const bittrexPublicEndpoints = {
  buyLimit: (market: Market, quantity: number, rate: number) => get<Operation>('buylimit', { market, quantity, rate }),
  sellLimit: (market: Market, quantity: number, rate: number) => get<Operation>('selllimit', { market, quantity, rate }),
  cancel: (operation: Operation) => get<Operation>('cancel', operation),
  getOpenOrders: (market?: Market) => get<Operation>('getopenorders', { market })
};
export interface OrderBookRecord {
  Quantity: number;
  Rate: number;
}

export enum OrderBookRecordType {
  Buy = 'buy',
  Sell = 'sell',
  Both = 'both'
}

export interface OrderBook {
  [OrderBookRecordType.Buy]: OrderBookRecord[];
  [OrderBookRecordType.Sell]: OrderBookRecord[];
}
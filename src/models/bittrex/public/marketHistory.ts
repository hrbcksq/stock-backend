import { FillType } from '../../bittrex_old/socket/fillType';
import { OrderType } from '../static';

export interface MarketHistory {
  Id: number;
  TimeStamp: Date;
  Quantity: number;
  Price: number;
  Total: number;
  FillType: FillType;
  OrderType: OrderType;
}
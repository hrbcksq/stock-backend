import { OrderType } from '../static/orderType';
import { Market } from '../static';

export interface OrderHistory {
  OrderUuid: string;
  Exchange: Market;
  TimeStamp: Date;
  OrderType: OrderType;
  Limit: number;
  Quantity: number;
  QuantityRemaining: number;
  Commission: number;
  Price: number;
  PricePerUnit: number;
  IsConditional: boolean;
  Condition: null;
  ConditionTarget: null;
  ImmediateOrCancel: boolean;
}
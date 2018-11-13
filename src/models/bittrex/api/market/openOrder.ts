import { Market } from 'models';
import { OrderType } from '../static';

export interface OpenOrder {
  Uuid: never;
  OrderUuid: string;
  Exchange: Market;
  OrderType: OrderType;
  Quantity: number;
  QuantityRemaining: number;
  Limit: number;
  CommissionPaid: number;
  Price: number;
  PricePerUnit: number;
  Opened: Date;
  Closed: unknown;
  CancelInitiated: boolean;
  ImmediateOrCancel: boolean;
  IsConditional: boolean;
  Condition: unknown;
  ConditionTarget: unknown;
}
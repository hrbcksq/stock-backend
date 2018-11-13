import { OpenOrderType } from './openOrderType';
import { Market } from 'models';
export interface OpenOrder {
  Uuid: never;
  OrderUuid: string;
  Exchange: Market;
  OrderType: OpenOrderType;
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
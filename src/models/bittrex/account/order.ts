import { Market } from '../static';
import { OrderType } from '../static/orderType';

export interface Order {
  AccountId: null;
  OrderUuid: string;
  Exchange: Market;
  Type: OrderType;
  Quantity: number;
  QuantityRemaining: number;
  Limit: number;
  Reserved: number;
  ReserveRemaining: number;
  CommissionReserved: number;
  CommissionReserveRemaining: number;
  CommissionPaid: number;
  Price: number;
  PricePerUnit: number;
  Opened: Date;
  Closed: Date;
  IsOpen: boolean;
  Sentinel: string;
  CancelInitiated: boolean;
  ImmediateOrCancel: boolean;
  IsConditional: boolean;
  Condition: unknown;
  ConditionTarget: null;
}
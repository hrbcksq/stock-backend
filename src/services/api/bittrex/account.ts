import { Order, Entity, Balance, Currency, DepositAddress, Market, OrderHistory, WithdrawHistory, DepositHistory, EndpointApiGroup } from '../../../models';
import { ReturnAction } from './index';

export const getAccountEndpoint = (action: ReturnAction) => {
  const get = <T>(method: string, methodParams?) => action<T>(EndpointApiGroup.Account, method, methodParams);

  return {
    getBalances: () => get<Balance[]>('getbalances'),
    getBalance: (currency: Currency) => get<Balance>('getbalance', { currency }),
    getDepositAddress: (currency: Currency) => get<DepositAddress>('getdepositaddress', { currency }),
    withdraw: (
      currency: Currency,
      quantity: number,
      address: string,
      paymentid?: string
    ) => get<Entity>('withdraw', { currency, quantity, address, paymentid }),
    getOrder: (entity: Entity) => get<Order>('getorder', entity),
    getOrderHistory: (market?: Market) => get<OrderHistory>('getorderhistory', { market }),
    getWithdrawalHistory: (currency?: Currency) => get<WithdrawHistory>('getwithdrawalhistory', { currency }),
    getDepositHistory: (currency?: Currency) => get<DepositHistory>('getdeposithistory', { currency })
  };
};
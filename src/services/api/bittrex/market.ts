import { Market, Entity, EndpointApiGroup } from '../../../models';
import { ReturnAction } from './index';

export const getMarketEndpoint = (action: ReturnAction) => {
  const get = <T>(method: string, methodParams?) => action<T>(EndpointApiGroup.Market, method, methodParams);

  return {
    buyLimit: (market: Market, quantity: number, rate: number) => get<Entity>('buylimit', { market, quantity, rate }),
    sellLimit: (market: Market, quantity: number, rate: number) => get<Entity>('selllimit', { market, quantity, rate }),
    cancel: (operation: Entity) => get<Entity>('cancel', operation),
    getOpenOrders: (market?: Market) => get<Entity>('getopenorders', { market })
  };
};
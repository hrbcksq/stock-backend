import axios from 'axios';

enum BittrexApiGroup {
  Account = 'account',
  Market = 'market',
  Public = 'public'
}

const endpointBase = 'https://bittrex.com/api/v1.1';

const get = <T, P>(group: BittrexApiGroup, method: string, methodParams?: P) => {
  return axios.request({
    method: 'GET',
    url: `${endpointBase}/${group}/${method}`,
    params: methodParams
  }).then(({ data }) => {
    if (data.success) {
      return data.result as T;
    }
    throw new Error(data.message);
  });
};

export const bittrex = {
  public: <T, P = any>(method: string, methodParams?: P) => get<T, P>(BittrexApiGroup.Public, method, methodParams),
  account: <T, P = any>(method: string, methodParams?: P) => get<T, P>(BittrexApiGroup.Account, method, methodParams),
  market: <T, P = any>(method: string, methodParams?: P) => get<T, P>(BittrexApiGroup.Market, method, methodParams),
};
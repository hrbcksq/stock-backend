import { EndpointApiGroup } from '../../../models';
import axios from 'axios';
import { getPublicEndpoint } from './public';

export type ReturnAction = <T>(endpoint: EndpointApiGroup, method: string, methodParams?) => Promise<T>;

const apiKeyField = 'apikey';
const endpointBase = 'https://bittrex.com/api/v1.1';

function getRequestParams(apiKey?: string, methodParams?: any) {
  if (apiKey || methodParams) {
    const result = Object.assign({}, methodParams);
    if (apiKey) {
      result[apiKeyField] = apiKey;
    }
    return result;
  }
  return null;
}

function get<T>(apiKey: string, group: EndpointApiGroup, method: string, methodParams?: any) {
  return axios.request({
    method: 'GET',
    url: `${endpointBase}/${group}/${method}`,
    params: getRequestParams(apiKey, methodParams)
  }).then(({ data }) => {
    if (data.success) {
      return data.result as T;
    }
    throw new Error(data.message);
  });
}

export function bittrexApiFactory(apiKey: string) {
  const publicApi = <T>(endpoint: EndpointApiGroup, method: string, methodParams?) => get<T>(null, endpoint, method, methodParams);
  const privateApi = <T>(endpoint: EndpointApiGroup, method: string, methodParams?) => get<T>(apiKey, endpoint, method, methodParams);

  return {
    public: getPublicEndpoint(publicApi),
    account: getPublicEndpoint(privateApi),
    market: getPublicEndpoint(privateApi)
  };
}

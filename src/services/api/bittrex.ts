import * as bittrex from 'node-bittrex-api';
import { Subject } from 'rxjs';

import {
    Tick,
    Result,
    Balance,
    Candlestick,
    Entity,
    Market,
    MarketInfo,
    Currency,
    CurrencyInfo,
    DepositeAddress,
    SocketData,
    UpdateData
} from '../../models';

export class BittrexApiService {

    getStream(markets: Market[], eventName: string) {
        const observable = new Subject<UpdateData[]>();
        bittrex.websockets.subscribe(markets, (data: SocketData, client) => {
            if (data.M === 'updateExchangeState') {
                observable.next(data.A);
            }
        });
        return observable;
    }

    getMarkets() {
        return new Promise<MarketInfo[]>((resolve, reject) => {
            bittrex.getmarkets((data: Result<MarketInfo[]>, error: any) => {
                if (error || !data.success) {
                    reject(error);
                } else {
                    resolve(data.result);
                }
            });
        });
    }

    getCurrencies() {
        return new Promise<CurrencyInfo[]>((resolve, reject) => {
            bittrex.getcurrencies((data: Result<CurrencyInfo[]>, error: any) => {
                if (error || !data.success) {
                    reject(error);
                } else {
                    resolve(data.result);
                }
            });
        });
    }

    //#region Account api

    getBalances() {
        return new Promise<Balance[]>((resolve, reject) => {
            bittrex.getbalances((data: Result<Balance[]>, error: any) => {
                if (error || !data.success) {
                    reject(error);
                } else {
                    resolve(data.result);
                }
            });
        });
    }

    getBalace(currency: Currency) {
        return new Promise<Balance>((resolve, reject) => {
            bittrex.getbalance({ currency: currency }, function (data: Result<Balance>, error: any) {
                if (error || !data.success) {
                    reject(error);
                } else {
                    resolve(data.result);
                }
            });
        });
    }

    getDepositeAddress(currency: Currency) {
        return new Promise<Readonly<DepositeAddress>>((resolve, reject) => {
            bittrex.getdepositeaddress({ currency: currency }, function (data: Result<DepositeAddress>, error: any) {
                if (error || !data.success) {
                    reject(error);
                } else {
                    resolve(Object.freeze(data.result));
                }
            });
        });
    }



    getCandles(marketName: Market, tickInterval: Tick) {
        return new Promise<Candlestick[]>((resolve, reject) => {
            bittrex.getcandles({
                marketName,
                tickInterval
            }, (data: Result<Candlestick[]>, error: Error) => {
                if (error || !data.success) {
                    reject(error);
                } else {
                    resolve(data.result);
                }
            });
        });
    }

    withdraw(currency: Currency, quantity: number, address: string) {
        return new Promise<Entity>((resolve, reject) => {
            bittrex.withdraw({
                currency: currency,
                quantity: quantity,
                address: address
            }, (data: Result<Entity>, error: Error) => {
                if (error || !data.success) {
                    reject(error);
                } else {
                    resolve(data.result);
                }
            });
        });
    }

    //#endregion Account Api

}
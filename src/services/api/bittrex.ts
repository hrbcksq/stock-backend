import * as bittrex from 'node-bittrex-api';
// import { Server } from 'ws';
import * as fs from 'fs';
import * as path from 'path';
import * as moment from 'moment';
import { Tick, Market, Result, Balance } from '../../models/bittrex';
// import { writeFile } from 'fs';
// Candlestick
// TickInterval
// Balance






bittrex.options({
    'apikey': process.env.BITTREX_API_KEY,
    'apisecret': process.env.BITTREX_SECRET
});

// const getCandles = (marketName: Market, tickInterval: Tick) =>  new Promise((resolve, reject) => {
//     bittrex.getcandles({
//         marketName,
//         tickInterval
//     }, (data: Result<Candlestick[]>, error: Error) => {
//         if (!data.success) {
//             reject(error);
//         } else {
//             resolve(data.result);
//         }
//     });
// });

const getBalances = () => new Promise<Balance[]>((resolve, reject) => {
    bittrex.getbalances((data: Result<Balance[]>, error: any) => {
        if (error) {
            reject(error);
        } else {
            resolve(data.result);
        }
    });
});

const getTicker = (marketName: Market) => new Promise<Tick>((resolve, reject) => {
    bittrex.getticker({
        market: marketName
    }, (data: Result<Tick>, error: Error) => {
        if (error) {
            reject(error);
        } else {
            resolve(data.result);
        }
    });
});

// getTicker('BTC-XRP' as Market).then(data => {
//     console.log(data);
// });

const calc = () => getBalances().then(balances => {
    return writeToFile('balances', balances).then(() => balances);
}).then((balances) => {
    return Promise.all(balances.map(balance => {
        const market = `BTC-${balance.Currency}`;
        return getTicker(market as Market).then(tick => {
            return writeToFile(`tick_${market}`, tick).then(() => {
                return tick;
            });
        }).then((tick) => {
            return tick.Bid * balance.Balance;
        });
    }))
        .then(ticks => {
            return ticks.reduce((prev, current) => {
                prev += current;
                return prev;
            }, 0);
        })
        .then(btcValue => {
            return getTicker(Market.USDT_BTC).then(tick => {
                return btcValue * tick.Bid;
            });
        });
});

calc().then(result => {
    writeToFile('result', result + ' USDT');
    console.log(result);
});

// const wss = new Server({port: 8080});
// wss.on('connection', (socket) => {
//     // getCandles(Market.USDT_BTC, Tick.fiveMin).then((data) => {
//     //     socket.send(JSON.stringify(data));
//     // });
// });
// const getNow = () => new Date().toString();

const writeToFile = (fileName: string, content: Object) => {
    return new Promise((resolve, reject) => {
        const outputPath = path.join(__dirname, '/output/', `${fileName}_${moment(new Date()).format('YYYY.MM.DD HH:mm')}.json`);
        fs.writeFile(outputPath, JSON.stringify(content), (err: Error) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};


// bittrex.getmarketsummaries(function (data: any, err: any) {
//     if (err) {
//         return console.error(err);
//     }
//     let content = `export enum Market {\n`;
//     for (const i in data.result) {
//         content = content.concat(`  '${data.result[i].MarketName.replace('-', '_')}' = '${data.result[i].MarketName}',\n`);
//     }
//     content = content.concat('\n}\n');
//     fs.writeFileSync(__dirname + '/market.ts', content, 'UTF-8');
// });

// bittrex.getmarkethistory({ market : 'USDT-BTC' }, function( data: any, err: any ) {
//     console.log( data );
//   });






// bittrex.getbalance({ currency: 'BTC' }, function (data: any, err: any) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data);
// });
// // bittrex.websockets.client(function () {
// //     console.log('Websocket connected');
// //     bittrex.websockets.subscribe(['USDT-BTC'], function (data: any) {
// //         if (data.M === 'updateExchangeState') {
// //             data.A.forEach(function (data_for: any) {
// //                 console.log('Market Update for ' + data_for.MarketName, data_for);
// //             });
// //         }
// //     });
// // });
// let lasttime = Date.now();
// bittrex.websockets.subscribe(['BTC-USDT'], function (data: any, client: any) {
//     if (data.M === 'updateSummaryState') {
//         data.A[0].Deltas.filter((x: any) => x.MarketName === 'USDT-BTC').forEach(function (data_for: any) {
//             const now = Date.now();
//             console.log(`${(now - lasttime) / 1000} Market Update for ${data_for.MarketName}: ${data_for.Bid}`);
//             lasttime = now;
//         });
//     }
// });
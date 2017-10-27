import * as bittrex from 'node-bittrex-api';


bittrex.options({
    'apikey': process.env.BITTREX_API_KEY,
    'apisecret': process.env.BITTREX_SECRET
});

// bittrex.websockets.client(function () {
//     console.log('Websocket connected');
//     bittrex.websockets.subscribe(['USDT-BTC'], function (data: any) {
//         if (data.M === 'updateExchangeState') {
//             data.A.forEach(function (data_for: any) {
//                 console.log('Market Update for ' + data_for.MarketName, data_for);
//             });
//         }
//     });
// });
let lasttime = Date.now();
bittrex.websockets.subscribe(['BTC-USDT'], function (data: any, client: any) {
    if (data.M === 'updateSummaryState') {
        data.A[0].Deltas.filter((x: any) => x.MarketName === 'USDT-BTC').forEach(function (data_for: any) {
            const now = Date.now();
            console.log(`${ (now - lasttime) / 1000} Market Update for ${data_for.MarketName}: ${data_for.Bid}`);
            lasttime = now;
        });
    }
});
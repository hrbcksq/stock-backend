import * as bittrex from 'node-bittrex-api';
bittrex.options({
    'apikey': '651c0857aa8f4ae8ae62699b2cea9258',
    'apisecret': 'a3175ddce2eb445fa09761ee9e92a551'
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

bittrex.websockets.subscribe(['USDT-BTC'], function (data: any, client: any) {
    if (data.M === 'updateSummaryState') {
        data.A[0].Deltas.filter((x: any) => x.MarketName === 'BTC-ETH').forEach(function (data_for: any) {
            console.log(`Market Update for ${data_for.MarketName}: ${ data_for.Bid}`);
        });
    }
});
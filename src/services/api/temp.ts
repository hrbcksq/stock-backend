
// const calc = () => getBalances().then(balances => {
//     return writeToFile('balances', balances).then(() => balances);
// }).then((balances) => {
//     return Promise.all(balances.map(balance => {
//         const market = `BTC-${balance.Currency}`;
//         return getTicker(market as Market).then(tick => {
//             return writeToFile(`tick_${market}`, tick).then(() => {
//                 return tick;
//             });
//         }).then((tick) => {
//             return tick.Bid * balance.Balance;
//         });
//     }))
//         .then(ticks => {
//             return ticks.reduce((prev, current) => {
//                 prev += current;
//                 return prev;
//             }, 0);
//         })
//         .then(btcValue => {
//             return getTicker(Market.USDT_BTC).then(tick => {
//                 return btcValue * tick.Bid;
//             });
//         });
// });

// calc().then(result => {
//     writeToFile('result', result + ' USDT');
//     console.log(result);
// });`
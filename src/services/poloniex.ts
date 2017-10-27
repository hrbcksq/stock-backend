import * as Poloniex from 'poloniex-api-node';

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0',
    'Cookie': 'cf_clearance=bdd775ce8f0eab90f76510c63bf5ac41b646daad-1509056489-1800'
};

export const connection = new Poloniex(
    {
        headers
    });
    // '0YGSDUHD-9S2S20ED-INX71C3M-00STJEQ9',
    // '5b8d903efffb8b4d9f677d6830d7d3ecd8dbc8e99d7119635f7f71bd3b28d5688e9da8e42034e58321342493976a8899ffda1430e163e363db962f3659603797',

// tslint:disable-next-line:no-null-keyword
// connection.returnLoanOrders('BTC', null, (err: any, ticker: any) => {
//     if (!err) console.log(ticker);
// });

connection.returnTicker((error: any, ticker: any) => {
    if (error) {
        console.log(error);
    } else {
        console.log(ticker);
    }
});

// console.log(`Try to connect to poloniex with /napi-key: ${process.env.POLONIEX_API_KEY}/nsecret: ${process.env.POLONIEX_SECRET}`);


// connection.on('message', (channelName: string, data: any, seq: any) => {
//     // if (channelName === 'ticker') {
//     //     console.log(`Ticker: ${data}`);
//     // }
//     if (channelName === 'BTC_ETC') {
//         console.log(`order book and trade updates received for currency pair ${channelName}`);
//         console.log(`data sequence number is ${seq}`);
//     }
// });
// connection.subscribe('BTC_ETH');



// connection.openWebSocket({ version: 2});

// export const connection = new Poloniex();

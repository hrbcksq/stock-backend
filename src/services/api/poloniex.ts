import * as Poloniex from 'poloniex-api-node';

export const connection = new Poloniex(process.env.POLONIEX_API_KEY, process.env.POLONIEX_SECRET, { socketTimeout: 15000 });

connection.returnTicker((error: any, ticker: any) => {
    if (error) {
        console.log(error);
    } else {
        console.log(ticker);
    }
});

connection.on('open', () => {
    console.log('Succesfully connected to Poloniex');
    connection.subscribe('BTC_ETH');
});

connection.on('message', (channelName: string, data: any, seq: any) => {
    if (channelName === 'BTC_ETC') {
        console.log(`order book and trade updates received for currency pair ${channelName}`);
        console.log(`data sequence number is ${seq}`);
    }
});

connection.openWebSocket({ version: 2 });


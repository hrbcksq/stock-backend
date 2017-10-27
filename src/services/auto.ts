const autobahn = require('autobahn');
const wsuri = 'wss://api.poloniex.com';
export const connection = new autobahn.Connection({
    url: wsuri,
    realm: 'realm1'
});

connection.onopen = function (session: any) {
    function marketEvent(args: string, kwargs: string) {
        console.log(args);
    }
    function tickerEvent(args: string, kwargs: string) {
        console.log(args);
    }
    function trollboxEvent(args: string, kwargs: string) {
        console.log(args);
    }
    session.subscribe('BTC_XMR', marketEvent);
    session.subscribe('ticker', tickerEvent);
    session.subscribe('trollbox', trollboxEvent);
};

connection.onclose = function () {
    console.log('Websocket connection closed');
};

connection.onerror = function(error: any) {
    console.log(error);
};

connection.open();
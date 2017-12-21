import * as bittrex from 'node-bittrex-api';

bittrex.options({
    'apikey': process.env.BITTREX_API_KEY,
    'apisecret': process.env.BITTREX_SECRET
});
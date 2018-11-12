import { Market, SellOrder, BuyOrder, Fill } from 'models';

export interface UpdateData {
    'MarketName': Market;
    'Nounce': number;
    'Sells': SellOrder[];
    'Buys': BuyOrder[];
    'Fills': Fill[];
}
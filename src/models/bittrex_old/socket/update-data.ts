import { Market, SellOrder, BuyOrder, FillType } from 'models';

export interface UpdateData {
    'MarketName': Market;
    'Nounce': number;
    'Sells': SellOrder[];
    'Buys': BuyOrder[];
    'Fills': FillType[];
}
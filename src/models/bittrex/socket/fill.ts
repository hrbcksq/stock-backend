import { OrderType } from 'models';

export interface Fill {
    'OrderType': OrderType;
    'Rate': number;
    'Quantity': number;
    'TimeStamp': Date;
}

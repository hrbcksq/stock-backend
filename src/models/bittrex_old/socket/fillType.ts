import { OrderType } from 'models';

export interface FillType {
    'OrderType': OrderType;
    'Rate': number;
    'Quantity': number;
    'TimeStamp': Date;
}

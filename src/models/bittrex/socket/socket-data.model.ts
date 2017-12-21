import { UpdateData } from 'models';

export interface SocketData {
    'H': 'CoreHub';
    'M': 'updateExchangeState';
    'A': UpdateData[];
}


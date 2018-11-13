export interface Balance {
    Currency: string;
    Balance: number;
    Available: number;
    Pending: number;
    CryptoAddress: string;
    Requested: boolean;
    Uuid: string;
}
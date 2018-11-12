export interface Result<T> {
    success: boolean;
    result: T;
    message: string;
}
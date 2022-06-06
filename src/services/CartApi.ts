import { httpPost } from './http';
import { TFormatResponse } from './types';
import { createCart } from '../constants/api';

export class CartAPI {
    static createCart(data: any): Promise<TFormatResponse> {
        return httpPost(`${createCart}`, data, {})
    }
}
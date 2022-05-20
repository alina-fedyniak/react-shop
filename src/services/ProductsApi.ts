import { httpGet } from './http';
import { TFormatResponse } from './types';
import { getOneProduct } from '../constants/api';

export class ProductsAPI {
    static getOneProduct(productId: number, params: any): Promise<TFormatResponse> {
        return httpGet(`${getOneProduct}/${productId}`, { ...params })
    }
}
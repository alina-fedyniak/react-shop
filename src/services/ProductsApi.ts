import { httpGet } from './http';
import { TFormatResponse } from './types';
import { getAllProducts, getOneProduct} from '../constants/api';

export class ProductsAPI {
    static getOneProduct(productId: number, params: any): Promise<TFormatResponse> {
        return httpGet(`${getOneProduct}/${productId}`, { ...params })
    }
    static getAllProducts(): Promise<TFormatResponse> {
        return httpGet(getAllProducts, { })
    }
}
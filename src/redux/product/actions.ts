import {
    GetProductDetails,
    GetProductDetailsSuccess,
    GetProductDetailsFail,
} from './types';

export enum ProductsTypes {
    GET_ONE_PRODUCT='GET_ONE_PRODUCT',
    GET_ONE_PRODUCT_SUCCESS='GET_ONE_PRODUCT_SUCCESS',
    GET_ONE_PRODUCT_FAIL = 'GET_ONE_PRODUCT_FAIL',
}

export const getOneProduct = (payload: number): GetProductDetails => ({
    type: ProductsTypes.GET_ONE_PRODUCT,
    payload
})

export const getOneProductSuccess = (payload: any): GetProductDetailsSuccess => ({
    type: ProductsTypes.GET_ONE_PRODUCT_SUCCESS,
    payload
})

export const getOneProductFail = (): GetProductDetailsFail => ({
    type: ProductsTypes.GET_ONE_PRODUCT_FAIL
})


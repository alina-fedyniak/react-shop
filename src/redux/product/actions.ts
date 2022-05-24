import {
    GetProductDetails,
    GetProductDetailsSuccess,
    GetProductDetailsFail,
    GetAllProducts,
    GetAllProductsSuccess,
    GetAllProductsFail,
} from './types';

export enum ProductsTypes {
    GET_PRODUCTS = 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL',
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

export const getAllProducts = (): GetAllProducts => ({
    type: ProductsTypes.GET_PRODUCTS,
})

export const getAllProductsSuccess = (payload: any): GetAllProductsSuccess => ({
    type: ProductsTypes.GET_PRODUCTS_SUCCESS,
    payload
})

export const getAllProductsFail = (): GetAllProductsFail => ({
    type: ProductsTypes.GET_PRODUCTS_FAIL
})


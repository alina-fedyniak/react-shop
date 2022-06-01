import { ProductsTypes } from './actions';

export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}

export interface IOneProduct {
    product: any,
    loader: boolean,
}

export interface ProductsState {
    products: any,
    oneProductInfo: IOneProduct,
    loader: boolean,
}

export interface GetProductDetails {
    type: typeof ProductsTypes.GET_ONE_PRODUCT,
    payload: number
}

export interface GetProductDetailsSuccess {
    type: typeof ProductsTypes.GET_ONE_PRODUCT_SUCCESS,
    payload: any
}

export interface GetProductDetailsFail {
    type: typeof ProductsTypes.GET_ONE_PRODUCT_FAIL
}

export interface GetAllProducts {
    type: typeof ProductsTypes.GET_PRODUCTS,
}

export interface GetAllProductsSuccess {
    type: typeof ProductsTypes.GET_PRODUCTS_SUCCESS,
    payload: any
}

export interface GetAllProductsFail {
    type: typeof ProductsTypes.GET_PRODUCTS_FAIL
}

export type ProductActions =
    | GetProductDetails
    | GetProductDetailsSuccess
    | GetProductDetailsFail
    | GetAllProducts
    | GetAllProductsSuccess
    | GetAllProductsFail
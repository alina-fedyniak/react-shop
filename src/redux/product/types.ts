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
    loader: boolean,
    info: any
}

export interface ProductState {
    loader: boolean,
    product: IProduct[],
    oneProductInfo: IOneProduct,
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

export type ProductActions =
    | GetProductDetails
    | GetProductDetailsSuccess
    | GetProductDetailsFail
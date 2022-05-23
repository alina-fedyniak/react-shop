import { ProductsTypes } from './actions';

export interface IProducts {
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

export interface IParamsRequest {
    includes?: string | null,
    sort?: string | null,
    filter?: string | null,
    limit?: string | null,
    search?: string | null
}

export interface IOneProduct {
    loader: boolean,
    info: any
}

export interface ProductState {
    loader: boolean,
    product: IProducts[],
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

export interface GetAllProducts {
    type: typeof ProductsTypes.GET_PRODUCTS,
    //payload: any
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
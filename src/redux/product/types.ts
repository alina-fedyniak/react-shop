import { ProductsTypes } from './actions';

export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage:number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: [],
}

export interface IOneProduct {
    product: any,
    loader: any,
}

export interface ProductsState {
    productsData: {
        products: IProduct[],
        limit: number,
        skip: number,
        total: number
    },
    oneProductInfo: IOneProduct,
    loader: any,
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
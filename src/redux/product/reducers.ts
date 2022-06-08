import createReducer from '../../utils/createReducer';
import {
    ProductActions,
    ProductsState,
    GetProductDetailsSuccess,
    GetAllProductsSuccess, IProduct,
} from './types';

const initialState: ProductsState = {
    loader: false,
    productsData: {
        products: [],
        limit: 30,
        skip: 0,
        total: 0
    },
    oneProductInfo: {
        product: [],
        loader: false,
    },

}

const productsReducers = createReducer({}, {
    GET_ONE_PRODUCT: (state: ProductsState) => ({
        ...state,
        loader: true
    }),
    GET_ONE_PRODUCT_SUCCESS: (state: ProductsState, action: GetProductDetailsSuccess) => ({
        ...state,
        oneProductInfo: {
            product: action.payload
        },
        loader: false,
    }),
    GET_ONE_PRODUCT_FAIL: (state: ProductsState) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
        },
        loader: false
    }),
    GET_PRODUCTS: (state: ProductsState) => ({
        ...state,
        loader: true,
    }),
    GET_PRODUCTS_SUCCESS: (state: ProductsState, action: GetAllProductsSuccess) => ({
        ...state,
        productsData: action.payload,
        loader: false,
    }),
    GET_PRODUCTS_FAIL: (state: ProductsState) => ({
        ...state,
        loader: false
    }),
});

export default (state = initialState, action: ProductActions): any => (productsReducers(state, action));
import createReducer from '../../utils/createReducer';
import {
    IProducts,
    ProductActions,
    ProductsState,
    GetProductDetailsSuccess,
    GetAllProductsSuccess,
} from './types';

const initialState: ProductsState = {
    products: [],
    oneProductInfo: {
        info: [],
    },
    loader: false,
}

const productsReducers = createReducer({}, {
    GET_ONE_PRODUCT: (state: ProductsState) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
        },
        loader: true
    }),
    GET_ONE_PRODUCT_SUCCESS: (state: ProductsState, action: GetProductDetailsSuccess) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
            info: action.payload
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
        products: action.payload,
        loader: false,
    }),
    GET_PRODUCTS_FAIL: (state: ProductsState) => ({
        ...state,
        loader: false
    }),
});

export default (state = initialState, action: ProductActions): any => (productsReducers(state, action));
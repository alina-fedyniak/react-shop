import createReducer from '../../utils/createReducer';
import {
    IProducts,
    ProductActions,
    ProductState,
    GetProductDetailsSuccess,
    GetAllProductsSuccess,
} from './types';

const initialState: IProducts = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
        rate: 0,
        count: 0,
    }
}

const productReducers = createReducer({}, {
    GET_ONE_PRODUCT: (state: ProductState) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
            loader: true
        }
    }),
    GET_ONE_PRODUCT_SUCCESS: (state: ProductState, action: GetProductDetailsSuccess) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
            loader: false,
            info: action.payload
        }
    }),
    GET_ONE_PRODUCT_FAIL: (state: ProductState) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
            loader: false
        }
    }),
    GET_PRODUCTS: (state: ProductState) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
            loader: true
        }
    }),
    GET_PRODUCTS_SUCCESS: (state: ProductState, action: GetAllProductsSuccess) => ({
        ...state,
        oneProductInfo: {
            ...state.oneProductInfo,
            loader: false,
            info: action.payload
        }
    }),
    GET_PRODUCTS_FAIL: (state: ProductState) => ({
        ...state,
        loader: false
    }),
});

export default (state = initialState, action: ProductActions): any => (productReducers(state, action));
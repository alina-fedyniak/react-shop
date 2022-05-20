import createReducer from '../../utils/createReducer';
import {
    IProduct,
    ProductActions, ProductState, GetProductDetailsSuccess,
} from './types';

const initialState: IProduct = {
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

const ProductReducers = createReducer({}, {
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
});

export default (state = initialState, action: ProductActions): any => (ProductReducers(state, action));
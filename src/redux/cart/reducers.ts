import createReducer from '../../../src/utils/createReducer';
import {
    CartActions,
    ICartState,
    CreateCartSuccess,
} from './types';

const initialState: ICartState = {
    loader: false,
    cart: {
        id: 0,
        products: [],
        total: 0,
        discountedTotal: 0,
        userId: 0,
        totalProducts: 0,
        totalQuantity: 0,
    }
};

const cartReducers = createReducer({}, {
    CREATE_CART: (state: ICartState) => ({
        ...state,
        loader: true
    }),
    CREATE_CART_SUCCESS: (state: ICartState, action: CreateCartSuccess) => ({
        ...state,
        cart: action.payload,
        loader: false,
    }),
    CREATE_CART_FAIL: (state: ICartState) => ({
        ...state,
        products: [],
        loader: false
    }),
});

export default (state = initialState, action: CartActions): any => (cartReducers(state, action));
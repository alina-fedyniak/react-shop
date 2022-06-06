import { CartTypes } from './actions';

export interface ICartState {
    cart: ICart,
    loader: boolean,
}

export interface ICart {
    id: number,
    products: ICart[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

export interface CreateCart {
    type: typeof CartTypes.CREATE_CART,
    payload: number
}

export interface CreateCartSuccess {
    type: typeof CartTypes.CREATE_CART_SUCCESS,
    payload: any
}

export interface CreateCartFail {
    type: typeof CartTypes.CREATE_CART_FAIL
}

export type CartActions =
    | CreateCart
    | CreateCartSuccess
    | CreateCartFail
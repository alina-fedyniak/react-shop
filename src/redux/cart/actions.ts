import {
    CreateCart,
    CreateCartFail,
    CreateCartSuccess,
} from './types';

export enum CartTypes {
    CREATE_CART='CREATE_CART',
    CREATE_CART_SUCCESS='CREATE_CART_SUCCESS',
    CREATE_CART_FAIL = 'CREATE_CART_FAIL',
}

export const createCart = (payload: any): CreateCart => ({
    type: CartTypes.CREATE_CART,
    payload
});

export const createCartSuccess = (payload: any): CreateCartSuccess => ({
    type: CartTypes.CREATE_CART_SUCCESS,
    payload
});

export const createCartFail = (): CreateCartFail => ({
    type: CartTypes.CREATE_CART_FAIL
});
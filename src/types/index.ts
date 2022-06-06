import { ProfileState } from '../redux/profile/types';
import { ProductsState } from '../redux/product/types';
import { ICartState } from '../redux/cart/types';

export type TGlobalState = {
    profileReducers: ProfileState,
    productsReducers: ProductsState,
    cartReducers: ICartState,
};
import { ProfileState } from '../redux/profile/types';
import { ProductsState } from '../redux/product/types';

export type TGlobalState = {
    profileReducers: ProfileState,
    productsReducers: ProductsState,
};
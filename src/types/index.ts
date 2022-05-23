import { ProfileState } from '../redux/profile/types';
import { ProductState } from '../redux/product/types';

export type TGlobalState = {
    profileReducers: ProfileState,
    productsReducers: ProductState,
};
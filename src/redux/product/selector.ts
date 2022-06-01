import { TGlobalState } from '../../types';
import { ProductsState, IProduct } from './types';

export const OneProductSelector = (state: TGlobalState): IProduct => state.productsReducers.oneProductInfo.product
export const ProductsSelector = (state: TGlobalState): ProductsState => state.productsReducers
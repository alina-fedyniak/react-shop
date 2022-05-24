import { TGlobalState } from '../../types';
import { IOneProduct, ProductsState } from './types';

export const OneProductSelector = (state: TGlobalState): IOneProduct => state.productsReducers.oneProductInfo
export const ProductsSelector = (state: TGlobalState): ProductsState => state.productsReducers
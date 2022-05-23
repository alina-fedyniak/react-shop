import { TGlobalState } from '../../types';
import { IOneProduct, ProductState } from './types';

export const OneProductSelector = (state: TGlobalState): IOneProduct => state.productsReducers.oneProductInfo
export const ProductsSelector = (state: TGlobalState): ProductState => state.productsReducers
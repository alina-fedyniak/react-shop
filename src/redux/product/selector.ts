import { TGlobalState } from '../../types';
import { IOneProduct } from './types';

export const OneProductSelector = (state: TGlobalState): IOneProduct => state.cartReducers.oneProductInfo
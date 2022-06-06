import { TGlobalState } from '../../types';
import { ICartState } from './types';

export const CreateCartSelector = (state: TGlobalState): ICartState => state.cartReducers

import { combineReducers } from 'redux';
import profileReducers from './profile/reducers';
import productsReducers from './product/reducers';
import cartReducers from './cart/reducers';

export default combineReducers({
    profileReducers,
    productsReducers,
    cartReducers,
});

import { combineReducers } from 'redux';
import profileReducers from './profile/reducers';
import productsReducers from './product/reducers';

export default combineReducers({
    profileReducers,
    productsReducers,
});

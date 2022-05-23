import { combineReducers } from 'redux';
import profileReducers from './profile/reducers';
import productReducers from './product/reducers';

export default combineReducers({
    profileReducers,
    productReducers,
});

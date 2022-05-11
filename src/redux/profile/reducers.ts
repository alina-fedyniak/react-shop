import createReducer from '../../../src/utils/createReducer';
import {
    ProfileState,
    ProfileActions,
} from './types';

const initialState: ProfileState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
};

const profileReducers = createReducer({}, {
    UPDATE_PROFILE: (state: ProfileState) => ({ ...state, showProfileLoader: true }),
    UPDATE_PROFILE_SUCCESS: (state: ProfileState) => ({ ...state, showProfileLoader: false }),
    UPDATE_PROFILE_FAIL: (state: ProfileState) => ({ ...state, showProfileLoader: false }),
});

export default (state = initialState, action: ProfileActions): any => (profileReducers(state, action));
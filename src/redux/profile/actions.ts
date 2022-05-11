import {
    UpdateProfile,
    IUpdateProfile,
} from './types';

export enum ProfileTypes {
    UPDATE_PROFILE='UPDATE_PROFILE',
    UPDATE_PROFILE_SUCCESS='UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL',
}

export const updateProfile = (payload: IUpdateProfile): UpdateProfile => ({
    type: ProfileTypes.UPDATE_PROFILE,
    payload
});
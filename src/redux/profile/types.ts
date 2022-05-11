import { ProfileTypes } from './actions';

export interface ProfileState {
    firstName: string,
    lastName: string,
    phoneNumber: string,
}

export interface IUpdateProfile {
    firstName?: string,
    lastName?: string,
    phoneNumber?: any,
}

export interface UpdateProfile {
    type: typeof ProfileTypes.UPDATE_PROFILE,
    payload: IUpdateProfile
}

export type ProfileActions =
    | UpdateProfile
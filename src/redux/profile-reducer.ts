import { profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const ADD_POST: string = 'social-max/profile/ADD-POST';
const SET_USER_PROFILE: string = 'social-max/profile/SET_USER_PROFILE';
const SET_STATUS: string = 'social-max/profile/SET_STATUS';
const DELETE_POST: string = 'social-max/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS: string = 'social-max/profile/SAVE_PHOTO_SUCCESS';

type InitialStateType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    profile: {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
        photos: { large: string, small: string }
    } | null
    status: string
}
let initialState: InitialStateType = {
    postsData: [
        { id: 1, message: 'Hello Max', likesCount: 11 },
        { id: 2, message: 'You are very strong', likesCount: 4 },
        { id: 3, message: 'Hey', likesCount: 99 },
        { id: 4, message: 'Hey', likesCount: 34 },
        { id: 5, message: 'Hey', likesCount: 66 },
        { id: 6, message: 'Hey', likesCount: 23 }
    ],
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.value,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],

            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        // TDD
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.deleteId)
            }
        default:
            return state;

    }
}
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    value: any
}
export const addPostActionCreator = (value: any): AddPostActionCreatorType => ({
    type: ADD_POST,
    value
});
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: SetUserProfileProfileType
}
type SetUserProfileProfileType = {
    profile: {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
        photos: { large: string, small: string }
    }
}
export const setUserProfile = (profile:SetUserProfileProfileType):SetUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
})

export const getProfile = (userId:number) => {
    return async (dispatch:any) => {
        let data = await profileAPI.getProfile(userId);;
        dispatch(setUserProfile(data));
    }
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:string):SetStatusActionType => ({
    type: SET_STATUS,
    status
})

export const getStatus = (userId:number) => async (dispatch:any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}
export const updateStatus = (status:string) => async (dispatch:any) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
    catch (error) {
        console.log('some error' + error + '---------')
    }

}

export const savePhoto = (file:string) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: string
}
export const savePhotoSuccess = (photos:string):SavePhotoSuccessActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const saveProfile = (profile:any) =>
    async (dispatch:any, getState:any) => {
        const userId = getState().auth.userId;
        let response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId));
        }
        else {
            dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
            return Promise.reject(response.data.messages[0]);
        }
    }


// for TDD
type DeletePostActionType = {
    type: typeof DELETE_POST
    deleteId: any
}
export const deletePost = (deleteId:any) => ({
    type: DELETE_POST,
    deleteId
})

export default profileReducer;
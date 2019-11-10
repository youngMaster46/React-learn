import { profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'social-max/profile/ADD-POST';
const SET_USER_PROFILE = 'social-max/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-max/profile/SET_STATUS';
const DELETE_POST = 'social-max/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'social-max/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        { id: 1, message: 'Hello Max', likesCount: '11' },
        { id: 2, message: 'You are very strong', likesCount: '4' },
        { id: 3, message: 'Hey', likesCount: '99' },
        { id: 4, message: 'Hey', likesCount: '34' },
        { id: 5, message: 'Hey', likesCount: '66' },
        { id: 6, message: 'Hey', likesCount: '23' }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
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

export const addPostActionCreator = (value) => ({
    type: ADD_POST,
    value
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);;
        dispatch(setUserProfile(data));
    }
}

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}
export const updateStatus = (status) => async (dispatch) => {
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

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const saveProfile = (profile) =>
    async (dispatch, getState) => {
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
export const deletePost = (deleteId) => ({
    type: DELETE_POST,
    deleteId
})

export default profileReducer;
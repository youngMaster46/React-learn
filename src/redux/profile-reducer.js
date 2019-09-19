import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        { id: '1', message: 'Hello Max', likesCount: '11' },
        { id: '2', message: 'You are very strong', likesCount: '4' },
        { id: '3', message: 'Hey', likesCount: '99' },
        { id: '4', message: 'Hey', likesCount: '34' },
        { id: '5', message: 'Hey', likesCount: '66' },
        { id: '6', message: 'Hey', likesCount: '23' }
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
        // TDD
        case DELETE_POST: 
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.deleteId)
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
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

// for TDD
export const deletePost = (deleteId) => ({
    type: DELETE_POST,
    deleteId
})

export default profileReducer;
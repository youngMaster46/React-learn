import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: '1', message: 'Hello Max', likesCount: '11' },
        { id: '2', message: 'You are very strong', likesCount: '4' },
        { id: '3', message: 'Hey', likesCount: '99' },
        { id: '4', message: 'Hey', likesCount: '34' },
        { id: '5', message: 'Hey', likesCount: '66' },
        { id: '6', message: 'Hey', likesCount: '23' }
    ],
    newPostText: 'it-kamasutra.pro',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost],

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;

    }
}

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}); // Круглые скобки значат что возвращается обьект.
export const addPostActionCreator = () => ({
    type: ADD_POST
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

export default profileReducer;
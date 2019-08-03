const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: '1', message: 'Hello Max', likesCount: '11'},
        {id: '2', message: 'You are very strong', likesCount: '4'},
        {id: '3', message: 'Hey', likesCount: '99'},
        {id: '4', message: 'Hey', likesCount: '34'},
        {id: '5', message: 'Hey', likesCount: '66'},
        {id: '6', message: 'Hey', likesCount: '23'}
      ],
    newPostText: 'it-kamasutra.pro'
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

export default profileReducer;
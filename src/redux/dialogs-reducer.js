const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 8,
                message: state.newMessageText
              };
            
              state.messagesData.push(newMessage);
              state.newMessageText = '';
              return state;
        case UPDATE_MESSAGE_TEXT: 
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }    
}

export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text
});
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export default dialogsReducer;
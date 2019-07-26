const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
        {id: '1', message: 'I am Jack. Nice to meet you, Sandra'},
        {id: '2', message: 'Glad to see you too, Jack. Are you alone at this party?'},
        {id: '3', message: 'Yes, I am. My friend has fallen ill today and decided to stay at home. And you?'}
      ],
      dialogsData: [
        {name: 'Max', id: '1'},
        {name: 'Dimych', id: '2'},
        {name: 'Vitya', id: '3'},
        {name: 'Dyadya', id: '4'}
      ],
      newMessageText: 'zavitok-kursk.ru'
}

const dialogsReducer = (state = initialState, action) => {
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
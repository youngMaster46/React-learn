const ADD_MESSAGE:string = 'social-max/dialogs/ADD-MESSAGE';

export type InitialStateType = {
    messagesData:Array<{id:number, message:string}>
    dialogsData:Array<{name:string, id:number}>
}
let initialState:InitialStateType = {
    messagesData: [
        {id: 1, message: 'I am Jack. Nice to meet you, Sandra'},
        {id: 2, message: 'Glad to see you too, Jack. Are you alone at this party?'},
        {id: 3, message: 'Yes, I am. My friend has fallen ill today and decided to stay at home. And you?'}
      ],
      dialogsData: [
        {name: 'Max', id: 1},
        {name: 'Dimych', id: 2},
        {name: 'Vitya', id: 3},
        {name: 'Dyadya', id: 4}
      ],
}

const dialogsReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 8,
                message: action.message
              };
              
             return {
                  ...state,
                  messagesData: [...state.messagesData, newMessage],
                };
            }
        default:
            return state;
    }    
}
type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    message:string
}
export const addMessageActionCreator = (message:string):AddMessageActionCreatorType => ({
    type: ADD_MESSAGE,
    message
});

export default dialogsReducer;
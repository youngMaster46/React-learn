import dialogsReducer, { addMessageActionCreator } from "./dialogs-reducer"

let state = {
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
}

describe('testing dialogs reducer', () => {
    it('message should be added', () => {
        let action = addMessageActionCreator('this is react-redux message from test');
        let newState = dialogsReducer(state, action);
        expect(newState.messagesData.length).toBe(4);
    })
})
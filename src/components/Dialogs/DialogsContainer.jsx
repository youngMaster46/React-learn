import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    // let store = props.store;
    // let state = store.getState().dialogsPage;

    // let addMessage = () => {
    //     let action = addMessageActionCreator();
    //     store.dispatch(action);
    // }
    // let updateMessageText = (text) => {
    //     let action = updateMessageTextActionCreator(text);
    //     store.dispatch(action);
    // }
    return  <StoreContext.Consumer>
        {
        (store) => { 
            let state = store.getState().dialogsPage;
            let addMessage = () => {
                let action = addMessageActionCreator();
                store.dispatch(action);
            }
            let updateMessageText = (text) => {
                let action = updateMessageTextActionCreator(text);
                store.dispatch(action);
            }
    return <Dialogs state={state} updateMessageText={updateMessageText} addMessage={addMessage} newMessageText={state.newMessageText}/>
}
}
    </StoreContext.Consumer>
}
export default DialogsContainer;
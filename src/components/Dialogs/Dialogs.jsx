import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {updateMessageTextActionCreator, addMessageActionCreator} from '../../redux/state';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map( dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/> );
    let messagesElements = props.state.messagesData.map( messageData => <Message message={messageData.message} /> );
    
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let updateMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea onChange={updateMessageText} value={props.newMessageText} ref={newMessageElement} />
                <button onClick={addMessage}>Hello</button>
            </div>
        </div>
    );
}

export default Dialogs;
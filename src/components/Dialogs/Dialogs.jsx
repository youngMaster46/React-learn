import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map( dialogData => <DialogItem key={dialogData.id} name={dialogData.name} id={dialogData.id}/> );
    let messagesElements = props.dialogsPage.messagesData.map( messageData => <Message key={messageData.id} message={messageData.message} /> );
    
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let updateMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text);
    }

    if (!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea onChange={updateMessageText} value={props.dialogsPage.newMessageText} ref={newMessageElement} />
                <button onClick={addMessage}>Hello</button>
            </div>
        </div>
    );
}

export default Dialogs;
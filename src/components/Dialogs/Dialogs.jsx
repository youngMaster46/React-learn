import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map( dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/> );
    let messagesElements = props.state.messagesData.map( messageData => <Message message={messageData.message} /> );
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
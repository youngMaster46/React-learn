import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let dialogsData = [
    {name: 'Max', id: '1'},
    {name: 'Dimych', id: '2'},
    {name: 'Vitya', id: '3'},
    {name: 'Dyadya', id: '4'}
];
let dialogsElements = dialogsData.map( dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/> );

let messagesData = [
    {id: '1', message: 'I am Jack. Nice to meet you, Sandra'},
    {id: '2', message: 'Glad to see you too, Jack. Are you alone at this party?'},
    {id: '3', message: 'Yes, I am. My friend has fallen ill today and decided to stay at home. And you?'}
];

let messagesElements = messagesData.map( messageData => <Message message={messageData.message} /> );


const Dialogs = (props) => {
   
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
import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = () => {
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
import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';
import { DialogType, MessageType } from '../../../types/types';

 
type PropsType = {
    dialogsPage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
    addMessage:(message:string) => void
    isAuth: boolean
}
const Dialogs: React.FC<PropsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map( dialogData => <DialogItem key={dialogData.id} name={dialogData.name} id={dialogData.id}/> );
    let messagesElements = props.dialogsPage.messagesData.map( messageData => <Message key={messageData.id} message={messageData.message} /> );
  
    let addMessage = (message:any) => {
        props.addMessage(message.textareaMessage);
    }

    if (!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addMessage} />
        </div>
    );
}
let maxLength10 = maxLengthCreator(10);
type AddMessageFormType = {
    handleSubmit: () => void

}
const AddMessageForm: React.FC<AddMessageFormType> = (props) => {
    
    return (
    <form onSubmit={props.handleSubmit} className={classes.messages}>
        <Field placeholder={'text'} component={Textarea} name={'textareaMessage'} validate={[requiredField, maxLength10]}/>
        <button>Hello</button>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
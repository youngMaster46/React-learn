import React from 'react';
import { createField, Input, Textarea } from '../../common/FormControls/FormControls';
import {reduxForm} from 'redux-form';
import { savePhoto } from '../../../redux/profile-reducer';
import classes from './ProfileInfo.module.css';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={classes.error}>{error}</div>} 
        <div><button>Save</button></div>
        <div><b>FullName</b> {createField("Full name", "fullName", [], Input)}</div>
        <div><b>Looking for a job</b> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
        <div><b>My professional skills</b> {createField("my skills", "lookingForAJobDescription", [], Textarea)}</div>
        <div><b>About me</b> {createField("about me", "aboutMe", [], Textarea)}</div>
        <b>Contacts</b>
        {
            Object.keys(profile.contacts).map(key => {
                return <div className={classes.contacts} >
                    <b>{key}</b>
                    {createField(key, "contacts." + key, [], Input)}
                </div>
            })
        }

    </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);
export default ProfileDataFormReduxForm;

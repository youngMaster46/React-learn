import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/default-icon.png';
import {createField, Input} from '../../common/FormControls/FormControls';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSuccess = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        //saveProfile(formData).then( () => {setEditMode(false)} );
        saveProfile(formData).then( () => {
            setEditMode(false);
        });
        
    }
    return (
        <div>

            <div className={classes.ava}>

                <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} />
                <br />
                {isOwner && <input type='file' onChange={onMainPhotoSuccess} />}
                
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileData profile={profile} isOwner={isOwner} 
                goToEditMode={()=>{
                    setEditMode(true);
                }}/>}
                


                My contacts:<div className={classes.contacts}> 
                {
                    Object.keys(profile.contacts).map(key =>
                        <Contact
                            className={classes.contacts}
                            contactTitle={key}
                            contactValue={profile.contacts[key] || ': no'}
                            key={key} />
                    )
                }
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div> <b>{contactTitle}</b>{contactValue}</div>
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
       <br />
       {isOwner && <button onClick={goToEditMode} >edit</button>}
                I am looking for a job? {profile.lookingForAJob ? 'yes' : 'no'}
                <br />
                Description: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'no'}
                <br />
                Fullname: {profile.fullName ? profile.fullName : 'no'}
                <br />
                About me: {profile.aboutMe || 'no'}
                <br />
    </div>
}

export default ProfileInfo;
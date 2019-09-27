import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/default-icon.png';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSuccess = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>

            <div className={classes.ava}>
                
                <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} />
                <br />
                {isOwner && <input type='file' onChange={onMainPhotoSuccess} />}

                <br />
                {profile.lookingForAJobDescription}
                <br />
                facebook: {profile.contacts.facebook}
                <br />
                website: {profile.contacts.website}
                <br />
                vk: {profile.contacts.vk}
                <br />

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
}
export default ProfileInfo;
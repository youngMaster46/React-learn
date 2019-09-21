import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            
            <div className={classes.ava}>
                <img src={profile.photos.large} />
                <br />
                <img src={profile.photos.small} /> 
                {profile.lookingForAJobDescription}
                <br />
                facebook: {profile.contacts.facebook}
                <br /> 
                website: {profile.contacts.website}
                <br />
                vk: {profile.contacts.vk}
                <br />

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}
export default ProfileInfo;
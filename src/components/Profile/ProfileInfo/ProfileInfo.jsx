import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            
            <div className={classes.ava}>
                <img src={props.profile.photos.large} />
                <br />
                <img src={props.profile.photos.small} /> 
                {props.profile.lookingForAJobDescription}
                <br />
                facebook: {props.profile.contacts.facebook}
                <br /> 
                website: {props.profile.contacts.website}
                <br />
                vk: {props.profile.contacts.vk}
                <br />

                <ProfileStatus status='hello max'/>
            </div>
        </div>
    );
}
export default ProfileInfo;
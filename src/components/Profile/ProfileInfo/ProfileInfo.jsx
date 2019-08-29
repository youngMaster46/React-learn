import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div >
                <img src='https://poster.nicefon.ru/2018_03/25/350x220/221694ce80b6d6eecabeb6.jpg' alt='test'/>
            </div>
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
            </div>
        </div>
    );
}
export default ProfileInfo;
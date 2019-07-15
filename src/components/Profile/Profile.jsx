import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';
import ProfileInfo from './Posts/ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;
import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData = {props.postsData}/>
        </div>
    )
}

export default Profile;
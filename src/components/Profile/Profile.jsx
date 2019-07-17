import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData = {props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
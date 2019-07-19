import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} postsData = {props.state.postsData}/>
        </div>
    )
}

export default Profile;
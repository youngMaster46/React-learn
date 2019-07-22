import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts dispatch={props.dispatch} newPostText={props.newPostText} postsData = {props.state.postsData}/>
        </div>
    )
}

export default Profile;
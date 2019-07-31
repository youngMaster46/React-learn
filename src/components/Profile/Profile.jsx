import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import MyPostsComponent from './MyPosts/MyPostsComponent';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsComponent store={props.store}/>
        </div>
    )
}

export default Profile;
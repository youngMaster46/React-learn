import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsComponent from './MyPosts/MyPostsContainer';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsComponent store={props.store}/>
        </div>
    )
}

export default Profile;
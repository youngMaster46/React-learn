import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsComponent from './MyPosts/MyPostsContainer';

type PropsType = {
    saveProfile: (formData:string) => Promise<string>
    store: any
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsComponent store={props.store}/>
        </div>
    )
}

export default Profile;
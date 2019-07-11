import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://poster.nicefon.ru/2018_03/25/350x220/221694ce80b6d6eecabeb6.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
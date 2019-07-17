import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div >
                <img src='https://poster.nicefon.ru/2018_03/25/350x220/221694ce80b6d6eecabeb6.jpg' alt='test'/>
            </div>
            <div className={classes.ava}>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;
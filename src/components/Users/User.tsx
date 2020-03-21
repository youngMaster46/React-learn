import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/default-icon.png';
import { UsersType } from '../../../types/types';

type PropsType = {
    user: UsersType
    followingInProgress: Array<boolean>
    follow: (id: number) => void
    unfollow:(id: number) => void
}

export const User: React.FC<PropsType> = ({ user, followingInProgress, follow, unfollow }) => {
    return (<div >
        <span>
            <div>
                <NavLink to={'/profile/' + user.id} >
                    <img alt={user.id} className={styles.userPhoto} src={user.photos.small != null ? user.photos : userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);

                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div><div>{user.status}</div>
            </span>
            <span>
                {/* <div>{user.location.country}</div> */}
                {/* <div>{user.location.city}</div> */}
            </span>
        </span>
    </div>
    )
}
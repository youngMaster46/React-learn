import React from 'react';



import * as axios from 'axios';
import { usersAPI } from '../../api/api';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';
let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, follow, unfollow, users, ...props }) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
            pageSize={pageSize} />

        {
            users.map(u => <User user={u}
                key={u.id}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow} />)
        }
    </div>
}
export default Users;
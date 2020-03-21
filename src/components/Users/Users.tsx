import React from 'react';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';
import { UsersType } from '../../../types/types';

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    followingInProgress: Array<number>
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    follow: (userId:number) => void
    unfollow: (userId:number) => void


}
let Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, follow, unfollow, users, ...props }) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
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
import { connect } from 'react-redux'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { follow, unfollow, requestUsers } from '../../redux/users-reducer'
import { compose } from 'redux'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'
import { UsersType } from '../../../types/types'
import { AppStateType } from '../../redux/redux-store'


type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<UsersType>
    totalUsersCount: number
    followingInProgress: Array<number>
}
type OwnStatePropsType = {
    pageTitle: string
}


type MapDispatchPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = MapDispatchPropsType & MapStatePropsType & OwnStatePropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)

    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }
    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Users
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
    connect<MapStatePropsType, MapDispatchPropsType, OwnStatePropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        requestUsers
    }),
    withAuthRedirect
)(UsersContainer)

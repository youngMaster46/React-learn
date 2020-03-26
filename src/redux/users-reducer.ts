import { AppStateType } from './redux-store';
import { Dispatch } from 'react';
import { UsersType } from './../../types/types';
import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const FOLLOW = 'social-max/users/FOLLOW';
const UNFOLLOW = 'social-max/users/UNFOLLOW';
const SET_USERS = 'social-max/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-max/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-max/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-max/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-max/users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array if user's id
}
export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        default:
            return state;

    }
}
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userID: number
}
export const followSuccess = (userID: number): FollowSuccessActionType => ({
    type: FOLLOW,
    userID
});
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userID: number
}
export const unfollowSuccess = (userID: number): UnfollowSuccessActionType => ({
    type: UNFOLLOW,
    userID
});
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({
    type: SET_USERS,
    users
})
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (totalNumber: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalNumber
})
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
type ToggleFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | ToggleFollowingProgress
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Action<string>>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}


// helper 

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: Function, actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))

}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: ThunkDispatch<unknown, unknown, FollowSuccessActionType | UnfollowSuccessActionType>) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.deleteUsers.bind(usersAPI), unfollowSuccess)
    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch: ThunkDispatch<unknown, unknown, FollowSuccessActionType | UnfollowSuccessActionType>) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.followUsers.bind(usersAPI), followSuccess);
    }
}


export default usersReducer;
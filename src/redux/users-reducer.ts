import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW: string = 'social-max/users/FOLLOW';
const UNFOLLOW: string = 'social-max/users/UNFOLLOW';
const SET_USERS: string = 'social-max/users/SET_USERS';
const SET_CURRENT_PAGE: string = 'social-max/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT: string = 'social-max/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING: string = 'social-max/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS: string = 'social-max/users/TOGGLE_IS_FOLLOWING_PROGRESS';

export type InitialStateType = {
    users: Array<string>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: any) => {
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
    users: Array<string>
}
export const setUsers = (users: Array<string>): SetUsersActionType => ({
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
export const setTotalUsersCount = (totalNumber:number):SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalNumber
})
type ToggleIsFetchingActionType =  {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
type ToggleFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}


// helper 

const followUnfollowFlow = (userId:number, apiMethod:Function, actionCreator:any) => {
    return async (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await apiMethod(userId);
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId:number) => {
    return followUnfollowFlow(userId, usersAPI.deleteUsers.bind(usersAPI), unfollowSuccess);
}

export const follow = (userId:number) => {
    return followUnfollowFlow(userId, usersAPI.followUsers.bind(usersAPI), followSuccess);
}


export default usersReducer;
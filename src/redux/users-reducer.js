import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'social-max/users/FOLLOW';
const UNFOLLOW = 'social-max/users/UNFOLLOW';
const SET_USERS = 'social-max/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-max/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-max/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-max/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-max/users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
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

export const followSuccess = (userID) => ({
    type: FOLLOW,
    userID: userID
});
export const unfollowSuccess = (userID) => ({
    type: UNFOLLOW,
    userID: userID
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalNumber) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalNumber
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}


// helper 

const followUnfollowFlow = (userId, apiMethod, actionCreator) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await apiMethod(userId);
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId) => {
    return followUnfollowFlow(userId, usersAPI.deleteUsers.bind(usersAPI), unfollowSuccess);
}

export const follow = (userId) => {
    return followUnfollowFlow(userId, usersAPI.followUsers.bind(usersAPI), followSuccess);
}


export default usersReducer;
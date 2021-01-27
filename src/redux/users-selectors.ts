import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getIsFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.isFollowingInProgress
}

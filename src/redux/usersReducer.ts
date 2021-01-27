import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {
    FollowSuccesActionType,
    SetCurrentPageType, SetTotalUsersCount,
    SetUsersActionType, ToggleFollowingProgress, ToggleIsFetching,
    UnfollowSuccesActionType,
    UserType
} from "../Types/Types";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';
export const IS_FOLLOWING_IN_PROGRESS = 'IS_FOLLOWING_IN_PROGRESS';

const initialState = {
    users : [] as Array<UserType>,
    currentPage: 1,
    pageSize: 100,
    totalUsersCount: 0,
    isFetching: false,
    isFollowingInProgress: [] as Array<number> //users id
};

type InitialState = typeof initialState
const UsersReducer = (state = initialState,action: any): InitialState => {
    switch(action.type) {
        case FOLLOW:
    return {
        ...state,
        users:updateObjectInArray(state.users,action.id,'id', {followed:true})


    }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.id,'id', {followed:false})
            }


        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHED:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress:action.isFetching
                    ?[...state.isFollowingInProgress, action.id]
                    :state.isFollowingInProgress.filter(id => id !== action.id)
            }


        default:
            return state;
    }
};
export const followSuccess = (userId: number): FollowSuccesActionType => ({type: FOLLOW, id: userId});
export const unfollowSuccess = (userId: number):UnfollowSuccesActionType => ({type: UNFOLLOW,id: userId});
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage: number): SetCurrentPageType =>({type:SET_CURRENT_PAGE,currentPage});
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCount => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetching => ({type: TOGGLE_IS_FETCHED, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, id: number): ToggleFollowingProgress => ({type: IS_FOLLOWING_IN_PROGRESS, isFetching, id})
export default UsersReducer;
export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
   let data = await usersAPI.getUsers(currentPage,pageSize)
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
            dispatch(setTotalUsersCount(data.totalCount));
    }
}
const followUnfollowFlow = async (id: number,actionCreator: any,apiMethod: any,dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id))
    let response =  await apiMethod(id)
    if(response === 0){
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))

}
export const unfollow = (id: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(id,unfollowSuccess,usersAPI.unfollowUser.bind(usersAPI),dispatch)
    }
}
export const follow = (id: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(id,followSuccess,usersAPI.followUser.bind(usersAPI),dispatch)
    }
}

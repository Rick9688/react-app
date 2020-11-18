import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED';
const IS_FOLLOWING_IN_PROGRESS = 'IS_FOLLOWING_IN_PROGRESS';
const initialState = {
    users : [],
    currentPage: 1,
    pageSize: 100,
    totalUsersCount: 0,
    isFetching: false,
    isFollowingInProgress: []
};
const UsersReducer = (state = initialState,action) => {
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
                    :state.isFollowingInProgress.filter(id => id != action.id)
            }


        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, id: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW,id: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage) =>({type:SET_CURRENT_PAGE,currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHED, isFetching})
export const toggleFollowingProgress = (isFetching, id) => ({type: IS_FOLLOWING_IN_PROGRESS, isFetching, id})

export default UsersReducer;

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
    dispatch(toggleIsFetching(true))
   let data = await usersAPI.getUsers(currentPage,pageSize)
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
            dispatch(setTotalUsersCount(data.totalCount));
    }
}
const followUnfollowFlow = async (id,actionCreator,apiMethod,dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    let response =  await apiMethod(id)
    if(response === 0){
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))

}
export const unfollow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(id,unfollowSuccess,usersAPI.unfollowUser.bind(usersAPI),dispatch)
    }
}

export const follow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(id,followSuccess,usersAPI.followUser.bind(usersAPI),dispatch)
    }
}

import {ADD_POST, DELETE_POST, SAVE_PHOTO, SET_STATUS, SET_USER_PROFILE} from "../redux/profileReducer";
import {InitialStateType, SET_AUTH_USER_DATA} from "../redux/authReducer";
import {
    FOLLOW, IS_FOLLOWING_IN_PROGRESS,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHED,
    UNFOLLOW
} from "../redux/usersReducer";

export type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export type DeletePostActionCreator = {
    type: typeof DELETE_POST
    id: string
}
export type PostType = {
    id: string
    message: string
    likesCounter: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    photos: any
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO
    photos: PhotosType
}
export type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    data: InitialStateType
}
export type FollowSuccesActionType = {
    type: typeof FOLLOW
    id: number
}
export type UnfollowSuccesActionType = {
    type: typeof UNFOLLOW
    id: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type SetTotalUsersCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export type ToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHED
    isFetching: boolean
}
export type ToggleFollowingProgress = {
    type: typeof IS_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    id: number
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
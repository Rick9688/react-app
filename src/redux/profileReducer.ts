import {profileAPI, usersAPI} from "../api/api";
import {
    AddPostActionCreatorType,
    DeletePostActionCreator, PhotosType,
    PostType,
    ProfileType, SavePhotoSuccessActionType, SetStatusActionType,
    SetUserProfileActionType
} from "../Types/Types";

export const ADD_POST = 'ADD_POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_POST = 'DELETE_POST';
export const SAVE_PHOTO = 'SAVE_PHOTO';
type NewPostType = {
    id: string
    message: string
    likesCounter: string
}
const initialState = {
    posts: [
        {id: '1', message: 'Hi', likesCounter: '15'},
        {id: '2', message: 'It\'s my first post', likesCounter: '25'},
        {id: '3', message: 'That`s cool!', likesCounter: '18'},
        {id: '4', message: 'Oh it`s amazing', likesCounter: '29'},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}
export type InitialStateType = typeof initialState
export const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: NewPostType = {
                id: '5',
                message: action.newPostText,
                likesCounter: '0'
            };
          return {
              ...state,
              posts: [...state.posts, newPost] as Array<NewPostType>,

          }
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.id)
            }
            case SAVE_PHOTO:
                return {
                ...state, profile:{...state.profile, photos: action.photos} as ProfileType
                }
            default:
                return state
    }
};


export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});


export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});


export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
   let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response  = await profileAPI.updateStatus(status);
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response  = await profileAPI.savePhoto(file);
            if(response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
};

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType =>({type: ADD_POST, newPostText})
export const deletePostActionCreator = (id: string): DeletePostActionCreator => ({type: DELETE_POST, id})

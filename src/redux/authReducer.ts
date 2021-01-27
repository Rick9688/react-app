import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {SetAuthUserDataActionType} from "../Types/Types";

export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export type InitialStateType = {
    id: null | string
    login: null | string
    email: null | string
    isAuth: boolean
}
const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};


const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
};


export const setAuthUserData = (id: string | null, login: string | null, email: string| null,isAuth: boolean): SetAuthUserDataActionType => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}});
export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email,true))
            }
        }

export const loginUser = (email: string, password: string, rememberMe = false) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0?response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login',{_error: message}))
            }
}

export const logoutUser = () => async (dispatch: any) => {
    let response = await authAPI.logout()
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
}

export default authReducer;
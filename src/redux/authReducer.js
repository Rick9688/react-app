import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (id, login, email,isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}});
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email,true))
            }
        }

export const loginUser = (email, password, rememberMe = false) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0?response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login',{_error: message}))
            }
}

export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logout()
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
}

export default authReducer;
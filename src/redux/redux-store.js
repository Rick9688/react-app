import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebarData: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = createStore(reducers);

export default store
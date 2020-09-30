import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebarData: sidebarReducer,
    usersPage: usersReducer
})
let store = createStore(reducers);

export default store
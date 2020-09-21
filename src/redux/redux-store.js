import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    sidebarData: sidebarReducer
})
let store = createStore(reducers);

export default store
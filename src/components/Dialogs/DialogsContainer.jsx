import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {sendMessageActionCreator} from "../../redux/dialogReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText));
        },

    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
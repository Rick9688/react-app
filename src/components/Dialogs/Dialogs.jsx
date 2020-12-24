import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../utils/validators/validators";
import {TextArea} from "../../FormControls/FormControls";
const Dialogs = (props) => {

    const sendMessage = (values) => {
        props.sendMessage(values.newMessageText);
    };


    const dialogsElements = props.messagePage.dialogData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}
                                                                                   url={dialog.pic}/>)
    const messagesElements = props.messagePage.messageData.map(message => <Message key={message.id} message={message.message}
                                                                                   id={message.id}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
               <SendNewMessageReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const SendNewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter message' component={TextArea} name={'newMessageText'} validate={maxLength50}/>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}

const SendNewMessageReduxForm = reduxForm({
    form: 'SendNewMessageForm'
})(SendNewMessageForm)

export default Dialogs;
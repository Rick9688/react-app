import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Textarea from "./Textarea/Textarea";



const Dialogs = (props) => {
    const dialogsElements = props.state.dialogData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} url = {dialog.pic} />)
    const messagesElements = props.state.messageData.map(message => <Message message = {message.message} id = {message.id}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div className={classes.textarea}>
                    <Textarea
                        dispatch={props.dispatch}
                        newMessageText={props.state.newMessageText}/>
                </div>
            </div>

        </div>
    )
}

export default Dialogs